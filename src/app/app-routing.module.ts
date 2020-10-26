import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AlbumsListComponent } from "./components/albums-list/albums-list.component";
import { ArtistsListComponent } from "./components/artists-list/artists-list.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: ArtistsListComponent,
  },
  {
    path: "albums",
    component: AlbumsListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
