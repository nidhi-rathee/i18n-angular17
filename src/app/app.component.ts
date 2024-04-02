import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { locales } from './locale';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  locales = locales;
  selectedLocale = 'en';
  title = 'i18n';

  onChangeLocale(event: any) {
    this.selectedLocale = event.target.value;
  }
}
