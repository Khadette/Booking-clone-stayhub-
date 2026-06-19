# StayHub — Hotel Booking Platform Clone

A Booking.com-inspired hotel/accommodation booking front end built with React (Vite), Tailwind CSS, and React Router. Original branding ("StayHub"), royalty-free Unsplash imagery, and 10 mock Rwanda-based properties — safe to deploy and link in a portfolio.

## Tech stack

- Vite + React 18
- Tailwind CSS (custom theme: navy `#003580`, accent yellow `#febb02`)
- React Router DOM (`/`, `/properties`, `/property/:id`, `/login`, `/signup`)
- Context API (`SearchContext`) for sharing destination/dates/guests state across pages
- Local mock data (`src/data/properties.json`, 10 listings)
- `lucide-react` for icons

## Getting started

```bash
npm install
npm run dev       # start dev server
npm run build     # production build to /dist
```

## Project structure

```
src/
  components/   # Header, Hero, SearchCard, PropertyCard, Gallery,
                # Amenities, RoomTypesTable, BookingWidget, Reviews,
                # FilterDrawer, DealsCarousel, TrendingDestinations,
                # PropertyTypeTabs, Footer
  pages/        # Home, Properties, PropertyDetail, Login, Signup
  context/      # SearchContext (destination, check-in/out, guests)
  data/         # properties.json (mock listings)
```

## Pages

- **/** — sticky header, hero with overlapping search card, property-type tabs, trending destinations grid, deals carousel, footer.
- **/properties** — sortable (price, rating) and filterable (type, price, rating) list of property cards; filters live in a slide-over drawer on mobile, a static sidebar on desktop.
- **/property/:id** — dynamic route; image gallery with lightbox, amenities, room types table with Reserve buttons, sticky booking widget on desktop (inline on mobile), guest reviews.
- **/login**, **/signup** — UI-only auth forms, no backend.

## Responsive breakpoints

- **Mobile** (<640px): hamburger nav, single-column cards, filters in a drawer.
- **Tablet** (640–1024px): 2-column card grid.
- **Desktop** (>1024px): full multi-column layout, sticky booking widget/sidebar.

## Deploying

Push to GitHub and import into Vercel or Netlify — no environment variables needed, it's fully static with local mock data.

## Notes

All imagery is sourced from Unsplash. No Booking.com logos, trademarks, or proprietary photography were used.
