import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { CharacterBasics } from '../../../core/interfaces/character.interface';

@Component({
  selector: 'app-card-character[character]',
  templateUrl: './card-character.component.html',
  styleUrls: ['./card-character.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardCharacterComponent {
  faHeartSolid: IconProp = faHeartSolid;
  faHeartRegular: IconProp = faHeartRegular;

  @Input() favorite: boolean = false;

  @Input() character!: CharacterBasics;

  @Output() toggleFvorite = new EventEmitter<CharacterBasics>();

  constructor() { }

  toogleFav(character: CharacterBasics): void {
    this.toggleFvorite.emit(character);
  }

}
