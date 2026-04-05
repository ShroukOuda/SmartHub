import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq-page',
  imports: [CommonModule],
  templateUrl: './faq-page.html',
  styleUrl: './faq-page.css',
})
export class FaqPage {
  faqs = [
    { q: 'Are all products genuine and authentic?', a: 'Yes. SmartHub is an authorized retailer for all brands we carry. Every product comes with the manufacturer\'s full warranty.', open: false },
    { q: 'How long does shipping take?', a: 'Standard shipping: 3-5 business days. Express: 1-2 days. Free shipping on orders over $100.', open: false },
    { q: 'What is your returns policy?', a: 'We accept returns within 30 days of delivery for items in original, unopened packaging.', open: false },
    { q: 'Do you ship internationally?', a: 'Yes, we ship to 60+ countries. International delivery takes 7-14 business days.', open: false },
    { q: 'How do I track my order?', a: 'A tracking link is emailed after shipment. You can also view status under My Orders in your account.', open: false },
  ];
}

