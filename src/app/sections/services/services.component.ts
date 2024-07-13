import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SectionHeaderComponent } from '../../components/section-header/section-header.component';
import { SectionButtonComponent } from '../../components/section-button/section-button.component';

interface Services {
  image: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent, SectionButtonComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
  services: Services[] = [
    {
      image: 'assets/images/services-card-1.jpg',
      title: 'Lorem Ipsum',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
    },
    {
      image: 'assets/images/services-card-2.jpg',
      title: 'Lorem Ipsum',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
    },
    {
      image: 'assets/images/services-card-3.jpg',
      title: 'Lorem Ipsum',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
    },
  ];
}
