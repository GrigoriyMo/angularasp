var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { User } from './user';
import { CreateUserService } from './create_user.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var CreateUsers = /** @class */ (function () {
    function CreateUsers(userService, router) {
        this.userService = userService;
        this.router = router;
        this.user = new User();
        this.condition = true;
        this.dropdownList = ['Mumbai', 'Bangaluru', 'Pune', 'Navsari', 'Moscow', 'Saint-Petersburg', 'New Delhi', 'Erevan', 'Algir'];
    }
    CreateUsers.prototype.createUser = function () {
        var _this = this;
        console.log(this.user);
        this.userService.createUser(this.user).subscribe(function (value) {
            if (value === "user exist") {
                _this.router.navigate(['u-not-created', { flag: value }]);
            }
            else {
                _this.router.navigate(['u-created', { flag: value }]);
            }
        }, function (error) { console.error(error); });
    };
    CreateUsers = __decorate([
        Component({
            selector: 'create-users',
            styles: ["\n        input.ng-touched.ng-invalid {border:solid red 2px;}\n        input.ng-touched.ng-valid {border:solid green 2px;}\n        \n    "],
            templateUrl: './app.createusers.html',
            providers: [CreateUserService]
        }),
        __metadata("design:paramtypes", [CreateUserService, Router])
    ], CreateUsers);
    return CreateUsers;
}());
export { CreateUsers };
//# sourceMappingURL=createusers.component.js.map