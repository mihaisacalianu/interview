# Front-End Coding Challenge

Welcome! This challenge is designed to evaluate your knowledge of **React**, **TypeScript**, and **Next.js**. You'll be building a simple app using the latest version of **Next.js**, with **TypeScript**, **Tailwind CSS** (v3 or v4), and **shadcn/ui** for UI components.

You will fetch data from the [Rick and Morty API](https://rickandmortyapi.com/documentation/#rest) and build a multi-page application using both server and client components where appropriate.

---

## Objective

Create a small Next.js application that:

- Uses proper routing and navigation
- Leverages both **server** and **client components** thoughtfully
- Shares state (search results) across different pages via **React context**
- Presents lists and detail views for characters, episodes, and locations

---

## Requirements & Steps

1. **Home Page**

   - Create a root page (`/`) with **three navigation links**:
     - Characters - done!
     - Locations - done!
     - Episodes - done!

2. **Search Functionality**

   - Implement a **search bar** using **React Context**.
   - The search bar should live at the top level (e.g., layout or a shared component), and its results should be accessible on all list pages.
   - Avoid re-fetching data unnecessarily when filtering results.

3. **List Pages (Characters, Locations, Episodes)**

   - Each should be a **server component**.
   - Use **server actions** to fetch and render a list of items with:
     - Basic information (name, type, etc.)
     - Image (if available)

4. **Search Behavior**

   - Typing in the search bar should **filter results locally** (client-side) without refetching data from the server.

5. **Detail Pages**

   - Clicking a list item should navigate to a detail view page:
     - `/characters/[id]` - done!
     - `/locations/[id]` - done!
     - `/episodes/[id]` - done!

6. **Character Detail Page**

   - Display basic character information and image. - done!
   - Render a **list of episode cards** where the character appears: - done!
     - Each card should show the episode name and link to its detail page. - done!
   - Show the character’s **location information**, with a link to its corresponding location detail page. - done!

7. **Episode Detail Page**

   - Display basic episode information. - done!
   - Show a **list of characters** featured in the episode. -done!
   - Each character name should link to its detail page. -done!

8. **Location Detail Page**
   - Display basic location information. - done!
   - Render a **list of residents** (characters). - done!
   - Each resident name should link to the character’s detail page. -done!

---

## Evaluation Criteria

- Code readability and structure
- Correct use of Next.js features (routing, server/client components)
- State management and context usage
- Use Tailwind and shadcn components
- Clean and minimal design (optional)
