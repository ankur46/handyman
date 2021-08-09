import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedHandsComponent } from './featured-hands.component';

describe('FeaturedHandsComponent', () => {
  let component: FeaturedHandsComponent;
  let fixture: ComponentFixture<FeaturedHandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedHandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedHandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
