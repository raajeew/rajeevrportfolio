import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Rajeev Ranjan Portfolio';

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    // Initialize theme service - this will apply the saved theme or system preference
    // The theme service automatically initializes in its constructor
  }
}
