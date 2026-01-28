export interface AILevel {
  level: number;
  title: string;
  description: string;
  color: string;
  bgColor: string;
  borderColor: string;
}

export interface Exercise {
  id: number;
  title: string;
  shortTitle: string;
  description: string;
  fullInstructions: string;
  requirements: string[];
  hasExample: boolean;
  exampleContent?: string;
}

export interface Tool {
  name: string;
  url: string;
}

export const HANZE_CONTENT = {
  welcome: {
    title: "AI Heroes × Hanze TBK Workshop",
    subtitle: "Interactieve workshop over AI-gebruik in TBK-opdrachten",
    description: "Ontdek hoe je AI-niveaus kunt toepassen op verschillende TBK-opdrachten. Kies een opdracht, selecteer een AI-level, en krijg direct inzicht in hoe je de opdracht AI-proof maakt.",
    startButton: "Start Workshop"
  },

  exercises: [
    {
      id: 1,
      title: "Organisatieadvies - Business Case & MCA",
      shortTitle: "Business Case & MCA",
      description: "Stel een business case op met financiële onderbouwing (CAPEX, OPEX, NCW, IRR) en/of een Multi-Criteria Analyse voor innovaties waarbij investeringen moeilijk in geld uit te drukken zijn.",
      fullInstructions: `
        <h2>📋 Jouw Opdracht</h2>
        <p><strong>Kies een AI-level van de waaier en pas de opdracht daarop aan.</strong></p>
        <p>Gebruik Perplexity en/of andere LLMs in je proces om de opdracht aan te passen aan het gekozen AI-level.</p>
        <p><strong>Creëer ook een manier om AI-gebruik te checken</strong> (bijv. reflectievragen, procesverantwoording, of verificatiemethoden).</p>

        <h3 style="margin-top: 1.5rem;">De Opdracht</h3>
        <p>Bij het geven van een (strategisch) organisatieadvies hoort een financiële onderbouwing. Door middel van het inschatten van de hoogte van de benodigde investering, de omvang van de operationele uitgaven en de hoogte van de opbrengsten kan een kasstroomoverzicht worden opgesteld. Op basis van dat overzicht kan de netto contante waarde (NCW) en/of de interne rentabiliteit worden vastgesteld.</p>

        <p><strong>Stel de business case op als onderdeel van het strategisch advies.</strong> Gebruik bij het opstellen van de business case het materiaal uit de workshops.</p>
      `,
      requirements: [
        "Een beschrijving van de investering (CAPEX) en de daaraan gerelateerde uitgaven",
        "Een beschrijving van de operationele kosten (OPEX) en de daaraan gerelateerde uitgaven",
        "Een beschrijving van de ontvangsten",
        "De discontovoet",
        "De netto contante waarde (NCW) en de internal rate of return (IRR)",
        "Een gevoeligheidsanalyse",
        "Een toelichting",
        "<strong>Of MCA:</strong> Bij innovaties waarbij de investering of de opbrengsten moeilijk in geld zijn uit te drukken kan een multi-criteria analyse (MCA) worden opgesteld"
      ],
      hasExample: true,
      exampleContent: `
        <div class="example-badge">AI Heroes Workshop Opdracht 1</div>
        <h2>Business case (NCW/IRR) + MCA — AI Level 4 (Aanvullen/Supplement)</h2>
        <p>AI is toegestaan om inhoud aan te vullen en te bewerken; jij blijft eindverantwoordelijk en maakt je AI-gebruik transparant.</p>

        <div class="example-callout">
            <h2>AI Level 4 regels (studenten)</h2>
            <p><strong>Je mag AI gebruiken</strong> voor onderzoek, ideeën, het maken van conceptteksten, berekeningen-uitleg, voorbeeldtabellen, en het verbeteren van taal/structuur.</p>
            <p><strong>Jij bent verantwoordelijk</strong> voor: keuzes, aannames, rekenwerk (controle), bronkwaliteit, en consistentie met de case en workshopmaterialen.</p>
            <p><strong>Je moet aangeven</strong> waar AI is gebruikt (wat, waarom, welke tool, welke input/output, en wat jij aangepast of geverifieerd hebt).</p>
        </div>

        <div class="example-grid">
            <div class="example-card level4">
                <h3>Wat AI wél mag doen</h3>
                <ul>
                    <li>Voorstellen doen voor CAPEX/OPEX/benefits structuur en kasstroommodel (incl. sjablonen).</li>
                    <li>Voorbeelden geven van discontovoet-onderbouwing (argumenten, bronnen om te zoeken).</li>
                    <li>Suggesties voor gevoeligheidsanalyse (scenario's, parameters, ranges).</li>
                    <li>Conceptteksten maken voor toelichtingen, mits jij corrigeert en verifieert.</li>
                    <li>MCA-criteria brainstormen en scorekaart-format voorstellen.</li>
                </ul>
            </div>
            <div class="example-card">
                <h3>Wat jij verplicht moet doen</h3>
                <ul>
                    <li>Alle cijfers en aannames herleiden naar bronnen of eigen onderbouwde redenering.</li>
                    <li>NCW/IRR rekenresultaten controleren (bijv. in Excel/Sheets) en reproduceerbaar aanleveren.</li>
                    <li>Minimaal 2 alternatieve aannames testen in de gevoeligheidsanalyse.</li>
                    <li>Inleveren: model + toelichting + AI-logboek + verificatiestappen.</li>
                    <li>In een korte verdediging (5–7 min) uitleggen: keuzes, aannames, en wat je hebt gecheckt.</li>
                </ul>
            </div>
        </div>

        <h3>AI-transparantie (verplicht)</h3>
        <p>Lever een AI-logboek aan met minimaal:</p>
        <ul>
          <li>Tool(s) + versie (bijv. Perplexity, ChatGPT) en datum.</li>
          <li>Per stap: doel, jouw prompt (of samenvatting), AI-output (samenvatting), en jouw aanpassingen/controle.</li>
          <li>Bronnenlijst: links + wat je eruit hebt gehaald (1 zin per bron).</li>
          <li>Verificatie: welke getallen heb je dubbel gecheckt, en hoe (bijv. herberekend in spreadsheet).</li>
        </ul>
      `
    },
    {
      id: 2,
      title: "Business Analyse - Bedrijfsbeschrijving",
      shortTitle: "Bedrijfsbeschrijving",
      description: "Maak een bedrijfsbeschrijving van het stagebedrijf met strategische analyse, marktpositie, organisatiestructuur, primaire processen en cultuuranalyse (max. 1500 woorden).",
      fullInstructions: `
        <h2>📋 Jouw Opdracht</h2>
        <p><strong>Kies een AI-level van de waaier en pas de opdracht daarop aan.</strong></p>
        <p>Gebruik Perplexity en/of andere LLMs in je proces om de opdracht aan te passen aan het gekozen AI-level.</p>
        <p><strong>Creëer ook een manier om AI-gebruik te checken</strong> (bijv. reflectievragen, procesverantwoording, of verificatiemethoden).</p>

        <h3 style="margin-top: 1.5rem;">De Opdracht</h3>
        <p>Elke groep maakt een bedrijfsbeschrijving van het bedrijf(sonderdeel) waar stage wordt gelopen. De maximale omvang is 1500 woorden. De beschrijving is een verkorte versie van de beschrijving, zoals die uitgevoerd is in het eerstejaars beroepsproduct "bedrijfsanalyse", met (naast de omvang) dit verschil dat er geen waardeoordelen geveld en adviezen gegeven hoeven te worden.</p>

        <p><strong>Begin de beschrijving breed en spits deze vervolgens toe op het onderdeel waar de stageopdracht betrekking op heeft.</strong></p>

        <p>De beschrijving wordt gebaseerd op interviews en gesprekken, observaties, documenten en de website. Vermeld de bronnen op een juiste manier.</p>
      `,
      requirements: [
        "<strong>Strategisch:</strong> Missie, visie, strategie, doelstellingen, financiële resultaten (bijv. omzet)",
        "<strong>Markt:</strong> Klanten, concurrenten",
        "<strong>Structuur:</strong> Organogram, omvang",
        "<strong>Processen:</strong> Primaire proces (ook grafisch weergeven)",
        "<strong>Cultuur:</strong> Cultuuranalyse, stijl van leidinggeven",
        "Maximum 1500 woorden"
      ],
      hasExample: true,
      exampleContent: `
        <div class="example-badge">AI Heroes Workshop Opdracht 2</div>
        <h2>Bedrijfsbeschrijving — AI Level 2 (Idee/Structuur)</h2>
        <p>AI mag alleen gebruikt worden voor opzet, structuur en brainstormen. Alle inhoud moet origineel en door jou geschreven zijn.</p>

        <div class="example-callout">
            <h3>AI Level 2 regels (studenten)</h3>
            <p><strong>AI is alleen voor ideeën en structuur.</strong> Geen AI-gegenereerde teksten, analyses of conclusies!</p>
            <p><strong>Je mag AI gebruiken</strong> om een outline te maken, structuur te suggereren, of brainstormvragen te genereren.</p>
            <p><strong>Je mag AI NIET gebruiken</strong> voor het schrijven van tekst, het maken van analyses, of het invullen van inhoud.</p>
            <p><strong>Transparantie:</strong> lever een korte notitie met wat je aan AI hebt gevraagd en hoe je dat hebt gebruikt voor de opzet.</p>
        </div>

        <div class="example-grid">
            <div class="example-card level2">
                <h3>✅ Wat AI wél mag doen</h3>
                <ul>
                    <li>Een outline voorstellen voor de bedrijfsbeschrijving.</li>
                    <li>Structuur-suggesties geven (bijv. "begin met missie, dan organogram").</li>
                    <li>Brainstormvragen genereren (bijv. "welke vragen stel je over primaire processen?").</li>
                    <li>Suggesties voor volgorde van onderwerpen.</li>
                </ul>
            </div>
            <div class="example-card">
                <h3>❌ Wat AI NIET mag doen</h3>
                <ul>
                    <li>Geen tekst schrijven over het bedrijf, missie, visie, etc.</li>
                    <li>Geen analyses maken van cultuur of markt.</li>
                    <li>Geen organogrammen of grafieken genereren.</li>
                    <li>Geen financiële cijfers of marktinfo ophalen/analyseren.</li>
                    <li>Geen samenvattingen of conclusies maken.</li>
                </ul>
            </div>
        </div>

        <div class="example-callout">
            <h3>AI tools (alleen voor structuur/ideeën)</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 12px; margin: 12px 0;">
                <a href="https://www.perplexity.ai" target="_blank" style="display: block; padding: 12px 16px; background: #f1f5f9; color: #334155; text-decoration: none; border-radius: 8px; font-weight: 600; text-align: center; transition: all 0.2s ease; font-size: 0.95rem;">Perplexity (outline)</a>
                <a href="https://chat.openai.com" target="_blank" style="display: block; padding: 12px 16px; background: #f1f5f9; color: #334155; text-decoration: none; border-radius: 8px; font-weight: 600; text-align: center; transition: all 0.2s ease; font-size: 0.95rem;">ChatGPT (structuur)</a>
                <a href="https://claude.ai" target="_blank" style="display: block; padding: 12px 16px; background: #f1f5f9; color: #334155; text-decoration: none; border-radius: 8px; font-weight: 600; text-align: center; transition: all 0.2s ease; font-size: 0.95rem;">Claude (brainstorm)</a>
            </div>
            <p style="margin: 10px 0 0; font-size: 0.9rem;">Voorbeeld prompt: "Geef een outline voor een bedrijfsbeschrijving met structuur Strategisch→Markt→Structuur→Processen→Cultuur."</p>
        </div>

        <h3>De opdracht (AI-proof, Level 2)</h3>
        <p><strong>Semester:</strong> Stuurinformatie - Beroepsproduct Business Analyse in de IT</p>
        <p>Maak een bedrijfsbeschrijving van het bedrijf(sonderdeel) waar stage wordt gelopen. <strong>Maximaal 1500 woorden.</strong></p>
        <p>Verkorte versie van eerstejaars "bedrijfsanalyse" — <strong>geen waardeoordelen of adviezen!</strong></p>
        <p>Begin breed, spits toe op het stageonderdeel. Gebaseerd op interviews, observaties, documenten, website. Bronnen correct vermelden.</p>

        <h3>Verplichte onderwerpen</h3>
        <div class="example-grid">
            <div class="example-card">
                <h3>📊 Strategisch</h3>
                <ul>
                    <li>Missie, visie, strategie</li>
                    <li>Doelstellingen</li>
                    <li>Financiële resultaten (bijv. omzet)</li>
                </ul>
            </div>
            <div class="example-card">
                <h3>🎯 Markt</h3>
                <ul>
                    <li>Klanten</li>
                    <li>Concurrenten</li>
                </ul>
            </div>
            <div class="example-card">
                <h3>🏗️ Structuur</h3>
                <ul>
                    <li>Organogram</li>
                    <li>Omvang</li>
                </ul>
            </div>
            <div class="example-card">
                <h3>⚙️ Processen</h3>
                <ul>
                    <li>Primaire proces (grafisch weergeven)</li>
                </ul>
            </div>
            <div class="example-card">
                <h3>🎨 Cultuur</h3>
                <ul>
                    <li>Cultuuranalyse</li>
                    <li>Stijl van leidinggeven</li>
                </ul>
            </div>
        </div>

        <h3>AI-gebruik documentatie (verplicht, max 1 pagina)</h3>
        <ul>
            <li>Welke AI-tool(s) heb je gebruikt? (bijv. ChatGPT, Perplexity)</li>
            <li>Wat was je prompt? (kopieer/plak)</li>
            <li>Wat gaf AI terug? (samenvatting of screenshot)</li>
            <li>Hoe heb je het gebruikt? (bijv. "outline gevolgd, zelf ingevuld")</li>
        </ul>

        <h3>AI-check voor docent</h3>
        <ul>
            <li><strong>Originele ideeën:</strong> laat student eigen meningen geven op locatie</li>
            <li><strong>Detailvragen:</strong> vraag naar specifieke interviews/observaties die niet online staan</li>
            <li><strong>Structuur-check:</strong> past de structuur bij AI tools, maar op welke manier is de inhoud origineel?</li>
            <li><strong>Plagiaat-check:</strong> specifieke opvallende passages googlen/verifieren om AI-tekst te detecteren</li>
        </ul>
      `
    },
    {
      id: 3,
      title: "Cross Cultural Communication",
      shortTitle: "Cross Cultural",
      description: "Investigate a country using the theories of Hofstede, Trompenaars and Hall. Analyze cultural dimensions, context classification and develop an advisory plan for cross-cultural communication.",
      fullInstructions: `
        <h2>📋 Your Assignment</h2>
        <p><strong>Choose an AI-level from the spectrum and adapt the assignment accordingly.</strong></p>
        <p>Use Perplexity and/or other LLMs in your process to adapt the assignment to the chosen AI-level.</p>
        <p><strong>Also create a method to check AI usage</strong> (e.g., reflection questions, process accountability, or verification methods).</p>

        <h3 style="margin-top: 1.5rem;">Assignment Description</h3>
        <p>Describe the country you were tasked to investigate using the three theories we discussed during the workshops (Hofstede, Trompenaars and Hall).</p>

        <h3>Theories to Apply</h3>
        <ul>
            <li>Hofstede's Cultural Dimensions</li>
            <li>Trompenaars' Model of National Culture Differences</li>
            <li>Hall's High-Context and Low-Context Cultures</li>
        </ul>
      `,
      requirements: [
        "<strong>Cultural Dimensions:</strong> Identify and highlight at least 4 dimensions from Hofstede or Trompenaars (or a mix of the two) which play a significant role in the culture of your target country.",
        "<strong>Real-Life Examples:</strong> Provide examples for all 4 dimensions of real-life behaviours or practices in a professional setting that reflect these dimensions.",
        "<strong>Context Classification:</strong> Classify the target country as high-context or low-context and justify your classification.",
        "<strong>Comparative Analysis:</strong> Compare these traits to your country of origin and highlight potential conflicts or misunderstandings that could arise.",
        "<strong>Advisory Plan:</strong> Come up with a detailed advisory plan to prevent these conflicts or misunderstandings from happening (as much as possible)."
      ],
      hasExample: true,
      exampleContent: `
        <div class="example-badge">AI Heroes Workshop Assignment 3</div>
        <h2>Cross Cultural Communication — AI Level 1 (No AI)</h2>
        <p>This assignment must be completed entirely without any AI assistance. Pure human work only.</p>

        <div class="example-callout">
            <h3>AI Level 1: No AI Allowed</h3>
            <p><strong>ZERO AI usage.</strong> No Perplexity, ChatGPT, Claude, Gemini, or any other AI tool.</p>
            <p><strong>Allowed:</strong> textbooks, workshop notes, lectures, group discussion, library research, interviews.</p>
            <p><strong>Not allowed:</strong> AI for research, outlines, examples, explanations, or text generation.</p>
            <p><strong>Declaration:</strong> Sign a statement confirming no AI was used (template provided below).</p>
        </div>

        <div class="example-grid">
            <div class="example-card level1">
                <h3>🚫 Completely Forbidden</h3>
                <ul>
                    <li>No AI research on country culture</li>
                    <li>No AI outlines or structure suggestions</li>
                    <li>No AI-generated examples or scenarios</li>
                    <li>No AI explanations of Hofstede/Trompenaars/Hall</li>
                    <li>No AI comparison or advisory plans</li>
                </ul>
            </div>
            <div class="example-card">
                <h3>✅ Human-only sources</h3>
                <ul>
                    <li>Workshop slides and notes</li>
                    <li>Textbooks (Hofstede, Trompenaars, Hall)</li>
                    <li>Library databases (academic papers)</li>
                    <li>Group brainstorming sessions</li>
                    <li>Your own observations/experiences</li>
                </ul>
            </div>
        </div>

        <h2>The Assignment (AI Level 1)</h2>
        <p><strong>Group assignment</strong> — complete with your assigned group.</p>

        <div class="example-grid">
            <div class="example-card">
                <h3>🌍 Country Analysis</h3>
                <p>Describe the country you were tasked to investigate using the three theories:</p>
                <ul>
                    <li><strong>Hofstede:</strong> Identify ≥4 dimensions that play a significant role</li>
                    <li><strong>Trompenaars:</strong> Use where relevant (mix OK)</li>
                    <li><strong>Hall:</strong> High-context or low-context + justification</li>
                </ul>
            </div>
            <div class="example-card">
                <h3>💼 Professional Examples</h3>
                <p>For all 4+ dimensions, provide <strong>real-life examples</strong> of:</p>
                <ul>
                    <li>Behaviours in professional settings</li>
                    <li>Practices that reflect the dimension</li>
                </ul>
            </div>
        </div>

        <div class="example-grid">
            <div class="example-card">
                <h3>🔄 Comparison</h3>
                <p>Compare to your country of origin:</p>
                <ul>
                    <li>Highlight potential conflicts/misunderstandings</li>
                    <li>Give specific scenarios</li>
                </ul>
            </div>
            <div class="example-card">
                <h3>🛡️ Advisory Plan</h3>
                <p>Detailed plan to prevent conflicts:</p>
                <ul>
                    <li>Concrete strategies and actions</li>
                    <li>Timeline and responsibilities</li>
                    <li>Training recommendations</li>
                </ul>
            </div>
        </div>

        <h3>📚 Sources (human-only)</h3>
        <ul>
            <li>Workshop materials and slides</li>
            <li>Textbooks: Hofstede, Trompenaars, Hall</li>
            <li>Academic papers (via library, no AI summaries)</li>
            <li>Personal experience or interviews</li>
        </ul>

        <h3>✍️ No-AI Declaration (copy & sign)</h3>
        <div style="background: #fff7ed; padding: 18px; border-left: 4px solid #f97316; border-radius: 8px; margin: 16px 0;">
            <p style="color: #7c2d12; margin-bottom: 10px;"><strong>We declare:</strong></p>
            <ul style="margin-left: 20px; margin-bottom: 12px;">
                <li style="color: #9a3412;">No AI tools were used in any phase of this assignment</li>
                <li style="color: #9a3412;">All content is original human work</li>
                <li style="color: #9a3412;">All sources are from approved human-only materials</li>
            </ul>
            <p style="margin-top:12px; color: #7c2d12;">Names: ____________________ Date: ______ Signature: ______</p>
        </div>

        <h3>🕵️ Instructor AI Detection Methods</h3>
        <ul>
            <li><strong>Process interview:</strong> "Walk us through how you found the Hofstede data?"</li>
            <li><strong>Memory test:</strong> Explain one dimension from memory (no notes)</li>
            <li><strong>Source verification:</strong> Show physical/digital sources used</li>
            <li><strong>Writing style consistency:</strong> Compare to previous no-AI work</li>
            <li><strong>Group dynamics:</strong> All members explain their contributions</li>
        </ul>
      `
    },
    {
      id: 4,
      title: "Eigen TBK Opdracht (Leeg Sjabloon)",
      shortTitle: "Eigen Opdracht",
      description: "Ontwerp je eigen TBK-opdracht van scratch. Kies een AI-level, bepaal scope, doelen, aanpak, deliverables en je AI-check methode.",
      fullInstructions: `
        <h2>📋 Jouw Opdracht</h2>
        <p><strong>Kies een AI-level van de waaier en ontwerp je eigen TBK-opdracht.</strong></p>
        <p>Gebruik Perplexity en/of andere LLMs in je proces om de opdracht te ontwerpen binnen het gekozen AI-level.</p>
        <p><strong>Definieer ook een manier om AI-gebruik te checken</strong> (bijv. reflectievragen, procesverantwoording, of verificatiemethoden).</p>

        <div style="background: #eff6ff; border: 1px solid #dbeafe; padding: 16px 20px; margin: 20px 0; border-radius: 8px; color: #1e3a8a;">
            <strong>Doel:</strong> Maak een complete TBK-opdracht van scratch. Alles wat je nodig hebt om de opdracht uit te voeren staat hieronder.
        </div>

        <h3>1) Titel & Context</h3>
        <ul>
            <li><strong>Titel:</strong> __________________________________</li>
            <li><strong>Context/organisatie:</strong> __________________________________</li>
            <li><strong>Waarom is dit relevant?</strong> __________________________________</li>
        </ul>

        <h3>2) Doelstelling</h3>
        <ul>
            <li><strong>Hoofddoel:</strong> __________________________________</li>
            <li><strong>Subdoelen:</strong> __________________________________</li>
        </ul>

        <h3>3) Scope</h3>
        <ul>
            <li><strong>Wat valt binnen scope?</strong> __________________________________</li>
            <li><strong>Wat valt buiten scope?</strong> __________________________________</li>
        </ul>

        <h3>4) Onderzoeksvragen</h3>
        <ul>
            <li>Vraag 1: __________________________________</li>
            <li>Vraag 2: __________________________________</li>
            <li>Vraag 3: __________________________________</li>
        </ul>

        <h3>5) Aanpak & Methoden</h3>
        <ul>
            <li><strong>Bronnen:</strong> __________________________________</li>
            <li><strong>Dataverzameling:</strong> __________________________________</li>
            <li><strong>Analyse:</strong> __________________________________</li>
        </ul>

        <h3>6) Deliverables</h3>
        <ul>
            <li>Deliverable 1: __________________________________</li>
            <li>Deliverable 2: __________________________________</li>
            <li>Deliverable 3: __________________________________</li>
        </ul>

        <h3>7) Kwaliteitscriteria</h3>
        <ul>
            <li><strong>Beoordelingscriteria:</strong> __________________________________</li>
            <li><strong>Succesindicatoren:</strong> __________________________________</li>
        </ul>

        <h3>8) Planning</h3>
        <ul>
            <li><strong>Startdatum:</strong> __________________________________</li>
            <li><strong>Einddatum:</strong> __________________________________</li>
            <li><strong>Belangrijke mijlpalen:</strong> __________________________________</li>
        </ul>

        <h3>9) AI-gebruik & Transparantie</h3>
        <ul>
            <li><strong>Gekozen AI-level:</strong> __________________________________</li>
            <li><strong>AI-tools gebruikt (indien toegestaan):</strong> __________________________________</li>
            <li><strong>AI-check methode:</strong> __________________________________</li>
        </ul>
      `,
      requirements: [],
      hasExample: false
    }
  ],

  aiLevels: [
    {
      level: 1,
      title: "Geen AI",
      description: "Deze opdracht moet volledig zonder AI gemaakt worden.",
      color: "red",
      bgColor: "#fee2e2",
      borderColor: "#fca5a5"
    },
    {
      level: 2,
      title: "Idee/Structuur",
      description: "AI mag gebruikt worden om opzet, structuur te doen of brainstormen. AI mag niets maken of berekenen.",
      color: "orange",
      bgColor: "#ffedd5",
      borderColor: "#fdba74"
    },
    {
      level: 3,
      title: "Bewerken",
      description: "AI mag gebruikt worden om de opdracht te verbeteren en te bewerken. AI mag geen actieve inhoud maken. Eigen, originele werk wordt toegevoegd.",
      color: "yellow",
      bgColor: "#fef9c3",
      borderColor: "#fde047"
    },
    {
      level: 4,
      title: "Aanvullen",
      description: "AI mag gebruikt worden om de opdracht in te vullen en bewerken. Mens is verantwoordelijk. Werk zo nodig worden aangegeven.",
      color: "green",
      bgColor: "#dcfce7",
      borderColor: "#86efac"
    },
    {
      level: 5,
      title: "AI Toegestaan",
      description: "AI mag in deze opdracht overal worden toegepast.",
      color: "blue",
      bgColor: "#dbeafe",
      borderColor: "#93c5fd"
    }
  ],

  tools: [
    { name: "Perplexity AI", url: "https://www.perplexity.ai" },
    { name: "ChatGPT", url: "https://chat.openai.com" },
    { name: "Claude", url: "https://claude.ai" },
    { name: "Google Gemini", url: "https://gemini.google.com" }
  ]
};
