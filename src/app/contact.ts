export class Contact {
  email: string;
  name: string;
  subject: string;

  constructor(email: string, name: string, subject: string) {
    this.email = email;
    this.name = name;
    this.subject = subject;
  }
}
