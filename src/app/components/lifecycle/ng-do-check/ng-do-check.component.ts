import { Component, DoCheck, Input } from '@angular/core';

@Component({
  selector: 'app-ng-do-check',
  templateUrl: './ng-do-check.component.html',
  styleUrls: ['./ng-do-check.component.scss'],
})
export class NgDoCheckComponent implements DoCheck {
  @Input() ngDoCheckInput: string = '';
  constructor() {}

  ngDoCheck(): void {
    console.log(this.ngDoCheckInput);
  }
}
