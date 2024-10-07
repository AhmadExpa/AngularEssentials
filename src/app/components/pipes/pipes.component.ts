import { Component } from '@angular/core';
import { Course } from '../directives/courseInterface';
import { courseInfo } from '../directives/courseInfo';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss'],
})
export class PipesComponent {
  courses: Course[] = courseInfo;
}
