import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
const COMPONENT = [
  ButtonComponent,
  DropdownComponent
];
const MODULES = [
  FontAwesomeModule
]

@NgModule({
  declarations: [
    ...COMPONENT
  ],
  imports: [
    CommonModule,
    ...MODULES
  ],
  exports: [...COMPONENT,  ...MODULES]
})
export class SharedModule { }
