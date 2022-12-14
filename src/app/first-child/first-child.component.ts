import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface Book {
  id: number;
  name: string;
  author: string;
  year: number;
}

export interface Card {
  srcImage: string;
  altImage: string;
  title: string;
  text: string;
  textLink: string;
  hrefLink: string;
}

@Component({
  selector: 'app-first-child',
  templateUrl: './first-child.component.html',
  styleUrls: ['./first-child.component.scss']
})
export class FirstChildComponent implements OnInit {
  //primeiro exemplo Input
  @Input() name: string = '';

  //segundo exemplo Input
  @Input() lastName: string = '';

  //terceiro exemplo Input
  @Input() weekDays: string[] = [];

  //quarto exemplo Input
  @Input() books: Book[] = [];

  //quinto exemplo Input
  @Input() cards: Card[] = [];


  //primeiro exemplo Output
  @Output() newItemEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  //primeiro exemplo Output
  //raise an event with the value the user types into the <input>
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }


}
