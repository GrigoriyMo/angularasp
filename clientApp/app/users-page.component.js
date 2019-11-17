var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { GetUserService } from './get_users.service';
import { Component } from '@angular/core';
var UsersPageComponent = /** @class */ (function () {
    function UsersPageComponent(UserService) {
        this.UserService = UserService;
    }
    UsersPageComponent.prototype.getUsers = function () {
        var _this = this;
        this.UserService.getUsers().subscribe(function (value) { _this.users = JSON.parse(value); }, function (error) { console.error(error); });
    };
    UsersPageComponent = __decorate([
        Component({
            selector: 'users-papge',
            templateUrl: './app.userspage.html',
            providers: [GetUserService]
        }),
        __metadata("design:paramtypes", [GetUserService])
    ], UsersPageComponent);
    return UsersPageComponent;
}());
export { UsersPageComponent };
//# sourceMappingURL=users-page.component.js.map