import { Component, OnInit } from '@angular/core';
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
export class HomeComponent implements OnInit {
  profile: any = {};
  projects: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('assets/data/home.json').subscribe(data => {
      this.profile = data;
    });

    this.http.get<any[]>('assets/data/projects.json').subscribe(data => {
      this.projects = data;
    });
  }
}
