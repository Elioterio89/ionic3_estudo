import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoovieProvider {

  private pathAPI = "https://api.themoviedb.org/3";
  constructor(public http: Http) {
    console.log('Hello MoovieProvider Provider');
  }
  getLastMovies() {
    return this.http.get(this.pathAPI + "/movie/popular?api_key=4e22b936ba94486717be6635bb0ebbea");
  }

  getLastDatails(filmeId) {
    return this.http.get(this.pathAPI + `/movie/${filmeId}?api_key=4e22b936ba94486717be6635bb0ebbea`);
  }

}
