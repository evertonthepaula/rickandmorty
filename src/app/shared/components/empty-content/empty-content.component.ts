import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-empty-content',
  templateUrl: './empty-content.component.html',
  styleUrls: ['./empty-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmptyContentComponent implements OnInit {

  @Input() title!: string;
  @Input() subtitle!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
