import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  name: string;
  url?: string;
  githubUrl?: string;
  technologies: string[];
  description?: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  @Input() projects: Project[] = [];
}
