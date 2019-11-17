import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserId } from './UserId';

@Injectable()
export class CityService {
    private url = "/api/cities";
   
    constructor(private http: HttpClient) {
    }

    getCities(user_id: UserId)  {
        const header = new HttpHeaders();
        header.set('Content-Type', 'application/json');
        return this.http.post(this.url, user_id, { headers: header });
    }
}