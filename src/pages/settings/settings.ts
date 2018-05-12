import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Toggle } from 'ionic-angular';
import { SettingsService } from '../../services/settings';



@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(private settingsService: SettingsService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  onToggle(toggleEvent: Toggle){
    this.settingsService.setBackGroud(toggleEvent.checked);
  }

  checkAltBackground(){
    return this.settingsService.isAltBackground();
  }

}
