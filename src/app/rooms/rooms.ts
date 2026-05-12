import { Component } from '@angular/core';
import { IRoom } from './IRooms';
import { IRoomList } from './IRoomList';
@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.html',
  styleUrl: './rooms.scss',
  imports: [],
})
export class Rooms {
  hotelName: string = 'Hilton';
  numberOfRooms: Number = 10;
  hideRooms: boolean = false;
  toggle() {
    this.hideRooms = !this.hideRooms;
  }
  rooms: IRoom = {
    availableRooms: 5,
    bookedRooms: 5,
    totalRooms: 15,
  };

  roomlist: IRoomList[] = [
    {
      roomNumber: 101,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioning, Free Wi-Fi, Flat-screen TV',
      price: 150,
      photos: 'https://imges.unsplash.com/photo-1560448070-8bfa1e9cbd9b',
      checkinTime: new Date('2024-07-01T14:00:00'),
      checkoutTime: new Date('2024-07-02T12:00:00'),
    },
    {
      roomNumber: 102,
      roomType: 'Standard Room',
      amenities: 'Air Conditioning, Free Wi-Fi, Flat-screen TV',
      price: 100,
      photos: 'https://imges.unsplash.com/photo-1560448070-8bfa1e9cbd9b',
      checkinTime: new Date('2024-07-01T14:00:00'),
      checkoutTime: new Date('2024-07-02T12:00:00'),
    },
    {
      roomNumber: 103,
      roomType: 'Suite Room',
      amenities: 'Air Conditioning, Free Wi-Fi, Flat-screen TV, Kitchenette',
      price: 25.5,
      photos: 'https://imges.unsplash.com/photo-1560448070-8bfa1e9cbd9b',
      checkinTime: new Date('2024-07-01T14:00:00'),
      checkoutTime: new Date('2024-07-02T12:00:00'),
    },
  ];
}
