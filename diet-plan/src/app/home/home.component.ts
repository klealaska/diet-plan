import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {ButtonModule} from 'primeng/button';



@Component({
  standalone:true,
  imports: [CommonModule,ButtonModule],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
