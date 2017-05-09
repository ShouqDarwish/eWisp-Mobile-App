import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { GetScorePage } from '../pages/get-score/get-score';
import { Game1Page } from '../pages/game1/game1';
import { Game2Page } from '../pages/game2/game2';
import { AllgamesPage } from '../pages/allgames/allgames';
import {SettingsPage} from '../pages/settings/settings';
import {RolldicePage} from '../pages/rolldice/rolldice';
import { Dice } from '../providers/dice';
import { Question } from '../providers/question';
import {StatsPage} from '../pages/stats/stats';
 

@NgModule({
  declarations: [
    MyApp,
    HomePage,
	GetScorePage,
  Game1Page, Game2Page,
  AllgamesPage, SettingsPage, RolldicePage, StatsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
	GetScorePage,Game1Page,Game2Page, AllgamesPage, SettingsPage, RolldicePage, StatsPage
  ],
  providers: [Dice, Question]
})
export class AppModule {}
