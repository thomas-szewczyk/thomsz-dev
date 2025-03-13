import {
  Component,
  computed,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
  signal,
} from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { NgClass } from '@angular/common';
import { MatDivider } from '@angular/material/divider';
import { MenuItem } from './data-access/models/menu-item.model';

@Component({
  selector: 'app-navbar',
  imports: [MatToolbar, MatIcon, MatButton, NgClass, MatDivider],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  $scrollY = signal(0);
  $isScrolled = computed(() => this.$scrollY() > 0);

  menuItems: MenuItem[];

  @Output() scrollToSection: EventEmitter<string>;

  constructor() {
    this.menuItems = [];
    this.scrollToSection = new EventEmitter<string>();
  }

  ngOnInit() {
    this.getMenuItemsConfig();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.$scrollY.set(window.scrollY);
  }

  getMenuItemsConfig() {
    this.menuItems = [
      {
        label: 'T//S',
        link: 'hero',
        styleClass: 'logo',
      },
      {
        label: 'Über mich',
        link: 'about',
      },
      {
        label: 'Skills',
        link: 'skills',
      },
      {
        label: 'Lebenslauf',
        link: 'cv',
      },
      {
        label: 'Kontakt',
        link: 'contact',
      },
    ];
  }

  scrollTo(sectionId: string): void {
    this.scrollToSection.emit(sectionId);
  }
}
