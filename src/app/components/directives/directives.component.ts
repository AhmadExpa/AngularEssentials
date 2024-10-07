import { Component, OnInit } from '@angular/core';
import { Course } from './courseInterface';
import { courseInfo } from './courseInfo';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss'],
})
export class DirectivesComponent implements OnInit {
  courses: Course[] = courseInfo;
  constructor() {}
  ngOnInit(): void {}
  toggleCourseEnrolled(course: Course) {
    course.enrolled = !course.enrolled;
    console.log(course.enrolled);
    if (course.enrolled) {
      course.checkInTime = new Date();
    } else {
      course.checkOutTime = new Date();
    }
  }
}
