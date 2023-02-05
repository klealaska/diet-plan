import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { AuthType } from 'src/app/enums/auth-type';
import { RegisterLoginDialogComponent } from 'src/app/register-login-dialog/register-login-dialog.component';

@Component({
  standalone: true,
  imports:[
    CommonModule
  ],
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

  public authType=AuthType.Login;

  constructor(private dialogService: NbDialogService) {

  }

  openDialog(formType:string){
      this.dialogService.open(RegisterLoginDialogComponent, {
    context: {
      formType: formType,
    },
  });
  }




}
