# ARCHITECTURE

## 1. PURPOSE OF THIS ARCHITECTURE

This document defines the proposed information architecture for the future Visium Digital 2.0 implementation. It is a planning blueprint only and does not implement the site yet.

The current project does not yet suggest a fully consistent IA for the three commercial audiences. The new structure should therefore be clarified before implementation and should remain flexible enough to adapt to real business validation.

## 2.1 BUSINESS VALIDATION BASELINE

The current validated commercial model is:
- Educación Financiera: Colegios y Familias
- Consultoría de Gestión: Empresas

Principles:
- Colegios and Familias remain inside the financial education line.
- Empresas is not positioned as a financial education program for employees.
- All pricing, evidence, and claims remain subject to validation before publication.

## 2. CURRENT PROJECT SIGNALS

The existing project suggests a few useful patterns:
- the brand already speaks to financial education
- there is a product family around families and educational institutions
- CTA-driven landing pages already exist
- conversion paths are already established via forms, WhatsApp, and consultation flows

However, the existing project also suggests a mixed IA because it includes:
- family education pages
- school education pages
- digital/business content pages
- informational content and library pages

This means the existing project does not strongly indicate that the final structure should simply be the same as the current site. Instead, it suggests the need to unify and segment it.

## 3. PROPOSED V2 INFORMATION ARCHITECTURE

The project brief proposes the following initial route structure:
- /
- /colegios
- /empresas
- /familias
- /recursos
- /nosotros
- /contacto

This is a good starting point, but it should be evaluated as a strategic proposal, not a final commitment. The real structure should depend on the actual product mix and the sales flow.

### Evaluation of the proposed structure
This structure is sensible because it matches the three main commercial audiences and adds support pages for trust, knowledge, and lead capture.

However, the current project suggests the following nuance:
- Family content probably already exists and should remain, but it should not dominate the IA by default.
- School/institutional programs may deserve stronger conceptual separation and a direct conversion path.
- Company programs may need a more direct B2B narrative than the site currently provides.

### Recommendation
Use the proposed structure as a baseline, but keep the final URLs under review until business validation confirms the actual service mix and naming conventions.

## 4. PAGE-BY-PAGE ARCHITECTURE

## 4.1 HOME

### Objective
Be the primary commercial entry point for all audiences and allow any visitor to quickly understand:
1. What Visium Digital does.
2. Who it is for.
3. What problem it solves.
4. How it works.
5. What the next action is.

### Target audience
- directores y coordinadores de colegios
- empresas y equipos
- familias
- professionals and other decision-makers

### Main user need
Visitors need clarity about whether Visium fits their reality before they hand over contact details.

### Main message
Formación financiera diseñada para tu realidad.

This remains the current positioning hypothesis, not final marketing copy. It should be clarified through the audience-specific propositions below:
- Colegios: financial education for students and institutions
- Empresas: practical/customized financial training for teams
- Familias: practical financial education for the family context

### Primary CTA
- Cuéntanos qué necesitas

### Secondary CTA
- Conoce nuestros programas

### Sections to evaluate
- Header
- Hero
- Audience segmentation
- How Visium works
- Programs / solutions
- Social proof / cases
- About Visium
- Final CTA
- Footer

### Content required
- concise positioning statement
- clear audience-based offer split
- explanation of how the learning process works
- evidence placeholders for cases and testimonials
- clear conversion CTA

### SEO intent
- broad commercial entry page
- primary keyword hypothesis: educación financiera

### Reusable components
- Header
- Hero
- AudienceCard
- ProgramCard
- SectionHeader
- CTA
- Testimonial / CaseStudy placeholder

## 4.2 COLEGIOS

### Objective
Help school leaders quickly understand the utility of Visium for students and institutional education.

### Target audience
- directors
- coordinadores
- responsables académicos
- owners and management of schools

### Main user need
They need a practical solution for student financial education that is aligned to the school context.

### Main message
Educación financiera para colegios y estudiantes, adaptada al contexto de cada institución.

### Primary CTA
- Solicitar programa

### Secondary CTA
- contextual fallback contact

### Sections
- Problem / context
- Program
- How it works
- Benefits
- Evidence / cases
- Pricing or pricing reference if validated
- FAQ
- CTA

### Content required
- institution-level problem framing
- educational outcomes
- program structure and practical delivery model
- examples of how the program adapts to age and school context
- pricing reference if business validation exists
- FAQs about duration, delivery, and customization

