import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: any;
  _user: any;

  constructor() {


    this.user = {
      username: "alectheman",
      firstname: "Alec",
      surname: "Thompson",
      about: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
    };

    this._user = JSON.parse(JSON.stringify(this.user));
  }

  ngOnInit() {
  }

  updateProfile() {
    this._user = JSON.parse(JSON.stringify(this.user));
    const type = ['','info','success','warning','danger'];

    const color = Math.floor((Math.random() * 4) + 1);

    $.notify({
        icon: "notifications",
        message: "Your profile has been updated successfully!"

    },{
        type: "success",
        timer: 3000,
        placement: {
            from: "top",
            align: "center"
        }
    });
  }

}
