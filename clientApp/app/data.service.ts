import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
    private url = "/api/methods";

    constructor(private http: HttpClient) {

    }

    getMethods() {
        return this.http.get(this.url)
    }
}