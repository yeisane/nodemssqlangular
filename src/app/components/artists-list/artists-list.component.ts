import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { Artist } from "src/app/models/Artist";
import { ArtistsService } from "src/app/services/artists.service";

@Component({
  selector: "app-artists-list",
  template: `
    <table class="table table-sm">
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Gender</th>
        <th></th>
      </tr>
      <tbody>
        <tr *ngFor="let artist of artists$ | async; index as i">
          <td>{{ i + 1 }}</td>
          <td>{{ artist.name }}</td>
          <td>{{ artist.gender }}</td>
          <td>
            <button
              (click)="viewAlbums(artist)"
              type="button"
              class="btn btn-light btn-sm"
            >
              View albums
              <span class="badge badge-primary">{{
                artist.albums.length
              }}</span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  `,
  styles: [],
})
export class ArtistsListComponent implements OnInit {
  artists$: Observable<Artist[]>;

  constructor(
    private readonly artistSvc: ArtistsService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.artists$ = this.artistSvc.getArtists();
  }

  viewAlbums(artist: Artist) {
    this.router.navigateByUrl("/albums", {
      state: artist,
    });
  }
}
