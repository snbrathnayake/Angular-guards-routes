import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-param',
  templateUrl: './param.component.html',
  styleUrls: ['./param.component.css']
})
export class ParamComponent implements OnInit {

  private observRef:any;
  public selectedPost: string;

  constructor(private route:ActivatedRoute) {
    this.observRef = route.params.subscribe(params => {
      this.selectedPost = params['name'];
    });
  }

  ngOnInit() {
  }

}
