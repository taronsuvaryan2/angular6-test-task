import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  public API_URL = 'http://127.0.0.1:8000';

  constructor(
     private httpClient: HttpClient,
  ) { }

  public getPosts(id) {
    return this.httpClient.get(this.API_URL + '/api/posts/' + id);
  }

  public getGroups() {
    return this.httpClient.get(this.API_URL + '/api/groups');
  }

  public createPost(form_data) {
    return this.httpClient.post(this.API_URL + '/api/post', form_data);
  }

}
