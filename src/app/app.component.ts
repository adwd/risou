import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { MyServiceService } from './domain/my-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  text: string;

  constructor(private myService: MyServiceService) {}

  ngOnInit() {
    this.myService.fetchText().subscribe(text => this.text = text);
  }
}
