# Decisions

## Purpose

This document records the significant decisions made throughout the Portfolio project.

Its purpose is to preserve the context, reasoning, and trade-offs behind architectural, organizational, and strategic decisions that have a long-term impact on the project.

Well-documented decisions reduce reliance on implicit knowledge and provide historical context for future maintenance and evolution.

---

## Objectives

* Document important project decisions.
* Preserve the reasoning behind long-term choices.
* Reduce knowledge loss over time.
* Facilitate future reviews and revisions.
* Improve traceability throughout project evolution.
* Provide context for architectural and organizational changes.
* Maintain consistency across future development decisions.

---

## When to Update this Document

Record a new decision when it affects:

* Application architecture.
* Information architecture.
* Project organization.
* Technologies used.
* Documentation strategy.
* Navigation model.
* Deployment strategy.
* Professional positioning.
* Long-term development practices.
* Any change with significant future impact.

---

## When Not to Update this Document

It is not necessary to record:

* Minor bug fixes.
* Visual adjustments.
* Small refactors.
* Temporary experiments.
* Routine maintenance tasks.
* Content updates without strategic impact.
* Changes with no long-term consequences.

---

## Decision Records

### DEC-001

**Date:** 2026-06-20
**Status:** Accepted

**Title:** Position the Portfolio as a Full Stack Developer Portfolio

**Context**

The portfolio requires a clear professional identity that accurately reflects the developer's skills, experience, and long-term career direction.

**Options Considered**

1. Frontend Developer
2. Full Stack Developer
3. Software Engineer

**Decision**

Position the portfolio as a Full Stack Developer portfolio.

**Rationale**

The developer's experience spans both frontend and backend development. The portfolio should communicate a complete view of technical capabilities rather than emphasizing a single specialization.

**Impact**

* Influences portfolio messaging.
* Influences project selection.
* Influences technology presentation.
* Influences future portfolio evolution.

---

### DEC-002

**Date:** 2026-06-20
**Status:** Accepted

**Title:** Adopt a Single Page Application Architecture

**Context**

The portfolio requires a navigation model that allows visitors to quickly explore professional information without unnecessary complexity.

**Options Considered**

1. Single Page Application (SPA)
2. Multi Page Application (MPA)
3. Hybrid Approach

**Decision**

Adopt a Single Page Application architecture.

**Rationale**

A SPA provides a smooth navigation experience, simplifies user journeys, reduces maintenance complexity, and supports the portfolio's goal of presenting information efficiently.

**Impact**

* Simplified navigation.
* Reduced routing complexity.
* Faster access to portfolio sections.
* Improved browsing experience.

---

### DEC-003

**Date:** 2026-06-20
**Status:** Accepted

**Title:** Keep Documentation as an Internal Development Asset

**Context**

The project adopts a documentation-driven development process, but it is necessary to define whether documentation should be exposed as part of the visitor experience.

**Options Considered**

1. Public documentation section.
2. Documentation integrated into project pages.
3. Internal documentation only.

**Decision**

Maintain documentation as an internal development asset.

**Rationale**

Documentation exists to support development, organization, and maintenance of the portfolio. Exposing it publicly would add unnecessary repetition and distract from the portfolio's primary purpose.

**Impact**

* Documentation remains project-focused.
* Portfolio content remains concise.
* Visitor attention remains focused on experience and projects.

---

### DEC-004

**Date:** 2026-06-20
**Status:** Accepted

**Title:** Maintain a Balanced Portfolio Structure

**Context**

The portfolio requires a clear strategy regarding what content receives the most emphasis.

**Options Considered**

1. Experience-first.
2. Projects-first.
3. Documentation-first.
4. Balanced representation.

**Decision**

Maintain a balanced representation of experience, skills, philosophy, and projects.

**Rationale**

No single area fully represents the developer's profile. A balanced approach provides a more complete and accurate professional presentation.

**Impact**

* Balanced information hierarchy.
* More complete professional narrative.
* Reduced bias toward a single aspect of the profile.

---

### DEC-005

**Date:** 2026-06-20
**Status:** Accepted

**Title:** Centralize Portfolio Content Through Shared Data Sources

**Context**

Portfolio content should remain easy to maintain and scale as new sections and projects are added.

**Options Considered**

1. Hardcoded content throughout components.
2. Shared centralized data.
3. External CMS.

**Decision**

Centralize portfolio content through shared data sources.

