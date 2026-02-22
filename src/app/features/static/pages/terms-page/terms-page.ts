import { Component } from '@angular/core';

@Component({
  selector: 'app-terms-page',
  standalone: true,
  template: `
    <div class="static-page">
      <h1>Terms of Service</h1>
      <p>By using Forma you agree to our terms. All prices are in USD and subject to change without notice. We reserve the right to cancel orders. Forma is a demonstration store built with Angular.</p>
    </div>
  `,
  styles: [`.static-page { max-width: 700px; margin: 0 auto; padding: 48px 24px; } h1 { font-size: 28px; font-weight: 600; margin: 0 0 20px; } p { font-size: 15px; color: #555; line-height: 1.75; }`]
})
export class TermsPageComponent {}
