import { Component, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrl: './ciclo.component.scss'
})
export class CicloComponent implements OnInit{

  @Input() valorInicial: number = 10;

  constructor(){
    this.log('constructor');
  }

  ngOnChanges(){
    this.log("ngOnChanges");
  }

  ngOnInit(){
    this.log("ngOnInit");
  }

  ngDoCheck(){
    this.log("ngDoCheck");
  }

  ngAfterContentInit(){
    this.log("ngAfterContentInit");
  }

  ngAfterContentChecked(){
    this.log("ngAfterContentChecked");
  }
  
  ngAfterViewInit(){
    this.log("ngAfterViewInit");
  }

  ngAfterViewChecked(){
    this.log("ngAfterViewChecked");
  }

  ngOnDestroy(){
    this.log("ngOnDestroy");
  }
  

  private log(hook: string){
    console.log(hook);
  }

}
