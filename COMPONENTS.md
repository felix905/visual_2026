# COMPONENTS

## 1. PURPOSE

This document defines the reusable content and structure blocks that should be planned before implementation. It does not define final visual design or a Design System yet.

## 2. COMPONENT CATEGORIES

### Layout components
- Header
- Footer
- Page wrapper
- Section wrapper
- Container
- Grid utilities
- CTA banner

### Content components
- Hero
- SectionHeader
- AudienceCard
- ProgramCard
- FeatureList
- ProcessStep
- Testimonial
- CaseStudy
- FAQ
- Metric or statistic block
- LogoStrip
- CTA

### Form components
- ContactForm
- AudienceSelector
- Radio/Select group
- Textarea
- Input field
- Submit button

## 3. RECOMMENDED COMPONENTS FOR V2

### Header
Purpose:
- primary navigation
- audience entry points
- one clear CTA

Required behavior:
- links for Colegios, Empresas, Familias, Recursos, Nosotros, Contacto
- CTA label: Hablar con Visium
- mobile adaptation

### Footer
Purpose:
- secondary navigation
- trust information
- contact details
- service links

### Hero
Purpose:
- primary positioning and conversion path
- headline, subheadline, CTA, secondary CTA

### SectionHeader
Purpose:
- consistent section labeling and hierarchy
- repetitive page structure management

### AudienceCard
Purpose:
- map the three key audience segments visually and clearly

### ProgramCard
Purpose:
- make each service line clear and scannable
- include pricing reference if validated
- include CTA

### ProcessStep
Purpose:
- explain how Visium works
- 4-step educational structure

### Testimonial / CaseStudy
Purpose:
- provide proof only when approved
- placeholders must be marked clearly

### FAQ
Purpose:
- answer common questions and reduce friction
- should support future expansion

### CTA
Purpose:
- guide conversion for each page
- consistent action language

### ContactForm
Purpose:
- collect qualified lead intent
- support future lead management integration

## 4. COMPONENTS TO PRESERVE FROM THE CURRENT SITE

The existing site already contains patterns useful for V2 planning:
- hero structure with direct CTA
- audience/service blocks
- FAQ pattern using details and summary
- contact form approach
- direct conversion CTA logic

These should be preserved structurally, but not copied blindly without re-evaluating content and business validation.

## 5. COMPONENTS THAT REQUIRE VALIDATION

These should not be implemented without confirmation:
- metrics blocks
- customer logos
- testimonial cards
- case studies
- pricing blocks
- impact claims

All such items must be marked as:
- [DATA_TO_VERIFY]
- [TESTIMONIO REAL PENDIENTE]
- [CASO DE ÉXITO PENDIENTE]
- [LOGO DE CLIENTE PENDIENTE]

## 6. COMPONENTS TO AVOID FOR NOW

For the current Phase 01 planning stage, avoid:
- final visual design decisions
- unnecessary animation-heavy components
- decorative grids that do not serve a purpose
- visual-only cards without factual or user-centered content
- overuse of social-proof widgets without validated content

## 7. COMPONENTS REUSE STRATEGY

The V2 target is a small but consistent component library for:
- Home
- audience pages
- support pages
- conversion pages

This keeps the architecture modular while avoiding premature design system work.

## 8. FINAL NOTE

The component inventory should remain intentionally conservative until the business and content validations are complete. The design should follow the page architecture and the conversion logic, not the other way around.
