# React Routing & Firebase Authentication

## Setup
1. `npm install`
2. Firebase Console -> create project -> Authentication -> Sign-in method -> enable **Email/Password**
3. Project settings -> add a Web app -> copy the config
4. `cp .env.example .env` and paste the values
5. `npm run dev`

## Routes
| Page | Route | Access |
|---|---|---|
| Home | `/` | Public |
| Login | `/login` | Public |
| Register | `/register` | Public |
| Dashboard | `/dashboard` | Protected |
| Profile | `/profile` | Protected |

## How it works
- **Routing:** `BrowserRouter` (main.jsx) + `Routes`/`Route` (App.jsx); `Link` in Navbar.
- **Auth:** `firebase.js` -> `getAuth`. `AuthContext` wraps `createUserWithEmailAndPassword`, `signInWithEmailAndPassword`, `signOut`.
- **Auth state / persistence:** `onAuthStateChanged` listener sets `user`; Firebase restores the session on refresh. `loading` flag prevents a false redirect while it restores.
- **Protected routes:** `ProtectedRoute` returns `<Navigate to="/login" />` if `user` is null.
