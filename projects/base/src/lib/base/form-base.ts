import {AbstractControl, FormGroup} from "@angular/forms";
import {EventEmitter} from "@angular/core";

export abstract class FormBase<T> {

  formGroup: FormGroup

  abstract submitted: EventEmitter<T>;

  protected constructor() {
  }

  submit() {
    this.formGroup.markAllAsTouched();
    if(this.formGroup.valid) {
      this.submitCallback(this.formGroup.getRawValue());
    }
  }

  getControl(name: string): AbstractControl {
    return this.formGroup.get(name) as AbstractControl;
  }

  submitCallback(val: T) {
    this.submitted.emit(val);
  }

}
