import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AnimationService, AnimationBuilder } from '../../../node_modules/css-animator';

/**
 * Generated class for the OdaozelliklerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-odaozellikler',
  templateUrl: 'odaozellikler.html',
})
export class OdaozelliklerPage {
  private animator: AnimationBuilder;
  @ViewChild('myElement') myElem;
  @ViewChild('wifi') wifi;
  @ViewChild('mesafe') mesafe;
  @ViewChild('isitma') isitma;

  
  constructor(public navCtrl: NavController, public navParams: NavParams, animationService: AnimationService) {
    this.animator = animationService.builder();
  }
  animateElem() {
    this.animator.setType('bounceIn').show(this.myElem.nativeElement);  
  }
  animateWifi(){
    this.animator.setType('bounceIn').show(this.wifi.nativeElement);
  }
  animateMesafe(){
    this.animator.setType('bounceIn').show(this.mesafe.nativeElement);
  }
  animateIsitma(){
    this.animator.setType('bounceIn').show(this.isitma.nativeElement);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad OdaozelliklerPage');
  }

}
