import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

  reviewCard: any[] = [{
    name: 'Beaulahus Mayert',
    review: 'Great cleaning! Reliable and was able to accommodate my schedule.recommend thanks Nikolina!'
  },
  {
    name: 'Beaulahus Mayert',
    review: 'Great cleaning! Reliable and was able to accommodate my schedule.recommend thanks Nikolina!'
  },
  {
    name: 'Beaulahus Mayert',
    review: 'Great cleaning! Reliable and was able to accommodate my schedule.recommend thanks Nikolina!'
  },
  {
    name: 'Beaulahus Mayert',
    review: 'Great cleaning! Reliable and was able to accommodate my schedule.recommend thanks Nikolina!'
  }]
  constructor() { }

  ngOnInit(): void {
  }

}
