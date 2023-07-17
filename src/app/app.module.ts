import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule, RouterModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }