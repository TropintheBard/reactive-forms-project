import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'reactive-forms-project';
  accountType =['Personal', 'Buisiness'];
  signupForm: FormGroup;

  ngOnInit(){
    this.signupForm = new FormGroup({
      'accountType': new FormControl('Personal'),
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'streetAddress': new FormControl(null),
      'city': new FormControl(null),
      'country': new FormControl(null, Validators.required),
      'zipCode': new FormControl(null, [Validators.pattern("[0-9]*"),Validators.maxLength(6)]),
      'favoriteTextile': new FormControl(null, Validators.required),
      'favoriteSauce': new FormControl(null, Validators.required),
      'favoriteWayToDie': new FormControl(null)
    })
  }

  onSubmit(){
    console.log(this.signupForm);
    console.log(this.signupForm.value);

  }
}
