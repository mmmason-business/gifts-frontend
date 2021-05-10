import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private element: ElementRef) {}
  ngOnInit(): void {
    this.element.nativeElement.style.height = `${window.innerHeight}px`;
    this.element.nativeElement.style.width = `${window.innerWidth}px`;
  }
  @HostListener('window:resize')
  onResize() {
    setTimeout(() => {
      this.element.nativeElement.style.height = `${window.innerHeight}px`;
      this.element.nativeElement.style.width = `${window.innerWidth}px`;
      setTimeout(() => {
        window.scrollTo(0, 1);
      }, 500);
    }, 500);
  }
}
