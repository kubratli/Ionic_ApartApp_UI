import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GirisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-giris',
  templateUrl: 'giris.html',
})
export class GirisPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  Giris(){
    this.navCtrl.push('ProfilPage'); 
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad GirisPage');
  }

}
