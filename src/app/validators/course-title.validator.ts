import { map } from 'rxjs/operators';
import { AbstractControl } from '@angular/forms';
import { CoursesService } from "../services/courses.service";
import { AsyncValidatorFn } from "@angular/forms";



export function courseTitleValidator(course: CoursesService):AsyncValidatorFn {
  return (control: AbstractControl) => {
    return courses.findAllCourses()
      .pipe(
        map(courses => {
          const course = courses.find(
            course => course.description.toLowerCase());

          return course ? {titleExists:true} : null;

        })
      )
  }

}
