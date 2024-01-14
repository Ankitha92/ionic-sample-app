import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  showSearchbar:boolean=false;
  search:string='';
  constructor() { }

  ngOnInit() {
  }

  SearchClose(){
    this.showSearchbar = !this.showSearchbar;
  }
  searchButtonClick() {

  }
  toggleSearchbar() {
    this.showSearchbar = !this.showSearchbar;
    this.search = '';
  }
}
