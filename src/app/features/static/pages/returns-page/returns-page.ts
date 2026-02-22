import { Component } from '@angular/core';

@Component({
  selector: 'app-returns-page',
  standalone: true,
  template: `
    <div class="static-page">
      <h1>Returns & Exchanges</h1>
      <p>We offer free returns within 30 days of delivery. Items must be unused and in original packaging. Start a return from your Orders page or by contacting us directly.</p>
    </div>
  `,
  styles: [`.static-page { max-width: 700px; margin: 0 auto; padding: 48px 24px; } h1 { font-size: 28px; font-weight: 600; margin: 0 0 20px; } p { font-size: 15px; color: #555; line-height: 1.75; }`]
})
export class ReturnsPageComponent {}
