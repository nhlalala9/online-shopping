import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  url: string = "../assets/img1.jpg";
    imageChange(event: any){
        this.url = event.target.src;
    }

  constructor() { }

  ngOnInit(): void {
  }

}
