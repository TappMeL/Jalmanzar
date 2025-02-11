import { Component } from "@angular/core";

@Component ({
    selector: 'post-list',
    templateUrl: './post.list.component.html',
    styleUrls: ['./post.list.component.css'],
})

export class PostListComponent {
    posts = [
        {title: 'First Post', content: '1st content'},
        {title: 'Second Post', content: '2nd content'},
        {title: 'Third Post', content: '3rd content'},
    ]
}