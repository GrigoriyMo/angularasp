import { User } from './user';
import { CreateUserService } from './create_user.service';
import { Component, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'create-users',
    styles: [`
        input.ng-touched.ng-invalid {border:solid red 2px;}
        input.ng-touched.ng-valid {border:solid green 2px;}
        
    `],
    templateUrl: './app.createusers.html',
    providers: [CreateUserService ]
})
export class CreateUsers {

    user: User = new User();
    message: string;
    error: any;
    condition: boolean = true;
    dropdownList = ['Mumbai', 'Bangaluru', 'Pune', 'Navsari', 'Moscow', 'Saint-Petersburg', 'New Delhi','Erevan', 'Algir'];

    constructor(private userService: CreateUserService, public router: Router) { }

    createUser() {
        console.log(this.user);
        this.userService.createUser(this.user).subscribe(
            (value) => {
                if (value === "user exist") {
                    this.router.navigate(['u-not-created', { flag: value }]);
                } else {
                    this.router.navigate(['u-created', { flag: value }]);
                }
            },
            (error) => { console.error(error) }
        );
    }
}