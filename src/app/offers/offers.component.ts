import { Component } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent {
  currentService = "Personal Loans";
  services = ['Credit Card', 'Debit Card', 'Loans', 'Forex'];
  
  addService(newService: string) {
    this.services.push(newService);
    this.clearInput();
  }

  clearInput() {
    let input = <HTMLInputElement>document.getElementById('service-input');
    input.value = '';
  }

  currentOffer = "5% Cashback on each transaction";
  offers = ['Credit Card Offers', 'Debit Card Offers', 'FD'];

  addOffer(newOffer: string) {
    this.offers.push(newOffer);
    this.clearInp();
  }

  clearInp() {
    let input = <HTMLInputElement>document.getElementById('offer-input');
    input.value = '';
  }
}