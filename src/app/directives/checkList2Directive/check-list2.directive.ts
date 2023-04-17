import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
@Directive({
  selector: '[listValidator2]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CheckList2Directive,
      multi: true,
    },
  ],
})
export class CheckList2Directive implements Validator {
  constructor() {}
  validate(control: AbstractControl): { [key: string]: any } | null {
    const valid = this._validateList(control.value);
    return valid ? null : { listValidator: true };
  }

  private _validateList(value: string): boolean {
    const datalist = document.getElementById('currency');
    if (datalist) {
      const options = Array.from(datalist.children) as HTMLOptionElement[];
      return options.some((option) => option.value === value);
    }

    return false;
  }
}
