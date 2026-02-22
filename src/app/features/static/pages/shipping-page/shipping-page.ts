import { Component } from '@angular/core';

@Component({
  selector: 'app-shipping-page',
  standalone: true,
  template: `
    <div class="static-page">
      <h1>Shipping Information</h1>
      <p>Standard delivery (3–5 business days): $9.99. Free on orders over $100. Express (1–2 days): $19.99. International (7–14 days): from $24.99. Orders placed before 2pm GMT ship same day.</p>
    </div>
  `,
  styles: [`.static-page { max-width: 700px; margin: 0 auto; padding: 48px 24px; } h1 { font-size: 28px; font-weight: 600; margin: 0 0 20px; } p { font-size: 15px; color: #555; line-height: 1.75; }`]
})
export class ShippingPageComponent {}
