import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Dice } from '../../providers/dice';
import {Game1Page} from '../game1/game1.ts';
import {StatsPage} from '../stats/stats.ts';

/*
  Generated class for the GetScore page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-get-score',
  templateUrl: 'get-score.html'
})

export class GetScorePage {
score: string;
  constructor(public nav: NavController, private navParams: NavParams, public diceService: Dice) {
     this.nav=nav;
     this.score = navParams.get('param1');
  }


Replay()
{

  this.nav.push(Game1Page);
  this.saveScore();
}

saveScore()
{
  //save to DB
  

  if(this.score == "Correct")
  {
  this.diceService.saveSingleScore("1");
    StatsPage.SeqScore.push(1);
  }
  else
  {
  this.diceService.saveSingleScore("0");
    StatsPage.SeqScore.push(0);
  }
  console.log(StatsPage.SeqScore);
}
setScore(x)
{
	this.score=x;
	console.log("from score page"+ this.score);
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad GetScorePage');
     console.log('score' + this.score);
  }

  goHome()
  {
  this.nav.popToRoot();
  this.saveScore();
 // this.diceService.saveToDB(StatsPage.SeqScore);
  }

}

