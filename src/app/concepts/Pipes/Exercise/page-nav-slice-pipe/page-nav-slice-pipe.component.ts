import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-page-nav-slice-pipe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-nav-slice-pipe.component.html',
  styleUrl: './page-nav-slice-pipe.component.css',
})
export class PageNavSlicePipeComponent {
  products: { name: string; imageUrl: string }[] = [
    {
      name: 'Mastering CSS with Sass & Bootstrap + Interview Questions',
      imageUrl: 'assets/Html-CSS.jpg',
    },
    {
      name: 'Mastering Angular + Angular 19 + Interview + E-commerce App',
      imageUrl: 'assets/Angular.jpg',
    },
    {
      name: 'JavaScript - Marathon Interview Questions Series',
      imageUrl: 'assets/JS_Course.png',
    },
    {
      name: 'Mastering React With Interview Questions, eStore Project',
      imageUrl: 'assets/React_Course.png',
    },
    {
      name: 'Mastering TypeScript with Marathon Interview Questions',
      imageUrl: 'assets/TypeScript.jpg',
    },
    {
      name: 'Practical Database Guide with RDBMS(MySQL) & NoSQL(MongoDB)',
      imageUrl: 'assets/RDBMS.png',
    },
    {
      name: 'Mastering Bun - The Modern Fullstack Development',
      imageUrl: 'assets/Bun.jpg',
    },
    {
      name: 'Mastering NestJS',
      imageUrl: 'assets/NestJS.jpg',
    },
  ];

  pageSize: number = 4;
  startIndex: number = 0;
  endIndex: number = this.pageSize;

  previousPage() {
    let currentstartIndex = this.startIndex;
    currentstartIndex -= this.pageSize;
    if((currentstartIndex) >= 0){
      this.startIndex -= this.pageSize;
      this.endIndex -= this.pageSize;
    }else
    {
      alert("no previous page")
    }
   
  }
  nextPage() {
   
    let currentEndIndex = this.endIndex;
    currentEndIndex += this.pageSize
    if(currentEndIndex < this.products.length+1){
      this.startIndex += this.pageSize;
      this.endIndex += this.pageSize;
    }
    else{
      alert("end of the page")
    }
  }
}
