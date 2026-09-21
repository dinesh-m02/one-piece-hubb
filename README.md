# 🏴‍☠️ One Piece Hub

<p align="center">
  <img src="public/images/front-luffy2.png" alt="One Piece Hub" width="900"/>
</p>

<h3 align="center">
  🌊 Explore the Grand Line. Discover the World of One Piece.
</h3>

<p align="center">
  A fan-made interactive One Piece encyclopedia built for exploring characters,
  Devil Fruits, pirate crews, bounties, episodes, islands, news and more.
</p>

<p align="center">
  <a href="https://one-piece-hubb.vercel.app/">
    <img src="https://img.shields.io/badge/🌐%20Live%20Demo-One%20Piece%20Hub-f5c451?style=for-the-badge" />
  </a>
  <img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react" />
  <img src="https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript" />
  <img src="https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss" />
  <img src="https://img.shields.io/badge/Status-Live-success?style=for-the-badge" />
</p>

---

## 🌊 About the Project

**One Piece Hub** is a fan-made web application inspired by the world of
**One Piece**.

The project brings important information from the One Piece universe into one
interactive platform.

Instead of browsing different pages for characters, Devil Fruits, crews,
bounties, episodes and locations, One Piece Hub provides a single place to
explore them.

> ⚓ **Your journey through the Grand Line starts here.**

---

## ✨ Features

### 👒 Characters

Explore famous characters from the One Piece universe.

- Character profiles
- Pirate & Marine information
- Crew information
- Bounty details
- Character abilities
- Character status
- Individual character pages

---

### 🍎 Devil Fruits

Discover powerful Devil Fruits and their abilities.

- Paramecia
- Zoan
- Mythical Zoan
- Logia
- Known users
- Powers & abilities
- Weakness information
- Individual Devil Fruit pages
- Search & filtering

---

### 💰 Bounty Database

Explore famous pirate bounties.

- Pirate bounty rankings
- Bounty amounts
- Search
- Filtering
- Sorting
- Character information
- Bounty statistics

---

### 🏴‍☠️ Pirate Crews

Explore major crews and organizations.

- Straw Hat Pirates
- Red Hair Pirates
- Blackbeard Pirates
- Whitebeard Pirates
- Beast Pirates
- Big Mom Pirates
- Heart Pirates
- Kid Pirates
- Cross Guild
- Roger Pirates
- Marines
- Revolutionary Army

Each crew has its own detailed profile page.

---

### 🗺️ World Map

Explore important locations from the One Piece world.

Includes locations from:

- East Blue
- West Blue
- North Blue
- South Blue
- Grand Line
- New World
- Red Line

---

### 📺 Episodes & Arcs

Explore One Piece episodes and story arcs.

- Episode information
- Story arcs
- Episode search
- Arc filtering
- Watched status
- Episode navigation

---

### 📰 One Piece News

A dedicated news section for One Piece-related content.

- Anime
- Manga
- Movies
- Games
- Events
- Featured articles
- Article detail pages

---

### 🎵 Music Hub

A dedicated music interface for exploring One Piece-inspired music content.

Features include:

- Music search
- Categories
- Player interface
- Play / pause
- Previous / next
- Volume controls
- Favorite support

---

### 🧠 One Piece Quiz

Test your knowledge of the One Piece universe.

- Interactive questions
- Score tracking
- Progress indicator
- Final score
- Restart quiz

---

### ⚔️ Character Compare

Compare two characters side-by-side.

Compare:

- Character information
- Bounty
- Crew
- Role
- Abilities
- Other statistics

---

### 🔎 Global Search

Search across the entire One Piece Hub.

Search categories:

- Characters
- Devil Fruits
- Bounties
- Crews
- News
- Episodes

The search system supports multi-word searches and category filtering.

---

### ⭐ Favorites

Save interesting content for quick access.

Favorites can include:

- Characters
- Devil Fruits
- Crews
- Bounties
- News
- Episodes

Favorites are stored locally in the browser.

---

## 🎨 UI & Design

One Piece Hub uses a dark pirate-inspired interface with a gold accent theme.

### Design highlights

- 🌑 Dark immersive interface
- 🟡 Gold accent colors
- 📱 Mobile responsive layout
- 💻 Desktop optimized UI
- ✨ Smooth animations
- 🧭 Interactive navigation
- 🔍 Search interfaces
- 🃏 Card-based content
- 📖 Detailed profile pages
- 🎯 Responsive components

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 16** | Full-stack React framework |
| **React 19** | UI development |
| **TypeScript** | Type-safe development |
| **Tailwind CSS** | Styling |
| **Framer Motion** | Animations |
| **Lucide React** | Icons |
| **LocalStorage** | Client-side favorites & watched state |
| **Vercel** | Deployment |
| **GitHub** | Source control |

---

## 🏗️ Project Structure

```text
one-piece-hub/
│
├── app/
│   ├── about/
│   ├── bounties/
│   ├── characters/
│   │   └── [id]/
│   ├── compare/
│   ├── crews/
│   │   └── [id]/
│   ├── dashboard/
│   ├── devil-fruits/
│   │   └── [id]/
│   ├── episodes/
│   ├── explore/
│   ├── favorites/
│   ├── map/
│   ├── music/
│   ├── news/
│   │   └── [id]/
│   ├── quiz/
│   ├── search/
│   ├── layout.tsx
│   ├── page.tsx
│   └── not-found.tsx
│
├── components/
│   └── FavoriteButton.tsx
│
├── lib/
│   └── favorites.ts
│
├── public/
│   └── images/
│
├── package.json
├── next.config.ts
├── tsconfig.json
├── postcss.config.mjs
└── README.md
