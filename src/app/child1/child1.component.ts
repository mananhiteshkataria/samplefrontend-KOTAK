import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit { 
  
  @Input()
  service = "Loan";  
  
  @Output() 
  newServiceEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void { }
  
  addNewService(value: string) {
    this.newServiceEvent.emit(value);
  }
}