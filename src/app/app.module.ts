import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonsComponent } from './botones/buttons/buttons.component';
import { HoverComponent } from './botones/hover/hover.component';
import { MenuComponent } from './botones/menu/menu.component';
import { ProgressbarComponent } from './botones/progressbar/progressbar.component';
import { TransitionComponent } from './botones/transition/transition.component';
import { AnimationComponent } from './botones/animation/animation.component';
import { OthersComponent } from './botones/others/others.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    HoverComponent,
    MenuComponent,
    ProgressbarComponent,
    TransitionComponent,
    AnimationComponent,
    OthersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
