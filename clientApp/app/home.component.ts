import { DataService } from './data.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home-app',
    templateUrl: './app.home.html',
    providers: [DataService]
})
export class HomeComponent implements OnInit
{
    methods: String[];
    constructor(private dataService: DataService) { }
    ngOnInit() {
        this.LoadData();
    }
    LoadData() {
        this.dataService.getMethods().subscribe((data: String[]) => this.methods = data);
    }
}