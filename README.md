## E-Ticketing Frontend

Next JS frontend for the backend [e-ticketing](https://github.com/kevinkimutai/event-ticketing-backend)

### Getting Started

- Run `git clone https://github.com/kevinkimutai/e-ticketing_frontend.git`
- Ensure you have the following values from [Auth0](https://auth0.com/docs/quickstart/webapp/nextjs) at .**env.local**
  - `AUTH0_SECRET`
  - `AUTH0_BASE_URL`
  - `AUTH0_ISSUER_BASE_URL`
  - `AUTH0_CLIENT_ID`
  - `AUTH0_CLIENT_SECRET`
- Ensure you have your Google Maps Api Key at .**env.local** [google-maps](https://developers.google.com/codelabs/maps-platform/maps-platform-101-react-js#0)
  - `NEXT_PUBLIC_GOOGLE_MAP_API`

### Routes

- / (Home-Page)
- /event/event_id (Event Page)
- /dashboard/organiser/events (Organiser Dashboard)
- /dashboard/organiser/events/event_id (Organisers specific event page)
- /dashboard/attendee/events (attendee-dashboard)

### Screenshots

- **Home Page**
  ![homepage](https://firebasestorage.googleapis.com/v0/b/creadable-22c39.appspot.com/o/eticketing_home.png?alt=media&token=e63df943-7485-4873-ba99-4aa2c85cda2d)

- **event/event_id Page**
  ![event/event_id](https://firebasestorage.googleapis.com/v0/b/creadable-22c39.appspot.com/o/eticketing_event_id.png?alt=media&token=673aa5cb-ac89-416b-b9cb-ff2c8db7378e)

- **event modal**
  ![map_modal](https://firebasestorage.googleapis.com/v0/b/creadable-22c39.appspot.com/o/eticketing_map_modal.png?alt=media&token=6c790955-e6ad-4d90-9859-80cc46e53bd2)

- **dashboard/organiser/events**
- ![organiser_dashboard](https://firebasestorage.googleapis.com/v0/b/creadable-22c39.appspot.com/o/eticketing_dashboard_organiser.png?alt=media&token=681b054c-34d6-4e5a-8502-16ddbe28cf4e)

- **dashboard/organiser/events/event_id**
- ![dashboard_events](https://firebasestorage.googleapis.com/v0/b/creadable-22c39.appspot.com/o/eticketing_dashboard_events.png?alt=media&token=626a1bbb-176b-4ea1-a922-90f948237d14)

- **dashboard/attendee/events**
  ![dasboard_attendee](https://firebasestorage.googleapis.com/v0/b/creadable-22c39.appspot.com/o/dashboard_attendee_events.png?alt=media&token=cdc68ce6-7f8d-4aa2-9d34-24d0491d3411)
