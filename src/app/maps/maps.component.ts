import { Component, OnInit } from '@angular/core';
declare var $: any;

declare const google: any;
interface Marker {
lat: number;
lng: number;
label?: string;
draggable?: boolean;
}
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

    user: any;
    users: any[];

  constructor() { }

  ngOnInit() {

    this.user = {};

    this.users = [
      {
        name: "John Smith",
        type: "Home Owner",
        email: "john@gmail.com",
        cell: "0944442231",
        balance: "312.24"
      },
      {
        name: "Jacob Jeromiah",
        type: "Member",
        email: "jacob@gmail.com",
        cell: "094211231",
        balance: "500.00"
      },
      {
        name: "Smit Garner",
        type: "Home Owner",
        email: "smit@gmail.com",
        cell: "0744442231"
      },
      {
        name: "Wang Thai",
        type: "Home Owner",
        email: "wang@gmail.com",
        cell: "0242444231",
        balance: "665.00"
      },
      {
        name: "Ham Burger",
        type: "Home Owner",
        email: "ham@gmail.com",
        cell: "0113342213",
        balance: "799.22"
      },
      {
        name: "Juan Twothree",
        type: "Member",
        email: "john@gmail.com",
        cell: "0944411111",
        balance: "50000000.00"
      },
      {
        name: "Jose Loius",
        type: "Home Owner",
        email: "jose@gmail.com",
        cell: "0874442231",
        balance: "0.25"
      },
      {
        name: "Mark Shutterbug",
        type: "Member",
        email: "mark@gmail.com",
        cell: "0875333231"
      }

    ];
      // const myLatlng = new google.maps.LatLng(40.748817, -73.985428);
      // const mapOptions = {
      //     zoom: 13,
      //     center: myLatlng,
      //     scrollwheel: false, // we disable de scroll over the map, it is a really annoing when you scroll through page
      //     styles: [
      //         {'featureType': 'water', 'stylers': [{'saturation': 43}, {'lightness': -11}, {'hue': '#0088ff'}]},
      //         {'featureType': 'road', 'elementType': 'geometry.fill', 'stylers': [{'hue': '#ff0000'},
      //         {'saturation': -100}, {'lightness': 99}]},
      //         {'featureType': 'road', 'elementType': 'geometry.stroke', 'stylers': [{'color': '#808080'},
      //         {'lightness': 54}]},
      //         {'featureType': 'landscape.man_made', 'elementType': 'geometry.fill', 'stylers': [{'color': '#ece2d9'}]},
      //         {'featureType': 'poi.park', 'elementType': 'geometry.fill', 'stylers': [{'color': '#ccdca1'}]},
      //         {'featureType': 'road', 'elementType': 'labels.text.fill', 'stylers': [{'color': '#767676'}]},
      //         {'featureType': 'road', 'elementType': 'labels.text.stroke', 'stylers': [{'color': '#ffffff'}]},
      //         {'featureType': 'poi', 'stylers': [{'visibility': 'off'}]},
      //         {'featureType': 'landscape.natural', 'elementType': 'geometry.fill', 'stylers': [{'visibility': 'on'},
      //         {'color': '#b8cb93'}]},
      //         {'featureType': 'poi.park', 'stylers': [{'visibility': 'on'}]},
      //         {'featureType': 'poi.sports_complex', 'stylers': [{'visibility': 'on'}]},
      //         {'featureType': 'poi.medical', 'stylers': [{'visibility': 'on'}]},
      //         {'featureType': 'poi.business', 'stylers': [{'visibility': 'simplified'}]}
      //     ]
      // };
      // const map = new google.maps.Map(document.getElementById('map'), mapOptions);
      // const Marker = new google.maps.Marker({
      //     position: myLatlng,
      //     title: 'Hello World!'
      // });
  // To add the marker to the map, call setMap();
  // Marker.setMap(map);
   }

   createProfile(){
     if(this.isEmptyObject(this.user) === false){
       let user = JSON.parse(JSON.stringify(this.user));
       let name = user.firstname || "";
       let surname = user.surname || "";
       user.name = name + " " + surname;
       let arrTemp = this.users;
       let arrNew = [];
       arrNew.push(user);
       this.users = arrNew.concat(arrTemp);
      //  this.users.push(user);
       this.user = {};
       $.notify({
           icon: "done_all",
           message: "User has been added successfully!"
       },{
           type: "success",
           timer: 2000,
           placement: {
               from: "top",
               align: "center"
           }
       });
     } else {
       $.notify({
           icon: "report_problem",
           message: "Please enter in data for the user"
       },{
           type: "danger",
           timer: 2000,
           placement: {
               from: "top",
               align: "center"
           }
       });
     }
   }

   isEmptyObject(obj) {
    return (obj && (Object.keys(obj).length === 0));
  }

}
