import { Component, OnInit,Input } from '@angular/core';
import { AppComponent } from '../../app.component'
import { playNote } from '../../functions/basics'


@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
  @Input() scale: Array<string>;
  @Input() note: string;
  
 

  constructor() { 
  }

  ngOnInit() {
  }

}
