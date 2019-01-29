import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
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
    this.http.get<Contact>(environment.apiUrl).subscribe(data => {
      this.contact = new Contact(data.email, data.name, data.subject);
    })
  }
}
