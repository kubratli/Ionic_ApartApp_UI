import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the KayitformPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-kayitform',
  templateUrl: 'kayitform.html',
})
export class KayitformPage {
  
  constructor(public toastCtrl: ToastController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KayitformPage');
  }

  showToast(position: string) {
    let toast = this.toastCtrl.create({
      message: 'Gönderilmiştir, Teşekkürler!',
      duration: 2000,
      position: position
    });

    toast.present(toast);
  }
  Giris(){
    this.navCtrl.push('GirisPage'); 
  }
  /*@ViewChild(Slides) slides: Slides;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  slides = [
    {
      title: "Welcome to the Docs!",
      description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
      image: "assets/img/ica-slidebox-img-1.png",
    },
    {
      title: "What is Ionic?",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "assets/img/ica-slidebox-img-2.png",
    },
    {
      title: "What is Ionic Cloud?",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "assets/img/ica-slidebox-img-3.png",
    }
  ];
  ionViewDidLoad() {
    console.log('ionViewDidLoad KayitformPage');
  }

 
  slide() {
    this.slides.slideTo(2, 500);
  }
 */
}
