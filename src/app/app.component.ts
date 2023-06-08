import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  title = 'appgeo';

  latitude = 0;
  longitude = 0;
  map_url:any='';

  latitude2 = 0;
  longitude2 = 0;

  ngOnInit(){
    this.capturarCordenadas();
   
  }

  capturarCordenadas(){
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition((pos) =>{
          this.latitude = pos.coords.latitude;
          this.longitude = pos.coords.longitude;
          this.map_url = "https://www.google.com/maps/search/?api=1&query=" + this.latitude , + this.longitude;  
        },
        () =>{
          alert("Sem Localização");
        },
        {timeout:15000}
        );

        navigator.geolocation.watchPosition((pos) =>{
          this.latitude2 = pos.coords.latitude;
          this.longitude2 = pos.coords.longitude;
        },
        () =>{
          alert("Sem Rastreamento!");
        },
        {timeout:15000}
        );
    }else{
      alert("Sem Permissão")

    }
  }
}
