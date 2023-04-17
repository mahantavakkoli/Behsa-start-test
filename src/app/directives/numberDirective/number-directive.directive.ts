import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[numberValidation]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: NumberDirectiveDirective,
      multi: true,
    },
  ],
})
export class NumberDirectiveDirective implements Validator {
  public constructor() {}
  public validate(control: AbstractControl): ValidationErrors | null {
    const numberRegex = /^\d+$/;
    const isValid = numberRegex.test(control.value);
    return isValid ? null : { numberNotValid: true };
  }
}
