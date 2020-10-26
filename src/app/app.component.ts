import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <nav class="navbar shadow-sm navbar-light bg-light">
      <span class="navbar-brand mb-0 h1">My Music Catalog</span>
    </nav>
    <div class="container pt-3">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [],
})
export class AppComponent {
  title = "artist";

  constructor() {}
}
