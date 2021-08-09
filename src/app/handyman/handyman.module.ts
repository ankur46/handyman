import { NgModule } from '@angular/core';
import { HandymanComponent } from './handyman.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { ContentModule } from './content/content.module';
const routes: Routes = [
  { path: '', component: HandymanComponent }
]

@NgModule({
  declarations: [
    HandymanComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    HeaderModule,
    SharedModule,
    FooterModule,
    ContentModule
  ]
})
export class HandymanModule { }
