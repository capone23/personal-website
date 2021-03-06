import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RoutesModule } from './routes.module';
import { AppComponent } from './components/app.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { GameComponent } from './components/partials/game/game.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { WorksComponent } from './components/pages/works/works.component';

import { NgCircleProgressModule } from 'ng-circle-progress';
import {BioComponent} from './components/pages/bio/bio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/partials/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    GameComponent,
    HeaderComponent,
    FooterComponent,
    WorksComponent,
    BioComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    RoutesModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
