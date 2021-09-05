import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.scss'],
})
export class GridListComponent implements OnInit {
  grid: number = 2;
  constructor() {}

  ngOnInit(): void {}
}
