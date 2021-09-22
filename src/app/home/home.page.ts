import { Component, OnInit } from '@angular/core';
import { PhotosService } from './photos.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
// export class HomePage {
export class HomePage implements OnInit{

  photos = [];

  constructor(private photosService : PhotosService) {

  }

  ngOnInit(){
    // this.photosService.getPhotos();

    this.photosService.getPhotos().subscribe(data => {
      // console.log(data);
      this.photos = data;
    })

    // console.log("sa", this.photosService.getPhotos().subscribe(data => {
    //   console.log(data);
    // }));
  }

}
