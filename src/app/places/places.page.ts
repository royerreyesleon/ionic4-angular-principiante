import { Component, OnInit } from '@angular/core';

import { PlacesService } from './places.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {

  places = [];

  // constructor() { }
  constructor(private placeService : PlacesService, private router : Router) { }

  // WHEN FIRST LOAD.
  ngOnInit() {
    this.places = this.placeService.getPlaces();
    // console.log("this.places ", this.places);
  }
  
  
  // EVENT LIVE CICLE.
  ionViewWillEnter(){
    this.places = this.placeService.getPlaces();
  }

  addNewPlace(){
    // console.log('Add...');
    this.router.navigate(['/new-place']);
  }
  
  goToHome(){
    this.router.navigate(['/home']);
  }

}
