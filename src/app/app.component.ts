import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'showCSS';

  constructor(private router:Router){}

  openAnimation(){
    this.router.navigate(['animation'])
  }

  openButtons(){
    this.router.navigate(['buttons'])
  }

  openHover(){
    this.router.navigate(['hover'])
  }

  openMenu(){
    this.router.navigate(['menu'])
  }

  openOthers(){
    this.router.navigate(['others'])
  }

  openProgressbar(){
    this.router.navigate(['progressbar'])
  }

  openTransition(){
    this.router.navigate(['transition'])
  }
  
}
