import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import * as mqtt from "mqtt";
import * as fs from "fs";
import * as mongoose from "mongoose";
import {StatsPage} from '../../pages/stats';

/*
  Generated class for the Dice provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Dice {

 data: any;
 q: any;
 u: any;
public headers: Headers;

  constructor(public http: Http) {
    this.data = null;
    this.q = null;
    this.http=http;
  }


  startGame1()
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
client.on('connect', function(){
    console.log('Connected to MQTT');
});

client.publish('commandsSLD', '1startSequenceOnePlayer');
}

 addUser (id: string, name: string)
 {
  console.log('adduser called');

 let data = new URLSearchParams();
  data.append('wispid', id);
  data.append('wispname', name);

  this.http
    .post('http://nodeexpressserversl.azurewebsites.net/adduser', data)
      .subscribe(data => {
            alert('ok');
      }, error => {
          console.log(error.json());
      });
}
                    

  getReviewsOriginal(){
 
    if (this.data) {
      return Promise.resolve(this.data);
    }
 
    return new Promise(resolve => {
 
      this.http.get('http://localhost:8080/api/dice')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
 
  }

  saveToDB(scorearr)
  {
    console.log('addscore called');

    var i;
    for(i=0; i<scorearr.length; i++)
    {
      let data = new URLSearchParams();
  data.append('wispid', "1");
  data.append('gamemode', "seq");
  data.append('score', scorearr[i]);

  this.http
    .post('http://nodeexpressserversl.azurewebsites.net/addscore', data)
      .subscribe(data => {
            alert('ok');
      }, error => {
          console.log(error.json());
      });
    }
  
  }

   saveSingleScore(score)
  {
    console.log('singlescore called');

      let data = new URLSearchParams();
  data.append('wispid', "1");
  data.append('gamemode', "seq");
  data.append('score', score);

  this.http
    .post('http://nodeexpressserversl.azurewebsites.net/addscore', data)
      .subscribe(data => {
            alert('ok');
      }, error => {
          console.log(error.json());
      });
    
  
  }

  getScoreFromDB()
  {
      this.http.get('http://nodeexpressserversl.azurewebsites.net/scores')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
       //   console.log("data"+this.data[0].score);
    
    var i;
    var score=0;
    for(i=0; i<this.data.length; i++)
    {
      if(this.data[i].score == "1")
      {
      score ++;
      }
    }
    console.log("from dice"+score);
    var scorestr = score + " out of "+this.data.length;
    console.log("dice scoresctr"+scorestr);
    //StatsPage.scorestr = scorestr;
    return scorestr;
        });
       
  }


  getDice(){
 
    if (this.data) {
      return Promise.resolve(this.data);
    }
 
    return new Promise(resolve => {
 
      this.http.get('http://localhost:8080/api/dice')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
 
  }

  tryDice()
  {
   if (this.data) {
      return Promise.resolve(this.data);
    }
 
    return new Promise(resolve => {

 //MQTT Connection

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
client.on('connect', function(){
    console.log('Connected to MQTT');
});
this.data = "Hello";
resolve(this.data);

client.publish('testtopic/smartlearningdice', '0');
client.subscribe('testtopic/smartlearningdice');

var lastmsg;
client.on('message', function(topic, message) {
  lastmsg = message.toString();
console.log(lastmsg);
 });




});


        
}



getQ(){
 
    if (this.q) {
      return Promise.resolve(this.q);
    }
 
    return new Promise(resolve => {
 
mongoose.connect("mongodb://shouqdarwish:Mais1996@ds015899.mlab.com:15899/smartlearningdice");


var db = mongoose.connection;
 
 db.on("error", console.error.bind(console, "connection error"));
 db.once("open", function(callback) {
     console.log("Connected to MongoDB");
 });
 


var questionSchema = mongoose.Schema({
  q: String
});

var Question = mongoose.model('Question', questionSchema);

Question.find(function (err, d) {
  if (err) return console.error(err);
  console.log(d);
})
    });
 
  }

  
 
  }
