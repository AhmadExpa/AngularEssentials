import { Injectable } from '@angular/core';
import { course } from './common.Interface';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Room } from './room.interface';
import { COURSES } from './common.data';
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private _httpClient: HttpClient) {}

  private courses = COURSES;

  // methods to get licenses
  getStudentLicense() {
    const discount: number = 20;
    this.courses.map((course: course) => {
      const discountedPrice = (course.price / 100) * discount;
      course.price = course.price - discountedPrice;
      course.discount = `${discount}  %`;
    });
    return this.courses;
  }
  getEmployeeLicense() {
    const discount: number = 40;
    this.courses.map((course: course) => {
      const discountedPrice = (course.price / 100) * discount;
      course.price = course.price - discountedPrice;
      course.discount = `${discount}  %`;
    });
    return this.courses;
  }

  // CRUD OPERATIONS

  getRooms() {
    return this._httpClient.get<Room[]>('api/rooms');
  }
  addRoom(room: Room) {
    return this._httpClient.post<Room[]>('api/rooms', room);
  }
  updateRoom(room: Room) {
    return this._httpClient.put<Room[]>(`api/rooms/${room.roomNumber}`, room);
  }
  deleteRoom(roomNumber: string) {
    // as this is a dummy api, the delete method give all the data except the specfic id passed
    return this._httpClient.delete<Room[]>(`api/rooms/${roomNumber}`);
  }

  //  HTTP REQUEST
  getPhotos() {
    const request = new HttpRequest(
      'GET',
      'https://jsonplaceholder.typicode.com/photos',
      {
        reportProgress: true, //This option is used to track the progress of the HTTP request, especially useful for long-running requests such as file uploads or downloads. When set to true, Angular emits multiple events (like the upload progress, download progress, and the final response) as part of the HTTP request lifecycle.
      }
    );
    return this._httpClient.request(request);
  }
  // ShareReplay =>

  getRooms$ = this._httpClient.get<Room[]>('api/rooms').pipe(shareReplay(1));
  getPhotos$ = this.getPhotos().pipe(shareReplay(1));

  // 1. ShareReplay is useful for sharing a single source among multiple subscribers and replaying the last emitted value(s)  to new subscribers.
  // 2. Common use cases include preventing multiple HTTP requests, caching expensive computations, and ensuring consistency of data across components.
  // 3. You typically use shareReplay with bufferSize (e.g., shareReplay(1)) to cache the last value emitted.

  // HTTP Headers

  sentHeaders() {
    const headers = new HttpHeaders({
      token: '12345678abcxyz',
    });
    return this._httpClient.get('api/rooms', { headers: headers });
  }
}
