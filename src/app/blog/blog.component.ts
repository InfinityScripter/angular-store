import {Component, OnInit} from '@angular/core';
import {BlogService} from "../blog.service";
import {BlogPost} from "../blog.service";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {
  posts: BlogPost[] = [];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.posts$.subscribe(data => {
      this.posts = data['hydra:member'];
      console.log(this.posts);
    });
  }


  navigateToPost(slug: string) {


  }
}
