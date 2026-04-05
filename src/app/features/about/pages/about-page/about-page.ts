import { Component } from '@angular/core';

@Component({
  selector: 'app-about-page',
  imports: [],
  templateUrl: './about-page.html',
  styleUrl: './about-page.css',
})
export class AboutPage {
  stats = [
    { value: '50K+', label: 'Products' },
    { value: '2M+', label: 'Happy Customers' },
    { value: '40+', label: 'Brand Partners' },
    { value: '4.9★', label: 'Average Rating' },
  ];
  team = [
    { name: 'Amir Hassan', role: 'CEO & Co-founder', avatar: 'https://picsum.photos/seed/t1/300/300' },
    { name: 'Lena Mueller', role: 'CTO & Co-founder', avatar: 'https://picsum.photos/seed/t2/300/300' },
    { name: 'James Park', role: 'Head of Product', avatar: 'https://picsum.photos/seed/t3/300/300' },
    { name: 'Sofia Rios', role: 'Customer Success', avatar: 'https://picsum.photos/seed/t4/300/300' },
  ];
}

