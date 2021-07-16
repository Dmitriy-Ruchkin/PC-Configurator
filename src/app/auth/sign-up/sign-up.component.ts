import { Component, ElementRef, OnInit } from '@angular/core';
import { DialogComponent } from 'rl-dialogs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormControlName } from './sign-up.types';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent extends DialogComponent implements OnInit {
  public formControlName = FormControlName
  public form = new FormGroup({
    [FormControlName.Name]: new FormControl('', [Validators.required, Validators.minLength(6)]),
    [FormControlName.Email]: new FormControl('', [Validators.required]),
    [FormControlName.Password]: new FormControl('', [Validators.required]),
    [FormControlName.RepeatPassword]: new FormControl('', [Validators.required])
    }
  )

  constructor(private elementRef: ElementRef) {
    super(elementRef)
  }

  ngOnInit(): void {
    console.log(this.form.controls[FormControlName.Name].errors)
  }

  public submitUserData() {
    if(this.form.valid) {
      console.log(this.form.value)
    } else {
      console.log('this form isnt valid',this.form.value)
    }
  }

}