**Rationale**

A centralized approach improves maintainability, consistency, and future scalability while keeping implementation complexity under control.

**Impact**

* Easier content maintenance.
* Improved consistency.
* Simplified future expansion.

---

### DEC-006

**Date:** 2026-06-20
**Status:** Accepted

**Title:** Present Developer Philosophy Before Technical Achievements

**Context**

The portfolio must establish a narrative order for presenting professional information.

**Options Considered**

1. Projects first.
2. Experience first.
3. Philosophy first.

**Decision**

Present development philosophy before technical achievements.

**Rationale**

Understanding how the developer approaches software development provides important context for interpreting projects, experience, and technical decisions.

**Impact**

* Stronger personal narrative.
* Clearer professional identity.
* Better contextualization of technical work.

---

### DEC-007

**Date:** 2026-06-20
**Status:** Accepted

**Title:** Select Projects that Support the Full Stack Narrative

**Context**

Not every project contributes equally to the portfolio's professional positioning.

**Options Considered**

1. Showcase all projects.
2. Showcase visually attractive projects.
3. Showcase projects aligned with the Full Stack narrative.

**Decision**

Select projects that reinforce the Full Stack Developer positioning.

**Rationale**

Projects should support the portfolio's primary objective of demonstrating broad technical capability across the application stack.

**Impact**

* More coherent project selection.
* Stronger professional positioning.
* Improved portfolio consistency.

---

### DEC-008

**Date:** 2026-06-20
**Status:** Accepted

**Title:** Limit Documentation Scope to Portfolio Development

**Context**

The project requires clear boundaries regarding documentation responsibilities.

**Options Considered**

1. Portfolio documentation only.
2. Portfolio documentation plus technical articles.
3. Open documentation repository.

**Decision**

Maintain documentation focused exclusively on portfolio development.

**Rationale**

The documentation system exists to support project organization and maintenance rather than becoming a separate content platform.

**Impact**

* Clear documentation boundaries.
* Reduced maintenance overhead.
* Stronger project focus.

---

### DEC-009

**Date:** 2026-06-20
**Status:** Accepted

**Title:** Adopt a Cat-Inspired Design Identity

**Context**

The portfolio requires a recognizable visual and conceptual identity.

**Options Considered**

1. Generic professional design.
2. Minimalist technical design.
3. Cat-inspired aesthetic identity.

**Decision**

Adopt a cat-inspired identity focused on aesthetics, logic, and functionality.

**Rationale**

The chosen identity reflects personal interests while remaining compatible with a professional presentation and emphasizing clarity, organization, and thoughtful design.

**Impact**

* Stronger visual identity.
* Increased memorability.
* More distinctive portfolio personality.

---

### DEC-010

**Date:** 2026-06-20
**Status:** Accepted

**Title:** Provide Bilingual Content Support

**Context**

The portfolio is intended for both local and international audiences.

**Options Considered**

1. Spanish only.
2. English only.
3. Bilingual content.

**Decision**

Provide bilingual content support.

**Rationale**

Supporting multiple languages increases accessibility and broadens the portfolio's reach without altering its core message.

**Impact**

* Wider audience reach.
* Improved accessibility.
* Greater professional flexibility.

---

## Decision Statuses

### Proposed

The decision has been identified but has not yet been adopted.

### Accepted

The decision has been approved and is part of the project.

### Superseded

The decision has been replaced by a newer one.

### Rejected

The decision was considered but ultimately discarded.

---

## Relationship with Other Documents

### architecture.md

Documents the current architecture.

This document explains why that architecture was adopted.

### changelog.md

Documents what changed.

This document explains why those changes were made.

### roadmap.md

Documents future initiatives.

This document records the decisions that eventually shape those initiatives.

### rules.md

Documents project standards and conventions.

This document explains decisions that establish or modify those standards.

---

## Terminology

The terminology used in this document must remain aligned with the definitions established in:

`docs/glossary.md`

When new concepts related to architecture, organization, or decision management require a shared interpretation, they should be registered in the glossary.

This document should use the officially defined terminology and avoid maintaining duplicate definitions.

---

## Fundamental Principle

Important decisions should be recorded together with the context that motivated them.

Implementations may evolve over time, but understanding why a decision was made helps preserve consistency and supports future project evolution.

Its primary purpose is to capture the reasoning behind long-term choices rather than document implementation details.
