# Architecture

## Purpose

This document describes the architecture currently implemented in the Portfolio project.

Its purpose is to provide a clear view of how the application is organized, how its main layers interact, and how information flows throughout the portfolio.

Unlike reusable reference documents such as `rules.md` and `structure.md`, this document focuses exclusively on the architecture adopted by this specific project.

---

## Objectives

- Provide a clear understanding of the portfolio architecture.
- Document the application's logical organization.
- Define the responsibilities of each architectural layer.
- Facilitate maintenance and future evolution.
- Serve as a reference for architectural decisions.
- Maintain an up-to-date representation of the implemented architecture.

---

# Current Architecture

## Summary

The portfolio is implemented as a Single Page Application (SPA) focused on presenting the developer's professional identity, development philosophy, technical skills, projects, and contact information through a structured and maintainable user experience.

The architecture prioritizes:

- Modularity
- Separation of responsibilities
- Reusable components
- Centralized content
- Documentation-driven development
- A coherent narrative that guides visitors through the portfolio

Project documentation supports development and maintenance activities but is not exposed as part of the public portfolio.

---

## Architecture Style

The project currently adopts:

- Single Page Application (SPA)
- Client-Side Rendering (CSR)
- Component-Based Architecture
- Route-Based Navigation
- Centralized Content Architecture
- Documentation-Driven Development

---

# Architectural Layers

The application is organized into four logical layers.

```text
Content Layer
        ↓
Component Layer
        ↓
Page Layer
        ↓
Navigation Layer
```

Each layer has a single primary responsibility and depends only on the layer below it.

---

## Content Layer

Responsible for storing the portfolio's static information.

Content is centralized into dedicated modules to avoid duplication and keep presentation independent from data.

Examples include:

```text
profile.js
skills.js
projects.js
```

---

## Component Layer

Responsible for reusable user interface elements.

Components encapsulate presentation and interaction while remaining independent from page-specific responsibilities.

Examples include:

```text
Navbar
Footer
SocialLinks
```

---

## Page Layer

Responsible for composing reusable components into complete portfolio sections.

Each page focuses on communicating a specific aspect of the developer's professional profile.

Current pages:

```text
Home
About
Skills
Projects
Contact
```

---

## Navigation Layer

Responsible for coordinating navigation across the application.

Navigation is implemented through React Router and provides access to every portfolio section.

---

# Information Architecture

The portfolio follows a progressive narrative.

```text
Home
        ↓
About
        ↓
Skills
        ↓
Projects
        ↓
Contact
```

Rather than presenting isolated pages, each section builds upon the previous one to communicate a cohesive professional story.

Each page has a unique responsibility and avoids duplicating information already presented elsewhere.

---

# Application Structure

The application currently follows this high-level organization.

```text
App
│
├── Layout
│     ├── Navbar
│     ├── Outlet
│     └── Footer
│
├── Home
├── About
├── Skills
├── Projects
└── Contact
```

The layout provides a shared structure while route components render the portfolio's main sections.

---

# Content Architecture

Application content is intentionally separated from presentation.

Portfolio information is maintained through dedicated content modules, allowing components to remain focused on rendering and interaction.

This approach improves:

- Maintainability
- Reusability
- Consistency
- Scalability

---

# Component Strategy

Components are categorized according to their responsibility.

### Layout Components

Shared application structure.

Examples:

- Navbar
- Footer

### Shared Components

Reusable interface elements.

Examples:

- SocialLinks

### Route Components

Complete portfolio pages.

Examples:

- Home
- About
- Skills
- Projects
- Contact

---

# Information Flow

Application data follows a predictable flow.

```text
Content Modules
        ↓
Reusable Components
        ↓
Portfolio Pages
        ↓
Navigation
        ↓
Visitor
```

Content modules provide information.

Components present that information.

Pages organize components.

Navigation connects the complete experience.

---

# Main Modules

### Presentation Module

Responsible for presenting personal and professional information.

### Project Showcase Module

Responsible for displaying projects and implementation highlights.

### Navigation Module

Responsible for providing access to application routes.

### Contact Module

Responsible for exposing communication channels and professional references.

---

# External Integrations

Current integrations include:

- GitHub
- LinkedIn
- Email

Additional integrations may be incorporated as the project evolves.

---

# Architectural Dependencies

The architecture depends on the following relationships.

```text
Navigation
        ↓
Routes
        ↓
Pages
        ↓
Shared Components
        ↓
Content Modules
```

Examples include:

- Navigation depends on the routing structure.
- Pages depend on reusable components.
- Shared components consume centralized content.
- Contact information depends on the profile module.
- Project presentation depends on project metadata.

---

# Technical Considerations

The architecture prioritizes:

- Reusable components.
- Separation of concerns.
- Centralized content.
- Consistent information presentation.
- Narrative consistency across portfolio sections.
- Responsive user experience.
- Long-term maintainability.
- Scalable content organization.
- Documentation-driven development.

---

# Architectural Principles

Architectural decisions should follow these principles.

- Single Responsibility.
- Reusability.
- Composition over duplication.
- Centralized content.
- Clear separation of concerns.
- Progressive narrative.
- Documentation consistency.
- Long-term maintainability.

---

# Future Evolution

Future architectural changes should continue prioritizing:

- Reusable components.
- Centralized content.
- Minimal component responsibilities.
- Clear information flow.
- Scalable organization.
- Documentation consistency.

---

# Terminology

The terminology used in this document must remain aligned with the definitions established in:

```text
docs/glossary.md
```

When new architectural concepts or organizational patterns require a shared interpretation, they should be registered in the glossary.

This document should always use the official project terminology and avoid maintaining duplicate definitions.

---

# Architectural Change Log

Significant architectural modifications should also be documented in:

```text
docs/decisions.md
```

when they represent long-term technical or organizational decisions.

Relevant implementation milestones should be summarized in:

```text
docs/changelog.md
```

---

# Fundamental Principle

This document must represent the actual architecture of the project rather than an idealized design.

If implementation and documentation diverge, the documentation should be updated to reflect the current implementation.

Its primary purpose is to serve as the single source of truth for how the portfolio is organized, structured, and maintained.