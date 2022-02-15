import { Component, OnInit } from '@angular/core';
import { QuoteGenerator } from '../quotes';

@Component({
  selector: 'app-quote-page1',
  templateUrl: './quote-page1.component.html',
  styleUrls: ['./quote-page1.component.css'],
})
export class QuotePage1Component extends QuoteGenerator implements OnInit {
  quoteText: string = super.nextQuote();

  ngOnInit() {}
}
