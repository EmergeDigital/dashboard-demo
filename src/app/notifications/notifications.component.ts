import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  constructor() { }
  showNotification(from, align){
      const type = ['primary','info','success','warning','danger'];

      const color = Math.floor((Math.random() * 5));

      $.notify({
          icon: "notifications",
          message: "Welcome to your <b>DEMO DASHBOARD</b> - The completed version will have much more functionality!"

      },{
          type: type[color],
          timer: 2000,
          placement: {
              from: from,
              align: align
          }
      });
  }
  ngOnInit() {
  }

}
