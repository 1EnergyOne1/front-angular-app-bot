import { Component, inject } from '@angular/core';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front-angular-app-bot';
  apiService = inject(ApiService);
  telegramData = this.apiService.telegramData();
}
