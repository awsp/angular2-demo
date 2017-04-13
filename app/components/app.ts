import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<nav>
               <a routerLink="/html-layout"			routerLinkActive="active">HTML Layout</a>
               <a routerLink="/webix-layout"		routerLinkActive="active">Webix Layout</a>
               <a routerLink="/form-grid"			routerLinkActive="active">Form and Grid</a>
               <a routerLink="/template-routing"	routerLinkActive="active">Routing in Layout</a>
             </nav>
             <router-outlet></router-outlet>`
})
export class AppComponent { }
