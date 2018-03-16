import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage} from "./home";
import { StoreModule} from "@ngrx/store";
import * as reducers from '../reducers/index'
import { EffectsModule} from "@ngrx/effects"
import { HomeEffect} from "../effects/home.effect";
import {ShareModule} from "../../../core/share.module";
import {HomeService} from "../services/home.service";



@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    StoreModule.forFeature('home', reducers.reducers),
    EffectsModule.forFeature([HomeEffect]),
    ShareModule
  ],
  providers: [
    HomeService
  ],
  exports:[
    HomePage
  ]
})
export class HomeModule{}
