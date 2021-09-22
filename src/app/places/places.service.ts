import { Injectable } from '@angular/core';

import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  // private places = [

  private places: Place[] = [
    {
      id : '1',
      title : 'Eiffel Tower',
      imageUrl : 'https://live.staticflickr.com/5106/5672669410_5d3333a10e_b.jpg',
      comments: ['Awesome place', 'wonderful experience']
    },
    {
      id : '2',
      title : 'Statue of Liberty',
      imageUrl : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Statue_of_Liberty_7.jpg/1200px-Statue_of_Liberty_7.jpg',
      comments: ['Awesome place', 'wonderful experience']
    },
    
    {
      id : '3',
      title : 'Statue of Liberty 2',
      imageUrl : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Statue_of_Liberty_7.jpg/1200px-Statue_of_Liberty_7.jpg',
      comments: []
    },
  ];

  constructor() { }

  getPlaces(){
    // RETURN COPY THIS ARRAY. (SINTAX ECMA 6).
    return [...this.places];
  }

  getPlace(placeId : string){

    // RETURN OBJECT.
    return {

      // FIND PLACE WHERE ID === GIVEN FOR PARAMS.
      ...this.places.find(place => {
        return place.id === placeId
      })

    }

  }

  addPlace(title: string, imageUrl : string){

    this.places.push({
      title,
      imageUrl,
      comments: [],
      id: this.places.length + 1 + ''
    });

  }

  deletePlace(placeId : string){

    // FOR
    this.places = this.places.filter(place =>{
      // GET NEW ARRAY, NOT IN placeId GIVEN.
      return place.id !== placeId
    });

  }
}
