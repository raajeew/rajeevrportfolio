import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit, OnDestroy {
  isCollapsed = true;
  activeSection = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.updateActiveSection();
  }

  ngOnDestroy() {
    // Cleanup if needed
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.updateActiveSection();
  }

  toggleNavbar() {
    this.isCollapsed = !this.isCollapsed;
  }

  closeNavbar() {
    this.isCollapsed = true;
  }

  scrollToSection(sectionId: string) {
    this.closeNavbar();
    
    // If not on home page, navigate to home first
    if (this.router.url !== '/home' && this.router.url !== '/') {
      this.router.navigate(['/home']).then(() => {
        setTimeout(() => this.scrollToElement(sectionId), 100);
      });
    } else {
      this.scrollToElement(sectionId);
    }
  }

  private scrollToElement(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80; // Height of fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  private updateActiveSection() {
    // Only update active section when on home page
    if (this.router.url !== '/home' && this.router.url !== '/') {
      this.activeSection = '';
      return;
    }

    const sections = ['about', 'skills', 'experience', 'portfolio'];
    const navbarHeight = 80;
    const scrollPosition = window.pageYOffset + navbarHeight + 100; // Add offset for better UX

    for (const sectionId of sections.reverse()) { // Reverse to check bottom sections first
      const element = document.getElementById(sectionId);
      if (element && element.offsetTop <= scrollPosition) {
        this.activeSection = sectionId;
        return;
      }
    }
    
    // If none of the sections are active, clear active section
    this.activeSection = '';
  }

  isActive(sectionId: string): boolean {
    return this.activeSection === sectionId;
  }
}
