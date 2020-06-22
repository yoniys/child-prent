import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

 
  @Input() param1:string
  @Input() param2:string

  // EventEmitter<typ>()      (only EventEmitter with @angulr)
  @Output() param3:EventEmitter<number>=new EventEmitter<number>()

  ngOnInit(): void {
  }
  childinp(str){
    let num=parseInt(str)
    this.param3.emit(num)
  }

}
