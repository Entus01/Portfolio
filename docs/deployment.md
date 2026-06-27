# Deployment

## Purpose

This document describes the build, configuration, and deployment process currently used by the Portfolio project.

Its purpose is to provide a clear and up-to-date reference for preparing, publishing, and maintaining a functional version of the application.

Unlike reusable deployment templates, this document reflects the actual operational process adopted by this portfolio.

---

## Objectives

- Document the current deployment workflow.
- Facilitate publishing new versions.
- Reduce operational errors.
- Centralize build and environment information.
- Facilitate onboarding of future collaborators.
- Serve as a reference for maintenance tasks.

---

## When to Update this Document

Update this document when there are relevant changes related to:

- Deployment platforms.
- Build processes.
- Required environment variables.
- Publishing automations.
- Infrastructure configuration.
- External services used during deployment.
- Domain configuration.
- Release strategies.

---

## When Not to Update this Document

It is not necessary to update this document for:

- Functional changes.
- Content updates.
- Visual adjustments.
- Internal refactors.
- Routine documentation updates.
- Changes that do not affect build or deployment.

---

## Current Deployment

### Application Type

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

The Portfolio project is a static web application focused on presenting professional information, projects, and development practices.

The application is built using Vite and deployed through Vercel.

Deployment is automated and triggered by repository updates, reducing manual operational tasks and ensuring a consistent publishing workflow.

The project currently does not require backend infrastructure or server-side services.

---

## Environments

The project currently uses the following environments:

```text
Development
Production
```

### Development

Local environment used during active development.

Runs through the Vite development server:

```bash
npm run dev
```

### Production

Production environment automatically deployed through Vercel.

The production version represents the latest stable state of the portfolio.

---

## Requirements

The following tools are required to build and maintain the project:

```text
Node.js
npm
Git
```

Access to the repository and deployment platform is also required for publishing and maintenance activities.

---

## Environment Variables

The project currently does not require custom environment variables.

If environment-specific configuration becomes necessary in the future, variables should be documented here and managed through an appropriate configuration file such as:

```text
.env.example
```

---

## Build Process

The production build is generated using the following commands:

```bash
# Install dependencies
npm install

# Generate production build
npm run build
```

The generated output is placed in:

```text
dist/
```

---

## Vite Configuration

The project uses Vite as its build tool.

The active configuration is maintained in:

```text
vite.config.js
```

Any changes affecting build behavior, routing, asset handling, or localization should be reflected in this document when they impact deployment.

---

## Deployment Platform

The project is currently deployed using:

```text
Vercel
```

Vercel is responsible for:

- Build execution.
- Static asset delivery.
- Production hosting.
- Automated deployment workflow.

---

## Domain Strategy

The portfolio currently uses its default deployment domain.

Future domain strategies may include:

```text
username.github.io
```

or

```text
Custom Domain
```

Domain-related changes should be documented when implemented.

---

## Automation

The deployment process is automated.

Deployments are triggered through repository updates connected to Vercel.

Current automation includes:

```text
Automatic Build
Automatic Deployment
Production Publishing
```

Future automation may include:

```text
Build Validation
Preview Deployments
Analytics Integration
```

---

## Publishing Procedure

The recommended process for publishing a new version is:

1. Verify that the application works correctly in development.
2. Update relevant documentation when necessary.
3. Review and commit pending changes.
4. Push changes to the repository.
5. Verify that the Vercel deployment completes successfully.
6. Validate the deployed version.
7. Confirm that all portfolio sections and navigation flows work correctly.

---

## Operational Considerations

### Documentation Synchronization

Any relevant change affecting build or deployment should be reflected in this document to maintain alignment with the actual deployment workflow.

---

### Case-Sensitive Paths

The production environment should be treated as case-sensitive.

Imports, folder names, and file names must match exactly to avoid deployment issues across different operating systems and hosting environments.

---

### Single Page Application Routing

The application uses React Router and follows a Single Page Application architecture.

Internal routes and navigation behavior should be validated after deployment to ensure proper operation.

Any routing strategy changes should be documented here.

---

### Localization

The project supports bilingual content.

Translations are managed directly within the frontend application and do not depend on external localization services.

Any future localization platform or content management integration should be documented as part of the deployment process.

---

### Analytics

The project currently does not use analytics services.

If analytics are introduced in the future, the required configuration, deployment considerations, and maintenance procedures should be documented in this file.

---

### Deployment Changes

Relevant modifications to deployment platforms, publishing procedures, or infrastructure should also be recorded in:

```text
docs/changelog.md
```

and, when they involve a significant long-term decision, in:

```text
docs/decisions.md
```

---

## Security Considerations

This document must never include:

- Credentials.
- Tokens.
- Secrets.
- Private keys.
- Sensitive configuration values.

Operational information should always use descriptive placeholders instead of exposing real values.

---

## Terminology

The terminology used in this document must remain aligned with the definitions established in:

```text
docs/glossary.md
```

When new concepts related to infrastructure, deployment, automation, environments, or hosting require a shared interpretation, they should be registered in the glossary.

This document should use the official project terminology and avoid maintaining duplicate definitions.

---

## Fundamental Principle

This document must represent the actual process currently used to build and deploy the project.

If the operational workflow changes, the documentation must be updated to reflect the current implementation rather than an idealized or outdated process.

Its primary purpose is to serve as the source of truth for publishing, operating, and maintaining the portfolio across its supported environments.
