import { HttpEventType } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { catchError, map, Observable, of, Subject, Subscription } from 'rxjs';
import { CommonService } from 'src/app/services/common.service';
import { Room } from 'src/app/services/room.interface';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.scss'],
})
export class HttpClientComponent implements OnInit, OnDestroy {
  subscriptions!: Subscription; //From RxJs Library  - to unsubscribe the subscriptions
  // <-------------------------------------------->
  toggleRoom: boolean = false;
  jsonToggle: boolean = true;
  allRooms: Room[] = [];
  newRoom: Room = {
    roomNumber: '1',
    roomType: 'Deluxe Room',
    amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
    price: 500,
    photos:
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    checkinTime: '2021-11-10T19:00:00.000Z',
    checkoutTime: '2021-11-11T19:00:00.000Z',
    rating: 4.5,
  };
  updatedRoom: Room = {
    roomNumber: '1 ',
    roomType: 'Updated Room',
    amenities: 'Updated Room',
    price: 0,
    photos:
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    checkinTime: Date.now().toString(),
    checkoutTime: Date.now().toString(),
    rating: 4.5,
  };
  constructor(private _commonService: CommonService) {}
  ngOnInit(): void {}
  // <-------------------------------------------->

  // CRUD OP USING HTTP CLIENT
  addRoom(room: Room) {
    this._commonService.addRoom(this.newRoom).subscribe((data) => {
      this.allRooms = data;
    });
  }
  updateRoom(room: Room) {
    this._commonService.updateRoom(this.updatedRoom).subscribe((data) => {
      this.allRooms = data;
    });
  }
  deleteRoom(roomNumber: string) {
    this._commonService.deleteRoom(roomNumber).subscribe((data) => {
      this.allRooms = data;
    });
  }
  getRooms() {
    this.toggleRoom = this.toggleRoom ? false : true;
    this._commonService.getRooms().subscribe((data) => {
      this.allRooms = data;
    });
  }
  // <-------------------------------------------->

  // HTTP REQUEST
  // getPhotos() {
  //   // Simple HTTP request

  //   // this._commonService.getPhotos().subscribe(
  //   //   (event) => {
  //   //     switch (event.type) {
  //   //       case HttpEventType.Sent:
  //   //         console.log('Request sent!');
  //   //         break;
  //   //       case HttpEventType.ResponseHeader:
  //   //         console.log('Response header received!');
  //   //         break;
  //   //       case HttpEventType.DownloadProgress:
  //   //         if (event.total) {
  //   //           const progress = Math.round((event.loaded / event.total) * 100);
  //   //           console.log(`Download in progress! ${progress}%`);
  //   //         } else {
  //   //           console.log(`Download in progress! ${event.loaded} bytes downloaded.`);
  //   //         }
  //   //         break;
  //   //       case HttpEventType.Response:
  //   //         console.log('Photo received!', event.body);
  //   //         break;

  //   //       default:
  //   //         break;
  //   //     }
  //   //   },
  //   //   (error) => {
  //   //     console.error('Error fetching photos:', error);
  //   //   }
  //   // );
  //   // HTTP REQUEST WITH Share Replay
  //   this._commonService.getPhotos$.subscribe(
  //     (event) => {
  //       switch (event.type) {
  //         case HttpEventType.Sent:
  //           console.log('Request sent!');
  //           break;
  //         case HttpEventType.ResponseHeader:
  //           console.log('Response header received!');
  //           break;
  //         case HttpEventType.DownloadProgress:
  //           if (event.total) {
  //             const progress = Math.round((event.loaded / event.total) * 100);
  //             console.log(`Download in progress! ${progress}%`);
  //           } else {
  //             console.log(
  //               `Download in progress! ${event.loaded} bytes downloaded.`
  //             );
  //           }
  //           break;
  //         case HttpEventType.Response:
  //           console.log('Photo received!', event.body);
  //           break;

  //         default:
  //           break;
  //       }
  //     },
  //     (error) => {
  //       console.error('Error fetching photos:', error);
  //     }
  //   );
  // }
  // <-------------------------------------------->

  // With Subscription
  getPhotos() {
    // Manually Subscription
    this.subscriptions = this._commonService.getPhotos().subscribe(
      (event) => {
        switch (event.type) {
          case HttpEventType.Sent:
            console.log('Request sent!');
            break;
          case HttpEventType.ResponseHeader:
            console.log('Response header received!');
            break;
          case HttpEventType.DownloadProgress:
            if (event.total) {
              const progress = Math.round((event.loaded / event.total) * 100);
              console.log(`Download in progress! ${progress}%`);
            } else {
              console.log(
                `Download in progress! ${event.loaded} bytes downloaded.`
              );
            }
            break;
          case HttpEventType.Response:
            console.log('Photo received!', event.body);
            break;

          default:
            break;
        }
      },
      (error) => {
        console.error('Error fetching photos:', error);
      }
    );
  }
  // streamline data subscription method with the help of aysnc Pipe
  // getRooms$ = this._commonService.getRooms$;
  // <-------------------------------------------->

  // CATCH - ERROR

  // error$: This is an instance of Subject from RxJS, specifically a subject that emits string values. A Subject in RxJS is
  // both an observable and an observer, meaning it can both emit values to subscribers and be subscribed to.
  // Why Subject<string>?
  // This subject is used to emit error messages (as string) to other parts of the application when an error occurs.
  // getError$ is a read-only observable that allows other parts of the app to subscribe to error messages.
  // getRooms$ fetches room data from the service, and in case of errors, emits the error to error$ and returns an empty  
  // array, allowing the observable stream to continue.

  error$ = new Subject<string>();
  getError$ = this.error$.asObservable();
  getRooms$ = this._commonService.getRooms$.pipe(
    catchError((error) => {
      // console.log(error);
      this.error$.next(error.message);
      return of([]);
    })
  );

  // Map Operator
  doublePrice$ = this._commonService.getRooms$.pipe(
    map((rooms) => {
      return rooms.map((room) => {
        return {
          ...room,
          price: room.price * 2,
        };
      });
    })
  );
  // HTTP Headers
  sentHeaders() {
    this.subscriptions = this._commonService.sentHeaders().subscribe();
  }
  ngOnDestroy(): void {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe(); // UnSubscribe All
    }
  }
}

// < ----- Observables ------ >
// stream = new Observable((observer) => {
//   observer.next(1);
//   observer.next(2);
//   observer.next(3);
//   observer.complete();
//   observer.error('Error');
// }); this is how observable is created in rxjs

// this.stream.subscribe((data) => console.log(data));
// this.stream.subscribe({
//   next: (data) => console.log(data),
//   error: (error) => console.log(error),
//   complete: () => console.log('Completed'),
// }); this is how observable works
