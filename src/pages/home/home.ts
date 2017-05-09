import { Component } from "@angular/core";
import { NavController, ModalController } from 'ionic-angular';
import { GetScore } from '../add-review-page/get-score';
import { Dice } from '../../providers/dice';
import { Question } from '../../providers/question';
import {GetScorePage} from '../get-score/get-score.ts';
import {Game1Page} from '../game1/game1.ts';
import {Game2Page} from '../game2/game2.ts';
import {SettingsPage} from '../settings/settings.ts';
import {AllgamesPage} from '../allgames/allgames.ts';
import {StatsPage} from '../stats/stats.ts';


@Component({
  selector: 'home-page',
  templateUrl: 'home.html'
})
export class HomePage {
 
  dice: any;
 
  question: any;

  constructor(public nav: NavController, public diceService: Dice, public quesService: Question, public modalCtrl: ModalController) {
 this.nav = nav;

  }

  GoToGames()
  {
  console.log('switching to games page');
        this.nav.push(Game1Page)
  }

  GoToScore() 
  {
        console.log('switching to get-score page');
        this.nav.push(GetScorePage);
  }


  calculateScore()
  {
    
    StatsPage.scorestr = this.diceService.getScoreFromDB();
  //  this.seqstr = StatsPage.scorestr;
  //  this.ready = true;
  //  this.html = "<p align=\"left\" class = \"statstext\">"+this.seqstr+"</p>";
  //  test = this.seqstr;
    if(StatsPage.scorestr != null)
      console.log(" from home seqstr"+ StatsPage.scorestr);
  
  }

GoToStats() 
  {
        console.log('switching to stats page');
       // this.calculateScore();
        this.nav.push(StatsPage);
  }


 GoToSettings() 
  {
        console.log('switching to settings page');
        this.nav.push(SettingsPage)
  }


 wispAction()
 {
  console.log('wisp image clicked');
        this.nav.push(Game1Page)
 }
 


  ionViewDidLoad()
  {
//   this.quesService.getQ2().then((q) => {
//      console.log(q);
//     this.question = q;
 //  }); 
 
// this.diceService.getQ().then((data) => {
 //     console.log(data);
  //    this.question = data;
  //  }); 

//    this.diceService.getDice().then((data) => {
//      console.log(data);
//      this.dice = data;
//    });

//    this.diceService.tryDice().then((data) => {
//      console.log(data);
//      this.dice = data;
//    });

  if(!StatsPage.initialized)
  {
    StatsPage.initArray();
  }

  }
}