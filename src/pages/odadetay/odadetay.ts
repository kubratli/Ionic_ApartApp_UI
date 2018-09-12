import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams  } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import {ActionSheet, ActionSheetOptions} from "@ionic-native/action-sheet";
import { ActionSheetController } from 'ionic-angular'; 
import { ToastController } from 'ionic-angular';
 
/**
 * Generated class for the OdadetayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let buttonLabelsToShow = ['Share via Facebook', 'Share via Twitter'];
@IonicPage()
@Component({
  selector: 'page-odadetay',
  templateUrl: 'odadetay.html',
})
export class OdadetayPage {
  @ViewChild(Slides) slides: Slides;
  goToSlide() {
    this.slides.slideTo(2, 500);
  }
  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
  }
  showWater(){
    let toast = this.toastCtrl.create({ 
      message: 'Her Apartta banyo ve tuvalet mevcuttur.',
      duration: 2000,
    });
    toast.present();
  }
  showWifi(){
    let toast = this.toastCtrl.create({ 
      message: 'Yüksek hızda wireless internet',
      duration: 2000,
    });
    toast.present();
  }
  showBus(){
    let toast = this.toastCtrl.create({ 
      message: 'Şehir Merkezine 5 Dk Fakülteye 2 Dk Mesafede',
      duration: 2000,
    });
    toast.present();
  }
  constructor(public toastCtrl: ToastController,public navCtrl: NavController, public navParams: NavParams,public actionSheet: ActionSheet,public actionSheetCtrl: ActionSheetController) {
  }
  presentActionSheet() { 
    let toast = this.toastCtrl.create({ 
      message: 'Özellikleri', 
      duration: 2000,
    });
    toast.onDidDismiss(() => {
      this.navCtrl.setRoot('OdaozelliklerPage'); 
  });
    toast.present();
    /*let actionSheet = this.actionSheetCtrl.create({ 
      cssClass: 'myPage',
      buttons: [
        {
          
          text: 'Özellikleri',
          role: 'destructive', 
          handler: () => {
            this.navCtrl.setRoot('OdaozelliklerPage'); 
          }
        },
        {
          text: 'Açıklama',
          handler: () => {
            console.log('Archive clicked');
          }
        } 
      ]
    });
  
    actionSheet.present();*/
      
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad OdadetayPage');
  }

}
