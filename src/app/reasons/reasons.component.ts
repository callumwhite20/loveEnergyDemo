import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reasons',
  templateUrl: './reasons.component.html',
  styleUrls: ['./reasons.component.scss']
})
export class ReasonsComponent implements OnInit {
  public index:number = 1;

  constructor() { }

  public prev() {
    this.index = this.index - 1;

    if (this.index < 1) {
      this.index = 4;
    }
  }

  public next() {
    this.index = this.index + 1;

    if (this.index > 4) {
      this.index = 1;
    }
  }

  ngOnInit(): void {
  }

}
