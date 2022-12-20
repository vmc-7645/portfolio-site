import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Vincent Casey';
  public showOverlay: boolean = false;

  public ngOnInit() {
    // window.addEventListener("click", () => {
    //   console.log("Global click handler");
    // }, true);
  }

  constructor( private router: Router){}


  triggerFlash(goto: String){
    this.showOverlay = !this.showOverlay;
    setTimeout(() => {
      this.router.navigate([goto]);
    }, 500);
    setTimeout(() => {
      this.showOverlay = !this.showOverlay;
    }, 1000);
    // Navigate
  }

  flashOff(){
    return true
  }

}
