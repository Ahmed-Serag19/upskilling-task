import { Component } from '@angular/core';
import { HeroSectionComponent } from '../../sections/hero-section/hero-section.component';
import { AboutUsComponent } from '../../sections/about-us/about-us.component';
import { ServicesComponent } from '../../sections/services/services.component';
import { TestimonialsComponent } from '../../sections/testimonials/testimonials.component';
import { ContactUsComponent } from '../../sections/contact-us/contact-us.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroSectionComponent,
    AboutUsComponent,
    ServicesComponent,
    TestimonialsComponent,
    ContactUsComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
