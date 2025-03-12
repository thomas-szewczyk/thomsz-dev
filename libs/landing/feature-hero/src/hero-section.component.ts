import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'lib-hero-section',
  imports: [MatButton],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent {
  welcomeHeader = "Hi! 👋 I'm";
  name = 'Thomas Szewczyk';
  subHeader = 'Web Developer | Best Practices Enthusiast | Team Player';
}
