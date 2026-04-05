import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Theme {
  isDark = signal<boolean>(this.loadTheme());

  private loadTheme(): boolean {
    const saved = localStorage.getItem('smarthub-theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  constructor() {
    this.apply();
  }

  toggle(): void {
    this.isDark.update(v => !v);
    this.apply();
  }

  private apply(): void {
    const dark = this.isDark();
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    localStorage.setItem('smarthub-theme', dark ? 'dark' : 'light');
  }
}