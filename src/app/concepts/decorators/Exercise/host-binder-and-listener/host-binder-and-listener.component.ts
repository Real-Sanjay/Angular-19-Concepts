import { AfterViewInit, Component, ElementRef, HostBinding, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-host-binder-and-listener',
  standalone: true,
  imports: [],
  templateUrl: './host-binder-and-listener.component.html',
  styleUrl: './host-binder-and-listener.component.css'
})
export class HostBinderAndListenerComponent implements AfterViewInit{
  @ViewChild('colorInput') colorInput!: ElementRef;
  @HostBinding('style.backgroundColor') selectedColor!: string;
  @HostListener('input', ['$event.target.value']) onColorChange(color: string){
    this.selectedColor = color;
  }
  ngAfterViewInit(): void {
    this.selectedColor = this.colorInput.nativeElement.value;
  }
}
