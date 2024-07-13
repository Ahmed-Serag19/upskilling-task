import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-button.component.html',
  styleUrls: ['./section-button.component.css'],
})
export class SectionButtonComponent {
  @Input() label: string = '';
  @Input() color: 'primary' | 'secondary' | 'warning' = 'primary';

  getButtonStyles() {
    return {
      'font-weight': 'bold',
      padding: '1.3rem 4.5rem',
      'letter-spacing': '1px',
      'border-radius': '3rem',
      border: 'none',
      transition: '0.5s all',
      'font-size': '28px',
      'z-index': '999',
    };
  }

  getButtonClass() {
    return {
      'btn-primary': this.color === 'primary',
      'btn-secondary': this.color === 'secondary',
      'btn-warning': this.color === 'warning',
    };
  }
}
