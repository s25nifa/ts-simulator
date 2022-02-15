import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DimiBarComponent } from './dimi-bar/dimi-bar.component';
import { QuotePage1Component } from './quote-page1/quote-page1.component';
import { QuotePage2Component } from './quote-page2/quote-page2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: '/quotePage1' },
      {
        path: 'quotePage1',
        component: QuotePage1Component,
        data: { animation: 'QuotePage1' },
      },
      {
        path: 'quotePage2',
        component: QuotePage2Component,
        data: { animation: 'QuotePage2' },
      },
    ]),
  ],
  declarations: [AppComponent, DimiBarComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
