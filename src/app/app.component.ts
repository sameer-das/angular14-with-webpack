import { Component } from '@angular/core';
import { Router } from '@angular/router';
import LoggerService from './logger.service';
@Component({
    selector: 'app-component',
    styleUrls: ['app.component.scss'],
    templateUrl: 'app.component.html'
})
export class AppComponent { 
    constructor(private _router: Router, public _logger: LoggerService){

        console.log('This is constructor');
        console.log('Current Route ' + this._router.url)
        
    }
}