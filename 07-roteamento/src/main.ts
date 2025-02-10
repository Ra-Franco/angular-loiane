import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'materialize-css';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule, {
    ngZoneEventCoalescing: true
})
    .catch(err => console.error(err));
