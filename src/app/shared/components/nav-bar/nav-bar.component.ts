import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faHouse, faHeart } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavBarComponent implements OnInit {
  faHouse: IconProp = faHouse
  faHeart: IconProp = faHeart;

  constructor() { }

  ngOnInit(): void {
  }

}
