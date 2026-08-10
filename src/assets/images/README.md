# Images

## Profile photo

Drop your photo in this folder named `profile`, with any of these extensions:

```text
profile.jpg   profile.jpeg   profile.png   profile.webp   profile.avif
```

`ProfileImage.tsx` picks it up automatically via `import.meta.glob` — nothing to
import or wire up. Until a file is present, an `MDH` monogram renders in its
place, so the build never breaks.

**Recommended:** square crop, at least 800×800, under ~300 KB. It is displayed
in a rounded square on the home hero and the About page.

## Project screenshots

`projects/` is reserved for per-project imagery. Nothing reads from it yet — the
project cards currently render a technology logo row instead of a thumbnail.
