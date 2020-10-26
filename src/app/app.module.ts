import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { ArtistsListComponent } from "./components/artists-list/artists-list.component";
import { AlbumsListComponent } from "./components/albums-list/albums-list.component";
import { ArtistsService } from "./services/artists.service";

@NgModule({
  declarations: [AppComponent, ArtistsListComponent, AlbumsListComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [ArtistsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
