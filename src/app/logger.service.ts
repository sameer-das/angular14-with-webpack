import {Injectable} from '@angular/core'
@Injectable({
    providedIn:'root'
})
export default class LoggerService {
    constructor(){
      console.log('hi from Service')  
    }
} 