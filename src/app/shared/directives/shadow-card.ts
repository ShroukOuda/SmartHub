import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appShadowCard]',
  standalone: true
})
export class ShadowCardDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onEnter() {
    this.el.nativeElement.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
    this.el.nativeElement.style.transform = 'translateY(-2px)';
    this.el.nativeElement.style.transition = 'box-shadow 0.25s ease, transform 0.25s ease';
  }

  @HostListener('mouseleave') onLeave() {
    this.el.nativeElement.style.boxShadow = '';
    this.el.nativeElement.style.transform = '';
  }
}
