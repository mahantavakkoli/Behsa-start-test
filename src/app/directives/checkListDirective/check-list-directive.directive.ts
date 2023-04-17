import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
@Directive({
  selector: '[listValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CheckListDirectiveDirective,
      multi: true,
    },
  ],
})
export class CheckListDirectiveDirective implements Validator {
  constructor() {}
  validate(control: AbstractControl): { [key: string]: any } | null {
    const valid = this._validateList(control.value);
    return valid ? null : { listValidator: true };
  }

  private _validateList(value: string): boolean {
    const datalist = document.getElementById('names');
    if (datalist) {
      const options = Array.from(datalist.children) as HTMLOptionElement[];
      return options.some((option) => option.value === value);
    }

    return false;
  }
}
