import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Game1Page} from '../game1/game1.ts';
import {Game2Page} from '../game2/game2.ts';

/*
  Generated class for the Allgames page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-allgames',
  templateUrl: 'allgames.html'
})
export class AllgamesPage {

  constructor(public nav: NavController, public navParams: NavParams) {
  this.nav=nav;
  }


   GoToGame1() {
        console.log('switching to game 1 page');
        this.nav.push(Game1Page)
  };
 
   GoToGame2() {
        console.log('switching to game 2 page');
        this.nav.push(Game2Page)
  };
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad AllgamesPage');
  }

}
