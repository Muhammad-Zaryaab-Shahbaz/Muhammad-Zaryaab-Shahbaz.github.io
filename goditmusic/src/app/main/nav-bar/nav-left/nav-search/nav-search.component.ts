import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-search',
  templateUrl: './nav-search.component.html',
  styleUrls: ['./nav-search.component.scss']
})

export class NavSearchComponent {

  searchInterval: any;
  searchWidth: number;
  searchWidthString: string;
  searchTerm;

  constructor() {
    this.searchWidth = 0;
  }

  search(): void {
    // todo: ad search code.
  }

  searchOn(): void {
    document.querySelector('#main-search').classList
      .add('open');
    this.searchInterval = setInterval(() => {
      if (this.searchWidth >= 170) {
        clearInterval(this.searchInterval);

        return false;
      }
      this.searchWidth = this.searchWidth + 30;
      this.searchWidthString = `${this.searchWidth}px`;
    }, 35);
  }

  searchOff(): void {
    this.searchInterval = setInterval(() => {
      if (this.searchWidth <= 0) {
        document.querySelector('#main-search').classList
          .remove('open');
        clearInterval(this.searchInterval);

        return false;
      }
      this.searchWidth = this.searchWidth - 30;
      this.searchWidthString = `${this.searchWidth}px`;
      this.searchTerm = '';
      this.search();
    }, 35);
  }

}
