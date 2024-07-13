import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SectionButtonComponent } from '../../components/section-button/section-button.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule, SectionButtonComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css',
})
export class AboutUsComponent {
  aboutUsSectionImage = 'assets/images/about-us-section.jpg';
}
