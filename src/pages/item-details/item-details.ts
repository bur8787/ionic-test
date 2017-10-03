import {Component} from '@angular/core';

import {NavController, NavParams} from 'ionic-angular';
//import {Camera, CameraOptions} from '@ionic-native/camera';

@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  selectedItem: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams
              // private camera: Camera
  ) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
  }


}
