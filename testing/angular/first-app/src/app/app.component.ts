import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>AcuPoint</h1>
    <fa-other></fa-other>
    <fa-another>
        <h3>History</h3>    
    </fa-another>
    <fa-another>
    
        <p>testing</p>
    </fa-another>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'I changed it!';
}
