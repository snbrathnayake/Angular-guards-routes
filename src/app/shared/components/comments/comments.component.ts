import { Component,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Routes } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  public commentArray: any[] = [];
  
  constructor(private router: Router) {
    this.commnetBlog();
  }

  ngOnInit() {}

  public commnetBlog(): void{

    this.commentArray = [
    {

      name: 'Cees Trip',
      commnet: 'Favorite* I m sorry'
    },
    {
      name: 'Swag Molly',
      commnet: 'Brilliant samplep'
    },
    {
      name: 'Bukkake sung',
      commnet: '頭振れる 振る'
    },
    {
      name: 'Jay Robert',
      commnet: 'Its funny album lol'
    },
  ];
  }

  // public post(): void{

  //   this.router.navigate(['dashboard/likes']);
  // }
}
