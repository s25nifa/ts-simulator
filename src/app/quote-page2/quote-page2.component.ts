import { Component, OnInit } from '@angular/core';
import { QuoteGenerator } from '../quotes';

@Component({
  selector: 'app-quote-page2',
  templateUrl: './quote-page2.component.html',
  styleUrls: ['./quote-page2.component.css'],
})
export class QuotePage2Component extends QuoteGenerator implements OnInit {
  quoteText: string = super.nextQuote();

  ngOnInit() {}
}
