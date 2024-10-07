import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss'],
})
export class LifecycleComponent implements OnInit {
  onChangeInput: string = '';
  getAlert: boolean = false;
  constructor() {}
  ngOnInit(): void {
    this.getInputValue('Hello');
  }
  getInputValue(text: string) {
    this.onChangeInput = text;
  }
}
