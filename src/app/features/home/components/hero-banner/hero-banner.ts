import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero-banner',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="hero">
      <div class="hero__content">
        <div class="hero__badge">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
          New arrivals just dropped
        </div>
        <h1 class="hero__heading">Your ultimate <span class="hero__heading-accent">tech</span> destination.</h1>
        <p class="hero__sub">Cutting-edge gadgets, smart devices, and accessories — curated for the modern tech enthusiast.</p>
        <div class="hero__actions">
          <a routerLink="/products" class="hero__cta">Shop Now
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
          <a routerLink="/about" class="hero__link">Our Story</a>
        </div>
        <div class="hero__stats">
          <div class="hero__stat"><span class="hero__stat-n">50K+</span><span class="hero__stat-l">Products</span></div>
          <div class="hero__stat-sep"></div>
          <div class="hero__stat"><span class="hero__stat-n">4.9★</span><span class="hero__stat-l">Rating</span></div>
          <div class="hero__stat-sep"></div>
          <div class="hero__stat"><span class="hero__stat-n">Free</span><span class="hero__stat-l">Shipping $100+</span></div>
        </div>
      </div>
      <div class="hero__visual">
        <div class="hero__img-bg"></div>
        <img src="https://picsum.photos/seed/smarthub-hero/700/600" alt="Latest tech" class="hero__img" />
        <div class="hero__floating-card hero__floating-card--1">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          <div><p>Just shipped</p><p>AirPods Pro 3</p></div>
        </div>
        <div class="hero__floating-card hero__floating-card--2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
          <div><p>In stock</p><p>MacBook Pro M4</p></div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero { display: grid; grid-template-columns: 1fr 1fr; min-height: 82vh; max-width: 1280px; margin: 0 auto; padding: 60px 24px; align-items: center; gap: 60px; }
    @media (max-width: 900px) { .hero { grid-template-columns: 1fr; padding-top: 40px; } .hero__visual { order: -1; } }
    .hero__badge { display: inline-flex; align-items: center; gap: 6px; padding: 6px 14px; background: var(--accent-light); color: var(--accent); border-radius: 20px; font-size: 13px; font-weight: 600; margin-bottom: 20px; }
    .hero__heading { font-size: clamp(34px, 5vw, 58px); font-weight: 800; color: var(--text); line-height: 1.1; margin: 0 0 16px; font-family: 'Plus Jakarta Sans', sans-serif; }
    .hero__heading-accent { color: var(--primary); }
    .hero__sub { font-size: 17px; color: var(--text-secondary); line-height: 1.7; max-width: 420px; margin: 0 0 32px; }
    .hero__actions { display: flex; align-items: center; gap: 16px; margin-bottom: 44px; }
    .hero__cta { display: inline-flex; align-items: center; gap: 8px; padding: 14px 28px; background: var(--primary); color: var(--primary-fg); text-decoration: none; border-radius: var(--radius-sm); font-size: 15px; font-weight: 600; transition: background .2s, transform .1s; }
    .hero__cta:hover { background: var(--primary-hover); transform: translateY(-1px); }
    .hero__link { color: var(--text-secondary); font-size: 15px; font-weight: 500; text-decoration: none; padding: 14px 8px; transition: color .2s; }
    .hero__link:hover { color: var(--text); }
    .hero__stats { display: flex; align-items: center; gap: 20px; }
    .hero__stat { display: flex; flex-direction: column; gap: 2px; }
    .hero__stat-n { font-size: 18px; font-weight: 700; color: var(--text); font-family: 'Plus Jakarta Sans', sans-serif; }
    .hero__stat-l { font-size: 12px; color: var(--text-muted); }
    .hero__stat-sep { width: 1px; height: 36px; background: var(--border); }
    /* Visual */
    .hero__visual { position: relative; }
    .hero__img-bg { position: absolute; inset: 20px -20px -20px 20px; background: var(--primary-light); border-radius: var(--radius-lg); z-index: 0; }
    .hero__img { position: relative; z-index: 1; width: 100%; height: 500px; object-fit: cover; border-radius: var(--radius-lg); box-shadow: var(--shadow-lg); }
    .hero__floating-card { position: absolute; z-index: 2; background: var(--bg-card); border: 1px solid var(--border); border-radius: 10px; padding: 10px 14px; display: flex; align-items: center; gap: 10px; box-shadow: var(--shadow-md); font-size: 12px; }
    .hero__floating-card svg { color: var(--success); flex-shrink: 0; }
    .hero__floating-card p { margin: 0; }
    .hero__floating-card p:first-child { color: var(--text-muted); font-size: 11px; }
    .hero__floating-card p:last-child { color: var(--text); font-weight: 600; }
    .hero__floating-card--1 { bottom: 80px; left: -20px; }
    .hero__floating-card--2 { top: 60px; right: -20px; }
  `]
})
export class HeroBannerComponent {}
