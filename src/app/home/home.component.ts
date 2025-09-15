import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AboutComponent } from '../components/about/about.component';
import { TechnicalSkillsComponent } from '../components/technical-skills/technical-skills.component';
import { ExperienceComponent } from '../components/experience/experience.component';
import { PortfolioComponent } from '../components/portfolio/portfolio.component';
import { EducationComponent } from '../components/education/education.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    AboutComponent, 
    TechnicalSkillsComponent, 
    ExperienceComponent, 
    PortfolioComponent,
    EducationComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  profile: any = {};
  projects: any[] = [];
  
  // Component loading states
  loadedComponents = {
    about: false,
    skills: false,
    experience: false,
    portfolio: false,
    education: false
  };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('assets/data/home.json').subscribe(data => {
      this.profile = data;
    });

    this.http.get<any[]>('assets/data/projects.json').subscribe(data => {
      this.projects = data;
    });

    // Check initial viewport
    setTimeout(() => this.checkVisibleSections(), 100);
  }

  ngOnDestroy() {
    // Cleanup if needed
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.checkVisibleSections();
  }

  private checkVisibleSections() {
    const sections = ['about', 'skills', 'experience', 'portfolio', 'education'];
    const viewportHeight = window.innerHeight;
    const threshold = viewportHeight * 0.2; // Load when section is 20% visible

    sections.forEach(sectionId => {
      if (!this.loadedComponents[sectionId as keyof typeof this.loadedComponents]) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isVisible = rect.top < viewportHeight - threshold && rect.bottom > threshold;
          
          if (isVisible) {
            this.loadedComponents[sectionId as keyof typeof this.loadedComponents] = true;
          }
        }
      }
    });
  }

  // Helper methods to check if components should be loaded
  shouldLoadAbout(): boolean {
    return this.loadedComponents.about;
  }

  shouldLoadSkills(): boolean {
    return this.loadedComponents.skills;
  }

  shouldLoadExperience(): boolean {
    return this.loadedComponents.experience;
  }

  shouldLoadPortfolio(): boolean {
    return this.loadedComponents.portfolio;
  }

  shouldLoadEducation(): boolean {
    return this.loadedComponents.education;
  }
}
