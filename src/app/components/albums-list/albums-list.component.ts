import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { Artist } from "src/app/models/Artist";

@Component({
  selector: "app-albums-list",
  template: `
    <div class="row">
      <div class="col-md-4">
        <div class="card d-inline-block m-1" style="width: 15rem;">
          <img src="assets/images/album.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{{ artist.name }}</h5>
          </div>
        </div>
      </div>
      <div class="col-md-8">
        <table class="table table-sm">
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Year Released</th>
          </tr>
          <tr *ngFor="let album of artist.albums">
            <td>{{ album.title }}</td>
            <td>{{ album.genre }}</td>
            <td>{{ album.year }}</td>
          </tr>
        </table>
        <a routerLink="/" class="btn btn-primary">Back</a>
      </div>
    </div>
  `,
  styles: [],
})
export class AlbumsListComponent implements OnInit {
  artist: Artist = null;

  constructor(private readonly location: Location) {}

  ngOnInit(): void {
    this.artist = this.location.getState() as Artist;
    console.log(this.artist);
  }
}