### SEO intent
- educación financiera para colegios

### Reusable components
- Hero
- Problem block
- Feature list
- Process / How it works
- Pricing card
- FAQ
- CTA

## 4.3 EMPRESAS

### Objective
Position Visium as a training partner for organizations that need practical financial education for teams.

### Target audience
- companies
- managers
- HR or learning teams
- professional groups and workforces

### Main user need
They need a practical program for professionals and teams, adapted to the size and needs of the organization.

### Main message
Practical/customized financial training for teams.

### Positioning alternatives
- Educación financiera para empleados
- Formación financiera para equipos
- Formación financiera personalizada para empresas

The final formulation is [BUSINESS DECISION REQUIRED]. SEO must not decide this positioning; the decision must follow the actual commercial offer, sales language, and buyer expectation.

### Primary CTA
- Diseñar un programa para mi equipo

### Secondary CTA
- contextual fallback contact

### Sections
- Business problem
- Training solution
- Format
- Customization
- Benefits
- Evidence / cases
- Pricing or pricing reference if validated
- FAQ
- CTA

### Content required
- business challenge framing
- format details (group size, duration, modality, structure)
- customization points
- outcomes and professional application
- pricing reference only if validated
- FAQs around adaptation and commercial conversations

### SEO intent
- formación financiera para empresas

### Reusable components
- AudienceHero
- Service path
- Customization table or list
- Program format blocks
- Pricing reference card
- FAQ
- CTA

## 4.4 FAMILIAS

### Objective
Provide a practical, human offer for families while keeping it differentiated from the school and company offer.

### Target audience
- parents
- caregivers
- young people and family groups

### Main user need
They need practical education to improve habits, decision-making, and financial confidence at home.

### Main message
A more human, supportive financial education experience designed for the family context.

### Primary CTA
- Conocer programas

### Secondary CTA
- contextual fallback contact

### Status
PROVISIONAL. Resources should only become a substantial navigation section when the business has enough validated content to maintain it. Until then, this area may remain limited or be deferred without weakening the commercial architecture.

### Sections
- Problem
- Programs
- Method
- Benefits
- Evidence
- FAQ
- CTA

### Content required
- family problem framing
- practical and human learning approach
- program options or a central program line
- educational examples for parents and children
- testimonials or cases only if verified

### SEO intent
- educación financiera para familias

### Reusable components
- Family-focused hero
- Program list
- Method steps
- FAQ
- CTA

## 4.5 RECURSOS

### Objective
Serve as a content hub and future knowledge center without forcing fake article publishing before the content strategy is validated.

### Target audience
- general audience interested in financial education
- future prospects seeking education and support
- all segments via internal linking

### Main user need
Visitors need educational content that can build trust and support organic discovery.

### Main message
Resources that support better financial decisions and learning.

### Primary CTA
- Explorar recursos

### Secondary CTA
- contextual fallback contact

### Sections
- landing/index page
- categories
- article list framework
- internal linking strategy
- conversion paths toward Colegios / Empresas / Familias

### Content required
- category structure
- resource cards
- future article template
- SEO metadata rules for future articles
- internal linking plan toward service pages

### SEO intent
- educational content and resource discovery, but not keyword stuffing

### Reusable components
- ResourceIndexCard
- CategoryPill
- Search-ready layout
- SEO metadata block
- CTA banner

## 4.6 NOSOTROS

### Objective
Answer the trust question: Why should someone trust Visium?

### Target audience
- prospects comparing providers
- institutional buyers
- parents
- business decision-makers

### Main user need
They need assurance that Visium has credible experience, a clear methodology, and a responsible approach.

### Main message
Visium exists to make financial education practical, contextual, and useful in real life.

### Primary CTA
- Cuéntanos qué necesitas

### Secondary CTA
- Conoce nuestros programas

### Sections
- Who is behind Visium
- Experience
- Methodology
- Credibility
- Mission / approach

### Content required
- founder or team background if validated
- methodology and philosophy
- educational experience
- credibility signals only if real and approved
- trust-building narrative without turning the page into a CV

### SEO intent
- brand trust and credibility page, not a generic corporate page

### Reusable components
- Story block
- ValuePrinciple list
- Credentials/experience list
- CTA section

## 4.7 CONTACTO

### Objective
Convert visitor intent into a qualified request.

### Target audience
- all public segments

