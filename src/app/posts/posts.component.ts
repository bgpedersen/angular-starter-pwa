import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, OnDestroy {

  postsAPI = '/api/posts';
  posts = [];

  subs = {
    'posts': null
  };

  constructor(private http: HttpClient) {
    this.subs.posts = this.getPosts()
      .subscribe((response: Array<any>) => {
        console.log('getPosts: response: ', response);
        this.posts = response;
      });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    for (const key in this.subs) {
      if (this.subs.hasOwnProperty(key)) {
        this.subs[key].unsubscribe();
      }
    }
  }

  getPosts() {
    return this.http.get(this.postsAPI);
  }

}
