import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBase} from "../../../../../../projects/base/src/lib/base/form-base";
import {LoginFormModel} from "../../models/login-form.model";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'rc-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent extends FormBase<LoginFormModel> implements OnInit {

  @Output()
  submitted = new EventEmitter<LoginFormModel>();

  constructor(
    private fb: FormBuilder
  ) {
    super();
  }

  ngOnInit(): void {
    this.loadForm();
  }

  private loadForm() {
    this.formGroup = this.fb.group({
      email: [''],
      password: ['']
    })
  }

}
