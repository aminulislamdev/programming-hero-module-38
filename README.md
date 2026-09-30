# ACME

> **Build faster. Achieve more.**

Modern teams struggle with scattered tools, unclear progress tracking, and time wasted switching between apps. **ACME** solves this by bringing project management, progress tracking, and team collaboration into one fast, focused platform — built for people who want to ship, not juggle.

![Next.js](https://img.shields.io/badge/Next.js-15.1-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?logo=tailwind-css)
![MongoDB](https://img.shields.io/badge/MongoDB-6.10-47A248?logo=mongodb)
![Better Auth](https://img.shields.io/badge/Better_Auth-1.1-orange)
![License](https://img.shields.io/badge/license-MIT-green)

**🔗 Live Demo:** [https://acme-six-lilac.vercel.app/](https://acme-six-lilac.vercel.app/)  
**📦 Repository:** [https://github.com/aminulislamdev/programming-hero-module-38](https://github.com/aminulislamdev/programming-hero-module-38)

---

## 📖 Table of Contents

- [Problem & Solution](#-problem--solution)
- [Features](#-features)
- [Screenshots](#-screenshots)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Authentication Flow](#-authentication-flow)
- [Database Schema](#-database-schema)
- [API Endpoints](#-api-endpoints)
- [Environment Variables](#-environment-variables)
- [Getting Started](#-getting-started)
- [Security](#-security)
- [Responsive Design](#-responsive-design)
- [Deployment](#-deployment)
- [Testing](#-testing)
- [Future Improvements](#-future-improvements)
- [Author](#-author)
- [License](#-license)

---

## 🎯 Problem & Solution

### The Problem
Modern teams waste hours every week juggling between project management tools, task trackers, and communication apps. Progress gets lost, deadlines slip, and collaboration becomes a chore.

### Our Solution
ACME is a unified workspace that combines **project tracking**, **real-time collaboration**, and **analytics** into one streamlined platform. Built with modern web technologies, it loads fast, feels native, and stays out of your way.

---

## ✨ Features

### 🔐 Authentication
Full email/password authentication powered by **Better Auth**. Sessions are managed with **HTTP-only cookies**, cached for performance, and automatically refreshed. Password show/hide toggle for better UX.

### 🛡️ Route Protection
Two layers of security:
- **Middleware** — fast cookie check on every request
- **Server-side guard** — full session verification in protected layouts

### 👤 User Dashboard
Personalized dashboard with profile info, account stats, activity feed, and quick actions. Server-rendered for speed and security.

### 🎨 Modern UI
Custom dark theme with **lime-green accent**, built on **HeroUI** components and **Gravity UI icons**. Smooth animations, hover states, and clean typography throughout.

### 📱 Fully Responsive
Mobile-first design with hamburger menu, adaptive grids, and touch-friendly targets. Tested on mobile, tablet, and desktop.

### ⚡ Server Components
Data fetched on the server — no client-side waterfalls. Faster initial load, better SEO, and reduced bundle size.

### 🔒 Secure Sessions
- HTTP-only cookies (JS cannot access)
- Secure cookies in production (HTTPS only)
- Automatic session rotation
- CSRF protection built-in

### 🌙 Dark Mode
Beautiful dark theme by default — easy on the eyes, modern aesthetic.

---

## 📸 Screenshots

### 🏠 Home Page
![Home Page](./public/screenshots/home.png)
*Hero section with session-aware CTA and dashboard preview.*

### 🔑 Sign In
![Sign In](./public/screenshots/sign-in.png)
*Clean sign-in form with password show/hide toggle.*

### 📝 Sign Up
![Sign Up](./public/screenshots/sign-up.png)
*Registration form with name, email, and password validation.*

### 📊 Dashboard
![Dashboard](./public/screenshots/dashboard.png)
*Personalized dashboard with profile, stats, and activity feed.*

> **Note:** Add screenshots to `public/screenshots/` folder. Recommended size: 1600×900px.

---

## 🛠️ Tech Stack

| Layer | Tech | Version | Why? |
|---|---|---|---|
| **Framework** | Next.js | 15.1 | App Router, Server Components, built-in optimizations |
| **Language** | TypeScript | 5.7 | Type safety, better DX, catch errors at compile time |
| **Auth** | Better Auth | 1.1 | Type-safe, framework-agnostic, built-in MongoDB adapter |
| **Database** | MongoDB | 6.10 | Flexible schema, easy scaling, great with Node.js |
| **UI** | HeroUI | 2.4 | Beautiful React components, accessible by default |
| **Icons** | Gravity UI Icons | 1.0 | Clean, consistent, tree-shakeable |
| **Styling** | Tailwind CSS | 4.0 | Utility-first, fast iteration, tiny bundles |

---

## 📁 Project Structure

```
acme/
├── public/
│   └── screenshots/              # README screenshots
├── src/
│   ├── app/
│   │   ├── (auth)/               # Auth route group (no URL segment)
│   │   │   ├── sign-in/
│   │   │   │   └── page.tsx
│   │   │   └── sign-up/
│   │   │       └── page.tsx
│   │   ├── (protected)/          # Protected route group
│   │   │   ├── dashboard/
│   │   │   │   ├── page.tsx
│   │   │   │   └── SignOutButton.tsx
│   │   │   └── layout.tsx        # Server-side session guard
│   │   ├── api/
│   │   │   └── auth/
│   │   │       └── [...all]/
│   │   │           └── route.ts  # Better Auth handler
│   │   ├── about/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── features/page.tsx
│   │   ├── pricing/page.tsx
│   │   ├── layout.tsx            # Root layout + Navbar
│   │   ├── page.tsx              # Home
│   │   └── globals.css
│   ├── components/
│   │   ├── home/                 # Home page sections
│   │   │   ├── BackgroundEffects.tsx
│   │   │   ├── BetaBadge.tsx
│   │   │   ├── HeroCTA.tsx
│   │   │   ├── TrustBadges.tsx
│   │   │   ├── DashboardPreview.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── FeaturesSection.tsx
│   │   │   ├── BottomCTA.tsx
│   │   │   └── Footer.tsx
│   │   ├── dashboard/
│   │   │   └── SignOutButton.tsx
│   │   ├── Navbar.tsx
│   │   ├── UserMenu.tsx
│   │   └── PasswordInput.tsx
│   ├── hooks/
│   │   └── useAuth.ts
│   ├── lib/
│   │   ├── auth.ts               # Server auth config
│   │   └── auth-client.ts        # Client auth helper
│   └── middleware.ts             # Route protection
├── .env.example
├── .gitignore
├── next.config.ts
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

## 🔄 Authentication Flow

### 🆕 Sign-Up Flow
```
1. User visits /sign-up
2. Fills name, email, password
3. Submit → signUp.email() (client)
4. POST /api/auth/sign-up/email
5. Server validates & hashes password
6. User saved to MongoDB `user` collection
7. Session created in `session` collection
8. HTTP-only cookie set
9. router.push("/dashboard") + router.refresh()
10. Middleware checks cookie — pass
11. Protected layout verifies session — pass
12. Dashboard renders with user data
```

### 🔑 Sign-In Flow
```
1. User visits /sign-in
2. Fills email, password
3. Submit → signIn.email() (client)
4. POST /api/auth/sign-in/email
5. Server verifies credentials
6. Session created & cookie set
7. Redirect to callbackUrl or /dashboard
```

### 🚪 Sign-Out Flow
```
1. User clicks Sign Out (UserMenu or dashboard)
2. signOut() called
3. POST /api/auth/sign-out
4. Session deleted from MongoDB
5. Cookie cleared
6. router.push("/sign-in") + router.refresh()
7. Navbar updates to "Guest" state
```

### 🛡️ Protected Route Access
```
1. User visits /dashboard
2. Middleware runs → cookie check
3. No cookie? → redirect /sign-in?callbackUrl=/dashboard
4. Cookie exists? → continue
5. (protected)/layout.tsx → full session verify
6. Invalid? → redirect /sign-in
7. Valid? → render dashboard
```

---

## 🗄️ Database Schema

MongoDB database name: **`acme`**

### `user` Collection
```json
{
  "_id": "ObjectId",
  "name": "John Doe",
  "email": "john@example.com",
  "emailVerified": false,
  "image": null,
  "createdAt": "2025-01-15T10:30:00Z",
  "updatedAt": "2025-01-15T10:30:00Z"
}
```

### `session` Collection
```json
{
  "_id": "ObjectId",
  "userId": "ObjectId",
  "token": "session_token_string",
  "expiresAt": "2025-01-22T10:30:00Z",
  "ipAddress": "127.0.0.1",
  "userAgent": "Mozilla/5.0...",
  "createdAt": "2025-01-15T10:30:00Z",
  "updatedAt": "2025-01-15T10:30:00Z"
}
```

### `account` Collection
Stores credentials (hashed password), OAuth providers.

### `verification` Collection
Email verification tokens, password reset tokens.

---

## 🔌 API Endpoints

Better Auth auto-generates these endpoints:

| Method | Endpoint | Purpose |
|---|---|---|
| `POST` | `/api/auth/sign-up/email` | Register new user |
| `POST` | `/api/auth/sign-in/email` | Login |
| `POST` | `/api/auth/sign-out` | Logout |
| `GET` | `/api/auth/get-session` | Fetch current session |
| `POST` | `/api/auth/update-user` | Update profile |
| `POST` | `/api/auth/change-password` | Change password |
| `POST` | `/api/auth/forget-password` | Request reset link |
| `POST` | `/api/auth/reset-password` | Reset with token |

All handled by `src/app/api/auth/[...all]/route.ts`.

---

## 🔑 Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

| Variable | Description | Required | Public? |
|---|---|---|---|
| `BETTER_AUTH_DB_URL` | MongoDB connection string | ✅ | ❌ |
| `BETTER_AUTH_SECRET` | 32-char random secret for encryption | ✅ | ❌ |
| `BETTER_AUTH_URL` | Server base URL | ✅ | ❌ |
| `NEXT_PUBLIC_APP_URL` | Client base URL | ✅ | ✅ |

### Generate a secure secret:

```bash
openssl rand -base64 32
```

### Example `.env.local`:

```env
BETTER_AUTH_DB_URL=mongodb+srv://user:pass@cluster.mongodb.net/acme?retryWrites=true&w=majority
BETTER_AUTH_SECRET=your_generated_32_char_secret
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

⚠️ **Never commit `.env.local`** — it's in `.gitignore`.

---

## 🚀 Getting Started

### Prerequisites

- Node.js **18.17+** or **20+**
- npm / pnpm / yarn
- MongoDB Atlas account ([free tier](https://www.mongodb.com/cloud/atlas/register))

### Steps

**1. Clone the repository**
```bash
git clone https://github.com/aminulislamdev/programming-hero-module-38.git
cd programming-hero-module-38
```

**2. Install dependencies**
```bash
npm install
```

**3. Setup environment**
```bash
cp .env.example .env.local
# Then edit .env.local with your credentials
```

**4. Setup MongoDB Atlas**
- Create free cluster
- Create database user
- Whitelist your IP (or `0.0.0.0/0` for dev)
- Copy connection string

**5. Run development server**
```bash
npm run dev
```

**6. Open browser**
```
http://localhost:3000
```

---

## 🔒 Security

| Mechanism | Implementation |
|---|---|
| **Password hashing** | bcrypt via Better Auth |
| **Session cookies** | HTTP-only, `SameSite=Lax`, `Secure` in production |
| **CSRF protection** | Built-in with Better Auth |
| **Route protection** | Middleware + server-side guards |
| **Session rotation** | Auto-refresh every 24 hours |
| **Session caching** | 5-minute cookie cache for performance |
| **Secret management** | Environment variables (`.env.local`) |
| **Input validation** | Client + server-side validation |
| **SQL/NoSQL injection** | Parameterized queries via MongoDB driver |
| **XSS protection** | React auto-escaping + CSP headers |

---

## 📱 Responsive Design

| Breakpoint | Width | Layout |
|---|---|---|
| **Mobile** | `< 640px` | Stacked, hamburger menu, single column |
| **Tablet** | `640px – 1024px` | 2-column grids, condensed nav |
| **Desktop** | `> 1024px` | Full 3-4 column grids, expanded nav |

### Tested Devices
- 📱 iPhone 12/13/14 (Safari)
- 📱 Pixel 6/7 (Chrome)
- 📱 iPad Air (Safari)
- 💻 MacBook Pro 14" (Chrome, Safari)
- 💻 Windows 11 (Edge, Chrome)

---

## 🌐 Deployment

### Deployed on Vercel

**Live URL:** [https://acme-six-lilac.vercel.app/](https://acme-six-lilac.vercel.app/)

### Deployment Steps

1. Push code to GitHub
2. Import repo at [https://vercel.com/aminulislam424842-1101s-projects/acme](https://vercel.com/aminulislam424842-1101s-projects/acme)
3. Add environment variables in Vercel dashboard:
   - `BETTER_AUTH_DB_URL`
   - `BETTER_AUTH_SECRET`
   - `BETTER_AUTH_URL` (e.g. `https://acme.vercel.app`)
   - `NEXT_PUBLIC_APP_URL` (e.g. `https://acme.vercel.app`)
4. Deploy 🚀

### MongoDB Whitelist
Add Vercel's IP ranges to MongoDB Atlas Network Access:
- `0.0.0.0/0` (for demo) **OR**
- Vercel's specific IPs

---

## 🧪 Testing

Manually tested scenarios:

### Authentication
- [x] Sign up with valid data → user created, redirected to dashboard
- [x] Sign up with existing email → error shown
- [x] Sign up with weak password → validation error
- [x] Sign in with valid credentials → session created
- [x] Sign in with wrong password → error shown
- [x] Sign out → session cleared, redirected to sign-in
- [x] Session persists across page refresh
- [x] Session expires after 7 days

### Route Protection
- [x] Unauthenticated user visiting `/dashboard` → redirected to `/sign-in`
- [x] Authenticated user visiting `/sign-in` → redirected to `/dashboard`
- [x] Direct URL access to protected routes blocked

### UI/UX
- [x] Password show/hide toggle works
- [x] Mobile hamburger menu opens/closes
- [x] UserMenu dropdown opens/closes on outside click
- [x] Navbar updates on session change
- [x] Form validations show inline errors
- [x] Dark theme consistent across pages
- [x] All links work correctly

### Responsive
- [x] Home page on mobile/tablet/desktop
- [x] Dashboard on mobile/tablet/desktop
- [x] Sign-in/sign-up forms on small screens
- [x] Navbar collapses properly

---

## 🚧 Future Improvements

Planned for future versions:

- [ ] **OAuth providers** — Google, GitHub, Discord
- [ ] **Email verification** — Sendgrid/Resend integration
- [ ] **Password reset** — Forgot password flow
- [ ] **Two-factor auth** — TOTP-based 2FA
- [ ] **User profile** — Avatar upload, bio, social links
- [ ] **Team workspaces** — Multi-tenant support
- [ ] **Real projects** — Replace dashboard mockup with real data
- [ ] **Notifications** — In-app + email
- [ ] **Dark/light toggle** — User preference
- [ ] **i18n** — Bengali, Spanish, French
- [ ] **Stripe billing** — Pro/Enterprise plans
- [ ] **Admin panel** — User management
- [ ] **API keys** — For programmatic access
- [ ] **Audit logs** — Track user actions
- [ ] **Unit tests** — Vitest + React Testing Library
- [ ] **E2E tests** — Playwright

---

## 👨‍💻 Author

**Your Name**

- 🐙 GitHub: [@aminulislamdev](https://github.com/aminulislamdev)
- 💼 LinkedIn: [aminulislamjs](https://www.linkedin.com/in/aminulislamjs/)
- 📧 Email: aminulislam424842@gmail.com

---

## 🙏 Acknowledgments

- [Better Auth](https://better-auth.com) — authentication framework
- [HeroUI](https://heroui.com) — React component library
- [Gravity UI](https://gravity-ui.com) — icon set
- [Next.js](https://nextjs.org) — React framework
- [Tailwind CSS](https://tailwindcss.com) — CSS framework
- [MongoDB](https://mongodb.com) — database
- [Vercel](https://vercel.com) — hosting

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for details.

---

<p align="center">
  <strong>ACME</strong> — Built with ❤️ using Next.js, Better Auth, and MongoDB
  <br />
  <a href="https://acme-six-lilac.vercel.app/">Live Demo</a> ·
  <a href="https://github.com/aminulislamdev/programming-hero-module-38/issues">Report Bug</a> ·
  <a href="https://github.com/aminulislamdev/programming-hero-module-38/issues">Request Feature</a>
</p>