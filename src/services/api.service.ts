import { Injectable } from '@angular/core';

declare global {
  interface Window {
    Telegram: any;
  }
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  telegramData() {
    return window?.Telegram.WebApp?.initDataUnsafe;
  }
  constructor() { }
}
