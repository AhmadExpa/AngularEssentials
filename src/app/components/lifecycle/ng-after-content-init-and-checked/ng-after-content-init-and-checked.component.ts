import {
  AfterContentChecked,
  AfterContentInit,
  Component,
  ContentChild,
} from '@angular/core';
import { PopUpComponent } from 'src/app/shared/pop-up/pop-up.component';

@Component({
  selector: 'app-ng-after-content-init-and-checked',
  templateUrl: './ng-after-content-init-and-checked.component.html',
  styleUrls: ['./ng-after-content-init-and-checked.component.scss'],
})
export class NgAfterContentInitAndCheckedComponent
  implements AfterContentInit, AfterContentChecked
{
  @ContentChild(PopUpComponent) popUp!: PopUpComponent;
  constructor() {}
  ngAfterContentInit(): void {
    console.log('After Content Init: ' + this.popUp?.message);
  }
  ngAfterContentChecked(): void {
    console.log('After Content Checked: ' + this.popUp?.message);
  }
}
