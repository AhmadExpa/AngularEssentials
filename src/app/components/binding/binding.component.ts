import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss'],
})
export class BindingComponent implements OnInit {
  interpolationBinding: string = "'Hey There its InterpolationBinding'";
  propertyBinding: string = 'Property Binding';
  attributeBinding: string = 'Attribute Binding';
  eventBindingText: string = 'OFF';

  // <-----------Event Binding------------>
  constructor() {}
  ngOnInit(): void {}
  /**
   * Lifecycle hook that is called after data-bound properties of a directive are
   * initialized. Called after the constructor and called after the first ngOnChanges.
   * @returns void
   */

  eventBinding() {
    if (this.eventBindingText === 'OFF') {
      this.eventBindingText = 'ON';
    } else {
      this.eventBindingText = 'OFF';
    }
  }
  // <-----------Event Binding------------>
}
