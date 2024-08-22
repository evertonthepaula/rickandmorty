import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-loader-dots',
  templateUrl: './dots.component.html',
  styleUrls: ['./dots.component.scss']
})
export class LoaderDotsComponent implements OnInit, OnChanges {
  @Input() color = '#000';
  @Input() style!: string;

  styledVars: any;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.sanitizeCustomProperties();
  }

  ngOnChanges() {
    this.sanitizeCustomProperties();
  }

  private sanitizeCustomProperties() {
    this.styledVars = this.sanitizer.bypassSecurityTrustStyle(`
    --dots-color:${this.color};
    ${this.style}
    `);
  }

}