### Main user need
Visitors need a way to explain their need quickly and clearly.

### Main message
Tell us what you need and we will guide you toward the right program or next step.

### Conversion model
- GLOBAL CONTACT: general fallback conversion for visitors whose needs are not yet classified.
- CONTEXTUAL CONVERSION: audience pages should lead to the relevant inquiry path.
	- Colegios: school-specific inquiry
	- Empresas: team-training inquiry
	- Familias: family-program inquiry

The Contact page is not the only conversion mechanism. Future forms may use audience-specific fields, routing, and qualification questions.

### Primary CTA
- Enviar consulta

### Secondary CTA
- Contactar por WhatsApp / email

### Sections
- audience selector
- need / service selector
- contact information
- form fields
- CTA and follow-up instructions

### Content required
- selector for Colegio / Empresa / Familia / Profesional / Otro
- relevant conditional fields
- organization and participant size information
- message and context
- follow-up expectations and privacy note

### SEO intent
- lead capture page rather than a generic contact page

### Reusable components
- ContactForm
- Input groups
- Select / radio blocks
- CTA banner

## 5. HOME COMMERCIAL EVALUATION

The Home should not be treated as a personal brand page or corporate presentation. It should behave like a conversion-oriented commercial entry point.

### Recommended home sequence
1. Header
2. Hero
3. Audience segmentation
4. How Visium works
5. Programs / solutions
6. Social proof / cases
7. About Visium
8. Final CTA
9. Footer

### User decision criteria
The Home should allow a visitor to quickly determine:
- what Visium does
- who it is for
- which problem it solves
- whether the offer is relevant
- which action to take next

## 6. EXISTING STRUCTURE VS PROPOSED STRUCTURE

### What the existing project suggests
- a strong educational theme
- family and school content already exist
- a conversion-driven structure is already familiar

### What the new architecture should improve
- segment the audience more clearly
- reduce the mix of educational topics and campaign pages
- prioritize the three main segments in a more commercial way
- separate trust-building pages from commercial pages
- create a clearer content and SEO hierarchy

## 7. BUSINESS DECISION PATTERN

If the current site or brief introduces conflicting information, the architecture should document it as:
- [BUSINESS DECISION REQUIRED]

Example structure:
- CURRENT: +200 familias
- PROPOSED: 12 familias / 20 alumnos / 2 colegios
- QUESTION: Which numbers are current and valid for the new commercial site?

## 8. RECOMMENDED IMPLEMENTATION ORDER FOR PHASE 02

1. Validate audience priorities and business positioning.
2. Confirm pricing references and proof claims.
3. Approve the final route structure and page objectives.
4. Finalize content map and SEO map.
5. Create page skeletons for core pages.
6. Build Home and conversion-focused landing sections.
7. Add internal pages and support content.
8. Review accessibility, responsive behavior, and SEO structure.
9. Only then move to final visual refinement.

## 9. FINAL ARCHITECTURE CONCLUSION

The most appropriate V2 architecture is a controlled, audience-first model centered on:
- Colegios
- Empresas
- Familias

The support pages should reinforce credibility, content growth, and lead generation without diluting the main commercial paths. The current project supports this direction, but successful implementation depends on validating claims, pricing, and content sources before the V2 build begins.

## 1. BUSINESS PRIORITY

The current brief identifies the following primary commercial audiences:
1. Colegios
2. Empresas
3. Familias

These audiences are not equally weighted in the current brief. Based on the brief and the commercial context, the likely priority order is:
- Colegios: highest commercial priority
- Empresas: high commercial priority
- Familias: relevant and important, but should not automatically dominate the site architecture

### Commercial priority assessment

| Audience | Commercial priority | Current evidence | Offer maturity | Conversion path | Content need | Proof status |
|---|---|---|---|---|---|---|
| Colegios | High | Clear institutional buyer and structured educational need | Medium | Strong if framed around school decision-makers | High | Requires validation |
| Empresas | High | Clear B2B training need and team-based offer | Medium | Strong if customized and business-led | High | Requires validation |
| Familias | Medium | Existing family offer is present and relevant | Medium | Strong but likely more educational / lower-intent than B2B | Medium | Requires validation |

### Business priority conclusion
The V2 architecture must not assume equal commercial weight across the three. The business brief itself gives Colegios and Empresas stronger commercial priority than Familias. Family content should remain present, but not automatically dominate the navigation or homepage hierarchy.

