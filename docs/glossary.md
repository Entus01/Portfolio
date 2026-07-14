# Glossary

## Purpose

This document centralizes the definitions of terms used throughout the Portfolio project's documentation.

Its purpose is to reduce ambiguity, facilitate communication, and maintain a consistent vocabulary across the repository.

Whenever a technical, architectural, organizational, or project-specific concept requires a shared interpretation, its definition should be maintained here.

---

## Objectives

- Provide a single source of truth for project terminology.
- Reduce ambiguity across documentation.
- Facilitate onboarding and future collaboration.
- Maintain consistency throughout the repository.
- Clarify project-specific concepts.
- Support the long-term maintainability of the documentation.

---

## When to Update this Document

Update this document whenever:

- New terminology is introduced.
- Frequently used concepts appear across multiple documents.
- Existing definitions require clarification.
- New architectural patterns are adopted.
- New development practices become part of the project.
- A concept requires a project-specific interpretation.

---

## When Not to Update this Document

Do not record:

- Universally known technical definitions.
- Implementation details.
- Development rules.
- Technical decisions.
- Temporary terminology.
- Version-specific information.
- Technology documentation.

---

## Writing Guidelines

Glossary entries should:

- Remain concise.
- Use consistent terminology.
- Avoid circular definitions.
- Focus on meaning rather than implementation.
- Include examples only when they improve clarity.
- Update existing entries instead of creating duplicates.

---

# Terms

## Architecture

The overall organization of the portfolio and the relationships between its layers, modules, components, and information flows.

The implemented architecture is documented in `docs/architecture.md`.

---

## Bilingual Content

Content presented in both English and Spanish while preserving the same meaning, intent, and professional positioning.

---

## Build

The process of transforming the project's source code into a production-ready application.

For this project, builds are generated through Vite.

---

## Cat-Inspired Identity

The visual and conceptual language adopted by the portfolio.

It emphasizes curiosity, precision, elegance, attention to detail, and thoughtful design while maintaining a professional presentation.

---

## Centralized Content

An organizational strategy where portfolio information is maintained through dedicated content modules instead of being duplicated across components.

This approach improves consistency, maintainability, and scalability.

---

## Component

A reusable user interface element with a single clearly defined responsibility.

Components should focus on presentation and interaction rather than data ownership.

---

## Content Layer

The architectural layer responsible for storing the portfolio's information.

Content modules supply data that is consumed by reusable components and portfolio pages.

---

## Content Module

A file responsible for providing structured portfolio information independently of the user interface.

Examples include:

```text
profile.js
skills.js
projects.js
```

---

## Deploy

The process of publishing the application so it becomes publicly accessible.

For this project, deployment is performed through Vercel.

---

## Design System

The set of shared visual and interaction guidelines that ensure consistency across the portfolio's user interface.

It defines typography, spacing, color, component behavior, responsiveness, and accessibility considerations, providing a common visual language for future components and pages.

The Design System is planned in `docs/roadmap.md` under RM-002 and, once implemented, should be reflected in `docs/architecture.md`.

---

## Developer Philosophy

The collection of principles and engineering practices that guide development decisions.

Throughout the portfolio, this philosophy is communicated through both written content and technical implementation.

---

## Documentation-Driven Development

A development approach where documentation evolves together with the implementation and remains synchronized with the project.

Documentation describes the current state of the software rather than an idealized design.

---

## Full Stack Developer

The professional positioning adopted by the portfolio.

It represents the ability to contribute across both frontend and backend development while maintaining a holistic understanding of software systems.

---

## Information Architecture

The organization and progression of content throughout the portfolio.

Rather than presenting isolated pages, the portfolio guides visitors through a coherent professional narrative.

---

## Module

A collection of related files or components sharing a common responsibility.

---

## Portfolio

The web application representing the developer's professional identity, technical skills, engineering philosophy, selected projects, and contact information.

---

## Portfolio Documentation

The collection of documents supporting the development, maintenance, and long-term evolution of the portfolio.

Documentation is maintained within the repository and is not part of the visitor-facing experience.

---

## Portfolio Section

A major area of the portfolio dedicated to communicating one aspect of the developer's professional profile.

Examples include Home, About, Skills, Projects, and Contact.

---

## Professional Positioning

The intentional strategy used to communicate the developer's identity, strengths, engineering approach, and value proposition.

---

## Progressive Narrative

An information architecture strategy where each portfolio page builds naturally upon the previous one, creating a coherent visitor journey.

---

## Project

A selected software project presented to demonstrate engineering practices, technical capabilities, and problem-solving skills.

Projects should reinforce the portfolio's professional positioning.

---

## Project Showcase

The portfolio section responsible for presenting selected projects and explaining their technical implementation.

---

## Repository

The version-controlled source containing the portfolio's implementation, documentation, assets, and configuration.

---

## Responsibility

The single primary purpose assigned to a file, component, module, or document.

Responsibilities should remain focused and avoid unnecessary overlap.

---

## Reusable Component

A component designed to be shared across multiple pages or features without duplicating implementation.

Examples include:

- Navbar
- Footer
- SocialLinks

---

## Route Component

A component representing one complete page within the portfolio.

Each route component communicates one distinct part of the professional narrative.

---

## Single Page Application (SPA)

A web application that dynamically updates content without performing full page reloads.

The portfolio is implemented as a Single Page Application.

---

## Single Source of Truth

A principle stating that information should exist in one authoritative location.

Whenever possible, the portfolio centralizes content to avoid duplication and inconsistencies.

---

## Structure

The logical organization of the repository and its directories.

Repository organization is documented in `docs/structure.md`.

---

## Terminology

The official vocabulary adopted throughout the project.

Whenever uncertainty exists regarding the meaning of a concept, this glossary provides the authoritative definition.

---

## Versioning

The strategy used to identify and manage project evolution through semantic versions.

The portfolio follows the `MAJOR.MINOR.PATCH` convention documented in `docs/changelog.md`.

---

## Fundamental Principle

Every project document should use a shared and consistent vocabulary.

When ambiguity exists regarding the interpretation of a concept, this glossary serves as the project's authoritative reference.

Its primary purpose is to establish a common language that improves communication, reduces misunderstandings, and supports the long-term evolution of both the portfolio and its documentation.