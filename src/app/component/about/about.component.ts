import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}
  downloadFile(img: string) {
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '../../../assets/cartoon.jpg');
    link.setAttribute('download', img);
    link.click();
    link.remove();
  }
}
