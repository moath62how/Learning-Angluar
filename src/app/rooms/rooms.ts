import { Component, OnInit } from '@angular/core';
import { IRoom } from './IRooms';
import { IRoomList } from './IRoomList';
import { DatePipe, CurrencyPipe, TitleCasePipe, SlicePipe } from '@angular/common';
@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.html',
  styleUrl: './rooms.scss',
  imports: [DatePipe, TitleCasePipe, CurrencyPipe, SlicePipe],
})
export class Rooms implements OnInit {
  hotelName: string = 'Hilton';
  rooms: IRoom = {
    availableRooms: 5,
    bookedRooms: 5,
    totalRooms: 15,
  };
  hideRooms: boolean = false;
  roomsList: IRoomList[] = [];
  toggle() {
    this.hideRooms = !this.hideRooms;
  }

  ngOnInit(): void {
    this.roomsList = [
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

  constructor() {

  }



}
