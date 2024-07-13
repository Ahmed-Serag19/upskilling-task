import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private apiUrl = 'http://upskilling-egypt.com:3001/contact';

  constructor(private http: HttpClient) {}

  sendContactForm(contactData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, contactData);
  }
}
