import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[fundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {
    //console.log(this.elementRef);

    //passar o elemento, o nome do estilo e o valor
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow')
   }

}
