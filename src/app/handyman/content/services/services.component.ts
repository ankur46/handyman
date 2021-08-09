import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  cards:any [] = [
    {
      imageUrl:"",
      title:'Painting',
      subtitle:'120 Handymen'
    },
    {
      imageUrl:"",
      title:'Gardening',
      subtitle:'101 Handymen'
    },
    {
      imageUrl:"",
      title:'Plumbing',
      subtitle:'95 Handymen'
    },
    {
      imageUrl:"",
      title:'Moving',
      subtitle:'2k Handymen'
    },
    {
      imageUrl:"",
      title:'Electricity',
      subtitle:'102 Handymen'
    },
    {
      imageUrl:"",
      title:'Babyproofing',
      subtitle:'101 Handymen'
    },
    {
      imageUrl:"",
      title:'Sanitary Plumbing',
      subtitle:'95 Handymen'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
