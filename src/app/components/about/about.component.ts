import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  application: string;
  version: string;

  constructor() { 
    this.application = "Task Tracker";
    this.version = "Version 1.0.0";
  }

  ngOnInit(): void {
  }

}
