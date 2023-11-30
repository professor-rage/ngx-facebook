import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { FacebookModule } from './facebook.module';
import { environment } from './environments/environment.prod';

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic()
    .bootstrapModule(FacebookModule)
    .catch(err => console.log(err));