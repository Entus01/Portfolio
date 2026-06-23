# Changelog

## Purpose

This document records the significant evolution of the Portfolio project over time.

Its purpose is to provide a concise history of relevant changes affecting the portfolio's functionality, architecture, content organization, and user experience.

This document complements the Git history by highlighting changes that have a meaningful impact on the project's evolution.

---

## Objectives

* Document the significant evolution of the portfolio.
* Provide historical context for important changes.
* Summarize project releases without duplicating Git history.
* Improve traceability across portfolio versions.
* Record architectural, functional, and organizational milestones.
* Maintain a concise and readable history of project progress.

---

## When to Update this Document

Update this document when there are relevant changes related to:

* New portfolio sections.
* New project showcase capabilities.
* Architectural changes.
* Major application reorganizations.
* Information architecture changes.
* Addition or removal of technologies.
* Deployment process changes.
* Changes affecting user experience.
* Creation or removal of major documentation areas.
* Publication of a new project version.

---

## When Not to Update this Document

It is not necessary to update this document for:

* Routine commits.
* Minor bug fixes.
* Small visual adjustments.
* Minor refactors.
* Writing corrections.
* Small content updates.
* Internal changes with no visible impact.
* Trivial dependency updates.

---

## Recommended Structure

The changelog should answer, at minimum, the following questions.

### What version is being documented?

Examples:

* 1.0.0
* 1.1.0
* 2.0.0

### When was the version released?

Examples:

* 2026-06-20

### What functionality was added?

Examples:

* New sections.
* New projects.
* New documentation areas.
* New integrations.

### What functionality changed?

Examples:

* Navigation improvements.
* Information architecture updates.
* Layout reorganizations.
* Architectural refinements.

### What was removed or fixed?

Examples:

* Deprecated sections.
* Obsolete functionality.
* Important bug fixes.

---

## Recommended Template

The changelog should summarize relevant project evolution while keeping entries concise and focused on impact.

```text
## [Version] - YYYY-MM-DD

### Added

-

### Changed

-

### Removed

-

### Fixed

-

### Notes

-
```

---

## Versioning Convention

The project follows Semantic Versioning.

### Format

```text
MAJOR.MINOR.PATCH
```

Examples:

```text
1.0.0
1.1.0
1.2.0
2.0.0
```

### MAJOR

Represents significant architectural changes or major portfolio restructurings.

Examples:

* Complete portfolio redesign.
* Major navigation changes.
* Fundamental architecture changes.
* Significant information architecture changes.

### MINOR

Represents new functionality that remains compatible with previous versions.

Examples:

* New portfolio sections.
* New project showcases.
* New documentation areas.
* New integrations.

### PATCH

Represents fixes and improvements that do not introduce new functionality.

Examples:

* Bug fixes.
* Content improvements.
* Visual refinements.
* Accessibility improvements.

---

## Relationship with Other Documents

### roadmap.md

Defines future initiatives.

Completed initiatives should eventually be reflected in the changelog.

### decisions.md

Records the reasoning behind important changes.

The changelog records the outcome of those changes.

### architecture.md

Documents the current architecture.

The changelog records how the architecture evolved.

### deployment.md

Relevant deployment changes should be reflected when they affect the project's evolution.

### glossary.md

Defines the terminology used throughout the project.

Terms used in this document should remain aligned with the glossary.

---

## Terminology

The terminology used in this document must remain aligned with:

```text
docs/glossary.md
```

When new concepts related to releases, versioning, or project evolution require a shared interpretation, they should be registered in the glossary.

---

## Relationship with Git

The changelog complements the Git history.

### Git answers:

```text
What exactly changed?
```

### Changelog answers:

```text
Why was that change important for the portfolio's evolution?
```

Both mechanisms should be kept aligned to provide traceability and historical context.

---

## Fundamental Principle

The commit history explains the work performed.

The changelog explains the evolution of the portfolio.

For this reason, entries should focus on the impact of changes rather than implementation details.

Its primary purpose is to provide a clear, concise, and maintainable record of the portfolio's evolution while complementing, not replacing, the version control history.
