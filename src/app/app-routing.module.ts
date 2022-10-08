import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AnimationComponent } from './botones/animation/animation.component';
import { ButtonsComponent } from './botones/buttons/buttons.component';
import { HoverComponent } from './botones/hover/hover.component';
import { MenuComponent } from './botones/menu/menu.component';
import { OthersComponent } from './botones/others/others.component';
import { ProgressbarComponent } from './botones/progressbar/progressbar.component';
import { TransitionComponent } from './botones/transition/transition.component';

// Agrego las rutas
const routes: Routes = [
  {path:'animation', component:AnimationComponent},
  {path:'buttons', component:ButtonsComponent},
  {path:'hover', component:HoverComponent},
  {path:'menu', component:MenuComponent},
  {path:'others', component:OthersComponent},
  {path:'progressbar', component:ProgressbarComponent},
  {path:'transition', component:TransitionComponent},
  {path:'index', component:AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
