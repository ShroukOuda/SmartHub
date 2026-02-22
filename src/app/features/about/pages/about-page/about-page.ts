import { Component } from '@angular/core';

@Component({
  selector: 'app-about-page',
  standalone: true,
  template: `
    <div class="about-page">
      <div class="about-page__hero">
        <div class="about-page__hero-badge">⚡ Founded 2019</div>
        <h1>We make tech <span>accessible</span><br>for everyone.</h1>
        <p>SmartHub was founded on one belief: the best technology should be within reach of everyone, not just the few. We've built the most trusted tech retail destination on the web.</p>
      </div>
      <div class="about-page__stats-row">
        @for (stat of stats; track stat.label) {
          <div class="about-page__stat">
            <span class="about-page__stat-n">{{ stat.value }}</span>
            <span class="about-page__stat-l">{{ stat.label }}</span>
          </div>
        }
      </div>
      <div class="about-page__image-break">
        <img src="https://picsum.photos/seed/smarthub-team/1200/500" alt="SmartHub team" />
      </div>
      <div class="about-page__content">
        <div class="about-page__section">
          <h2>Our Mission</h2>
          <p>To curate the world's best technology and deliver it with unmatched service. Every product in our catalog is tested and verified by our expert team before it goes live.</p>
        </div>
        <div class="about-page__section">
          <h2>Why SmartHub</h2>
          <p>Official authorized retailer for Apple, Samsung, Sony, Google, and 40+ leading brands. That means genuine products, full warranties, and manufacturer support.</p>
        </div>
        <div class="about-page__section">
          <h2>The Team</h2>
          <div class="team-grid">
            @for (m of team; track m.name) {
              <div class="team-card">
                <img [src]="m.avatar" [alt]="m.name" />
                <strong>{{ m.name }}</strong><span>{{ m.role }}</span>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .about-page { max-width: 960px; margin: 0 auto; padding: 0 24px 80px; }
    .about-page__hero { padding: 80px 0 48px; }
    .about-page__hero-badge { display: inline-block; padding: 5px 14px; background: var(--primary-light); color: var(--primary); border-radius: 20px; font-size: 13px; font-weight: 600; margin-bottom: 20px; }
    .about-page__hero h1 { font-size: clamp(32px, 5vw, 52px); font-weight: 800; line-height: 1.15; margin: 0 0 20px; color: var(--text); font-family: 'Plus Jakarta Sans', sans-serif; }
    .about-page__hero h1 span { color: var(--primary); }
    .about-page__hero p { font-size: 17px; color: var(--text-secondary); line-height: 1.7; max-width: 560px; margin: 0; }
    .about-page__stats-row { display: flex; gap: 0; border: 1px solid var(--border); border-radius: var(--radius); overflow: hidden; margin: 40px 0 60px; background: var(--bg-card); }
    .about-page__stat { flex: 1; padding: 28px 24px; border-right: 1px solid var(--border); text-align: center; }
    .about-page__stat:last-child { border-right: none; }
    .about-page__stat-n { display: block; font-size: 28px; font-weight: 800; color: var(--primary); font-family: 'Plus Jakarta Sans', sans-serif; margin-bottom: 4px; }
    .about-page__stat-l { font-size: 13px; color: var(--text-secondary); }
    .about-page__image-break img { width: 100%; height: 400px; object-fit: cover; border-radius: var(--radius-lg); }
    .about-page__content { margin-top: 64px; }
    .about-page__section { margin-bottom: 52px; }
    .about-page__section h2 { font-size: 22px; font-weight: 700; margin: 0 0 14px; font-family: 'Plus Jakarta Sans', sans-serif; }
    .about-page__section p { font-size: 16px; color: var(--text-secondary); line-height: 1.8; margin: 0; max-width: 640px; }
    .team-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 24px; margin-top: 16px; }
    .team-card { display: flex; flex-direction: column; gap: 6px; }
    .team-card img { width: 100%; aspect-ratio: 1; object-fit: cover; border-radius: var(--radius); border: 1px solid var(--border); }
    .team-card strong { font-size: 14px; font-weight: 600; color: var(--text); }
    .team-card span { font-size: 13px; color: var(--text-muted); }
  `]
})
export class AboutPageComponent {
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
