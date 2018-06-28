import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { User } from '../user';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class UserService {
  url;

  constructor(private http: Http) {}

  public getUser(): Observable<User> {
    this.url = '../assets/user.json';
    return this.http
      .get(this.url)
      .map(res => res.json())
      .catch(error => Observable.throw('Server error'));
  }

  public updateUser(user: User): Observable<User> {
    this.url = 'api/users/' + user.id;
    return this.http
      .put(this.url, user)
      .map(res => res.json())
      .catch(error => Observable.throw('Server error'));
  }
}
