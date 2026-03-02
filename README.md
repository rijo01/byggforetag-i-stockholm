# 🏗️ Byggföretag i Stockholm

Komplett Next.js 15 webbplats för byggforetag-i-stockholm.se – Lead generation för byggföretag.

## 🚀 Deploy-guide

### 1. Push till GitHub
```bash
cd byggforetag-i-stockholm
git init
git add .
git commit -m "Initial commit - byggforetag-i-stockholm.se"
gh repo create byggforetag-i-stockholm --public --push --source=.
```

### 2. Koppla Vercel
1. Gå till [vercel.com/new](https://vercel.com/new)
2. Importera `byggforetag-i-stockholm` från GitHub
3. Framework Preset: **Next.js**
4. Klicka **Deploy**

### 3. Loopia DNS
Lägg till i DNS-editorn för byggforetag-i-stockholm.se:
```
Typ: A     | Namn: @  | Data: 76.76.21.21
Typ: CNAME | Namn: www | Data: cname.vercel-dns.com
```

### 4. Vercel Custom Domain
1. Settings → Domains → Lägg till `byggforetag-i-stockholm.se`
2. Lägg till `www.byggforetag-i-stockholm.se` (redirect till root)

### 5. MaxiAI-prompt för dagligt innehåll
```
Du är en byggexpert och copywriter för byggforetag-i-stockholm.se.
Skriv en ny byggguide-artikel varje dag i Next.js page format.
Fokusera på: renoveringstips, ROT-avdrag, material-val, bygglov, prisguider, stadsdelar.
Commit till GitHub repo byggforetag-i-stockholm, branch main.
```

### 6. Google Search Console
1. Verifiera domän med DNS TXT-post
2. Skicka in sitemap: `https://byggforetag-i-stockholm.se/sitemap.xml`

## 📁 Struktur
```
src/
├── app/
│   ├── page.tsx              # Hem (hero + offertformulär)
│   ├── layout.tsx            # Root layout med SEO
│   ├── globals.css
│   ├── sitemap.ts
│   ├── robots.ts
│   ├── tjanster/page.tsx     # Alla byggtjänster
│   ├── stadsdelar/page.tsx   # Områden i Stockholm
│   ├── guider/page.tsx       # Byggguider (MaxiAI-content)
│   ├── hitta-expert/page.tsx # Offertförfrågan (huvudkonvertering)
│   └── om-oss/page.tsx
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── QuoteForm.tsx         # Lead generation formulär
│   └── TrustBadges.tsx
```

## 💰 Intäktsmodell
- **Lead generation**: Offertförfrågningar vidarebefordras till byggföretag mot avgift
- **Affiliate**: Länkar till byggvaruhus, materialleverantörer
- **Annonsering**: Premiumplacering för byggföretag

## ✅ Inkluderat
- SEO-optimerade meta-taggar & Open Graph
- Schema.org JSON-LD markup
- Automatisk sitemap.xml
- Lead-formulär med projekttyp & budget
- Trust badges (kvalitetssäkrade, gratis, snabbt)
- "Så fungerar det"-sektion
- Responsiv design
- Breadcrumb-navigation
