import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import * as _ from 'lodash';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  postsAPI = 'http://127.0.0.1:3000/posts';
  posts = [];

  constructor(private http: HttpClient) {
    this.getPosts()
      .subscribe((response: Array<any>) => {
        console.log('getPosts: response: ', response);
        this.posts = response;
      });
  }

  ngOnInit() {
  }

  getPosts() {
    return this.http.get(this.postsAPI);
  }

}
