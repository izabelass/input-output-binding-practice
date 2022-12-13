import { Component } from '@angular/core';
import { Book, Card } from './first-child/first-child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //segundo exemplo
  currentLastName: string = 'Soares';

  //terceiro exemplo
  daysOfWeek: string[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  //quarto exemplo
  existingBooks: Book[] = [
    {id: 1, name: "Minha História", author: "Michelle Obama", year:2018},
    {id: 2, name: "Torto Arado", author: "Itamar Vieira Junior", year:2019},
    {id: 3, name: "O Avesso da Pele", author: "Jeferson Tenório", year:2020},
    {id: 4, name: "O Lugar", author: "Annie Ernaux", year:2021},
  ];

  //quinto exemplo
  existingCards: Card[] = [
    {
      srcImage: "https://cdn.pixabay.com/photo/2016/02/10/21/59/landscape-1192669__480.jpg",
      altImage: "descrição da imagem do primeiro card",
      title: "Titulo do Primeiro Card",
      text: "Conteudo do primeiro card",
      textLink: "Link do Primeiro Card",
      hrefLink: "https://angular.io/guide/inputs-outputs#sending-data-to-a-child-component"
    },
    {
      srcImage: "https://img.freepik.com/fotos-gratis/a-paisagem-bonita-do-sol-da-praia-com-um-barco_1112-212.jpg?w=2000",
      altImage: "descrição da imagem do primeiro card",
      title: "Titulo do Segundo Card",
      text: "Conteudo do segundo card",
      textLink: "Link do Segundo Card",
      hrefLink: "https://angular.io/guide/inputs-outputs#configuring-the-child-component"
    },
    {
      srcImage: "https://viagemeturismo.abril.com.br/wp-content/uploads/2016/12/14179421596_b95c10db10_o.jpeg",
      altImage: "descrição da imagem do primeiro card",
      title: "Titulo do Terceiro Card",
      text: "Conteudo do terceiro card",
      textLink: "Link do Terceiro Card",
      hrefLink: "https://angular.io/guide/inputs-outputs#configuring-the-parent-component"
    },
    {
      srcImage: "https://thumbs.dreamstime.com/b/paisagens-coloridas-do-cen%C3%A1rio-da-queda-46641435.jpg",
      altImage: "descrição da imagem do primeiro card",
      title: "Titulo do Quarto Card",
      text: "Conteudo do quarto card",
      textLink: "Link do Quarto Card",
      hrefLink: "https://angular.io/guide/inputs-outputs#watching-for-input-changes"
    },

  ];
}
