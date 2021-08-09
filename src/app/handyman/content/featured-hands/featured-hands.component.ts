import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-hands',
  templateUrl: './featured-hands.component.html',
  styleUrls: ['./featured-hands.component.scss']
})
export class FeaturedHandsComponent implements OnInit {
  profileCard: any[] = [
    { name: 'Jhon P.', location: 'Toronto' },
    { name: 'Sami L.', location: 'Montreal' },
    { name: 'Brake P.', location: 'Vancouver' },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
