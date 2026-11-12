# Explore with Oasis

A responsive, single-page travel site for Oasis Escapes. It is a standalone static website because no existing application source or logo asset was present in the workspace.

## Preview and deploy

- From the project root, run `npm run dev` and open `http://127.0.0.1:5173`. The dependency-free Node server serves the existing `outputs` folder. You can also open `index.html` directly in a browser. Fonts and Unsplash photographs load from the internet.
- Deploy the contents of this folder to any static web host (for example, Netlify, Vercel or GitHub Pages). There is no build command or package installation.
- The site currently has no backend. Enquiry forms validate the details, prepare a summary and try to copy it to the visitor's clipboard. Visitors can open that summary in WhatsApp and press Send, or call Oasis Escapes; the site does not store enquiries.

## Before publishing

1. Replace the header's text fallback with the supplied Oasis Escapes logo. The original logo was not present, so no replacement logo was created.
2. Replace the illustrative destination images with location-verified or client-owned photographs. They currently use remote Unsplash image URLs and are not guaranteed to depict the named destination.
3. WhatsApp is connected to the confirmed business number `+91 93923 29967`. The `WHATSAPP_BUSINESS_NUMBER` constant in `index.html` controls the destination; use country code and digits only if it changes.
4. Configure a secure form endpoint if enquiries should be delivered to the business. Keep customer data handling and any API credentials on the server.
5. Add verified package itineraries, inclusions, departure details, prices and availability. The six entries in `demoPackages` are explicitly labelled demonstration itinerary ideas. They contain no prices or availability.
6. Replace the placeholder stories/gallery with genuine customer feedback and trip photos, with permission. The current Instagram gallery is editorial inspiration, not a live feed or customer gallery.

## Updating trip ideas

Edit `destinations` and `demoPackages` in the bottom `<script>` of `index.html`. Each `demoPackages` item currently contains a destination, title, sample duration, travel styles, departure-city options, a short concept, example attractions and an inclusion note. Replace those notes with verified details before presenting an item as an actual package. The assistant uses destination styles and sample trip lengths for rule-based suggestions; it does not call an AI service or confirm package availability.
