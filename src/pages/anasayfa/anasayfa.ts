import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ImageViewerController } from 'ionic-img-viewer';
import { LocationapartPage } from '../locationapart/locationapart';
import { AnimationService, AnimationBuilder } from '../../../node_modules/css-animator';

/**
 * Generated class for the AnasayfaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-anasayfa',
  templateUrl: 'anasayfa.html',
})
export class AnasayfaPage {
  private animator: AnimationBuilder;
  @ViewChild('myElement') myElem;
  @ViewChild('ulasim') ulasim;
  _imageViewerCtrl: ImageViewerController;
  constructor(public navCtrl: NavController, public navParams: NavParams,imageViewerCtrl: ImageViewerController, animationService: AnimationService) {
    this._imageViewerCtrl = imageViewerCtrl;
    this.animator = animationService.builder(); 
  }
  animateHaber() {
    this.animator.setType('bounceIn').show(this.myElem.nativeElement);  
  }
  animateUlasim() {
    this.animator.setType('bounceIn').show(this.ulasim.nativeElement);  
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AnasayfaPage');
  }
  presentImage(myImage) {
    const imageViewer = this._imageViewerCtrl.create(myImage);
    imageViewer.present();
 
    setTimeout(() => imageViewer.dismiss(),2000);
     
  }
   Image(sao) {
    const imageViewer = this._imageViewerCtrl.create(sao);
    imageViewer.present();
 
    setTimeout(() => imageViewer.dismiss(),2000);
     
  }
  Image2(Amsterdam) {
    const imageViewer = this._imageViewerCtrl.create(Amsterdam);
    imageViewer.present();
 
    setTimeout(() => imageViewer.dismiss(),2000);
     
  } 
  Image3(Madison) {
    const imageViewer = this._imageViewerCtrl.create(Madison);
    imageViewer.present();
 
    setTimeout(() => imageViewer.dismiss(),2000);
     
  }
  addMarker(){ this.navCtrl.push(LocationapartPage);}
 
}
