import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { TitleComponent } from './title/title.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ServicesComponent } from './services/services.component';
import { FeaturedHandsComponent } from './featured-hands/featured-hands.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';



@NgModule({
  declarations: [
    ContentComponent,
    TitleComponent,
    ServicesComponent,
    FeaturedHandsComponent,
    TestimonialsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[ContentComponent]
})
export class ContentModule { }
