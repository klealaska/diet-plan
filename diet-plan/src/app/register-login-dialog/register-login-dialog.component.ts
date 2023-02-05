import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NbButtonModule, NbCardModule, NbDialogRef, NbInputModule } from '@nebular/theme';

@Component({
  standalone:true,
  imports:[NbCardModule,
    ReactiveFormsModule,
    NbInputModule,
    NbButtonModule,
    CommonModule
  ],
  selector: 'app-register-login-dialog',
  templateUrl: './register-login-dialog.component.html',
  styleUrls: ['./register-login-dialog.component.css']
})
export class RegisterLoginDialogComponent {

  formType: string='';
  form!: FormGroup;

  constructor(
    private dialogRef: NbDialogRef<RegisterLoginDialogComponent>,
    private formBuilder: FormBuilder
    ) {
    this.form = this.formBuilder.group({});
    if(this.formType)
    this.addControl('name', [Validators.required]);
    
   }

   public addControl(controlName: string, validators: any[] = []) {
    this.form.addControl(controlName, this.formBuilder.control('',validators))
  }

  close() {
    this.dialogRef.close();
  }

}
