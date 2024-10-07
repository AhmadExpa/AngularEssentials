import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-ng-after-view-init',
  templateUrl: './ng-after-view-init.component.html',
  styleUrls: ['./ng-after-view-init.component.scss'],
})
export class NgAfterViewInitComponent
  implements AfterViewInit, AfterViewChecked
{
  @ViewChild('btnCounter') btnCounter!: ElementRef;
  counter: number = 0;
  constructor() {}
  ngAfterViewInit(): void {
    console.log('NgAfterViewInit -  ' + this.btnCounter);
  }
  ngAfterViewChecked(): void {
    this.btnCounter.nativeElement.innerText = this.counter;
    console.log(
      'NgAfterViewChecked -   ' + this.btnCounter.nativeElement.innerText
    );
  }

  onClickBtn() {
    this.counter++;
  }
}
