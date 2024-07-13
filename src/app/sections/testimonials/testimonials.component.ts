import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SectionHeaderComponent } from '../../components/section-header/section-header.component';

interface Testimonial {
  name: string;
  text: string;
  image: string;
  rating: number;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css',
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      name: 'Courtney Henry',
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: 'assets/images/testmonials-person.png',
      rating: 5,
    },
    {
      name: 'Courtney Henry',
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: 'assets/images/testmonials-person.png',
      rating: 4,
    },
    {
      name: 'Courtney Henry',
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: 'assets/images/testmonials-person.png',
      rating: 5,
    },
    {
      name: 'Courtney Henry',
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: 'assets/images/testmonials-person.png',
      rating: 3,
    },
  ];
}
