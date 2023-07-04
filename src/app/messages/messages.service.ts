import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  message: Subject<string> = new Subject<string>;

  getMessage = async () => {
    return this.message.asObservable();
  }

  setMessage = async (message: string) => {
    this.message.next(message);
  }

  constructor() { }
}
