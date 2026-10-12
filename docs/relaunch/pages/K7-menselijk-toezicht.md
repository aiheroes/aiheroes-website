# K7 Menselijk toezicht en logging

| Categorie | Nieuwe URL | Oude URL | Hangt onder | Zoekdata (GSC, 6 mnd) |
|---|---|---|---|---|
| Kennisartikel (groep Compliance, blog-template B0) | `/nl/kennis/menselijk-toezicht` | nieuw | P9 Compliance | geen eigen pagina |

## 1. Wat stond er

**Op de site:** geen pagina. Vermeldingen:
- **Homepage-standaard:** "Compliance vanaf de tekentafel: AI Act-classificatie, logging, menselijk toezicht en Europese hosting zitten in het ontwerp".
- **K1 AI Act (oud artikel):** hoog risico vraagt "risicobeheer, documentatie, menselijk toezicht, registratie". Toezichtseisen "kosten maanden, geen weken".
- **Homepage-case (anoniem, Medux):** "met doorschakeling naar een medewerker bij lastige of dringende vragen". Dat is een praktijkvoorbeeld van menselijk toezicht.

**Zoekdata:**

| Zoekterm | Vertoningen | Positie |
|---|---|---|
| menselijk toezicht ai act 2026 | 5 | 5,4 |
| menselijk toezicht ai 2026 | 3 | 8,7 |

Klein volume, hoge positie.

## 2. Wat moet er staan

**Voor wie en met welke vraag.** Een product owner, CTO of compliance-verantwoordelijke die een AI-toepassing bouwt of inkoopt die beslissingen voorbereidt: klantvragen, beoordelingen, planning. Zijn vraag: wat betekent "menselijk toezicht" concreet in een systeem, wat moet je loggen, en wanneer is het verplicht?

**Kernantwoord (concept, na verificatie).**
- Bij hoog-risico-AI verplicht de AI Act dat mensen het systeem kunnen begrijpen, bewaken en zo nodig ingrijpen of overrulen.
- Daarnaast moet het systeem automatisch vastleggen wat het doet.
- Ook buiten hoog risico is het verstandig: het maakt fouten zichtbaar en houdt verantwoordelijkheid bij mensen.

**Opbouw**
1. Wat de wet vraagt. Kernboodschap: toezicht (artikel 14) en logging (artikel 12) bij hoog risico, in gewone taal, met bronlink.
2. Wat dat in een systeem betekent. Kernboodschap: ontwerpkeuzes. Concrete patronen:
   - een mens keurt goed voor verzending;
   - doorschakelen bij twijfel of urgentie;
   - een drempel voor zekerheid;
   - een noodstop;
   - uitleg bij een uitkomst.
3. Wat je logt en hoe lang. Kernboodschap: input, output, beslissing, wie ingreep, en de bewaartermijn in balans met de AVG (link K6).
4. Voorbeeld uit de praktijk: Medux, bij naam (§7). De spraakassistent handelt zo'n 80% van de gesprekken af en schakelt bij lastige of dringende vragen door naar een medewerker. Zonder tijdsclaim dat het systeem nog draait; link naar C6.
5. Achteraf inbouwen of vanaf het begin. Kernboodschap: achteraf is duur. Dit is de brug naar "Compliance vanaf de tekentafel".
6. FAQ.
7. Auteur, bijwerkdatum, CTA en gerelateerd.

**Actueel houden.** De toepassingsdatum van de hoog-risicoregels kan verschuiven (zie K1). Claude checkt elk kwartaal, David keurt; bijwerkdatum zichtbaar.

**FAQ**
1. Is menselijk toezicht altijd verplicht?
2. Wat moet je loggen bij een AI-systeem?
3. Hoe lang bewaar je logs?
4. Betekent menselijk toezicht dat iemand alles moet controleren?
5. Wie is verantwoordelijk als de AI een fout maakt?

**Volgende stap.**
- Zacht naar P9 Compliance.
- Voor wie gaat bouwen: naar P7 Startsprint.

**Bewijs en links**
- **Bewijs:** de Medux-case met doorschakeling, bij naam (L1, C6).
- **Links:** omhoog naar P9; opzij naar K1, K6 en L1.

**SEO/GEO**
- **Zoekintentie:** informatief, met een specifieke vraag.
- **Titel:** "Menselijk toezicht en logging in AI-systemen: wat de AI Act vraagt en hoe je het bouwt"
- **Auteur:** David Homan.

**Feiten om te verifiëren**
- De artikelen 12 (logging) en 14 (menselijk toezicht) van de AI Act, en de bewaarplicht voor logs bij gebruiksverantwoordelijken (artikel 26).
- De actuele toepassingsdatum van de hoog-risicoverplichtingen (zie K1, Digital Omnibus).

**Besluiten**
- De klantenservice-case is het voorbeeld van doorschakeling, en Medux mag hier bij naam (alleen op home en LinkedIn anoniem) (§7).
- Auteur: David Homan (§5).
- Tijdlijn: Claude checkt elk kwartaal, David keurt (§11).

**Wacht op**
- Niets van Frans.
