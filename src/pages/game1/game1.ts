import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {GetScorePage} from '../get-score/get-score.ts';
import {RolldicePage} from '../rolldice/rolldice.ts'
import { Dice } from '../../providers/dice';

/*
  Generated class for the Game1 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/


@Component({
  selector: 'page-game1',
  templateUrl: 'game1.html'
})
export class Game1Page {

	d: Dice;

  constructor(public nav: NavController, public navParams: NavParams, public diceService: Dice) 
  {
  this.nav=nav;
  this.d = diceService;

  }

  GoToRollDice() 
  {
        console.log('switching to roll dice page');
        this.d.startGame1();
         this.nav.push(RolldicePage);
        
 	}

 

  ionViewDidLoad() {
    console.log('ionViewDidLoad Game1Page');
  }

}
