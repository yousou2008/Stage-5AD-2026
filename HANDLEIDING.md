# Handleiding – Taste King Pizza Website

> Je hoeft geen programmeur te zijn om deze site aan te passen.  
> Volg gewoon de stappen hieronder.

---

## Welk bestand pas je aan?

| Wat wil je aanpassen? | Open dit bestand |
|---|---|
| Navigatiebalk, menu-items, prijzen, toppings | `js.js` |
| Kleuren, lettergroottes, layout | `style.css` |
| Tekst op de homepagina (foto's) | `index.html` |
| Contactgegevens | `Contact.html` |
| Openingsuren | `Openingsuren.html` |
| Bestelplatformen | `DeliveryZones.html` |
| Menukaart | `menu.html` |

---

## 1. Een pizza toevoegen of aanpassen (`js.js`)

Open `js.js` en zoek naar `pizza: [`.  
Daaronder staan alle pizza's in dit formaat:

```js
{ 
    naam: "Alpeross", 
    ingredienten: "Looksaus bodem, kip, ui, schijfjes tomaat" 
},
```

**Naam aanpassen:**  
Verander de tekst tussen de aanhalingstekens na `naam:`.

**Ingrediënten aanpassen:**  
Verander de tekst tussen de aanhalingstekens na `ingredienten:`.

**Nieuwe pizza toevoegen:**  
Kopieer een blokje van `{` tot en met `},` en plak het onder het laatste blokje.  
Pas dan de naam en ingrediënten aan.

> ⚠️ Vergeet de komma `,` niet na het sluitende `}`!

---

## 2. Pasta aanpassen (`js.js`)

Zoek naar `pasta: [`. Werkt hetzelfde als pizza, maar met `detail` in plaats van `ingredienten`:

```js
{ 
    naam: "Carbonara", 
    detail: "Spek in kaassaus" 
},
```

---

## 3. Prijzen aanpassen (`js.js`)

Zoek onderaan `js.js` naar:

```js
pizzaPrijzen: { small: 8.95, medium: 10.95, large: 13.95 },
pizzaPrijzenOpDinsdag: { small: 7.95, medium: 9.95, large: 12.95 },
pastaPrijzen: { afhaal: 10.95, levering: 12.95 },
```

Verander gewoon het getal na de `:`.  
Gebruik een punt `.` als decimaalteken, geen komma.

---

## 4. Toppings aanpassen (`js.js`)

Zoek naar `toppings: [`. Elke topping staat tussen aanhalingstekens, gescheiden door een komma:

```js
toppings: [
    "Champignons", "Paprika", "Ui",
    ...
],
```

**Topping toevoegen:** Schrijf `"NieuweTopping",` bij de rest.  
**Topping verwijderen:** Verwijder de hele `"Naam",` inclusief komma.

---

## 5. Openingsuren aanpassen (`Openingsuren.html`)

Open `Openingsuren.html` en zoek naar de blokjes zoals:

```html
<div class="dagRij">
    <span>Maandag</span><span>17:00 - 22:45</span>
</div>
```

Verander gewoon de tijden tussen de tweede `<span>` en `</span>`.

---

## 6. Contactgegevens aanpassen (`Contact.html`)

Open `Contact.html`. Zoek naar de `<span>` met de info:

```html
<span>Hoogstraat 33, 2800 Mechelen</span>
<span>BE0660.660.763</span>
```

Verander de tekst tussen de tags.

Voor het telefoonnummer zoek je naar:
```html
<a href="tel:+015336060">015 33 60 60</a>
```
Verander beide nummers — het ene in `href=` en het zichtbare getal.

---

## 7. Bestelplatformen aanpassen (`DeliveryZones.html`)

Zoek naar een blokje zoals:

```html
<div class="dagRij">
    <span>Deliveroo</span>
    <a href="https://deliveroo.be/..." class="bestelBtn">Bestel →</a>
</div>
```

Verander de link tussen `href="..."` naar de juiste URL.  
De naam tussen `<span>` en `</span>` kan je ook aanpassen.

---

## 8. Achtergrondkleur aanpassen (`style.css`)

Open `style.css` en zoek naar:

```css
background: #011701;
```

Verander `#011701` naar een andere kleur.  
Je kan kleuren vinden op [coolors.co](https://coolors.co) of [htmlcolorcodes.com](https://htmlcolorcodes.com).

---

## 9. De groene kleur aanpassen (`style.css`)

De groene kleur die overal gebruikt wordt is `#4a7a00`.  
Doe in je code editor **Ctrl+H** (zoeken & vervangen) en vervang `#4a7a00` door een andere kleur.

---

## 10. Foto's vervangen

Zet je nieuwe foto in de map `images/`.  
Open daarna het juiste HTML bestand en zoek naar:

```html
<img src="images/naamvandefoto.jpg" ...>
```

Verander `naamvandefoto.jpg` naar de naam van jouw nieuwe foto.  
Zorg dat de bestandsnaam exact klopt, inclusief hoofdletters.

---

## 11. Wijzigingen online zetten (GitHub)

Nadat je iets hebt aangepast, open je een terminal en typ je:

```bash
git add .
git commit -m "wat heb je veranderd"
git push
```

Na 1-2 minuten is de site live op GitHub Pages.

---

## Veelgemaakte fouten

| Fout | Oplossing |
|---|---|
| Site toont niks | Controleer of je een komma `,` vergeten bent na een `}` |
| Foto laadt niet | Controleer de bestandsnaam, let op hoofdletters |
| Prijs toont verkeerd | Gebruik een punt `.` als decimaalteken, geen komma |
| Wijziging niet online | Vergeet niet `git push` te doen |

---

*Vragen? Geef de foutmelding of het stukje code door en het wordt opgelost.*
