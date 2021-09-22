import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private httpClient : HttpClient) {

  }

  getPhotos(){
    return this.httpClient.get<any>('https://jsonplaceholder.typicode.com/photos?_limit=15');
  }
}
