import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import * as mqtt from "mqtt";
import * as fs from "fs";
import * as mongoose from "mongoose";


@Injectable()
export class Question {

 q: any;
 
  constructor(public http: Http) {
   
    this.q = null;
  }




getQ2()
{
 
    if (this.q) {
      return Promise.resolve(this.q);
    }
 
    return new Promise(resolve => {
 
      this.http.get('http://localhost:3000/questions')
        .map(res => res.json())
        .subscribe(q => {
          this.q = q;
          resolve(this.q);
        });
    });
 
  
}

getQ1(){
 
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
