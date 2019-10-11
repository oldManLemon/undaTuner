import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { playNote } from '../../functions/basics'


@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  @Input() note: string;
  @Input() i:number;
  @Input() middleC: number;

  @Output() touched = new EventEmitter<[string, number,number]>();

  ngOnInit() { }

  onTap(){ 
    
    this.touched.emit([this.note, this.i, this.middleC]);
  }

}
