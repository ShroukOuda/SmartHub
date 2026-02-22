import { Component } from '@angular/core';

@Component({
  selector: 'app-social-media',
  standalone: true,
  template: `
    <div class="social">
      @for (link of links; track link.label) {
        <a [href]="link.url" target="_blank" rel="noopener" class="social__link" [attr.aria-label]="link.label">
          {{ link.label }}
        </a>
      }
    </div>
  `,
  styles: [`
    .social { display: flex; gap: 16px; }
    .social__link { font-size: 13px; color: #888; text-decoration: none; transition: color 0.2s; }
    .social__link:hover { color: #1a1a1a; }
  `]
})
export class SocialMediaComponent {
  links = [
    { label: 'Instagram', url: '#' },
    { label: 'Pinterest', url: '#' },
    { label: 'Twitter', url: '#' }
  ];
}
