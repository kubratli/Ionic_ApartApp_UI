import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1Root='AnasayfaPage';  
  tab2Root='OdalarPage';
  tab3Root='HizmetlerPage';  
  tab4Root='HakkimizdaPage';  
  tab5Root='IletisimPage';  
  tab6Root='KayitformPage';  

  myIndex:number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.myIndex=navParams.data.tabIndex || 0 ;

  }


}
