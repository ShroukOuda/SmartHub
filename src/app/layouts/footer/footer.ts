import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterLinksComponent } from './components/footer-links/footer-links';
import { PaymentMethodsComponent } from './components/payment-methods/payment-methods';
import { SocialMediaComponent } from './components/social-media/social-media';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, FooterLinksComponent, PaymentMethodsComponent, SocialMediaComponent],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class FooterComponent {
  year = new Date().getFullYear();
}