### Business decision flag
- [BUSINESS DECISION REQUIRED]
- CURRENT: The brief names three audiences but indicates that Colegios and Empresas are the highest priority.
- PROPOSED: Keep Colegios and Empresas as primary revenue paths; keep Familias as a supported but secondary route.
- QUESTION: Is the business ready to prioritize Colegios and Empresas ahead of Familias in the first commercial rollout?

## 2. HOME ARCHITECTURE

The Home must function as the main commercial entry point. It should not be treated as a personal/company presentation page or a generic landing page for a single product line.

### Core question hierarchy
The Home should answer, in order:
1. What is Visium?
2. What does Visium offer?
3. Who is it for?
4. What problem does it solve?
5. How does it work?
6. Why should I trust it?
7. What should I do next?

### Recommended structure
HEADER
↓
HERO
↓
AUDIENCE SEGMENTATION
↓
HOW VISIUM WORKS
↓
PROGRAMS / SOLUTIONS
↓
PROOF / CASES / TESTIMONIALS
↓
ABOUT / CREDIBILITY
↓
FINAL CTA
↓
FOOTER

### Section-by-section evaluation

#### Header
- Objective: orient visitors to the core site and guide them toward the correct audience path.
- User question answered: Where do I start?
- Audience: all audiences.
- Content required: logo, audience navigation, one primary CTA.
- CTA: Cuéntanos qué necesitas
- Source of information: current brief and legacy navigation patterns.
- Verified: partially; brand assets require validation.

#### Hero
- Objective: establish the brand and immediate value proposition.
- User question answered: What does Visium do?
- Audience: all visitors.
- Content required: clear positioning, message, audience hint, two CTAs.
- CTA: Cuéntanos qué necesitas; Conoce nuestros programas
- Source of information: brief and current website patterns.
- Verified: partially; business copy must be validated before going live.

#### Audience segmentation
- Objective: direct different user groups to the right path quickly.
- User question answered: Who is it for?
- Audience: all visitors.
- Content required: a concise segmentation for Colegios, Empresas, Familias.
- CTA: Ver programas / Diseñar programa / Conocer programas
- Source of information: business brief.
- Verified: yes, as a structural requirement; exact wording still needs validation.

#### How Visium works
- Objective: explain the practical process and reduce friction.
- User question answered: How does it work?
- Audience: all visitors.
- Content required: 3–4-step path that explains understanding, designing, teaching, applying.
- CTA: contextual next step; final wording remains provisional
- Source of information: current brief already defines the process in four steps.
- Verified: yes, at the strategic level; message needs final wording.

#### Programs / solutions
- Objective: show the core offer in a scannable way.
- User question answered: What does Visium offer?
- Audience: all visitors.
- Content required: a summary of the three audiences and the main solution path for each.
- CTA: depends on audience page, but page-level CTA must be explicit.
- Source of information: current site + brief.
- Verified: partially; pricing and program details remain unverified.

#### Proof / cases / testimonials
- Objective: provide trust-building evidence where it exists.
- User question answered: Why should I trust this?
- Audience: qualified prospects.
- Content required: cases, testimonials, client logos, or other proof only if validated.
- CTA: See relevant case / contextual conversation
- Source of information: current project contains references to family stories, students, schools, and testimonial language.
- Verified: no; proof is not currently validated enough for final use.

#### About / credibility
- Objective: explain who is behind the company and why the methodology matters.
- User question answered: Why should I trust Visium?
- Audience: all visitors, especially new prospects.
- Content required: methodology, educational approach, experience, relevance to real-world needs.
- CTA: Cuéntanos qué necesitas or Conoce nuestros programas
- Source of information: brief and current brand narrative.
- Verified: partly; specific founder, experience, credentials, and proof require validation.

#### Final CTA
- Objective: convert interest into a clear next step.
- User question answered: What should I do next?
- Audience: all visitors.
- Content required: final conversion prompt tailored to the visitor path.
- CTA: broader conversation-oriented CTA; exact wording pending final copy validation.
- Source of information: brief and standard lead-generation patterns.
- Verified: structurally, yes; wording and destination still need confirmation.

#### Footer
- Objective: support secondary navigation and trust signals.
- User question answered: Where can I find more information or contact the team?
- Audience: all visitors.
- Content required: legal, contact, navigation, social links if relevant.
- CTA: Contacto / WhatsApp / email
- Source of information: current project and business needs.
- Verified: partially.

