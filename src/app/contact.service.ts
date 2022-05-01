import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private baseUrl = 'https://phonebook-springboot-app.herokuapp.com/';



  constructor(private httpClient: HttpClient) { }



  getAllContacts(): Observable<Contact[]> {
    return this.httpClient.get<Contact[]>(`${this.baseUrl}/contact/get`);
  }
  createContact(contact: Contact): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}/contact/save`, contact, { responseType: "text" });
  }
  removeContact(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseUrl}/delete/${id}`, { responseType: "text" })
  }
  findContact(id: number): Observable<Contact> {
    return this.httpClient.get<Contact>(`${this.baseUrl}/edit/${id}`)
  }

}
