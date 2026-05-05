document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("navbar").innerHTML = `
        <nav class="navigatiebalk">
    <a href="index.html" class="tasteKingPizza">
        <img src="images/logo_465x320 (1).png" alt="tasteKingPizza">
    </a>
    <div class="toRight">
        <a href="menu.html" class="menuLink">Menu</a>
        <a href="Contact.html" class="menuLink">Contacteer ons</a>
        <a href="Openingsuren.html" class="menuLink">Openingsuren</a>
        <a href="DeliveryZones.html" class="menuLink">Delivery</a>
    </div>
    <a href="tel:+015336060" class="navCta">015 33 60 60</a>
</nav>
    `;

    const menu = {
        pizza: [
            { naam: "Alpeross", ingredienten: "Looksaus bodem, kip, ui, schijfjes tomaat" },
            { naam: "Al Capone", ingredienten: "Pepperoni, shoarma, jalapenos en ui" },
            { naam: "BBQ Chicken", ingredienten: "Gegrilde kip, ui, paprika en mozzarella" },
            { naam: "BBQ Meatballs", ingredienten: "Gegrilde gehaktballetjes, ui, paprika" },
            { naam: "Bolognese", ingredienten: "Bolognesesaus, lookpoeder, ui en extra kaas" },
            { naam: "Calzone", ingredienten: "Gevouwen pizza met ham, kaas, salami, paprika, champignons, bolognese" },
            { naam: "Cheesy Mix", ingredienten: "Feta, gorgonzola, mozzarella en extra kaas" },
            { naam: "Creamy Cheesy Mix", ingredienten: "Feta, gorgonzola, mozzarella en extra kaas" },
            { naam: "Creamy Chicken", ingredienten: "Kaas, gekruide kip, ui en champignons" },
            { naam: "Creamy Dream", ingredienten: "Spek, room, ui en look" },
            { naam: "Curry Orient", ingredienten: "Gekruide kip, ui, ananas" },
            { naam: "Don Salmon", ingredienten: "Gerookte zalm en ui" },
            { naam: "Four Seasons", ingredienten: "Ham, salami, paprika, champignons" },
            { naam: "Funky Chicken", ingredienten: "Ui, ananas, paprika en gekruide kip" },
            { naam: "Fruitti Dimare", ingredienten: "Zeevruchten mix" },
            { naam: "Hawaïan Shrimps", ingredienten: "Scampi's, ananas en maïs" },
            { naam: "Hawaï", ingredienten: "Ham, gekruide kip en ananas" },
            { naam: "Hot BBQ Chicken", ingredienten: "Gekruide kip, ui, paprika, feta, jalapenos" },
            { naam: "Hot BBQ", ingredienten: "Shoarma, paprika, jalapenos" },
            { naam: "Hot Lovers", ingredienten: "Jalapenos, pepperoni, paprika en ui" },
            { naam: "King de Luxe", ingredienten: "Tonijn, paprika, ui en lookpoeder" },
            { naam: "Meat Lovers", ingredienten: "Shoarma, ham, champignons en ui" },
            { naam: "Meat Feast", ingredienten: "Ham, salami, kip, shoarma vlees" },
            { naam: "Mega Fish", ingredienten: "Tonijn, ansjovis, champignons, ui" },
            { naam: "Margarita", ingredienten: "Tomatensaus, kaas en mozzarella" },
            { naam: "New Yorker", ingredienten: "Pepperoni, ham, shoarma, ui en paprika" },
            { naam: "Rucola", ingredienten: "Tomatensaus, kerstomaat, pesto en rucola" },
            { naam: "Scampi Mampi", ingredienten: "Scampi's, verse tomaten, ui en lookpoeder" },
            { naam: "Shoarma", ingredienten: "Shoarma, paprika en lookpoeder" },
            { naam: "Shoarma de Luxe", ingredienten: "Shoarma, paprika, champignons, ui en feta" },
            { naam: "Spicy Fiesta", ingredienten: "Gekruide kip, jalapenos, ui, paprika en maïs" },
            { naam: "Toni Pepperoni", ingredienten: "Dubbele portie pepperoni en mozzarella" },
            { naam: "Tonno", ingredienten: "Tonijn, olijven en paprika" },
            { naam: "Vegetarian", ingredienten: "Champignons, paprika, ui, olijven, maïs en schijfjes tomaat" },
            { naam: "Fungi", ingredienten: "Champignon en kaas" },
            { naam: "Prosciutto", ingredienten: "Ham en kaas" },
        ],
        pasta: [
            { naam: "King Salmone", detail: "Gerookte zalm, kaassaus, ui" },
            { naam: "Pesto Chicken", detail: "Gekruide kip, pesto, roomsaus" },
            { naam: "Scampi", detail: "Scampi's in kaassaus" },
            { naam: "Carbonara", detail: "Spek in kaassaus" },
            { naam: "Cremolati", detail: "Ham in kaassaus" },
            { naam: "Scampi Curry", detail: "Chinees curry, ui, ananas, scampi" },
            { naam: "Chicken Curry", detail: "Chinees curry, kip, ui, ananas" },
            { naam: "Pollo", detail: "Kip, ui, kaassaus, paprika" },
            { naam: "Pollo Hot", detail: "Kip, paprika, kaassaus, jalapeños" },
            { naam: "BBQ Chicken", detail: "BBQ saus, kip, ui, paprika" },
        ],
        voorgerechten: [
            { naam: "Lookbaguette (2st)", detail: "+ kaas €0,50 | kaas & ham €1,00 | kaas & tomaat €1,00 + spek", prijs: 4.00 },
            { naam: "Lookbroodjes (2st)", detail: "+ kaas €0,40 | kaas & ham €0,70 | kaas & tomaat €0,70 + spek", prijs: 4.00 },
            { naam: "Chicken Wings (8st)", detail: "", prijs: 8.00 },
            { naam: "Chicken Nuggets (8st)", detail: "", prijs: 8.00 },
            { naam: "American Potatoes", detail: "", prijs: 7.00 },
            { naam: "Creamy Jalapeños (5st)", detail: "", prijs: 5.00 },
            { naam: "Mozzarella Sticks (6st)", detail: "", prijs: 5.95 },
            { naam: "Chicken Bread", detail: "", prijs: 5.95 },
            { naam: "Pepperoni Bread", detail: "", prijs: 5.50 },
            { naam: "Scampi Bread", detail: "", prijs: 5.50 },
            { naam: "Cheesy Bread", detail: "", prijs: 6.00 },
        ],
        salades: [
            { naam: "Tuna Salad", prijs: 6.95 },
            { naam: "Chicken Salad", prijs: 6.95 },
            { naam: "Veggie Salad", prijs: 6.95 },
            { naam: "Feta Salad", prijs: 6.95 },
            { naam: "Ham Salad", prijs: 6.95 },
            { naam: "Portie Feta, Olijven, Pepers", prijs: 5.95 },
        ],
        desserten: [
            { naam: "Chocomousse", prijs: 3.00 },
            { naam: "Tiramisu Speculoos", prijs: 4.00 },
            { naam: "Tiramisu Oreo", prijs: 4.00 },
        ],
        dranken: [
            { naam: "Ritchie Cola", prijs: 2.75 },
            { naam: "Ritchie Cola Zero", prijs: 2.75 },
            { naam: "Ritchie Orange", prijs: 2.75 },
            { naam: "Ritchie Lemon-Ginger", prijs: 2.75 },
            { naam: "Ritchie Lemon Raspberry", prijs: 2.75 },
            { naam: "Ritchie Grapefruit Pineapple", prijs: 2.75 },
            { naam: "Freez-Mix Mojito", prijs: 2.75 },
            { naam: "Freez-Mix Pêche", prijs: 2.75 },
            { naam: "Freez-Mix Pinacolada", prijs: 2.75 },
            { naam: "Freez-Mix Blue Hawaï", prijs: 2.75 },
            { naam: "Spa Plat Water", prijs: 2.00 },
        ],
        bodems: [
            { naam: "Italian Classic", detail: "Dunne krokante bodem", prijsExtra: 0 },
            { naam: "American Deep Pan", detail: "Dikke zachte bodem", prijsExtra: 1.00 },
        ],
        sauzen: ["Tomatensaus", "BBQ Saus", "Roomsaus", "Currysaus"],
        toppingPrijzen: { small: 1.00, medium: 1.50, large: 2.00 },
        vleesSupplementPrijzen: { small: 1.50, medium: 2.00, large: 2.50 },
        toppings: [
            "Champignons", "Paprika", "Ui", "Olijven", "Maïs", "Tomaat",
            "Ham", "Salami", "Kip", "Shoarma", "Pepperoni", "Spek",
            "Tonijn", "Ansjovis", "Zalm", "Scampi's", "Zeevruchten",
            "Mozzarella", "Feta", "Gorgonzola", "Extra Kaas",
            "Ananas", "Jalapeños", "Pesto", "Rucola"
        ],
        pizzaPrijzen: {
            small: 8.95, medium: 10.95, large: 13.95,
            smallLevering: 9.95, mediumLevering: 11.95, largeLevering: 14.95
        },
        afhaalActieDinsdag: { small: 7.95, medium: 9.95, large: 12.95 },
        pastaPrijzen: { afhaal: 10.95, levering: 12.95 },
        deliveryZones: ["Mechelen", "Muizen"],
    };

    const p = menu.pizzaPrijzen;
    const pa = menu.pastaPrijzen;
    const pd = menu.afhaalActieDinsdag;
    const tp = menu.toppingPrijzen;
    const vs = menu.vleesSupplementPrijzen;

    // pizza prijzen met afhaal/levering tabs
    document.getElementById("pizzaPrijzen").innerHTML = `
        <div style="display:flex; gap:6px; margin-bottom:12px;">
            <button onclick="toonPizzaPrijs('afhaal')" id="btnAfhaal"
                style="flex:1; padding:6px; background:#4a7a00; border:none; color:white; border-radius:6px; cursor:pointer; font-family:Oswald,sans-serif; font-size:11px; letter-spacing:1px;">
                AFHAAL
            </button>
            <button onclick="toonPizzaPrijs('levering')" id="btnLevering"
                style="flex:1; padding:6px; background:transparent; border:0.5px solid rgba(255,255,255,0.2); color:rgba(255,255,255,0.5); border-radius:6px; cursor:pointer; font-family:Oswald,sans-serif; font-size:11px; letter-spacing:1px;">
                LEVERING
            </button>
        </div>
        <p class="blokTitel">Pizza's</p>
        <div id="pizzaPrijsAfhaal">
            <div class="prijsRij"><span>Small</span><span>€${p.small.toFixed(2)}</span></div>
            <div class="prijsRij"><span>Medium</span><span>€${p.medium.toFixed(2)}</span></div>
            <div class="prijsRij"><span>Large</span><span>€${p.large.toFixed(2)}</span></div>
        </div>
        <div id="pizzaPrijsLevering" style="display:none;">
            <div class="prijsRij"><span>Small</span><span>€${p.smallLevering.toFixed(2)}</span></div>
            <div class="prijsRij"><span>Medium</span><span>€${p.mediumLevering.toFixed(2)}</span></div>
            <div class="prijsRij"><span>Large</span><span>€${p.largeLevering.toFixed(2)}</span></div>
        </div>
    `;

    // dolle dinsdag actie
    document.getElementById("afhaalActieDinsdag").innerHTML = `
        <br><p class="blokTitel">Dolle Dinsdag Afhaal</p>
        <div class="prijsRij"><span>Small</span><span>€${pd.small.toFixed(2)}</span></div>
        <div class="prijsRij"><span>Medium</span><span>€${pd.medium.toFixed(2)}</span></div>
        <div class="prijsRij"><span>Large</span><span>€${pd.large.toFixed(2)}</span></div>
    `;

    // pasta prijzen
    document.getElementById("pastaPrijzen").innerHTML = `
        <p class="blokTitel" style="margin-top:24px;">Pasta's</p>
        <div class="prijsRij"><span>Afhaal</span><span>€${pa.afhaal.toFixed(2)}</span></div>
        <div class="prijsRij"><span>Levering</span><span>€${pa.levering.toFixed(2)}</span></div>
    `;

    // bodems + sauzen
    document.getElementById("bodemsBlok").innerHTML = `
        <p class="blokTitel" style="margin-top:24px;">Bodems</p>
        ${menu.bodems.map(b => `
            <div class="prijsRij">
                <span>${b.naam}<br><small>${b.detail}</small></span>
                <span>${b.prijsExtra === 0 ? "Standaard" : `+€${b.prijsExtra.toFixed(2)}`}</span>
            </div>
        `).join("")}
        <p class="blokTitel" style="margin-top:24px;">Sauzen</p>
        <div class="sauzenRij">${menu.sauzen.map(s => `<span class="sausTag">${s}</span>`).join("")}</div>
    `;

    // toppings met S/M/L prijzen + vlees supplement
    document.getElementById("toppingsBlok").innerHTML = `
        <p class="blokTitel" style="margin-top:24px;">Toppings</p>
        <div class="prijsRij"><span>Small</span><span>€${tp.small.toFixed(2)}</span></div>
        <div class="prijsRij"><span>Medium</span><span>€${tp.medium.toFixed(2)}</span></div>
        <div class="prijsRij"><span>Large</span><span>€${tp.large.toFixed(2)}</span></div>

        <p class="blokTitel" style="margin-top:16px;">Vlees toppings</p>
        <div class="prijsRij"><span>Small</span><span>€${vs.small.toFixed(2)}</span></div>
        <div class="prijsRij"><span>Medium</span><span>€${vs.medium.toFixed(2)}</span></div>
        <div class="prijsRij"><span>Large</span><span>€${vs.large.toFixed(2)}</span></div>

        <p class="blokTitel" style="margin-top:16px;">Alle toppings</p>
        <div class="toppingGrid">${menu.toppings.map(t => `<span class="toppingTag">${t}</span>`).join("")}</div>
    `;

    // delivery zones
    document.getElementById("zonesBlok").innerHTML = `
        <p class="blokTitel">Delivery Zones</p>
        ${menu.deliveryZones.map(z => `<div class="zoneTag">${z}</div>`).join("")}
    `;

    // pizza lijst
    document.getElementById("pizzaLijst").innerHTML = `
        <p class="categorieTitel">Pizza's</p>
        ${menu.pizza.map(p => `
            <div class="menuRij">
                <div>
                    <div class="itemNaam">${p.naam}</div>
                    <div class="itemDetail">${p.ingredienten}</div>
                </div>
            </div>
        `).join("")}
    `;

    // pasta lijst
    document.getElementById("pastaLijst").innerHTML = `
        <p class="categorieTitel" style="margin-top:32px;">Pasta's</p>
        ${menu.pasta.map(p => `
            <div class="menuRij">
                <div>
                    <div class="itemNaam">${p.naam}</div>
                    <div class="itemDetail">${p.detail}</div>
                </div>
            </div>
        `).join("")}
    `;

    // voorgerechten
    document.getElementById("voorgerechtenLijst").innerHTML = `
        <p class="categorieTitel" style="margin-top:32px;">Voorgerechten</p>
        ${menu.voorgerechten.map(v => `
            <div class="menuRij">
                <div>
                    <div class="itemNaam">${v.naam}</div>
                    ${v.detail ? `<div class="itemDetail">${v.detail}</div>` : ""}
                </div>
                <div class="itemPrijs">€${v.prijs.toFixed(2)}</div>
            </div>
        `).join("")}
    `;

    // salades
    document.getElementById("saladeLijst").innerHTML = `
        <p class="categorieTitel" style="margin-top:32px;">Salades</p>
        ${menu.salades.map(s => `
            <div class="menuRij">
                <div class="itemNaam">${s.naam}</div>
                <div class="itemPrijs">€${s.prijs.toFixed(2)}</div>
            </div>
        `).join("")}
    `;

    // desserten
    document.getElementById("dessertenLijst").innerHTML = `
        <p class="categorieTitel" style="margin-top:32px;">Desserten</p>
        ${menu.desserten.map(d => `
            <div class="menuRij">
                <div class="itemNaam">${d.naam}</div>
                <div class="itemPrijs">€${d.prijs.toFixed(2)}</div>
            </div>
        `).join("")}
    `;

    // dranken
    document.getElementById("drankenLijst").innerHTML = `
        <p class="categorieTitel" style="margin-top:32px;">Dranken</p>
        ${menu.dranken.map(d => `
            <div class="menuRij">
                <div class="itemNaam">${d.naam}</div>
                <div class="itemPrijs">€${d.prijs.toFixed(2)}</div>
            </div>
        `).join("")}
    `;

    // tab functie voor afhaal/levering
    window.toonPizzaPrijs = function(type) {
        const afhaal = document.getElementById("pizzaPrijsAfhaal");
        const levering = document.getElementById("pizzaPrijsLevering");
        const btnAfhaal = document.getElementById("btnAfhaal");
        const btnLevering = document.getElementById("btnLevering");

        if (type === "afhaal") {
            afhaal.style.display = "block";
            levering.style.display = "none";
            btnAfhaal.style.background = "#4a7a00";
            btnAfhaal.style.color = "white";
            btnLevering.style.background = "transparent";
            btnLevering.style.color = "rgba(255,255,255,0.5)";
        } else {
            afhaal.style.display = "none";
            levering.style.display = "block";
            btnLevering.style.background = "#4a7a00";
            btnLevering.style.color = "white";
            btnAfhaal.style.background = "transparent";
            btnAfhaal.style.color = "rgba(255,255,255,0.5)";
        }
    };
});