## 3. AUDIENCE ARCHITECTURE

## 3.1 COLEGIOS

### Buyer
- directors
- coordinators
- academic leaders
- school owners / leaders

### User
- students receiving the educational program

### Problem
- educational institutions need a practical financial education offer for students and families
- there may be weak financial literacy in the school context
- there is a need to align learning with the institution’s goals and student age group

### Desired outcome
- students develop practical financial understanding and decisions
- institution gains an educational value proposition and real curriculum-aligned impact

### Visium solution
- structured educational program adapted to the school context
- custom delivery based on level, age, and school needs

### Program structure
- school-specific program
- age-sensitive format
- practical learning modules
- instructor-led or guided delivery

### Delivery model
- likely online or hybrid, but not expressly confirmed in the current brief
- must be validated by business

### Pricing visibility
- current brief references: $10 per student as a reference point
- this is a reference and not an obviously final commercial number
- must remain [BUSINESS DECISION REQUIRED]

### Proof required
- institutional examples
- case studies with schools or academic groups
- student learning outcomes or satisfaction if validated
- testimonial quality must be verified

### Objections
- cost per student
- relevance to the school context
- perceived value versus other student programs
- confusion between school learning and family education

### Primary CTA
- Solicitar programa

### Secondary CTA
- contextual fallback contact

### Supporting resources
- resources about financial education for schools
- practical guides for academic leaders
- FAQs about delivery, duration, and personalization

### Important note
The buyer and the user are not the same person. The buyer is the institution, and the student is the direct beneficiary. The architecture must make this distinction explicit to avoid conversion confusion.

## 3.2 EMPRESAS

### Buyer
- managers
- HR or learning leaders
- business owners
- team leaders

### Participant
- employees or professional groups taking the program

### Business problem
- teams may lack practical financial capability or confidence in decision-making
- the business may need a customized training experience that fits real work contexts

### Desired outcome
- stronger financial literacy among employees or teams
- practical budgeting and decision-making habits in work and life
- a relevant learning experience that can be adapted to the organization

### Visium solution
- custom financial training for teams
- group-centered, practical, and context-specific learning

### Training format
The brief suggests:
- groups up to 20 people
- programs customized to the company
- duration around 4–6 weeks
- one session per week

This should be represented as a hypothesis until validated by business.

### Group size
- current reference: up to 20 people
- needs validation

### Duration
- current reference: 4–6 weeks
- needs validation

### Customization
- strong requirement, since the brief emphasizes tailored solutions
- this must be a visible value proposition

### Pricing visibility
- current brief references: $250 for a group of 5 people
- this is not final and should be treated as provisional
- must remain [BUSINESS DECISION REQUIRED]

### Proof required
- examples of corporate training formats
- team cases if available
- methodology and customization evidence
- testimonial or sponsorship proof only if verified

### Objections
- team time and participation cost
- is it relevant to the organization?
- does it solve a real business problem or only a learning gap?
- is the program customizable enough?

### Primary CTA
- Diseñar un programa para mi equipo

### Secondary CTA
- contextual fallback contact

### Supporting resources
- team training resources
- methodology document
- practical examples of financial learning in professional contexts

### Offer formulation review
The business should decide whether to present the offer as:
- financial education for employees
- custom financial training for teams
- a hybrid formulation based on the actual service and sales process

This should not be decided by SEO alone. It should be chosen based on the commercial offer, sales language, and actual buyer expectations.

## 3.3 FAMILIAS

### Buyer
- parents or caregivers

### Participant
- children, teens, or family members taking part in the learning experience

### Problem
- families may lack practical strategies for money habits, budgeting, and informed financial decisions at home
- communication about money can be inconsistent or insufficient

### Desired outcome
- healthier financial habits at home
- improved decision-making among parents and children
- stronger practical understanding of saving, spending, and planning

### Visium solution
- family-centered financial education program with practical learning and family relevance

### Program structure
- likely less institutional and more human/interactive
- should remain distinct from school and business offers

### Delivery model
- current brief indicates family programs exist, but the exact format is not clearly defined in the provided data
- must remain provisional

### Pricing visibility
- current brief says pricing is pending
- must remain [BUSINESS DECISION REQUIRED]

### Proof required
- family stories or testimonials only if validated
- practical learning framework
- methodology and credible educational approach

