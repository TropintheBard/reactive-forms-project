import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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
      'name': new FormControl(),
      'email': new FormControl(),
      'streetAddress': new FormControl(),
      'city': new FormControl(),
      'country': new FormControl(),
      'zipCode': new FormControl(),
      'favoriteTextile': new FormControl(),
      'favoriteSauce': new FormControl(),
    })
  }

  onSubmit(){
    console.log(this.signupForm);
    
  }
}
