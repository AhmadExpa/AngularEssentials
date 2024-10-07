import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-on-destroy',
  templateUrl: './ng-on-destroy.component.html',
  styleUrls: ['./ng-on-destroy.component.scss'],
})
export class NgOnDestroyComponent implements OnDestroy, OnInit {
  public count: number = 0;
  constructor() {}
  ngOnInit(): void {
    console.log('NgOnInit called!');
    this.timer();
  }
  ngOnDestroy() {
    console.log('NgOnDestroy called!');
  }
  timer() {
    setInterval(() => {
      this.count++;
    }, 1000);
  }
}
