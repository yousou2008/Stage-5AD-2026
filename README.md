# Taste King Pizza — Handleiding

Alles op deze site is makkelijk aanpasbaar, zelfs als ge nog nooit code hebt gezien.  
Hieronder staat per onderwerp wat ge moet doen.

---

## Snel overzicht

| Wat wil je aanpassen? | Bestand |
|---|---|
| Pizza's, pasta's, prijzen, toppings | [`js.js`](js.js) |
| Kleuren, lettergroottes, layout | [`style.css`](style.css) |
| Foto's op de homepagina | [`index.html`](index.html) |
| Contactgegevens & social media | [`Contact.html`](Contact.html) |
| Openingsuren | [`Openingsuren.html`](Openingsuren.html) |
| Bestelplatformen (Deliveroo, Uber Eats...) | [`DeliveryZones.html`](DeliveryZones.html) |
| Menukaart layout | [`menu.html`](menu.html) |

---

## Pizza's aanpassen

Open [`js.js`](js.js) en zoek naar `pizza: [`. Elke pizza ziet er zo uit:

```js
{ 
    naam: "Alpeross", 
    ingredienten: "Looksaus bodem, kip, ui, schijfjes tomaat" 
},
```

Naam of ingrediënten veranderen? Gewoon de tekst tussen de aanhalingstekens aanpassen.

Nieuwe pizza toevoegen? Kopieer zo'n blokje van `{` tot `},` en plak het eronder. Vergeet de komma niet aan het einde.

Pasta werkt hetzelfde, maar daar staat `detail` in plaats van `ingredienten`.

---

## Prijzen aanpassen

Ook in [`js.js`](js.js), zoek naar:

```js
pizzaPrijzen: { small: 8.95, medium: 10.95, large: 13.95 },
afhaalActieDinsdag: { small: 7.95, medium: 9.95, large: 12.95 },
pastaPrijzen: { afhaal: 10.95, levering: 12.95 },
toppingPrijzen: { small: 1.00, medium: 1.50, large: 2.00 },
vleesSupplementPrijzen: { small: 1.50, medium: 2.00, large: 2.50 },
```

Verander het getal na de `:`. Gebruik altijd een punt als decimaalteken, geen komma — dus `8.95` en niet `8,95`.

---

## Toppings aanpassen

In [`js.js`](js.js), zoek naar `toppings: [`:

```js
toppings: [
    "Champignons", "Paprika", "Ui", ...
],
```

Topping toevoegen → schrijf `"NieuweTopping",` erbij.  
Topping verwijderen → verwijder de naam inclusief de komma.

---

## Openingsuren aanpassen

Open [`Openingsuren.html`](Openingsuren.html) en zoek naar blokjes zoals:

```html
<div class="dagRij">
    <span>Maandag</span><span>17:00 - 22:45</span>
</div>
```

Verander de tijd tussen de tweede `<span>` en `</span>`.

---

## Contactgegevens aanpassen

Open [`Contact.html`](Contact.html). Het adres en BTW staan hier:

```html
<span>Hoogstraat 33, 2800 Mechelen</span>
<span>BE0660.660.763</span>
```

Voor het telefoonnummer:
```html
<a href="tel:+015336060">015 33 60 60</a>
```
Verander beide — het nummer in `href=` én het zichtbare getal.

---

## Bestelplatformen aanpassen

Open [`DeliveryZones.html`](DeliveryZones.html) en zoek naar:

```html
<span>Deliveroo</span>
<a href="https://deliveroo.be/..." class="bestelBtn">Bestel →</a>
```

Verander de link in `href="..."` naar de juiste URL van het platform.

---

## Achtergrond of kleuren aanpassen

Open [`style.css`](style.css).

Achtergrond → zoek naar `background: #033a03` en verander de kleurcode.  
Groene accenten → zoek naar `#4a7a00` en vervang die overal via **Ctrl+H**.

Kleuren vinden? Ga naar [coolors.co](https://coolors.co).

---

## Foto's vervangen

Zet je nieuwe foto in de map `images/`. Open daarna het juiste HTML bestand en zoek naar:

```html
<img src="images/naamvandefoto.jpg">
```

Verander de bestandsnaam naar die van jouw nieuwe foto. Let op hoofdletters — `Foto.jpg` is anders dan `foto.jpg`.

---

## Wijzigingen online zetten

Na elke aanpassing, open een terminal en typ:

```bash
git add .
git commit -m "wat heb je veranderd"
git push
```

De site is na 1-2 minuten live.

---

## Veelgemaakte fouten

| Probleem | Oplossing |
|---|---|
| Site toont niks | Komma vergeten na een `}` in [`js.js`](js.js) |
| Foto laadt niet | Bestandsnaam klopt niet, let op hoofdletters |
| Prijs toont verkeerd | Gebruik `.` niet `,` als decimaalteken |
| Wijziging niet online | `git push` vergeten |
