import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const base_url = `${environment.base_url}/login`;


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject!: BehaviorSubject<any>;
  public currentUser!: Observable<any>;

  constructor(
    private http: HttpClient
  ) {
    this.currentUserSubject = new BehaviorSubject<any>(localStorage.getItem('token'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  token(token: string) {
    localStorage.setItem('token', token);
  }

  login(formData: any) {
    return this.http.post(base_url, formData).pipe(
      tap((resp: any) => {
        console.log(resp.token)
        this.token(resp.token);
        this.currentUserSubject.next(resp.token)
      })
    )
  }

  user() {
    let headers = new HttpHeaders({
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MTNlOGU5MmI2ODViODBhY2M3YjI1YjIiLCJpYXQiOjE2MzE0OTUwNTksImV4cCI6MTYzMTUzODI1OX0.rhzvUHePk7mnnNFYEykFstqYS9dDhA0CdNtKPzm_P10'
    });
    console.log(headers);
    return this.http.get(`${base_url}/info`, {headers});
  }
}
