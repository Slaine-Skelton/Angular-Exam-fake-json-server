import { Component, OnInit } from '@angular/core';
import { CarApiService } from '../services/car-api.service';

@Component({
  selector: 'app-carlist',
  templateUrl: './carlist.component.html',
  styleUrls: ['./carlist.component.css'],
  providers: [CarApiService]
})
export class CarlistComponent implements OnInit {

  carsData: ICar[];

  constructor(private _carApiService: CarApiService) { }

  ngOnInit() {
    this._carApiService.getCarData().subscribe(carsData =>
      {this.carsData = carsData});
  }

}
