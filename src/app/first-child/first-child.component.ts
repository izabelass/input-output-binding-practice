import { Component, Input, OnInit } from '@angular/core';

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
  //primeiro exemplo
  @Input() name: string = '';

  //segundo exemplo
  @Input() lastName: string = '';

  //terceiro exemplo
  @Input() weekDays: string[] = [];

  //quarto exemplo
  @Input() books: Book[] = [];

  //quinto exemplo
  @Input() cards: Card[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
