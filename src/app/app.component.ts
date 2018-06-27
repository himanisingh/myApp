import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my App';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  translatePage(language: string) {
    this.translate.setDefaultLang(language);
  }

}
