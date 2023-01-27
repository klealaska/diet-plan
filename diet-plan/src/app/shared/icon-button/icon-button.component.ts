import { Component, Input, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.css']
})
export class IconButtonComponent implements OnInit {
 
  @Input('iconSrc') iconSrc: string = ''; 

  @Input('label') label: string = ''; 
  
  ngOnInit(): void {
  }

}
