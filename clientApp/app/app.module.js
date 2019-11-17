var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateUsers } from './createusers.component';
import { UsersPageComponent } from './users-page.component';
import { AvailCity } from './availcity.component';
import { UserCreated } from './ucreated.component';
import { UserNotCreated } from './unotcreated.component';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';
import { MessageDirective } from './message.directive';
var appRoutes = [
    { path: '', component: HomeComponent },
    { path: 'CreateAccount', component: CreateUsers },
    { path: 'GetUsersPage', component: UsersPageComponent },
    { path: 'GetAvailCity', component: AvailCity },
    { path: 'u-not-created', component: UserNotCreated },
    { path: 'u-created', component: UserCreated },
    { path: '**', component: NotFoundComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            imports: [BrowserModule, FormsModule, HttpClientModule, NgMultiSelectDropDownModule, RouterModule.forRoot(appRoutes)],
            declarations: [AppComponent, HomeComponent, CreateUsers, AvailCity, UsersPageComponent, NotFoundComponent, MessageDirective, UserNotCreated, UserCreated],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map