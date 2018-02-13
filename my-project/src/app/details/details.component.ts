import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  showDetails = false;
  detailLog = []
  constructor() { }

  ngOnInit() {
  }

  onToggleDetails() {
    this.showDetails = !this.showDetails;
    this.detailLog.push(this.detailLog.length + 1);
  }

}
