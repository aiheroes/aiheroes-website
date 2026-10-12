# K5 Security en ISO 27001 bij AI

| Categorie | Nieuwe URL | Oude URL | Hangt onder | Zoekdata (GSC, 6 mnd) |
|---|---|---|---|---|
| Kennisartikel (groep Compliance, blog-template B0) | `/nl/kennis/ai-security` | nieuw | P9 Compliance | geen eigen pagina |

## 1. Wat stond er

**Op de site:** geen pagina. Het onderwerp komt wel versnipperd voor:
- **Training-module "Verantwoord AI-gebruik"** (`/nl/diensten/training`, anker `#ai-privacy-security`): "Veilig werken met AI: van AVG en de EU AI Act tot data governance". Voor IT, privacy officers en compliance; deelnemers vertrekken met een concept AI-policy.
- **`/nl/diensten/eu-training`:**
  - noemt de CLOUD Act ("geeft de VS toegang tot data bij Amerikaanse providers, ongeacht serverlocatie");
  - noemt NIS2, DORA en de AVG als regelgevingscontext.
- **Homepage-standaard:** "Compliance vanaf de tekentafel: AI Act-classificatie, logging, menselijk toezicht en Europese hosting zitten in het ontwerp."
- **Company profile:**
  - de eigen stack draait in Europa: functies in Frankfurt, Supabase EU, met een bewaarbeleid;
  - ambitie ISO 27001 (zie K4).

**Zoekdata:**
- Geen termen met "security", "27001" of "beveiliging" die ons raken.
- In gespreksvorm, met 0 klikken: "wie helpt bedrijven met ai governance en security", en lange Engelse prompts over "security, privacy, gdpr".

## 2. Wat moet er staan

**Voor wie en met welke vraag.** Een CISO, IT-manager of security officer. Een afdeling wil een AI-toepassing, of er draait er al een. Zijn vraag: welke nieuwe risico's brengt AI, en hoe passen die in ons bestaande beveiligingsbeleid (ISO 27001, NIS2)?

**Kernantwoord (concept).**
- AI-toepassingen brengen een paar risico's die klassieke software niet heeft:
  - gegevens die via prompts naar een model lekken;
  - manipulatie via ingevoerde tekst (prompt injection);
  - modellen die meer zien of doen dan nodig is.
- Je beheerst ze met dezelfde aanpak als de rest van je informatiebeveiliging: weten welke data waarheen gaat, rechten beperken, loggen en testen.

**Opbouw**
1. Wat er anders is aan AI-security. De drie tot vijf echte risico's, elk met een concreet voorbeeld: datalekken via prompts, prompt injection, te ruime rechten voor agents, afhankelijkheid van één leverancier, hosting buiten de EU.
2. Wat je per risico doet. Een tabel met risico, maatregel en wie het regelt.
3. AI binnen ISO 27001. Kernboodschap: AI-toepassingen horen in je bestaande risicoanalyse en leveranciersbeheer. Wat je toevoegt aan je ISMS.
4. Hosting en jurisdictie. Kernboodschap: waar draait het model, waar staat de data, onder welk recht. Brug naar L12 en P5.
5. Wat wij doen. Feitelijk:
   - **security-reviews en pentests van AI-toepassingen**, die we zelf uitvoeren;
   - bij elke bouw: logging, menselijk toezicht, Europese hosting als optie, model-agnostisch zodat je kunt wisselen, documentatie;
   - we werken zelf naar ISO 27001-certificering (zo formuleren).

   Met de eigen assistent als voorbeeld (data in de EU, bewaarbeleid; leveranciers niet bij naam, conform §8 voor C5).
6. FAQ.
7. Auteur, bijwerkdatum, CTA en gerelateerd.

**FAQ**
1. Is het veilig om bedrijfsdata in ChatGPT of Copilot te zetten?
2. Wat is prompt injection?
3. Moet AI in onze ISO 27001-scope?
4. Valt AI onder NIS2?
5. Waar draait een AI-model eigenlijk?

**Volgende stap.**
- Naar P9 Compliance en security, waar de security-review en pentest als dienst staan: "Wil je weten hoe veilig je AI-toepassing is? Laat hem testen."
- Voor wie hosting de kern is: naar P5 (software in eigen beheer).

**Bewijs en links**
- **Bewijs:** C5 eigen stack, met de transparantiepagina.
- **Links:** omhoog naar P9; opzij naar K4, K6 en L12.

**SEO/GEO**
- **Zoekintentie:** informatief, technisch publiek.
- **Titel:** "AI en informatiebeveiliging: de risico's en wat je eraan doet"
- **Auteur:** David Homan.

**Feiten om te verifiëren**
- Wat de CLOUD Act precies regelt; de huidige tekst ("ongeacht serverlocatie") nuanceren met een bron.
- Of NIS2 in Nederland al is omgezet (Cyberbeveiligingswet), en vanaf wanneer.
- Of de eigen-stackgegevens kloppen: Frankfurt, Supabase EU, bewaartermijn.

**Besluiten**
- Auteur: David Homan (§5).
- We doen zelf security-reviews en pentests van AI-toepassingen; K5 mag dat noemen (§11).
- Eigen ISO 27001-traject: "we werken naar certificering" (§4).

**Wacht op**
- Niets van Frans.
