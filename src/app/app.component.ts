import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { locales } from './locale';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  locales = locales;
  selectedLocale = 'en';
  title = 'i18n';

  constructor(private translateService: TranslateService) {}

  onChangeLocale(event: any) {
    console.log('event', event.target.value)
    this.selectedLocale = event.target.value;
    this.translateService.setDefaultLang(event.target.value)
    this.translateService.use(event.target.value)
  }
}
