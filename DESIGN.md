# Uiverse Design System & Visual Specification

This document serves as the persistent source of truth for the codebase's UI/UX design tokens, component anatomy, spacing, typography, colors, and agent instructions.

## 1. Design Philosophy
- **De-slopped Precision**: Eliminate visual noise, inconsistent paddings, generic colors, and unaligned layouts.
- **High-Contrast Dark Void**: Deep dark backdrop (`#08080A`) paired with razor-sharp grid lines and ambient glow points.
- **Vibrant Accent Layer**: Pastel pink/purple linear gradients (`#F5D0FE` to `#E879F9` / `#C084FC`) for primary CTAs and interactive highlights.
- **Micro-Interactions**: Subtle hover translations, smooth interactive sliders, glassmorphism borders, and live badge indicators.

---

## 2. Color Palette & Tokens
| Token | HSL / Hex | Usage |
| :--- | :--- | :--- |
| `background` | `#08080C` | Root page background with grid backdrop |
| `surface` | `#111118` / HSL(240 25% 8%) | Card containers, interactive panels |
| `surface-border` | `rgba(255, 255, 255, 0.12)` | Subtle glass borders |
| `text-primary` | `#F8FAFC` | Main headings, primary copy |
| `text-muted` | `#94A3B8` | Subtitles, labels, descriptions |
| `accent-primary` | `#F5D0FE` -> `#D8B4FE` | Primary CTA buttons, glowing headlines |
| `accent-emerald` | `#34D399` | "After" indicator, active green status badges |
| `accent-rose` | `#F43F5E` | "Before" indicator |

---

## 3. Typography
- **Display Font**: Space Grotesk / System Sans for ultra-bold impactful headlines (`De-slop your AI websites`).
- **Body Font**: Inter / Sans for crisp legibility across body text and badges.
- **Mono Font**: JetBrains Mono for code blocks, badges, tags, and data stats.

---

## 4. Key Component Specifications

### 4.1 Product Hunt Feature Badge
- Container: Rounded-lg pill (`rounded-xl`), border `rgba(255, 255, 255, 0.15)`, background `#16161E`.
- Icon: Circle with 'P' inside, bold label "FEATURED ON Product Hunt", vote triangle "▲ 198".

### 4.2 Tech Stack Avatars ("Works with")
- Stacked pill container with framework badges (React, Next.js, TypeScript, Tailwind) and a `+10` count indicator.

### 4.3 Action Buttons
- **Primary CTA**: `bg-gradient-to-r from-[#F5D0FE] to-[#D8B4FE] text-[#0A0A10] font-semibold rounded-xl hover:brightness-105 shadow-[0_0_20px_rgba(245,208,254,0.3)]`.
- **Secondary CTA**: `border border-white/20 bg-white/5 hover:bg-white/10 text-white rounded-xl`.

### 4.4 Interactive Before / After Comparison Slider
- Dual view card showing "Before" (sloppy UI) vs "After" (UIverse polished system UI).
- Interactive drag & hover split slider control (`< >`).

---

## 5. Coding Agent Guidelines
When creating or modifying components:
1. Always reference tokens defined in `system.css` and `DESIGN.md`.
2. Do not introduce ad-hoc colors outside the defined palette.
3. Ensure all interactive elements have hover effects, proper contrast, and keyboard accessibility.
