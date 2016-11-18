import { Component } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

@Component({
  selector: 'pageNotFound',
  templateUrl: '../template/pageNotFound.html'

})
export class PageNotFoundComponent{

  constructor(
              private location: Location
  ) { }

  goBack() {
    this.location.back();
  }

}
