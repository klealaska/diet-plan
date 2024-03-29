import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NbButtonModule, NbCardModule, NbDialogRef, NbInputModule } from '@nebular/theme';

@Component({
  standalone: true,
  imports: [NbCardModule,
    ReactiveFormsModule,
    NbInputModule,
    NbButtonModule,
    CommonModule
  ],
  selector: 'app-register-login-dialog',
  templateUrl: './register-login-dialog.component.html',
  styleUrls: ['./register-login-dialog.component.css']
})
export class RegisterLoginDialogComponent implements OnInit {

  @Input() formType: string | undefined;
  form!: FormGroup;

  formControls = [
    { name: 'email', validators: [Validators.required, Validators.email], placeholder: 'Email', type: 'email' },
    { name: 'password', validators: [Validators.required], placeholder: 'Password', type: 'password' },
  ];

  constructor(
    private dialogRef: NbDialogRef<RegisterLoginDialogComponent>,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({});
  }

  ngOnInit(): void {
    if (this.formType == 'login') {
      this.formControls = [];
      this.formControls = [
        { name: 'email', validators: [Validators.required, Validators.email], placeholder: 'Email', type: 'email' },
        { name: 'password', validators: [Validators.required], placeholder: 'Password', type: 'password' },
      ];
      this.formControls.forEach(control => {
        this.addControl(control.name, control.validators);
      });
    } else if (this.formType == 'register') {
      this.formControls = [];
      this.formControls = [
        { name: 'name', validators: [Validators.required], placeholder: 'Name', type: 'text' },
        { name: 'lastName', validators: [Validators.required], placeholder: 'Last Name', type: 'text' },
        { name: 'email', validators: [Validators.required, Validators.email], placeholder: 'Email', type: 'email' },
        { name: 'password', validators: [Validators.required], placeholder: 'Password', type: 'password' },
      ];
      this.formControls.forEach(control => {
        this.addControl(control.name, control.validators);
      });

    }
  }

  public addControl(controlName: string, validators: any[] = []) {
    this.form.addControl(controlName, this.formBuilder.control('', validators))
  }

  continue() {
    this.dialogRef.close();
  }

}
