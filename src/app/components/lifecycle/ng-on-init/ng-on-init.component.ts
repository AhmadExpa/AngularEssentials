import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-on-init',
  templateUrl: './ng-on-init.component.html',
  styleUrls: ['./ng-on-init.component.scss'],
})
export class NgOnInitComponent implements OnInit {
  constructor() {
    console.log('Constructor Initialized!');
  }
  ngOnInit(): void {
    console.log('NgOnInit Initialized!');
  }
}
