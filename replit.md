# Dhawal Shukla Portfolio Website

## Overview

This is a modern, responsive portfolio website built for Dhawal Shukla, a pre-final year engineering student passionate about software development. The application is a full-stack web application featuring a React frontend with Express.js backend, designed to showcase personal projects, skills, and achievements while providing a contact form for potential collaborators.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a modern full-stack architecture with clear separation between frontend and backend concerns:

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: TailwindCSS with custom CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation
- **Animations**: Custom CSS animations with Intersection Observer for scroll-triggered effects

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API endpoints
- **Database**: PostgreSQL with Drizzle ORM
- **Validation**: Zod schema validation for API requests
- **Session Storage**: In-memory storage with fallback for database operations

## Key Components

### Frontend Components
1. **Navigation**: Fixed navigation bar with smooth scrolling
2. **Hero Section**: Animated hero with typing animation and floating elements
3. **About Section**: Personal introduction with animated counters
4. **Skills Section**: Categorized skill display with progress bars
5. **Projects Section**: Featured projects with technology badges
6. **Experience Section**: Timeline-based education and experience display
7. **Achievements Section**: Statistics and accomplishments
8. **Contact Form**: Validated contact form with success/error handling
9. **UI Components**: Comprehensive shadcn/ui component library

### Backend Components
1. **Contact API**: Handles contact form submissions with validation
2. **Storage Layer**: Abstracted storage interface with memory implementation
3. **Route Registration**: Centralized route management
4. **Error Handling**: Global error middleware
5. **Development Tools**: Vite integration for development

## Data Flow

1. **Contact Form Submission**:
   - Frontend validates form data using Zod schema
   - TanStack Query handles API request to `/api/contact`
   - Backend validates data and stores contact information
   - Success/error feedback provided via toast notifications

2. **Static Content**:
   - All portfolio content is statically defined in components
   - Intersection Observer triggers animations on scroll
   - Smooth scrolling navigation between sections

3. **Development Workflow**:
   - Vite serves frontend with hot module replacement
   - Express serves API endpoints
   - TypeScript compilation for both frontend and backend

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React, React DOM
- **UI Components**: Radix UI primitives, shadcn/ui components
- **Styling**: TailwindCSS, class-variance-authority, clsx
- **Forms**: React Hook Form, Hookform resolvers
- **State Management**: TanStack React Query
- **Routing**: Wouter
- **Icons**: Font Awesome (via CDN)
- **Fonts**: Google Fonts (Inter)

### Backend Dependencies
- **Server**: Express.js
- **Database**: Drizzle ORM, PostgreSQL (Neon), connect-pg-simple
- **Validation**: Zod, drizzle-zod
- **Development**: tsx, esbuild
- **Utilities**: date-fns, nanoid

### Development Dependencies
- **Build Tools**: Vite, esbuild
- **TypeScript**: TypeScript compiler with strict configuration
- **CSS Processing**: PostCSS, Autoprefixer
- **Replit Integration**: Replit-specific plugins for development

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React application to `dist/public`
2. **Backend Build**: esbuild bundles Express server to `dist/index.js`
3. **Database**: Drizzle handles schema migrations and database setup

### Environment Configuration
- **Development**: Uses tsx for TypeScript execution with Vite dev server
- **Production**: Serves built static files with Express server
- **Database**: PostgreSQL connection via Neon serverless with connection string

### Scripts
- `dev`: Development server with hot reloading
- `build`: Production build for both frontend and backend
- `start`: Production server startup
- `check`: TypeScript type checking
- `db:push`: Database schema synchronization

The application is designed to be deployed on platforms supporting Node.js with PostgreSQL database connectivity, with environment variables for database configuration and production optimization.