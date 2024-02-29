import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<string>();
  onSelect(feature: string) {
    if (feature === 'recipe') {
      this.featureSelected.emit(feature);
    } else {
      this.featureSelected.emit(feature);
    }
  }
}
