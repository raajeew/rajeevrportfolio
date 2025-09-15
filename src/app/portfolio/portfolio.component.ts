import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements OnInit {
  activeFilter = 'All';
  filters = ['All', 'Web App', 'E-commerce', 'Dashboard', 'Mobile App'];
  projects: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('assets/data/portfolio.json').subscribe({
      next: (data) => {
        this.projects = data;
      },
      error: (err) => {
        console.error('Error loading portfolio data:', err);
      }
    });
  }

  setActiveFilter(filter: string) {
    this.activeFilter = filter;
  }

  getFilteredProjects() {
    if (this.activeFilter === 'All') {
      return this.projects;
    }
    return this.projects.filter(project => project.category === this.activeFilter);
  }

  onImageError(event: any) {
    // Fallback to a default image if the original image fails to load
    event.target.src = 'https://via.placeholder.com/400x250/6c757d/ffffff?text=Project+Image';
  }
}
