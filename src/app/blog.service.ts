import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, shareReplay} from 'rxjs';

export interface BlogPost {
  category: {
    blogPosts: string[];
    title: string;
    slug: string;
  };
  releaseAt: string;
  pageBlocks: {
    title: string;
    description: string;
    html: string;
    layout: string;
    sort: number;
    gallery: any;
    image: {
      img: string;
      webp: string;
    };
  }[];
  readingTime: string;
  title: string;
  slug: string;
  rating: number;
}

export interface ApiResponse {
  'hydra:member': BlogPost[];
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private apiUrl = 'http://185.162.94.187:8023/api/blog_posts/';
  posts$: Observable<ApiResponse>;

  constructor(private http: HttpClient) {
    this.posts$ = this.getPosts().pipe(shareReplay(1));
  }

  getPosts(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.apiUrl).pipe(
        shareReplay(1));
  }

  getPostBySlug(slug: string | null) {

  }
}
