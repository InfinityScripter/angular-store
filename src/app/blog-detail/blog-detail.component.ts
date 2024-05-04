import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
    selector: 'app-blog-detail',
    templateUrl: './blog-detail.component.html',
})
export class BlogDetailComponent  {
    post: any;

    constructor(private route: ActivatedRoute, private blogService: BlogService) { }

    // ngOnInit(): void {
    //     this.route.paramMap.subscribe(params => {
    //         const slug = params.get('slug');
    //         this.blogService.getPostBySlug(slug).subscribe(post => {
    //             this.post = post;
    //             // Сортировка блоков страницы
    //             this.post.pageBlocks.sort((a, b) => a.sort - b.sort);
    //         });
    //     });
    // }
}
