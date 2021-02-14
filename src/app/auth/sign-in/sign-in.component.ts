import { Component, ElementRef, OnInit } from '@angular/core';
import { DialogComponent } from 'rl-dialogs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent extends DialogComponent implements OnInit {

  constructor(private elementRef: ElementRef) {
    super(elementRef)
  }

  ngOnInit(): void {
  }

}
