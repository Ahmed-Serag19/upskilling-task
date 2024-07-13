import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SectionButtonComponent } from '../../components/section-button/section-button.component';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, SectionButtonComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css',
})
export class HeroSectionComponent {
  logoPath = 'assets/images/truck-logo.png';
}
