import { Component, Input, OnInit } from '@angular/core';

// eslint-disable-next-line no-shadow
export enum Icon {
  CloseIcon = 'icon-close'
}

export interface IIconSize {
  width: number,
  height: number
}

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent {

  @Input() icon!: Icon

  @Input() iconSize: IIconSize = {
    width: 0,
    height: 0
  }

  constructor() { }


}
