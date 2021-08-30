import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location/location.service';


@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent implements OnInit {
  latitude = 0;
  longitude = 0;
  markers: any[] = [];

  lat = 22.4064172;

  long = 69.0750171;

  zoom=7;
  constructor(private locat: LocationService) { this.getLocation(); }
  getLocation() {
    this.locat.getPosition().then(pos => {
        this.latitude = pos.lat;
        this.longitude = pos.lng;
        this.markers = [

          {
  
              lat: this.latitude,
  
              lng: this.longitude,
  
              label: 'Mi Posicion'
  
          },
  
          {
  
              lat: 23.0204978,
  
              lng: 72.4396548,
  
              label: 'Ahmedabad'
  
          },
  
          {
  
              lat: 22.2736308,
  
              lng: 70.7512555,
  
              label: 'Rajkot'
  
          }
  
      ];
    });
}



  

  ngOnInit(): void {
    this.getLocation()
    
  }

  

}
