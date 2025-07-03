import { Component  , Input } from '@angular/core';

@Component({
  selector: 'app-sampleitem',
  imports: [],
  templateUrl: './sampleitem.html',
  styleUrl: './sampleitem.scss'
})
export class Sampleitem {
  @Input() itemString: string = '';

  title = 'my-angular-app'; // Or whatever your app title is

  // Create an array of strings
  myStrings: string[] = [
    'First item from array',
    'Second item from array',
    'Third item from array',
    'Another string here'
  ];
}