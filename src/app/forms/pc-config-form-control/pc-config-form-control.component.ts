import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-pc-config-form-control',
  templateUrl: './pc-config-form-control.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./pc-config-form-control.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => PcConfigFormControlComponent),
    multi: true
  }]
})

export class PcConfigFormControlComponent implements ControlValueAccessor, OnInit {
  @Input()value = ''
  @Input()label = ''
  @Input()type = 'string'
  @Input()formControl: FormControl
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output() onBlur: EventEmitter<boolean>
  public disabled = false

  public errors: any
  public eventOnBlur = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
    this.errors = Object.keys(this.formControl.errors)
  }

  registerOnChange(fn: any) {
    this.onChange = fn
  }

  registerOnTouched(fn: () => any): void {
    this.onTouched = fn
  }

  writeValue(outsideValue: any) {
    this.value = outsideValue
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled
  }

  updateValue(insideValue: any) {
    this.value = insideValue
    this.onChange(insideValue)
    this.onTouched()
  }

  blur() {
    this.eventOnBlur.emit(true)
  }

  private onChange = (value: any) => {}
  private onTouched = () => {}

}
