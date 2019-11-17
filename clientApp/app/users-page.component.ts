import { GetUserService } from './get_users.service';
import { Component, OnInit } from '@angular/core';
import { User } from './user';


@Component({
    selector: 'users-papge',
    templateUrl: './app.userspage.html',
    providers: [GetUserService]
})
export class UsersPageComponent 
{
    users: User[];
    constructor(private UserService: GetUserService) { }

    getUsers() {
        this.UserService.getUsers().subscribe(
            (value) => { this.users = JSON.parse(value) },
            (error) => { console.error(error) });
    }
}