import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  images: Array<any> = []


  constructor() {
    this.images = [
      { name: '../../assets/Images/img1.png' },
      { name: '../../assets/Images/img2.png' },
      { name: '../../assets/Images/img3.png' },
      { name: '../../assets/Images/img1.png' },
      { name: '../../assets/Images/img2.png' },
      { name: '../../assets/Images/img3.png' },
      { name: '../../assets/Images/img1.png' },
      { name: '../../assets/Images/img2.png' },
      { name: '../../assets/Images/img3.png' },
      { name: '../../assets/Images/img1.png' },
      { name: '../../assets/Images/img2.png' },
      { name: '../../assets/Images/img3.png' },
      { name: '../../assets/Images/img3.png' },
    ]
  }
  ngOnInit(): void {
  }

}
