# Architecture

## Purpose

This document describes the architecture currently implemented in the Portfolio project.

Its purpose is to provide a clear view of how the application is organized, how its main sections interact, and how information is presented throughout the portfolio.

Unlike reusable reference documents such as `rules.md` and `structure.md`, this document focuses exclusively on the architecture adopted by this specific project.

---

## Objectives

* Provide a clear understanding of the portfolio architecture.
* Document the application's logical organization.
* Define the responsibilities of the main architectural areas.
* Facilitate maintenance and future evolution.
* Serve as a reference for architectural decisions.
* Maintain an up-to-date representation of the implemented architecture.

---

## Current Architecture

### Summary

The portfolio is implemented as a Single Page Application (SPA) focused on presenting professional information, projects, documentation, and development practices through a structured and maintainable user experience.

The architecture prioritizes modularity, clear separation of responsibilities, reusable components, and consistent presentation of information.

---

## Architecture Style

The project currently adopts:

* Single Page Application (SPA)
* Client-Side Rendering (CSR)
* Component-Based Architecture
* Documentation-Driven Organization

---

## Information Architecture

The portfolio is organized around the following sections:

```text
Portfolio
│
├── Hero
├── About
├── Skills
├── Experience
├── Projects
├── Documentation
└── Contact
```

### Hero

Introduces the portfolio and communicates the primary professional identity of the developer.

### About

Provides professional background, development philosophy, and personal introduction.

### Skills

Presents relevant technologies, tools, and areas of expertise.

### Experience

Highlights professional experience and career progression.

### Projects

Showcases selected projects, technologies, implementation details, and development practices.

### Documentation

Provides access to project documentation and demonstrates the documentation model adopted throughout development.

### Contact

Provides communication channels and professional references.

---

## Main Modules

### Presentation Module

Responsible for presenting personal and professional information.

### Project Showcase Module

Responsible for displaying projects and implementation highlights.

### Documentation Module

Responsible for exposing project documentation and development practices.

### Navigation Module

Responsible for providing access to the application's sections.

### Contact Module

Responsible for exposing communication channels and professional references.

---

## Navigation Architecture

The application follows a section-based navigation model.

```text
Visitor
    ↓
Navigation
    ↓
Portfolio Sections
    ↓
Projects
Documentation
Contact Channels
```

Navigation is designed to provide direct access to all major sections while maintaining a continuous browsing experience.

---

## External Integrations

Current integrations include:

* GitHub
* LinkedIn
* Email

Additional integrations may be incorporated as the project evolves.

---

## Architectural Dependencies

The architecture depends on the following relationships:

* Navigation depends on the information architecture.
* Portfolio sections depend on their corresponding content sources.
* Project presentation depends on project metadata.
* Documentation presentation depends on project documentation.
* Contact channels depend on external platforms.

---

## Technical Considerations

The architecture prioritizes:

* Reusable components.
* Clear separation of responsibilities.
* Consistent information presentation.
* Responsive user experience.
* Long-term maintainability.
* Scalable content organization.
* Documentation-driven development.

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
