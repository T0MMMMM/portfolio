# Portfolio – CLAUDE.md

## Project Overview
Personal portfolio built with **React + TypeScript + Vite**.  
The experience is a **desktop metaphor**: the user lands on a full-screen wallpaper, sees a single desktop icon ("mon portfolio :]"), clicks it, and the Zen Browser window animates open — the portfolio lives inside that browser UI.

## Tech Stack
| Layer | Choice |
|---|---|
| Framework | React 18 + TypeScript |
| Build | Vite |
| Styling | Tailwind CSS v3 + CSS Modules for complex animations |
| Animation | Framer Motion |
| Icons | Lucide React + custom SVGs |
| Fonts | Google Fonts (chosen in design phase) |
| Linting | ESLint + Prettier |

## File & Folder Conventions
```
src/
  assets/          # bg.* and icon.* dropped here by user
  components/
    Desktop/       # Wallpaper + DesktopIcon
    ZenBrowser/    # The full browser chrome replica
      Sidebar/     # Left sidebar (tabs, pinned, controls)
      Toolbar/     # Top bar (window buttons, nav, search)
      ContentArea/ # Portfolio pages rendered here
    Portfolio/     # Actual portfolio sections (About, Projects, Contact…)
  hooks/           # useZenWindow, useActiveTab…
  styles/          # globals.css, variables.css
  App.tsx
  main.tsx
```

## Assets (user-provided, placed at project root before running Claude Code)
- `bg.webp` (or `.jpg` / `.png`) — full-screen desktop wallpaper  
- `icon.png` (or `.webp`) — desktop icon image  
Both files are imported via `src/assets/` — Vite handles the paths.

## Design Tokens (match Zen Browser screenshot)
```css
--zen-bg:            #2a2320;
--zen-sidebar-bg:    rgba(30, 24, 22, 0.82);
--zen-sidebar-width: 290px;
--zen-toolbar-h:     44px;
--zen-border-radius: 14px;          /* outer window */
--zen-inner-radius:  10px;
--zen-glass-blur:    20px;
--zen-text:          #e8d5c4;
--zen-text-muted:    #9a8070;
--zen-accent:        #f5a623;
--zen-tab-active:    rgba(255,255,255,0.08);
--zen-icon-size:     42px;          /* pinned site icons */
--zen-window-w:      min(1060px, 92vw);
--zen-window-h:      min(760px, 88vh);
```

## Zen Browser UI Spec (pixel-faithful reproduction)
### Window chrome
- Outer container: `border-radius: 14px`, subtle drop-shadow, backdrop frosted glass on content area
- **Top-left**: 3 macOS traffic-light dots (close=`#ff5f57`, min=`#febc2e`, max=`#28c840`), diameter `12px`, gap `8px`
- **Top toolbar** (same row): gear icon → back arrow → forward arrow → refresh icon → spacer → search bar (pill shape, `~160px` wide, placeholder "Search with Google o…")

### Left Sidebar (`290px` wide)
**Top section — pinned icons grid (2 cols × N rows, `42px` icons, `8px` gap):**
Row 1: Discord, Midjourney (or custom), Settings  
Row 2: Reddit, GitHub, YouTube  
*(These are the user's own links — replace URLs in a config file `src/config/pinnedSites.ts`)*

**Middle section — tab list:**
Each tab: favicon (16px) + label + close button on hover  
Tabs: "Personal" (yellow dot workspace), "ChatGPT", "YouTube", "+ New Tab"  
Active tab has `--zen-tab-active` bg + left accent bar `2px`

**Bottom bar (flex row):**
gear icon (settings) | yellow dot + grey dot (workspaces) | download icon

### Content Area
Right of sidebar, fills remaining space, `border-radius: 0 14px 14px 0`.  
Renders the active portfolio "page" — blurred warm background by default (matches screenshot).

## Animation Spec
### Desktop → Browser open
1. Icon sits centered on desktop, subtle float animation (`translateY ±4px`, 3s loop)
2. On click: icon scales up `1 → 1.15` (80ms) then down `1.15 → 0` (120ms)  
3. Browser window scales from `0.4 → 1` + fades in, `duration: 0.45s`, `ease: [0.34, 1.56, 0.64, 1]` (spring-like overshoot)  
4. Sidebar slides in from left `translateX(-30px → 0)` with `delay: 0.15s`
5. Content area fades in `delay: 0.25s`

### Browser → Desktop (close button)
Reverse: window scales `1 → 0.4` + fades out, icon reappears

## Portfolio Sections (rendered inside ContentArea)
Define in `src/config/portfolioSections.ts`:
- **Home** — hero with name, title, brief bio  
- **Projects** — card grid  
- **About** — timeline / skills  
- **Contact** — links (GitHub, email, etc.)  

Each section = one React component in `src/components/Portfolio/`.  
Navigation via sidebar tabs (each tab = one section).

## Commands
```bash
npm install          # install deps
npm run dev          # dev server
npm run build        # production build
npm run preview      # preview build
npm run lint         # ESLint check
```

## Environment
No `.env` needed — this is a purely static portfolio.

## Strict Rules for Claude Code
- **Never** hard-code pixel values that should come from CSS variables  
- **Always** use `import` for asset paths (no string literals like `"/bg.webp"`)  
- Every component must have a TypeScript interface for its props  
- Framer Motion variants must be defined **outside** the component (no inline object literals inside JSX)  
- Mobile: the Zen window should gracefully degrade — on `<768px` viewport hide the sidebar by default with a toggle button
