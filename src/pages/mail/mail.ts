import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from '../../../node_modules/@ionic-native/social-sharing'; 
declare var google: any;
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
} from '@ionic-native/google-maps'; 
/**
 * Generated class for the MailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mail',
  templateUrl: 'mail.html',
})
export class MailPage {
  @ViewChild('map') mapRef:ElementRef;
  public sendTo   : string	= 'apart@gmail.com'; 
  message:string=null; 
  subject:string=null;
  constructor(public navCtrl: NavController,public socialSharing: SocialSharing) {

  }
  

  share(){
    this.socialSharing.share(this.message, this.subject, this.sendTo)
    .then(()=>{

    }).catch(()=>{

    });
  }

  
  ionViewDidLoad(){
    this.DisplayMap();
  } 
  DisplayMap(){
    const location=new google.maps.LatLng(' 39.798747', '30.493857');

    const options={
      center:location,
      zoom:10,
      streetViewControl:false,
      mapTypeId:'roadmap'
    };

    const map=new google.maps.Map(this.mapRef.nativeElement, options);
    
    this.addMarker(location,map);

  }

  addMarker(position, map){
    return new google.maps.Marker({
      position,
      map
    })
  }
}
