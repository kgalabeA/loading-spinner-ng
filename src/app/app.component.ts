import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'loading-spinner-ng';
  isLoading!: boolean;

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit() {
    // this.spinner.show();
    // setTimeout(() => {
    //   this.spinner.hide();
    // }, 2000);
  }

  showSpinner() {
    this.spinner.show();
    //this.isLoading=true;
    setTimeout(() => {
      this.spinner.hide();
     //this.isLoading=false;
    }, 3000);
  }

  showSpinner1() {
    //this.spinner.show();
    this.isLoading=true;
    setTimeout(() => {
     // this.spinner.hide();
     this.isLoading=false;
    }, 3000);
  }
}
