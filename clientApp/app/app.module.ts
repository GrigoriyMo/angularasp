import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CreateUsers } from './createusers.component';
import { UsersPageComponent } from './users-page.component';
import { AvailCity } from './availcity.component';
import { UserCreated } from './ucreated.component';
import { UserNotCreated } from './unotcreated.component';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';
import { MessageDirective  } from './message.directive';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'CreateAccount', component: CreateUsers },
    { path: 'GetUsersPage', component: UsersPageComponent },
    { path: 'GetAvailCity', component: AvailCity },
    { path: 'u-not-created', component: UserNotCreated },
    { path: 'u-created', component: UserCreated },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule, NgMultiSelectDropDownModule,RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent, HomeComponent, CreateUsers, AvailCity, UsersPageComponent, NotFoundComponent, MessageDirective, UserNotCreated, UserCreated],
    bootstrap: [AppComponent]
})
export class AppModule { }