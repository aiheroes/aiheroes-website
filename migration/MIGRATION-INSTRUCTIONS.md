# AI Heroes Content Migration Instructions

## Important

- **Do NOT change the homepage content or styling, only update the navigation/menu links to point to the new pages**
- **Use the current homepage (index.html or similar) as the style reference for all new pages**
- **All new pages must match the homepage design: same fonts, colors, spacing, component styles**

## Tone of Voice

### Nederlands
- Gebruik "je/jij", nooit "u"
- Schrijf zoals NOS.nl of NU.nl: kort, direct, helder
- Geen marketingtaal of corporate jargon
- Geen AI-schrijfpatronen:
  - Geen "niet X, maar Y" constructies
  - Geen "geen X, gewoon Y" constructies
  - Geen opsommingen met streepjes waar het niet nodig is
  - Geen woorden als "beklijft", "transformeren", "empoweren", "enablen"
- Het moet klinken alsof een echt persoon het zegt

### English
- Same principles: direct, human, no marketing fluff
- Avoid AI writing patterns:
  - No "not X, but Y" constructions
  - No "no X, just Y" constructions
  - No unnecessary bullet points
- Should sound like a real person talking

---

## Pages to Migrate

### Service Pages (nieuw schrijven)

| Page | URL NL | URL EN | Source |
|------|--------|--------|--------|
| AI Foundations | /nl/diensten/ai-foundations | /en/services/ai-foundations | workshops.md (als inspiratie) |
| Opportunity Scouting | /nl/diensten/opportunity-scouting | /en/services/opportunity-scouting | opportunity-scouting.md |
| ChatGPT Basics | /nl/diensten/chatgpt-basics | /en/services/chatgpt-basics | Jan's workshop doc |
| AI for Developers | /nl/diensten/ai-voor-developers | /en/services/ai-for-developers | Jan's workshop doc |
| AI Privacy & Security | /nl/diensten/ai-privacy-security | /en/services/ai-privacy-security | Jan's workshop doc |
| AI Media Literacy | /nl/diensten/ai-media-literacy | /en/services/ai-media-literacy | Jan's deepfake workshop (ingekort) |

### About Pages (nieuw schrijven)

| Page | URL NL | URL EN | Notes |
|------|--------|--------|-------|
| Our Approach | /nl/over-ons/aanpak | /en/about/approach | Hoe we werken, methodiek |
| Team | /nl/over-ons/team | /en/about/team | Frans, Jan Brusse, David Homan + Joseph Groot Kormelink |

### Resource Pages (herschrijven van bestaande content)

| Page | URL NL | URL EN | Source |
|------|--------|--------|--------|
| Why AI Literacy Matters | /nl/resources/ai-geletterdheid | /en/resources/ai-literacy | why-ai-literacy-is-an-essential-skill.md |
| AI Strategy Guide | /nl/resources/ai-strategie-gids | /en/resources/ai-strategy-guide | how-to-get-started-with-your-ai-strategy.md |

### Case Studies (licht bewerken, in footer)

| Page | URL NL | URL EN | Source |
|------|--------|--------|--------|
| Medux | /nl/cases/medux | /en/cases/medux | medux.md |
| OLX | /nl/cases/olx | /en/cases/olx | olx.md |
| Trabu | /nl/cases/trabu | /en/cases/trabu | trabu.md |
| InnoEnergy | /nl/cases/innoenergy | /en/cases/innoenergy | innoenergy.md |

### Other Pages

| Page | URL NL | URL EN | Source |
|------|--------|--------|--------|
| Development | /nl/development | /en/development | ai-development-partnership.md (sterk inkorten) |
| Contact | /nl/contact | /en/contact | Nieuw, inclusief edu/non-profit tarieven sectie |
| Privacy | /nl/privacy | /en/privacy | privacy-cookies-policy.md |
| Terms | /nl/voorwaarden | /en/terms | general-terms-and-conditions.md |

---

## Team Info

| Naam | Rol |
|------|-----|
| Frans Jorden Hoorn | Managing Partner |
| Jan Brusse | Managing Partner |
| David Homan | Managing Partner |
| Joseph Groot Kormelink | Industry Advisor |

---

## Client Logos

Postcodeloterij, Banijay Benelux, Locatiqs, Prosus, Medux, Hanze University of Applied Sciences

---

## Testimonials

**Postcodeloterij (Dutch):**
"Frans heeft ons een fantastische workshop gegeven waar we met de theorie en de praktijk aan de slag zijn gegaan. Sinds de workshop hebben we de handvatten om AI behapbaar en toepasbaar te maken. Wij kunnen de workshop iedereen aanraden!"
— Bobby Kremer, Managementassistent Communicatie, Nationale Postcode Loterij

**Postcodeloterij (English, shortened):**
"Frans gave us a great workshop, theory and practice combined. Since then we have the tools to actually work with AI. We'd recommend it to anyone."
— Bobby Kremer, Nationale Postcode Loterij

**Medux (alleen op case study pagina, is development-focused):**
"In developing our latest optical healthcare application, AI Heroes has helped us enormously with the analysis and technical realization."
— Igor Stalpers-Croeze, Manager Research & Development, Medux

---

## Brand Colors

- Primary Red: #FF5050
- Energetic Blue: #007BFF
- Light Gray: #F8F9FA
- Dark Gray: #343A40
- White: #FFFFFF

---

## What NOT to Migrate

- Alle blog/news posts over LLMs (claude, gpt-4o, o1, chinese models, etc.)
- Alle creatieve AI posts (fake vacation, qr codes, theme song, suno, etc.)
- ai-training-track.md, ai-training-track-3.md
- building-track.md, design-track.md, consultancy-track.md
- futureminds.md, mastermind.md
- services.md, how-we-work.md
- Industry pages (healthcare.md, finance.md, ecommerce.md)
- Alle "how we built X" posts

---

## Workflow

1. Read the homepage HTML to understand the current styling, components, and structure
2. Update the homepage navigation links to point to the correct new URLs
3. Create each page using the same styling as the homepage
4. Ensure all internal links work correctly
5. Create both Dutch (/nl/) and English (/en/) versions of each page
