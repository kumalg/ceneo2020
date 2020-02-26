import { Directive, ElementRef, HostListener, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[ceHighlight]'
})
export class HighlightDirective {

  @Input() ceHighlight;
  @Input() ceHighlightSetBorder: boolean;
  constructor(private el: ElementRef, private renderer: Renderer2) {
    // (el.nativeElement as HTMLElement).classList.contains('is-even')
    // (el.nativeElement as HTMLElement).style.background = 'red'
  }

  @HostListener('click')
  handleClick() {
    this.renderer.addClass(this.el.nativeElement, this.ceHighlight || 'highlight')
    // (this.el.nativeElement as HTMLElement).style.background = 'red'
  }

}
