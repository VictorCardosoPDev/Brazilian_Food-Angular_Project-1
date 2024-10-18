import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
  import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';

  defineComponents(IgcRatingComponent);
  