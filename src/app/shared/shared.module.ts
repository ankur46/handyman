import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { DropdownComponent } from './dropdown/dropdown.component';

const COMPONENT = [
  ButtonComponent,
  DropdownComponent
]

@NgModule({
  declarations: [
    ...COMPONENT
  ],
  imports: [
    CommonModule
  ],
  exports: [...COMPONENT]
})
export class SharedModule { }
