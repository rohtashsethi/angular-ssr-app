import { Component, inject } from '@angular/core';
import { MessageService } from './message-service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-message',
  imports: [AsyncPipe],
  templateUrl: './message.html',
  styleUrl: './message.css'
})
export class Message {
  private readonly messageService = inject(MessageService);
  readonly message$ = this.messageService.getMessage();
}
