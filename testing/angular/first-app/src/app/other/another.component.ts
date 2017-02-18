import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fa-another',
  template: `
  <ng-content></ng-content>
  `,
  styles: [`
    p{
        color: red;
    }
    
`
  ]
})
export class AnotherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
