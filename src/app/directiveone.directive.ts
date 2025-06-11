import { Directive, OnInit,HostBinding,HostListener,ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDirectiveone]'
})
export class DirectiveoneDirective implements OnInit {

  constructor(private el : ElementRef, private renderer: Renderer2) { 
   }
   @HostBinding ('class.hover') isHovered = false;
    @HostListener('mouseenter') onHover(){
    this.isHovered=true;

      }
  
  ngOnInit(): void {
    this.renderer.setStyle(this.el.nativeElement,'color','red')
    this.renderer.setStyle(this.el.nativeElement,'background-color','black')

  }

}
