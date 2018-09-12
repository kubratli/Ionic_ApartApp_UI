import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html',
})
export class ProfilPage {

  public ionicNamedColor: string = 'primary';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  } 
  public linkAccount(): void {
    if(this.ionicNamedColor === 'primary') { 
      this.ionicNamedColor = 'secondary';
      this.navCtrl.push('HesabimPage'); 
    } else {
      this.ionicNamedColor = 'mor'
    }
  }
 
  public settings(): void {
    if(this.ionicNamedColor === 'primary') { 
      this.ionicNamedColor = 'secondary';
      this.navCtrl.push('AyarlarPage'); 
    } else {
      this.ionicNamedColor = 'mor'
    }
  }
}
