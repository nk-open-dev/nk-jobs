import { async } from '@angular/core/testing';
import * as dev from "../environments/environment";
import * as prod from "../environments/environment.prod";

describe('AppComponent', () => {
  it('should consider true as truthy', async(() => {
    console.log('Yeah... du bekommst einen Award für das freiwillige Ausführen von UnitTests - bitte in der Bewerbung mit angeben! +1 ;-)');
    expect(true).toBeTruthy();
  }));

  it('should deliver the correct email address in development environment', async(() =>  {
    expect(dev.environment.apiUrl).toBe('http://localhost:5000/contact.json');
  }));

  it('should deliver the correct email address in production environment', async(() =>  {
    expect(prod.environment.apiUrl).toBe('http://nk-dev.de/contact');
  }));
});
