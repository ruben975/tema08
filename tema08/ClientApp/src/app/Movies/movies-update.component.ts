import { Component, Inject, OnInit } from '@angular/core';
import { Movie } from './movies.models';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies-update',
  templateUrl: './movies-update.component.html'
})
export class MoviesUpdateComponent implements OnInit {

  public movie: Movie;
  public param;

  ngOnInit() {
    this.routers.queryParams.subscribe(param => {
      this.param = param;
      this.loadMovies();
    });
  }
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private routers: ActivatedRoute, private router: Router) { }

  loadMovies() {
    this.http.get<Movie>(this.baseUrl + 'api/movies/' + this.param.id).subscribe(result => {
      this.movie = result;
    }, error => console.error(error));
  }
  public saveMovie() {
    this.http.put(this.baseUrl + 'api/movies/' + this.movie.id, this.movie).subscribe(result => {
      this.router.navigateByUrl("/movies");
    }, error => console.error(error));
  }
  public backToList() {
    this.router.navigateByUrl("/movies");
  }
}
