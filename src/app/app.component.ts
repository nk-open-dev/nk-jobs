import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from '../environments/environment';
import {Contact} from "./contact";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  contact: Contact;
  isDevelopment: boolean;

  constructor(private http: HttpClient) {
    this.contact = new Contact('test@example.com', 'Max Mustermann', 'Betreff');
    this.isDevelopment = !environment.production;
  }
  ngOnInit() {
    const options = {
      headers: new HttpHeaders({
        'X-Custom-App': 'nk-jobs'
      })
    };
    this.http.get<Contact>(environment.apiUrl, options).subscribe(data => {
      this.contact = new Contact(data.email, data.name, data.subject);
    })
  }
}
