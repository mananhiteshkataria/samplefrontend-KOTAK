import { Component, Inject } from '@angular/core';
import { inject } from '@angular/core/testing';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { CoreService } from '../services/core.service';
import { CustomerService } from '../services/customer.service';
@Component({
  selector: 'app-cust-add',
  templateUrl: './cust-add.component.html',
  styleUrls: ['./cust-add.component.css']
})
export class CustAddComponent {
  accounts: string[] = [
    'Saving Account',
    'Current Account',
    'Salary Account'

  ];

  loans: string[] = [
    'Car Loan',
    'Home Loan',
    'Education Loan',
    'Personal Loan'

  ];

  insurance: string[] = [
    'Life Insurance',
    'Health Insurance',
    'Cyber Insurance'

  ];

  cards: string[] = [
    'Debit Card',
    'Credit Card'

  ];



  custForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _custService: CustomerService,
    private _dialogRef: MatDialogRef<CustAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService) {
    this.custForm = this._fb.group(
      {
        firstname: '',
        lastname: '',
        email: '',
        dob: '',
        phoneno: '',
        salary: '',
        gender: '',
        account: '',
        loan: '',
        card: '',
        insurance: ''

      }
    );
  }

  ngOnInit(): void {
    this.custForm.patchValue(this.data);
  }


  onFormSubmit() {
    if (this.custForm.valid) {
      if (this.data) {
        this._custService.updateCustomer(this.data.id, this.custForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Customer Details are updated successfully!!!')
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });

      } else {
        this._custService.addCustomer(this.custForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Customer Details are added successfully!!!', 'done')
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });

      }

    }
  }
}
