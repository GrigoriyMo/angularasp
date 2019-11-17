import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable()
export class GetUserService {
    private url = "/api/users";

    constructor(private http: HttpClient) {
    }

    getUsers(): Observable<any> {
        return this.http.get(this.url);
    }
}