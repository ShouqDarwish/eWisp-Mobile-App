import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Dice } from '../../providers/dice';
import { Http, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import * as mqtt from "mqtt";

/*
  Generated class for the Stats page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/



var test = "Loading";

@Component({
  selector: 'page-stats',
  templateUrl: 'stats.html'
})

export class StatsPage 
{

  html: any;
	game: any;
	d: Dice;
  static SeqScore:  Array<any>;
  static initialized: boolean;
  scorestr: any;
  seqstr: any;
  ready: boolean;

  constructor(public diceService: Dice, public nav: NavController, public navParams: NavParams) {
  this.nav=nav;
  this.d = diceService;
  this.ready = false;
  this.html = "Loading";
  }

  getSeqScoreString()
  {
    console.log(StatsPage.SeqScore);
    console.log(StatsPage.SeqScore.length);
    var i;
    var score=0;
    for(i=0; i<StatsPage.SeqScore.length; i++)
    {
      if(StatsPage.SeqScore[i] == 1)
      {
      score ++;
      }
    }
    console.log(score);
    this.scorestr = score +" out of "+StatsPage.SeqScore.length;
    console.log(this.scorestr);
  }

  static initArray()
  {
    StatsPage.SeqScore = [];
    console.log("initialized");
    StatsPage.initialized = true;
    return StatsPage.initialized;
  }



  calculateScore()
  {
    
    this.scorestr = this.diceService.getScoreFromDB();
    console.log("statspage after method call"+this.scorestr);
    this.seqstr = this.scorestr;
    //this.ready = true;
    this.html = "<p align=\"left\" class = \"statstext\">"+this.seqstr+"</p>";
    //test = this.seqstr;
    console.log("from stats"+ this.seqstr);

    console.log("statspage after method call after loop"+this.scorestr);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatsPage');
    this.getSeqScoreString();
    //this.calculateScore();

  }

}
