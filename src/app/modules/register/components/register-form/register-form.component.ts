import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, Validator, Validators} from "@angular/forms";
import {FormBase} from "../../../../../../projects/base/src/lib/base/form-base";
import {RegisterFormModel} from "../../models/register-form.model";

@Component({
  selector: 'rc-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent extends FormBase<RegisterFormModel> implements OnInit {

  @Output()
  submitted: EventEmitter<RegisterFormModel> = new EventEmitter<RegisterFormModel>();

  constructor(
    private fb: FormBuilder
  ) {
    super();
  }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    this.formGroup = this.fb.group({
      email: ['', [Validators.compose([Validators.required, Validators.email])]],
      password: ['']
    })
  }

}
