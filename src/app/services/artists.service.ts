import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Artist } from "../models/Artist";

@Injectable({
  providedIn: "root",
})
export class ArtistsService {
  constructor(private readonly http: HttpClient) {}

  getArtists() {
    return this.http.get<Artist[]>("/api/artistalbums");
  }
}
