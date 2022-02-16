import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dimi-bar',
  templateUrl: './dimi-bar.component.html',
  styleUrls: ['./dimi-bar.component.css'],
})
export class DimiBarComponent implements OnInit {
  quoteCount = 1;

  constructor(private router: Router) {}

  ngOnInit() {}

  showQuote() {
    let url = '/quotePage' + ((this.quoteCount % 2) + 1);
    console.log('loading page ' + url);
    this.router.navigateByUrl(url);
    this.quoteCount += 1;
  }
}
