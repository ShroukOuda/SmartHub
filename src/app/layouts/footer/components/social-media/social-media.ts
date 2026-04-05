import { Component } from '@angular/core';

@Component({
  selector: 'app-social-media',
  imports: [],
  templateUrl: './social-media.html',
  styleUrl: './social-media.css',
})
export class SocialMedia {
  links = [
    { label: 'Instagram', url: '#' },
    { label: 'Pinterest', url: '#' },
    { label: 'Twitter', url: '#' }
  ];
}
