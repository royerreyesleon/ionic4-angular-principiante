import { Component, OnInit } from '@angular/core';

import { AlertController } from '@ionic/angular';

import { ActivatedRoute, Router} from '@angular/router';
import { PlacesService } from '../places.service';
import { Place } from '../place.model';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  place : Place;

  constructor(
    private activatedRoute  : ActivatedRoute,
    private placeService    : PlacesService,
    private router          : Router,
    private alertCtrl       : AlertController
    ) {

    }

  ngOnInit() {

    // GET URL.
    this.activatedRoute.paramMap.subscribe(paramMap => {
      // redirect.
      const recipeId = paramMap.get('placeId');
      // console.log(" recipeId ",  recipeId);
      
      // GIVEN AND FILL PLACE.
      this.place = this.placeService.getPlace(recipeId);
      // console.log("this.place ", this.place);

    })
  }

  async deletePlace(){

    const alertElement = await this.alertCtrl.create({
      header : 'Are you sure, you want to delete it?',
      message: 'Be careful',
      buttons: [
        {
          text:'Cancel',
          role:'cancel'
        },
        {
          text   :'Delete',
          handler: () => {
            
            // console.log('Deleted...');
            this.placeService.deletePlace(this.place.id);
            
            // console.log(this.placeService.getPlaces());
            // YES DELETE, BUT REFRESH WITH ACTION DIFERENT OF ngOnInit() IN place.page.ts
        
            // USE EVENTS LIVE CICLE ionViewWillEnter().
        
            // REDIRECT
            this.router.navigate(['/places']);

          }
        }
      ]
    });

    await alertElement.present();
    
  }

}
