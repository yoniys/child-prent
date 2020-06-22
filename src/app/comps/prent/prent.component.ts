import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prent',
  templateUrl: './prent.component.html',
  styleUrls: ['./prent.component.css']
})
export class PrentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  inval1:string
  inval2:string

  outval1:number

  num(valu){
    this.outval1=valu
  }
  // clickFn(){}

}
