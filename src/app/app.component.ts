import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-reactive-form-app';

  formData = new FormGroup({
    formEmail : new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(30)
    ]),
    formPassword : new FormControl(''),
    formAddress : new FormControl(''),
    formCity : new FormControl(''),
    formState : new FormControl(''),
    formPin : new FormControl(''),
    formCheckMeOut : new FormControl(false)
  });

  onSubmit(){
    console.log('Form Submitted');
    console.log('Email: ' + this.formData.value.formEmail);
    console.log('Password: ' + this.formData.value.formPassword);
    console.log('Address: ' + this.formData.value.formAddress);
    console.log('City: ' + this.formData.value.formCity);
    console.log('State: ' + this.formData.value.formState);
    console.log('Pin: ' + this.formData.value.formPin);
    console.log('Check Me Out: ' + this.formData.value.formCheckMeOut);
  }

}