### Objections
- is this relevant for my family?
- is it too generic or too commercial?
- is the content suitable for different ages or roles in the home?

### Primary CTA
- Conocer programas

### Secondary CTA
- contextual fallback contact

### Supporting resources
- budgeting guides
- financial habits for families
- child-friendly learning resources

### Commercial priority note
The family audience should remain in the architecture, but it should not automatically carry the same commercial weight as Colegios and Empresas unless the business validates that assumption. The brief suggests those two audiences are stronger commercial priorities.

## 4. PAGE OWNERSHIP MATRIX

| User intent | Primary page | Secondary page | CTA | Ownership logic |
|---|---|---|---|---|
| school wants financial education for students | Colegios | Recursos | Solicitar programa | school-specific conversion should not be diluted by a general homepage |
| business wants team financial training | Empresas | Recursos | Diseñar programa para mi equipo | B2B offer needs a clear page and a concrete conversion path |
| family wants practical financial learning | Familias | Recursos | Conocer programas | family offer should be clear but not dominant |
| broad financial education discovery | Home | Recursos | Conoce nuestros programas | broad discovery should guide rather than compete |
| practical educational guidance | Recursos | relevant audience page | Explorar recursos / Conocer programas | educational content should support conversion, not replace it |

### Explicit evaluation

#### HOME vs COLEGIOS
The Home should not try to be the entire school solution page. It should introduce the category and direct the user to the correct path. The Colegios page should own the commercial school intent.

#### HOME vs EMPRESAS
Same logic: the Home should provide discovery and segmentation, while Empresas should own the B2B offer and the custom team-program cycle.

#### HOME vs FAMILIAS
Home should mention family relevance, but the Familias page should own the family-specific offer and CTA. The Home should not become a duplicated family landing page.

#### COLEGIOS vs RECURSOS
Resources should answer informational and educational questions about financial education in schools, while Colegios should handle the commercial offer and conversion flow.

#### EMPRESAS vs RECURSOS
Resources can support explanatory content, but the Empresas page should own the primary commercial intent and sales conversation path.

#### FAMILIAS vs RECURSOS
This is the most likely overlap area. Family education is naturally mixed-intent. The family landing page should own the offer, while Resources should own general educational how-to content and practical advice.

## 5. NAVIGATION

### Evaluated structure
Possible structure:
- Inicio
- Colegios
- Empresas
- Familias
- Recursos
- Nosotros
- Contacto

### Assessment

#### Should all items deserve top-level navigation?
Not necessarily. The final decision depends on the business priority and the actual content maturity.

- Colegios: yes, high-priority audience and strong conversion path
- Empresas: yes, high-priority audience and strong conversion path
- Familias: yes, but likely secondary in prominence
- Recursos: yes if the business plans to publish educational content; otherwise it may be deprioritized
- Nosotros: yes, if trust-building is important and backed by content
- Contacto: it could be a top-level item, but it may also be better as a strong CTA plus a footer link

#### Should Contact be a navigation item or a CTA?
Likely both, but the CTA should be the main conversion method. Contact should not be overloaded with too many pages or repeated CTAs. A contained top-level item is acceptable if it remains simple and direct, but a strong CTA is more effective for conversion.

#### Should Resources be top-level?
Only if the business intends to publish and maintain educational material. If not, Resources should be reduced to a lower-priority area or delayed until a clear editorial plan exists.

#### Should the three audience pages have equal visual prominence?
No. The current brief strongly suggests that Colegios and Empresas are commercial priorities. Family content should stay visible but not necessarily equal in prominence.

#### Does any item add unnecessary cognitive load?
A full list of seven items is manageable, but if the audience hierarchy is unclear, it can feel overloaded. This is why the info architecture should emphasize the core three and allow support pages to remain secondary.

### Recommendation
Use the following navigation model as the default structure:
- Inicio
- Colegios
- Empresas
- Familias
- Recursos
- Nosotros
- Contacto

This is a reasonable starting point because it keeps the three primary audiences prominent and the support pages secondary. The exact visual weight should, however, reflect commercial priority: Colegios and Empresas should appear more strategically than Familias without excluding the family audience.

## 6. CTA ARCHITECTURE

The CTA system must be specific and audience-aware. Generic CTAs such as “Leer más” or “Contactar” should be avoided unless the user action is truly generic.

### CTA by page

