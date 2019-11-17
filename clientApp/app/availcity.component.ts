import { City } from './city';
import { User } from './user';
import { CityService } from './cities.service';
import { Component, TemplateRef, OnInit } from '@angular/core';
import { GetUserService } from './get_users.service';
import { UserId } from './UserId';
@Component({
    selector: 'avail-city',
    templateUrl: './app.availcity.html',
    providers: [CityService, GetUserService]
})

export class AvailCity implements OnInit {
    city: City = new City();
    cities: City[];
    users: User[];
    user: User = new User();
    visibility: boolean = true;

    constructor(
        private cityService: CityService,
        private UserService: GetUserService
    ) { }

    listAllCitiesByUserId() {
        let body: UserId = new UserId();
        body.Id = Number(this.user.Id);
        this.cityService.getCities(body).subscribe(
            (value:any) => {
                this.cities = JSON.parse (value);
                this.visibility = true;
            },
            (error:any) => { console.error(error) }
        )
    }

    loadData() {
        this.UserService.getUsers().subscribe(
            (value) => { this.users = JSON.parse (value) },
            (error) => { console.error(error) }
        )
    }

    ngOnInit() {
        this.loadData();
    }


}