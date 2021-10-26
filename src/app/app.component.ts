import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = 'Connor';
  wallet: number = 50.04;
  sentence: string = "I went to go watch the Spiderman movie with my aunt May."
  loremSentence: string = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, corporis sequi. Laboriosam et assumenda, aut animi aperiam distinctio cupiditate sapiente!"
  petThoughts: string[] = ['Cats are awesome.', 'Cats are sneaky.', 'Cats and dogs are both amazing!', 'Dogs are great.', 'Dogs are hyper.']
  filterResults: string;
}
