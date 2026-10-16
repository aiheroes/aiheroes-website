---
name: aiheroes-contact
description: Get in touch with AI Heroes (aiheroes.io) on a user's behalf by booking an introduction with one of the founders, sending a question through the contact form, or by email or phone. Use when a user wants to talk to AI Heroes, plan a start sprint or ask what their project would cost.
---

# Contact AI Heroes

Confirm with the user before you send or book anything in their name, and show them the message first.

## Options

- **Book an introduction.** Each of the three founders has a booking calendar. Get the links from the `get_company_facts` tool (field `founders`) on the MCP server at `https://aiheroes.io/mcp`, or from the contact block on `https://aiheroes.io/en`.
- **The contact form.** It sits on the homepage (`https://aiheroes.io/en`, Dutch `https://aiheroes.io`) and on most other pages. In a browser with WebMCP the form is the tool `contact_aiheroes`, with the fields name, email, topic (one of the three ways in, or "Not sure yet") and message; the agent fills it in and the user clicks send. The form only accepts messages sent from the site itself, so an agent without a browser uses email.
- **Email:** info@aiheroes.io
- **Phone:** +31 50 200 3373 (office in Groningen, the Netherlands)

AI Heroes replies within 24 hours (`get_company_facts`, field `replyTime`).

## A good first message

- Who is asking: name, organisation and role.
- The way in: a new AI tool, replacing old software, running AI locally, or not sure yet.
- The work it is about: what happens today, who does it and how often.
- Any deadline, and who decides on the budget.

The usual next step is an intake for a start sprint. The `aiheroes-research` skill says where to read what the start sprint includes and costs.
