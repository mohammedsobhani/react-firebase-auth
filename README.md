<b>C243066<\b> 
## Project Description
A Single Page Application (SPA) built with **React (Vite)**, **React Router v6**, and **Firebase v10 Authentication**. The app demonstrates client-side routing, global authentication state management, session persistence across page refreshes, and route-level access control.

### Key Features
- **Client-Side Routing (`react-router-dom`):** Seamless navigation across `Home`, `Login`, `Register`, `Dashboard`, and `Profile` without full page reloads.
- **Firebase Email/Password Authentication:** User registration (`createUserWithEmailAndPassword`), sign-in (`signInWithEmailAndPassword`), and sign-out (`signOut`).
- **Persistent Auth State (`AuthContext`):** Uses `onAuthStateChanged` with a `loading` guard to preserve the authenticated session across browser refreshes without premature redirects.
- **Protected Routes (`ProtectedRoute`):** Restricts `/dashboard` and `/profile` to authenticated users, automatically redirecting unauthenticated visitors to `/login`.
- **Dynamic Navbar:** Conditionally renders `Login` / `Register` or `Dashboard` / `Profile` / `Logout` based on the active user's authentication status.
