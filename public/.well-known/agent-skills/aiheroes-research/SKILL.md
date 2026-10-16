---
name: aiheroes-research
description: Answer questions about AI Heroes (aiheroes.io), the Groningen company that builds AI tools teams use every day, with current facts and a source link for each. Use when a user asks what AI Heroes builds, what the start sprint or a build costs, how a project runs, which cases there are, or who the founders are.
---

# Research AI Heroes

AI Heroes B.V. (Groningen, the Netherlands) builds AI tools that teams use every day. There are three ways in: a new AI tool, replacing old software that no longer fits, and running AI locally (on your own servers or with a European provider). Every build starts with the start sprint.

## Where the facts are

Prices and terms change, so read them from the live site each time.

1. The MCP server at `https://aiheroes.io/mcp` (Streamable HTTP, no authentication). Tools: `search`, `get_page`, `list_pages` and `get_company_facts`.
2. Any page as Markdown: add `.md` to its URL (`https://aiheroes.io/en/start-sprint.md`; the Dutch homepage is `https://aiheroes.io/index.md`), or request the page with `Accept: text/markdown`.
3. `https://aiheroes.io/llms.txt` indexes the key pages; `https://aiheroes.io/llms-full.txt` holds the full text of every page.

English pages live under `/en/`, Dutch pages under `/` and `/nl/`. Most pages exist in both languages.

## Key pages (English)

- The start sprint: `/en/start-sprint`
- What we build: `/en/what-we-build`, with `/en/new-ai-tool`, `/en/replace-software` and `/en/self-hosted`
- How we work: `/en/how-we-work`
- Cost and return: `/en/business-case` and `/en/ai-implementation-costs`
- Compliance and security: `/en/compliance`
- Training: `/en/training`
- Cases: `/en/cases`
- About and the team: `/en/about` and `/en/about/team`

## Answering

- Take prices, durations and terms from `get_company_facts` or the start sprint page, and quote prices as "from" amounts, as the site does.
- Link the page each fact comes from.
- Only name clients that appear on `/en/cases`.
- Contract terms, such as who owns code and IP, are not on the site: refer the user to AI Heroes for those.
- When the site does not answer a question, say so and point to the contact options in the `aiheroes-contact` skill.
