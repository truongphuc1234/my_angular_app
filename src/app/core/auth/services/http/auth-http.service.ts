import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AuthToken } from '../../models';

@Injectable()
export class AuthHttpService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<AuthToken> {
    return of({
      userName: 'Phuc123',
      userId: 1,
      token: 'abc'
    })
  }

  logout(): Observable<boolean> {
    return of(true);
  }
}
