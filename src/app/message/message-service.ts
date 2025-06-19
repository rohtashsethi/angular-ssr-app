import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

export interface Messages {
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private readonly http = inject(HttpClient);

  getMessage() {
    return this.http.get<Messages>('api/hello');
  }
}
