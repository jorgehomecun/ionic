import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
  email :string;
  password :string;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, private angularFire : AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }
  createAccount(){
    this.angularFire.auth.createUserWithEmailAndPassword(this.email, this.password);
  }
}
