import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent {
  FName =  'Parmeet';
  token: string|undefined;

  constructor(private builder: FormBuilder) { 
    this.token = undefined;
  }

  user = this.builder.group({
    //compose is used when combining more than one validator
    id: ['', Validators.compose([Validators.required])],
    name: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.pattern('[A-Za-z]+')])],
    email: ['', Validators.compose([Validators.required, Validators.pattern("^[a-z0-9.-_]+@(gmail)+.(com)$")])],
    address: ['', Validators.compose([Validators.required])],
    service: ['', Validators.compose([Validators.required])],
    phone: ['', Validators.compose([Validators.required, Validators.maxLength(10), Validators.minLength(10)])],
    review:[''],
    
  });

  handleSubmit() {
    console.log(this.user.value);
 
    alert(this.FName+" Feedback Submitted");
    this.user.reset({});
  }

  public send(form: NgForm): void {
    if (form.invalid) {
      for (const control of Object.keys(form.controls)) {
        form.controls[control].markAsTouched();
      }
      return;
    }

    console.debug(`Token [${this.token}] generated`);
  }

}
