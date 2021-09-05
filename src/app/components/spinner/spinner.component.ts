import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent implements OnInit {
  progress: number = 99;
  showSpinner: boolean;
  constructor() {
    this.showSpinner = false;
  }
  loadData() {
    this.showSpinner = true;

    setTimeout(() => {
      this.showSpinner = false;
    }, 3000);
  }

  ngOnInit(): void {}
}
