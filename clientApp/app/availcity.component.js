var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { City } from './city';
import { User } from './user';
import { CityService } from './cities.service';
import { Component } from '@angular/core';
import { GetUserService } from './get_users.service';
import { UserId } from './UserId';
var AvailCity = /** @class */ (function () {
    function AvailCity(cityService, UserService) {
        this.cityService = cityService;
        this.UserService = UserService;
        this.city = new City();
        this.user = new User();
        this.visibility = true;
    }
    AvailCity.prototype.listAllCitiesByUserId = function () {
        var _this = this;
        var body = new UserId();
        body.Id = Number(this.user.Id);
        this.cityService.getCities(body).subscribe(function (value) {
            _this.cities = JSON.parse(value);
            _this.visibility = true;
        }, function (error) { console.error(error); });
    };
    AvailCity.prototype.loadData = function () {
        var _this = this;
        this.UserService.getUsers().subscribe(function (value) { _this.users = JSON.parse(value); }, function (error) { console.error(error); });
    };
    AvailCity.prototype.ngOnInit = function () {
        this.loadData();
    };
    AvailCity = __decorate([
        Component({
            selector: 'avail-city',
            templateUrl: './app.availcity.html',
            providers: [CityService, GetUserService]
        }),
        __metadata("design:paramtypes", [CityService,
            GetUserService])
    ], AvailCity);
    return AvailCity;
}());
export { AvailCity };
//# sourceMappingURL=availcity.component.js.map