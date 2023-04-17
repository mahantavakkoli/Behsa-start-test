import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[persianWordsValidation]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PersianDirectiveDirective,
      multi: true,
    },
  ],
})
export class PersianDirectiveDirective implements Validator {
  public constructor() {}
  public validate(control: AbstractControl): ValidationErrors | null {
    const persianWordsRegex = /^[\u0600-\u06FF\s]+$/;
    const isValid = persianWordsRegex.test(control.value);
    return isValid ? null : { persianWordsValid: false };
  }
}
