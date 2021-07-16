import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcConfigFormControlComponent } from './pc-config-form-control.component';

describe('PcConfigFormControlComponent', () => {
  let component: PcConfigFormControlComponent;
  let fixture: ComponentFixture<PcConfigFormControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcConfigFormControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PcConfigFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
