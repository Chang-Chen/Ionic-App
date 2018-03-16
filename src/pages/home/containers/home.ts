import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController} from "ionic-angular";
import * as home from '../reducers/index';
import {Store} from "@ngrx/store";
import {ListStart} from "../actions/home.action";


@IonicPage()

@Component({
  selector: 'home-page',
  templateUrl: 'home.html'
})

export class HomePage implements OnInit{
  list: any[] = [];
  houses:any[] = [];
  constructor(private navCtrl: NavController, private store: Store<home.State>) {
    this.store.select(home.getHomeData).subscribe(data => {
      if(data != null){
        this.houses = data;
      }
    })
  }

  ngOnInit(){
    this.store.dispatch(new ListStart({}))

  }
  imageOnLoad(){

  }
  didSelectHouse(){
    this.navCtrl.push('OptionsPage');
  }
}
