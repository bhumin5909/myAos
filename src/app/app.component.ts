import { Component } from '@angular/core';
import  * as  AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myAos';

  myArray: string[] = ["Hello", "World!"," Please", "clean", "your", "Area"];

  ngOnInit() {
    AOS.init();
    AOS.refresh();
  }
}