| Page | Primary CTA | Secondary CTA | Destination | User expectation after click |
|---|---|---|---|---|
| Home | Cuéntanos qué necesitas | Conoce nuestros programas | Contact / segmented conversion flow | understand the right path and request information |
| Colegios | Solicitar programa | contextual fallback contact | School-specific inquiry | the institution wants to begin the school-program conversation |
| Empresas | Diseñar un programa para mi equipo | contextual fallback contact | Team-training inquiry | the buyer wants a tailored team training plan |
| Familias | Conocer programas | contextual fallback contact | Family-program inquiry | the family wants more information and human guidance |
| Recursos | Explorar recursos | contextual fallback contact | Resource category or service page | learn, then decide whether to continue |
| Nosotros | Cuéntanos qué necesitas | Conoce nuestros programas | Contact or service page | build trust and then move toward a decision |
| Contacto | Enviar consulta | WhatsApp / email | contact form or direct message | send a clear request for help |

### CTA guidance
- The CTA should match the user stage of intent.
- The homepage should offer segmentation and a broad inquiry path.
- Service pages should drive direct conversion.
- Resources should support exploration before contact.
- Contact must not be an afterthought; it should be the end point of a clear commercial journey.

## 7. TRUST ARCHITECTURE

Trust should appear in the sequence where the user is ready for it, not as a generic block at the top of every page.

### Where credibility should appear
- Home: broad credibility and proof signals, but without overloading the first view
- Colegios: social proof, case examples, methodology, school-specific relevance
- Empresas: business relevance, customization, team outcomes, methodology, cases if available
- Familias: practical credibility, family fit, educational methodology, human validation
- Nosotros: deeper trust and philosophy

### Trust elements to consider
- testimonials
- case studies
- number of families / students / schools
- professional credentials
- methodology
- experience
- results
- partner institutions

### Important note on proof
The business brief already contains inconsistent or potentially outdated figures, such as:
- +200 familias

This must remain:
- [BUSINESS DECISION REQUIRED]
- CURRENT: A claim of +200 familias exists in the current business information.
- PROPOSED: Keep the claim only if it is current, approved, and relevant to the final commercial site.
- QUESTION: Which numbers are accurate, current, and approved for use in the final public-facing architecture?

### Trust recommendation
Only include proof elements if they are verified and directly relevant to the audience. Trust should support conversion, not replace it.

## 8. COMMERCIAL FUNNEL

The basic funnel is:
DISCOVERY
↓
UNDERSTANDING
↓
TRUST
↓
CONSIDERATION
↓
CONVERSION

### Audience funnel mapping

| Audience | Entry page | Information needed | Proof needed | CTA | Conversion destination |
|---|---|---|---|---|---|
| Colegios | Home or Colegios | school problem, program value, delivery model | school outcomes, methodology, cases | Solicitar programa | Contact / inquiry form |
| Empresas | Home or Empresas | business problem, team format, customization | methodology, format, cases if present | Diseñar programa para mi equipo | Contact / inquiry form |
| Familias | Home or Familias | family problem, practical value, program fit | human proof, methodology, examples | Conocer programas | Contact / family inquiry route |

### Funnel logic
- Discovery begins on the home page or a relevant audience landing page.
- Understanding happens through service content and reassurance.
- Trust is built through methodology, proof, and clarity.
- Consideration occurs when the user sees the offer as relevant.
- Conversion occurs when the user clicks the correct CTA and submits a request.

## 9. CONTENT DEPENDENCIES

Before a future CONTENT_MAP.md phase, it is necessary to determine what content exists and what is still missing.

| Content | Page | Exists? | Verified? | Needs rewriting? | Needs creation? |
|---|---|---|---|---|---|
| Core value proposition | Home | Yes, partially | Partially | Yes | No |
| Audience segmentation copy | Home | Partially | Partially | Yes | No |
| School offer narrative | Colegios | Partially | No | Yes | Yes |
| Business training narrative | Empresas | Partially | No | Yes | Yes |
| Family offer narrative | Familias | Partially | No | Yes | Yes |
| Pricing references | Colegios / Empresas / Familias | Yes, some references exist | No | Yes | Yes |
| Case studies | multiple pages | Partially | No | Yes | Yes |
| Testimonials | multiple pages | Partially | No | Yes | Yes |
| School proof / data | Colegios | Unknown | No | Unknown | Yes |
| Business proof / data | Empresas | Unknown | No | Unknown | Yes |
| Family proof / data | Familias | Unknown | No | Unknown | Yes |
| Resource categories | Recursos | No clear final structure | No | N/A | Yes |
| Nosotros story content | Nosotros | Partially | No | Yes | Yes |
| Contact lead form logic | Contacto | Partially | Partially | Yes | Yes |
| CTA copy | all pages | Partially | Partially | Yes | Yes |

