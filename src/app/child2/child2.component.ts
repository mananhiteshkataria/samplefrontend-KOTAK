import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {
  @Input()
  offer = "Cashback";  
  
  @Output() 
  newOfferEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void { }
  
  addNewOffer(value: string) {
    this.newOfferEvent.emit(value);
  }
}