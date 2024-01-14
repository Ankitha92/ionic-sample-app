import { Component, OnInit } from '@angular/core';
import { SearchPage } from './search/search.page';
import { ModalController } from '@ionic/angular';
import { FilterPage } from './filter/filter.page';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.page.html',
  styleUrls: ['./customer.page.scss'],
})
export class CustomerPage implements OnInit {

  showSearchbar:boolean=false;
  constructor(private ModalController : ModalController) { }

  ngOnInit() {
  }

  search() {
    this.showSearchbar = !this.showSearchbar
  }

  async searchByPeople() {
    const modal = await this.ModalController.create({
      component: SearchPage,
      backdropDismiss: false,
      cssClass: 'searchModal ',
      
    });
    modal.present();
  }

  async filterModal() {
    const modal = await this.ModalController.create({
      component: FilterPage,
      backdropDismiss: false,
      cssClass: 'filterModal ',
      
    });
    modal.present();
  }

}
