import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OdalarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-odalar',
  templateUrl: 'odalar.html',
})
export class OdalarPage {
  public ionicNamedColor: string = 'primary';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  } 
  public odaDetay1(): void {
    if(this.ionicNamedColor === 'primary') { 
      this.ionicNamedColor = 'secondary';
      this.navCtrl.setRoot('OdadetayPage'); 
    } else {
      this.ionicNamedColor = 'primary'
    }
  }
}
