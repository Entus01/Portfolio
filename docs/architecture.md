# Architecture

## Purpose

This document describes the architecture currently implemented in the Portfolio project.

Its purpose is to provide a clear view of how the application is organized, how its main areas interact, and how information is presented throughout the portfolio.

Unlike reusable reference documents such as `rules.md` and `structure.md`, this document focuses exclusively on the architecture adopted by this specific project.

---

## Objectives

- Provide a clear understanding of the portfolio architecture.
- Document the application's logical organization.
- Define the responsibilities of the main architectural areas.
- Facilitate maintenance and future evolution.
- Serve as a reference for architectural decisions.
- Maintain an up-to-date representation of the implemented architecture.

---

## Current Architecture

### Summary

The portfolio is implemented as a Single Page Application (SPA) focused on presenting professional information, projects, experience, skills, and development philosophy through a structured and maintainable user experience.

The architecture prioritizes modularity, clear separation of responsibilities, reusable components, and consistent presentation of information.

Project documentation supports development and maintenance activities but is not exposed as a public feature of the portfolio.

---

## Architecture Style

The project currently adopts:

- Single Page Application (SPA)
- Client-Side Rendering (CSR)
- Component-Based Architecture
- Route-Based Navigation
- Documentation-Driven Development

---

## Information Architecture

The portfolio is organized around the following routes:

```text
Portfolio
│
├── Home
├── About
├── Skills
├── Experience
├── Projects
└── Contact
```

### Home

Introduces the portfolio and communicates the primary professional identity of the developer.

### About

Provides professional background, development philosophy, and personal introduction.

### Skills

Presents relevant technologies, tools, and areas of expertise.

### Experience

Highlights professional experience and career progression.

### Projects

Showcases selected projects, technologies, implementation details, and development practices.

### Contact

Provides communication channels and professional references.

---

## Main Modules

### Presentation Module

Responsible for presenting personal and professional information.

### Project Showcase Module

Responsible for displaying projects and implementation highlights.

### Navigation Module

Responsible for providing access to the application's routes.

### Contact Module

Responsible for exposing communication channels and professional references.

---

## Navigation Architecture

The application follows a route-based navigation model.

```text
Visitor
    ↓
Navigation
    ↓
Application Routes
    ↓
Portfolio Content
```

Each route represents a dedicated area of the portfolio and can be accessed directly through navigation or URL entry.

This approach provides a structured browsing experience while supporting future portfolio growth.

---

## External Integrations

Current integrations include:

- GitHub
- LinkedIn
- Email

Additional integrations may be incorporated as the project evolves.

---

## Architectural Dependencies

The architecture depends on the following relationships:

- Navigation depends on the route structure.
- Portfolio routes depend on their corresponding content sources.
- Project presentation depends on project metadata.
- Contact channels depend on external platforms.

---

## Technical Considerations

The architecture prioritizes:

- Reusable components.
- Clear separation of responsibilities.
- Consistent information presentation.
- Responsive user experience.
- Long-term maintainability.
- Scalable content organization.
- Documentation-driven development.

---

## Terminology

The terminology used in this document must remain aligned with the definitions established in:

```text
docs/glossary.md
```

When new architectural concepts, patterns, or terms requiring shared interpretation are introduced, they should be registered in the glossary.

This document should use the official project terminology and avoid maintaining duplicate definitions.

---

## Architectural Change Log

Any significant architectural modification should also be documented in:

```text
docs/decisions.md
```

when it represents an important technical or organizational decision.

---

## Fundamental Principle

This document must represent the actual architecture of the project and not an idealized architecture.

If implementation and documentation diverge, the documentation must be updated to reflect the real state of the application.

Its primary purpose is to serve as the source of truth for how the portfolio is currently organized and built.
