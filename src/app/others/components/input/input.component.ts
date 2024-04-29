import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() label!: string;
  @Input() placeholder!: string;
  @Input() value!: string;

  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  onInputChange(value: any): void {
    if (!value) return;
    this.value = value.target['value'];
    this.valueChange.emit(value);
  }
}
