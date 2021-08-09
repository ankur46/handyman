import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandymanComponent } from './handyman.component';

describe('HandymanComponent', () => {
  let component: HandymanComponent;
  let fixture: ComponentFixture<HandymanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandymanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HandymanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
