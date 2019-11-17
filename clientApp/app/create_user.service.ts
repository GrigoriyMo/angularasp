import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CreateUserService {
    private url = "/api/users";

    constructor(private http: HttpClient) {
    }

    createUser(user: User): Observable<any> {
        return this.http.post(this.url, user);
    }
}