# Rajeev Ranjan Portfolio

A modern, responsive portfolio website built with Angular 18 and Bootstrap 5, showcasing the work and skills of Rajeev Ranjan, a Full-Stack Web Developer.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Navigation**: Smooth navigation with active link highlighting
- **Portfolio Showcase**: Filterable portfolio grid with project details
- **Contact Form**: Functional contact form with validation
- **Bootstrap Integration**: Styled with Bootstrap 5 for consistent UI components
- **TypeScript**: Built with TypeScript for better code quality and maintainability

## 🛠️ Technologies Used

- **Frontend Framework**: Angular 18
- **Styling**: Bootstrap 5, SCSS
- **Icons**: Font Awesome 6
- **Typography**: Google Fonts (Inter)
- **Build Tool**: Angular CLI
- **Package Manager**: npm

## 📱 Pages

### Home Page
- Hero section with professional introduction
- About section with background and passion
- Skills showcase organized by categories
- Experience timeline with job details
- Education information

### Portfolio Page
- Filterable project grid (All, Web App, E-commerce, Dashboard, Mobile App)
- Project cards with hover effects
- Live demo and GitHub links
- Technology badges for each project

### Contact Page
- Contact information with social links
- Interactive contact form with validation
- Professional styling with animations
- Form submission with success/error states

## 🚀 Getting Started

### Prerequisites
- Node.js (v20.16.0 or higher)
- npm (comes with Node.js)
- Angular CLI

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd rajeev-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
ng serve
```

4. Open your browser and navigate to `http://localhost:4200`

### Building for Production

```bash
ng build --configuration production
```

The build artifacts will be stored in the `dist/` directory.

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── navbar/          # Navigation component
│   │   ├── home/            # Home page component
│   │   ├── portfolio/       # Portfolio page component
│   │   └── contact/         # Contact page component
│   ├── app.component.*      # Root component
│   ├── app.routes.ts        # Routing configuration
│   └── app.config.ts        # App configuration
├── styles.scss              # Global styles
└── index.html              # Main HTML file
```

## 🎨 Design Features

- **Color Scheme**: Professional blue theme with gradients
- **Typography**: Inter font family for modern look
- **Animations**: Smooth fade-in effects and hover transitions
- **Cards**: Elevated cards with shadow effects
- **Forms**: Modern form styling with validation states
- **Responsive**: Mobile-first approach with Bootstrap grid system

## 📝 Customization

### Profile Information
Edit the profile data in `src/app/home/home.component.ts` to update:
- Personal information
- Skills and expertise
- Work experience
- Education details

### Portfolio Projects
Modify the projects array in `src/app/portfolio/portfolio.component.ts` to showcase your own projects.

### Contact Information
Update contact details in `src/app/contact/contact.component.ts`.

### Styling
- Global styles: `src/styles.scss`
- Component-specific styles: Each component has its own `.scss` file

## 🔧 Scripts

- `ng serve` - Start development server
- `ng build` - Build the project
- `ng test` - Run unit tests
- `ng lint` - Run linting
- `ng e2e` - Run end-to-end tests

## 🌟 Key Features Implemented

1. **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
2. **Modern Angular Architecture**: Uses standalone components and latest Angular features
3. **Form Handling**: Reactive forms with comprehensive validation
4. **Animation Effects**: CSS animations for enhanced user experience
5. **SEO Ready**: Proper meta tags and semantic HTML structure
6. **Accessibility**: ARIA labels and keyboard navigation support
7. **Performance Optimized**: Lazy loading and optimized bundle size

## 📞 Contact

For any questions or suggestions regarding this portfolio, please feel free to reach out:

- **Email**: rajeev.ranjan@example.com
- **LinkedIn**: [linkedin.com/in/rajeev-ranjan](https://linkedin.com/in/rajeev-ranjan)
- **GitHub**: [github.com/rajeev-ranjan](https://github.com/rajeev-ranjan)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by Rajeev Ranjan using Angular and Bootstrap.
