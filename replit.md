# Amalia Haven E-Commerce Application

## Overview

This is a full-stack e-commerce application built with React (frontend) and Express.js (backend). The application is designed for a fashion and beauty retailer called "Amalia Haven" that sells clothes, shoes, bags, hair products, and beauty items. The project uses a modern tech stack with TypeScript, Tailwind CSS, and Drizzle ORM for database management.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a monorepo structure with three main directories:
- `client/` - React frontend application
- `server/` - Express.js backend API
- `shared/` - Common code and database schema

### Architecture Pattern
- **Frontend**: Single Page Application (SPA) using React with Vite
- **Backend**: RESTful API using Express.js
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: React hooks and TanStack Query for server state

## Key Components

### Frontend Architecture
- **React + TypeScript**: Main frontend framework with type safety
- **Vite**: Build tool and development server
- **Wouter**: Lightweight client-side routing
- **TanStack Query**: Server state management and caching
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Pre-built accessible component library
- **Radix UI**: Headless UI components for accessibility

### Backend Architecture
- **Express.js**: Web application framework
- **TypeScript**: Type-safe JavaScript
- **Storage Interface**: Abstracted data layer with in-memory implementation
- **Middleware**: Request logging and error handling

### Database Schema
The application uses Drizzle ORM with PostgreSQL and includes these main entities:
- **Users**: User accounts with authentication
- **Products**: Product catalog with categories, pricing, and inventory
- **Categories**: Product categorization system
- **Cart Items**: Shopping cart functionality

### UI Components
- Responsive design with mobile-first approach
- Component-based architecture using shadcn/ui
- Custom brand colors (dusty-rose, warm-ivory, soft-mauve, deep-plum, blush-pink, gold)
- Accessibility features built-in through Radix UI

## Data Flow

1. **Frontend Requests**: React components make API calls through TanStack Query
2. **Backend Processing**: Express routes handle business logic
3. **Data Storage**: Currently uses in-memory storage, designed for database integration
4. **State Management**: Client-side state managed through React hooks and context
5. **Cart Management**: Local storage persistence for shopping cart

## External Dependencies

### Frontend Dependencies
- React ecosystem (React, React DOM, React Router via Wouter)
- UI library (Radix UI primitives, shadcn/ui components)
- Styling (Tailwind CSS, class-variance-authority, clsx)
- State management (TanStack Query)
- Form handling (React Hook Form, Zod validation)
- Date handling (date-fns)

### Backend Dependencies
- Express.js with middleware
- Database (Drizzle ORM, @neondatabase/serverless)
- Session management (connect-pg-simple)
- Development tools (tsx, esbuild)

### Development Tools
- TypeScript for type safety
- Vite for development and building
- ESBuild for backend bundling
- Tailwind CSS for styling
- PostCSS for CSS processing

## Deployment Strategy

### Development
- Frontend: Vite dev server with HMR
- Backend: tsx for running TypeScript directly
- Database: Drizzle push for schema changes

### Production Build
- Frontend: Vite builds to `dist/public`
- Backend: ESBuild bundles to `dist/index.js`
- Database: PostgreSQL (configured for Neon)

### Environment Configuration
- DATABASE_URL environment variable required
- Development vs production configurations
- Replit-specific configurations included

### Key Features Implemented
- Product catalog with categories and search
- Shopping cart with persistence
- User authentication (mock implementation)
- Responsive design
- Chatbot interface
- Newsletter signup
- Modern UI components
- Complete subcategory filtering system
- Essential e-commerce pages (Contact, Size Guide, Shipping/Returns, Track Order, FAQ, Our Story, Sustainability, Careers, Privacy Policy, Terms of Service)

### Recent Updates (January 2025)
- Added comprehensive subcategory system with filtering for all product categories
- Created all essential e-commerce pages with proper content and branding
- Updated routing structure to include all new pages
- Enhanced footer navigation with working links to all pages
- Maintained consistent brand styling across all pages using custom color palette

The application is structured to be easily extensible with real authentication, payment processing, and additional e-commerce features. The storage layer is abstracted to allow easy migration from in-memory to database storage.