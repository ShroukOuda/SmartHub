import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterLinks } from '../components/footer-links/footer-links';
import { PaymentMethods } from '../components/payment-methods/payment-methods';
import { SocialMedia } from '../components/social-media/social-media';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, FooterLinks, PaymentMethods, SocialMedia],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  year = new Date().getFullYear();
}