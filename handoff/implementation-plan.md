# Wave Solutions Website Expansion Plan

## Source Of Truth

- Primary approved copy: `K:\Google Drive\My Drive\_CLIENTS\W\Wave Solutions LLC\Wave Solutions LLC.docx`
- Brand/reference files: `MiniBrand.pdf`, `1.pdf`, `wave_logo.png`
- Existing implementation: `D:\_devtrue\WaveSolutionsBoiler`

Use the approved Word document as the copy source. Add only light bridging copy when a page needs orientation, transition, or a call to action. Do not invent service claims, industries, outcomes, pricing, timelines, or operational capabilities beyond the approved copy.

## Content Rules

- Preserve approved wording for all major sections.
- Keep the newer business phone from Tony's update: `(888) 279-9283`.
- Use `info@wave-solutions.co` for general public contact and form routing.
- Keep the live lead form flow intact.
- Keep all sections editable from structured content, not hard-coded page copy.
- Page copy can be redistributed, but no approved section should be dropped.

## Navigation Architecture

Use a restrained top-level nav with one service submenu.

- Home: `/`
- About: `/about`
- Why Wave: `/why-wave`
- Approach: `/approach`
- Industries: `/industries`
- Services: `/services`
- Contact: `/contact`

Services submenu:

- Services Overview: `/services`
- Answering Services: `/services/answering-services`
- Virtual Receptionist Services: `/services/virtual-receptionist-services`
- Customer Follow-Up: `/services/customer-follow-up`
- AI-Powered Communication Support: `/services/ai-powered-communication-support`
- Communication Management: `/services/communication-management`

Reasoning: Services are the most likely area to grow into additional pages. The submenu gives Wave room to expand later without crowding the main navigation. About, Why Wave, Approach, and Industries should stay top-level because they explain company position, process, and audience.

## Page Map

### Home

Purpose: First impression, conference-ready entry point, and lead capture.

Approved copy sources:

- Professional Answering & Virtual Receptionist Services
- Written. AI. Voice. Electronic.
- Wave Solutions LLC provides professional answering service and virtual receptionist solutions...
- We help businesses ensure every call, message, email, and customer inquiry receives prompt follow-through...
- Services overview
- Our Promise
- Lead form

### About

Purpose: Company identity, WAVE meaning, mission, values, and founder credibility.

Approved copy sources:

- About Wave Solutions LLC
- The name WAVE represents...
- Our Mission, Vision & Values
- Founder Story
- Our Promise

### Why Wave

Purpose: Problem framing and differentiation.

Approved copy sources:

- Why We Exist
- Many businesses miss opportunities...
- What Makes Us Different
- We focus on communication completion, not just message capture.

### Approach

Purpose: How Wave works with clients and how communication moves forward.

Approved copy sources:

- Our Approach
- Assess / Align / Optimize / Refine
- Five-step process list
- Improve response time, customer satisfaction, and operational efficiency

### Industries

Purpose: Show who Wave serves without overclaiming.

Approved copy sources:

- Who We Serve
- Approved industry list
- Businesses that rely on timely communication...

### Services Overview

Purpose: Index of service offerings and hub for service pages.

Approved copy sources:

- Our Services
- All five service descriptions

### Individual Service Pages

Purpose: Lightweight, scalable service pages that can be deepened later.

Approved copy sources:

- Exact service name and description from the Word document
- Shared approved support copy from What Makes Us Different, Our Approach, and Our Promise

These pages should not pretend to contain more detail than the approved copy provides. They should be polished but concise.

### Contact

Purpose: Lead capture and public contact information.

Approved copy sources:

- Current form labels
- Company email, phone, and address
- Start with a quick conversation

## Shared Visual Language

Keep one cohesive Wave system across all pages:

- Dark navy hero bands with orange CTA accents
- White and soft-blue section bands for contrast
- Subtle phone/email/network texture motif
- Soft block texture in backgrounds, not heavy illustrations
- Rounded asymmetric image crops and section details for a softer Wave feel
- Lucide icons for service and communication concepts
- Generated imagery can be used, but it must match the current header feel: soft, technical, professional, human-centered, and not overly stock-like

Per-page visual variation should come from layout rhythm, icon treatment, accent blocks, and page-specific image crops, not a different brand direction.

## Implementation Order

1. Extract source copy into structured content.
2. Build shared chrome: top bar, responsive header, services submenu, footer.
3. Build shared sections: page hero, texture layer, CTA band, service cards, process steps, value lists.
4. Rebuild home page with the shared system while preserving current lead form behavior.
5. Add About, Why Wave, Approach, Industries, Services, service detail pages, and Contact.
6. Run content coverage checks against the approved Word document sections.
7. Run `npm run build`.
8. Verify navigation and responsive layout locally.
9. Deploy only after the build and page checks pass.

## Safety Gates

- Do not remove the existing lead form API route.
- Do not change Resend env var names.
- Do not change MX/DNS guidance in code or docs during page expansion.
- Do not replace approved copy with invented marketing copy.
- Do not create a large new design system package unless the current app structure requires it.
- Every new service route should be data-driven so future services can be added by content updates.

## Open Future Enhancements

- Booking system integration
- CRM or email automation handoff
- Deeper service-specific pages once the client approves more copy
- Additional generated imagery for individual service categories
- Case studies or testimonials when the client provides them
