import { Component } from '@angular/core';

@Component({
  selector: 'app-privacy-page',
  standalone: true,
  template: `
    <div class="static-page">
      <h1>Privacy Policy</h1>
      <p>We collect only the data necessary to process your orders and improve our service. We never sell personal data to third parties. For questions, contact privacy&#64;forma.studio.</p>
    </div>
  `,
  styles: [`.static-page { max-width: 700px; margin: 0 auto; padding: 48px 24px; } h1 { font-size: 28px; font-weight: 600; margin: 0 0 20px; } p { font-size: 15px; color: #555; line-height: 1.75; }`]
})
export class PrivacyPageComponent {}
