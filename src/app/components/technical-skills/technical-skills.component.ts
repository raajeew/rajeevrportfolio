import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  category: string;
  items: Skill[];
}

@Component({
  selector: 'app-technical-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './technical-skills.component.html',
  styleUrl: './technical-skills.component.scss'
})
export class TechnicalSkillsComponent {
  @Input() skills: SkillCategory[] = [];
}
