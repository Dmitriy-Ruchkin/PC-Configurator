import { Component, OnInit } from '@angular/core';
import {PartsTypes} from './parts.types';

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.scss']
})
export class PartsComponent implements OnInit {

  public Parts = PartsTypes
  public partsNames = Object.values(this.Parts)

  constructor() { }

  ngOnInit(): void {
  }

}
