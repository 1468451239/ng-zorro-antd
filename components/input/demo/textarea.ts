import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-input-textarea',
  template: `
    <textarea rows="4" nz-input [(ngModel)]="inputValue"></textarea>
  `,

  styles: []
})
export class NzDemoInputTextareaComponent {
  inputValue: string;
}
