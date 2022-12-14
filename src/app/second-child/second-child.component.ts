import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-second-child',
  templateUrl: './second-child.component.html',
  styleUrls: ['./second-child.component.scss']
})
export class SecondChildComponent implements OnInit {
  //primeiro exemplo utilizando Input e Output
  @Input() parentCount!: number;
  @Output() valueChangeEvent = new EventEmitter<number>();
  counter = 0;

  constructor() { }

  ngOnInit(): void {
  }

  //primeiro exemplo utilizando Input e Output
  valueChanged() {
    this.counter += 1;
    this.valueChangeEvent.emit(this.counter);
  }

}
