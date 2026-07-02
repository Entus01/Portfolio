# Deployment

## Purpose

This document describes the build, configuration, and deployment process currently used by the Portfolio project.

Its purpose is to provide a clear and up-to-date reference for building, publishing, operating, and maintaining the application across its supported environments.

Unlike reusable deployment templates, this document reflects the actual deployment workflow implemented by this portfolio.

---

## Objectives

- Document the deployment workflow.
- Facilitate reliable publishing.
- Reduce operational errors.
- Centralize deployment information.
- Support long-term maintenance.
- Provide a reference for future deployment changes.

---

## When to Update this Document

Update this document whenever changes affect:

- Deployment platforms.
- Build processes.
- Environment variables.
- Deployment automation.
- Infrastructure.
- Domain configuration.
- Release strategy.
- External services used during deployment.

---

## When Not to Update this Document

This document should not be updated for:

- Functional features.
- Portfolio content.
- Visual changes.
- Minor refactors.
- Documentation unrelated to deployment.
- Internal implementation details that do not affect publishing.

---

# Current Deployment

## Application Type

```text
Single Page Application (SPA)
```

Built with:

```text
React
React Router
Vite
```

---

## Deployment Summary

The Portfolio project is a static Single Page Application that presents the developer's professional identity, engineering philosophy, technical skills, selected projects, and contact information through a structured user experience.

The application is built using Vite and deployed through Vercel.

Deployment is fully automated through repository integration, providing a predictable publishing workflow while minimizing manual operational tasks.

The project currently requires no backend infrastructure or server-side services.

---

# Environments

The project currently uses two environments.

```text
Development
Production
```

## Development

Local environment used during active development.

Run with:

```bash
npm run dev
```

---

## Production

Production environment hosted by Vercel.

This environment always represents the latest stable public version of the portfolio.

---

# Requirements

Deployment requires:

```text
Node.js
npm
Git
```

Publishing additionally requires access to:

- GitHub repository
- Vercel project

---

# Environment Variables

The project currently does not require custom environment variables.

If future integrations require configuration values, they should be documented here together with a corresponding:

```text
.env.example
```

file.

---

# Build Process

Generate the production build using:

```bash
npm install

npm run build
```

The generated build is placed in:

```text
dist/
```

---

# Vite Configuration

The build system is configured through:

```text
vite.config.js
```

Changes affecting:

- Routing
- Build behavior
- Assets
- Localization

should be reflected in this document whenever they modify the deployment workflow.

---

# Deployment Platform

The portfolio is currently deployed using:

```text
Vercel
```

Responsibilities include:

- Production builds
- Static asset hosting
- Automatic deployments
- Production hosting

---

# Domain Strategy

The portfolio currently uses its default Vercel domain.

Future options include:

```text
Custom Domain
```

or

```text
username.github.io
```

Domain configuration changes should be documented here.

---

# Automation

Deployment is fully automated.

Repository updates trigger:

```text
Automatic Build
Automatic Deployment
Production Publishing
```

Future improvements may include:

```text
Preview Deployments
Analytics
Build Validation
```

---

# Publishing Procedure

Recommended deployment workflow:

1. Verify the application locally.
2. Verify documentation reflects the current implementation.
3. Review pending changes.
4. Commit changes.
5. Push to the repository.
6. Verify the Vercel deployment.
7. Validate the deployed portfolio.
8. Verify every route and navigation flow.

---

# Operational Considerations

## Documentation Consistency

Project documentation should always describe the current implementation.

Deployment changes affecting architecture, navigation, workflow, or infrastructure should be reflected in the appropriate documentation before publication.

---

## Documentation Synchronization

Deployment-related changes should remain synchronized with:

```text
architecture.md
deployment.md
decisions.md
changelog.md
```

---

## Case-Sensitive Paths

Production environments should always be treated as case-sensitive.

Folder names, imports, and filenames must match exactly.

---

## Routing

Navigation is implemented through React Router.

After deployment, verify:

- Every route loads correctly.
- Internal navigation functions correctly.
- Direct URL access works as expected.

Changes to routing strategy or information architecture should be documented.

---

## Localization

The portfolio supports bilingual content.

Localized content is currently maintained directly within the frontend application.

Future localization services or content management solutions should be documented here.

---

## Analytics

Analytics are not currently implemented.

Future integrations should document:

- Configuration
- Deployment considerations
- Maintenance requirements

---

## Deployment Evolution

Significant deployment changes should also be reflected in:

```text
docs/changelog.md
```

Long-term operational decisions should additionally be recorded in:

```text
docs/decisions.md
```

---

# Security Considerations

This document must never contain:

- Credentials
- Tokens
- Secrets
- Private keys
- Sensitive configuration

Use descriptive placeholders whenever configuration examples are required.

---

# Terminology

Terminology used throughout this document should remain consistent with:

```text
docs/glossary.md
```

New deployment concepts should be defined in the glossary instead of being redefined here.

---

# Fundamental Principle

This document describes the deployment process that is actually implemented.

Whenever the deployment workflow evolves, this document should evolve with it.

Its purpose is to remain the single source of truth for building, publishing, operating, and maintaining the portfolio throughout its lifecycle.