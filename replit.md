# PDF Document Analyzer - Replit Migration

## Overview
A modern full-stack web application for PDF document analysis using AI/ML models. Originally designed in Figma and migrated to Replit for development and deployment. The application extracts document structure and provides contextual insights through advanced AI processing.

## Project Architecture
- **Frontend**: React + TypeScript with Vite bundler
- **Backend**: Express.js server with API routes
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: TanStack Query for server state
- **Routing**: Wouter for client-side routing
- **Database**: Drizzle ORM with PostgreSQL (currently using in-memory storage)
- **Forms**: React Hook Form with Zod validation

## Key Features
- PDF document structure extraction
- AI-powered contextual insights
- Modern responsive UI design
- Section-based document navigation
- Drag & drop PDF upload functionality
- Real-time upload progress tracking
- Document analysis with AI insights
- PDF preview with analysis results
- Structured document analysis results

## Recent Changes
- **2025-01-23**: Successfully migrated from Figma to Replit environment
  - All required packages are installed and configured
  - Project structure follows modern fullstack JavaScript patterns
  - Server running on port 5000 with proper client/server separation
  - Assets properly organized in figmaAssets directory
- **2025-01-23**: Implemented PDF upload and analysis functionality
  - Added drag & drop PDF upload with file validation
  - Created PDF preview component with analysis capabilities
  - Added backend API routes for file upload and document analysis
  - Integrated upload functionality with main UI (navbar Upload button)
  - Added progress tracking and error handling for uploads
  - Implemented simulated AI analysis with structured results
- **2025-01-23**: Enhanced UI with glowing animations and componentization
  - Added comprehensive glowing animations and CSS effects
  - Created reusable Logo component from SVG for easy maintenance
  - Created BackgroundVector component with animated elements
  - Implemented text glow, button glow, and hover animations
  - Added smooth transitions and scale effects throughout UI

## Architecture Details
- **Client-Server Separation**: Frontend served by Vite dev server, backend API on Express
- **Security**: Proper request validation with Zod schemas
- **Asset Management**: Static assets served from client/public/figmaAssets/
- **Development**: Hot reload enabled for both frontend and backend

## User Preferences
(No specific preferences recorded yet)

## Development Setup
- Server starts with `npm run dev`
- Runs on port 5000 for both frontend and backend
- Uses 0.0.0.0 binding for accessibility
- Development mode includes Vite hot reloading

## Next Steps
- Implement PDF upload and processing functionality
- Add authentication system
- Connect to actual database for production
- Enhance AI analysis capabilities