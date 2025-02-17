import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true
})
  .catch(err => console.error(err));
