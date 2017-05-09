import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import {GetScorePage} from '../get-score/get-score.ts';
import { Dice } from '../../providers/dice';
import * as mqtt from "mqtt";

/*
  Generated class for the Rolldice page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-rolldice',
  templateUrl: 'rolldice.html'
})
export class RolldicePage {

d: Dice;
  constructor(public nav: NavController, public diceService: Dice) {
  this.nav=nav;
  this.d = diceService;
  }


GoToScorePage(score)
 {

  console.log('switching to score page');
  console.log("GoToScorePage"+score);
  if (score === 'Correct!')
    this.nav.push(GetScorePage, {
      param1: 'Correct'}
    );
  else
    this.nav.push(GetScorePage, {
      param1: 'Wrong'}
    );


 }
 
 getGame1Score(first)
{
  var KEY = '/mqtt';
var CERT = '/tls-cert.pem';
var TRUSTED_CA_LIST = ['/crt.ca.cg.pem'];
 
var PORT = 8000;
var HOST = 'broker.hivemq.com';
 
 
var options = {
  port: PORT,
  host: HOST,
  path: KEY,
  certPath: CERT,
  rejectUnauthorized : true, 
  //The CA list will be used to determine if server is authorized
  ca: TRUSTED_CA_LIST
};

var client = mqtt.connect(options);
client.subscribe('feedbackSLD');

console.log("Subscribed to mqtt");

var self = this;
var lastmsg;

client.on('message', function(topic, message){
  lastmsg = message.toString();
  console.log("Still Reading");
  console.log("first" + first);
  if (lastmsg === 'Correct!' || lastmsg === 'Wrong!'){
    if (first === 0)
      self.GoToScorePage(lastmsg);
    first += 1;

    }
});
}


  ionViewDidLoad() {
    console.log('ionViewDidLoad RolldicePage');
    var first = 0;
    this.getGame1Score(first);
  }

}
