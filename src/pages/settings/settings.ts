import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home.ts'
import { Dice } from '../../providers/dice';


/*
  Generated class for the Settings page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

wispid: any;
wispname: any;

  constructor(public nav: NavController, public navParams: NavParams, public diceService: Dice) {
  this.nav = nav;
  }


  SaveUser(id,name)
  {
  console.log("Settings page got these: "+ id+" "+name);
  //save to db
  this.diceService.addUser(id, name);
  this.nav.push(HomePage);
  };


  getUsers()
  {

  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

}
