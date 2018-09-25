import {Component, OnInit} from '@angular/core';
import {PostService} from '../services/post.service';

@Component({
    selector: 'app-second-page',
    templateUrl: './second-page.component.html',
    styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements OnInit {

    public posts: any;
    public groups: any;
    public message: string;
    public show = false;
    public show_error = false;

    constructor(
        private postService: PostService,
    ) {
    }

    ngOnInit() {
        this.postService.getGroups()
            .subscribe(
                data => {
                    this.groups = data['groups'];
                }
            );
    }

    getPosts(id) {
        this.postService.getPosts(id)
            .subscribe(
                data => {
                    this.show = true;
                    this.posts = data['posts'];
                },
                error => {
                    console.log(error);
                    this.show_error = true;
                    this.message = error.message;
                }
            );
    }
}
