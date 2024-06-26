import { Directive, HostListener, HostBinding, ElementRef, Renderer2, Input} from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
  @HostListener('mouseenter') onMouseOver(){
    
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') onMouseLeave(){
   
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') backgroundColor?: string;

  @Input() defaultColor: string = 'white';
  @Input() highlightColor: string = 'yellow';

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  //quando o elemento inicializar
  ngOnInit(){
    this.backgroundColor = this.defaultColor;
  }

}