### Important dependency note
The next documentation phase cannot assume that the current content is fully reusable. The architecture should treat most proof and pricing materials as pending validation until the business confirms them.

## 10. ARCHITECTURE STATUS

### Final QA status
- Architecture: approved as structural baseline
- CTA wording: provisional
- Commercial positioning: provisional
- Pricing: business validation required
- Proof/metrics: business validation required
- Resource depth: provisional

### CONFIRMED
- The site must have a clear commercial hierarchy centered on Colegios, Empresas, and Familias.
- The Home must function as the main commercial entry point.
- The audience landing pages should own their own purchase intent and conversion path.
- Resources should support education, trust, and discovery without competing with the service pages, but their depth and launch scope remain provisional.
- The architecture should answer: what Visium offers, who it is for, why it matters, and what the next step is.
- The CTA logic should be tailored to the audience and stage of intent.

### PROVISIONAL
- The exact weight of each audience in the top-level navigation and homepage prominence.
- The exact wording of several service offers and CTAs.
- The final URL strategy; short paths are likely better for UX but the business may prefer keyword-rich slugs.
- The use of testimonials, case studies, and metrics until validation.
- The family offer’s weight relative to the primary B2B audiences.

### BUSINESS DECISION REQUIRED

#### 1
CURRENT:
- The brief names three audiences but suggests Colegios and Empresas are higher-priority commercial paths.

PROPOSED:
- Keep Colegios and Empresas as the primary commercial engines, with Familias as a supported audience layer.

QUESTION:
- Is the business ready to prioritize those two audiences ahead of Familias in the first V2 commercial rollout?

#### 2
CURRENT:
- The current site includes mixed audience messaging and some figures that may conflict.

PROPOSED:
- Segment the site by audience and ensure each page owns a distinct commercial purpose.

QUESTION:
- Which audience should own the primary commercial conversion priority during the first implementation cycle?

#### 3
CURRENT:
- Current pricing references exist for Colegios and Empresas and a pending price for Familias.

PROPOSED:
- Keep all price references visible only after validation, and treat them as references rather than final commercial commitments.

QUESTION:
- Which exact pricing points should be used for the public-facing version of the V2 architecture?

#### 4
CURRENT:
- Some proof claims exist in the legacy project, including a claim of +200 familias.

PROPOSED:
- Keep such proof elements only when validated and clearly mapped to the relevant audience page.

QUESTION:
- Which metrics, testimonial sources, and case studies are approved and current enough to be used in the V2 site?

#### 5
CURRENT:
- The current information architecture is based on a strong structural separation between the three audiences, but not all content is yet validated.

PROPOSED:
- Use a clean audience page structure supported by resources and a trust-building narrative.

QUESTION:
- Are the support pages (Recursos, Nosotros, Contacto) sufficient as secondary architecture layers, or should one of them be elevated in the first version?

### ARCHITECTURE RECOMMENDATION

Proposed final sitemap:
/
/colegios
/empresas
/familias
/recursos
/nosotros
/contacto

This structure is the best fit for the current business brief because it preserves the three primary commercial audiences while keeping support pages available for trust, education, and conversion. It also aligns with the principle that the site should answer the right person’s question at the right point in the funnel.

The only reason to change this structure would be if the business reveals a stronger priority for one audience or a different service taxonomy. In that case, the support pages could be reorganized, but the main commercial audience structure should remain the foundation.

### IMPLEMENTATION READINESS

#### A. Content mapping
Ready: yes, with business validation required before final copy and proof decisions.

#### B. HTML structural implementation
Ready: yes, in principle, as a structural page architecture only.

#### C. UI / Design System
Not ready yet: visual design should not begin before the content hierarchy, commercial priorities, and conversion paths are validated.

### Final conclusion
The architecture is ready for content planning and structural implementation, but not for final UI design. The main gate is not visual design; it is the certainty that the page architecture matches the actual commercial priorities and conversion intent of Visium Digital. Until that validation is complete, the site should remain intentionally structured, clear, and conservative.

### NEXT STEP: CONTENT_MAP.md
