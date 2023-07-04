import { Component } from '@angular/core';
import { MessagesService } from 'src/app/services/messages/messages.service';
import { Observable, delay, of } from 'rxjs';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {

  showMessage: boolean = false;
  message: string = '';

  setShowMessage = async () => {
    this.showMessage = true; 
    this.delay(5000).subscribe(() => {
      this.showMessage = false;
    })
  }

  private delay(ms: number): Observable<number> {
    return of(0).pipe(delay(ms));
  }

  constructor (
    private messagesService: MessagesService
  ){
    this.messagesService.message.subscribe(value => {
      this.message = value;
      this.setShowMessage();
    })
  }
}
