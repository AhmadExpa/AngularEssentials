import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-ng-on-change',
  templateUrl: './ng-on-change.component.html',
  styleUrls: ['./ng-on-change.component.scss'],
})
export class NgOnChangeComponent implements OnChanges {
  @Input() ngOnChangeInput: string = '';
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
