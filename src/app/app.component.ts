import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  activeLanguage = 'en';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  translatePage(language: string) {
    this.activeLanguage = language;
    this.translate.setDefaultLang(language);
  }
}
