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
            { naam: "Alpeross", ingredienten: "Looksaus bodem, kip, ui, schijfjes tomaat", afhaal: { small: 8.95, medium: 10.95, large: 13.95 }, levering: { small: 11.90, medium: 13.90, large: 17.90 } },
            { naam: "Al Capone", ingredienten: "Pepperoni, shoarma, jalapenos en ui", afhaal: { small: 8.95, medium: 10.95, large: 13.95 }, levering: { small: 12.90, medium: 14.90, large: 18.90 } },
            { naam: "BBQ Chicken", ingredienten: "Barbecuesaus, gegrilde kip, ui, paprika en mozzarella", afhaal: { small: 8.95, medium: 10.95, large: 13.95 }, levering: { small: 11.90, medium: 13.90, large: 17.90 } },
            { naam: "BBQ Bacon", ingredienten: "Barbecuesaus, spek, uien en paprika", afhaal: { small: 8.95, medium: 10.95, large: 13.95 }, levering: { small: 11.90, medium: 13.90, large: 17.90 } },
            { naam: "BBQ Kebap", ingredienten: "Barbecuesaus, kebab, ui en paprika", afhaal: { small: 8.95, medium: 10.95, large: 13.95 }, levering: { small: 11.90, medium: 13.90, large: 17.90 } },
            { naam: "BBQ Meatballs", ingredienten: "Barbecuesaus, gegrilde gehaktballetjes, ui en paprika", afhaal: { small: 8.95, medium: 10.95, large: 13.95 }, levering: { small: 11.90, medium: 13.90, large: 17.90 } },
            { naam: "Bolognese", ingredienten: "Bolognesesaus, lookpoeder en ui", afhaal: { small: 8.95, medium: 10.95, large: 13.95 }, levering: { small: 11.90, medium: 13.90, large: 17.90 } },
            { naam: "Calzone", ingredienten: "Gevouwen pizza met ham, kaas, salami, paprika, champignons en bolognese", afhaal: { small: 8.95, medium: 10.95, large: 13.95 }, levering: { small: 12.90, medium: 14.90, large: 18.90 } },
            { naam: "Calzone Special", ingredienten: "Gevouwen pizza met kip, ui, paprika en schijfjes tomaat", afhaal: { small: 8.95, medium: 10.95, large: 13.95 }, levering: { small: 11.90, medium: 13.90, large: 17.90 } },
            { naam: "Cheesy Mix", ingredienten: "Feta, gorgonzola, mozzarella en extra kaas", afhaal: { small: 8.95, medium: 10.95, large: 13.95 }, levering: { small: 11.90, medium: 13.90, large: 17.90 } },
            { naam: "Creamy Cheesy Mix", ingredienten: "Roomsaus, feta, gorgonzola, mozzarella en extra kaas", afhaal: { small: 8.95, medium: 10.95, large: 13.95 }, levering: { small: 11.90, medium: 13.90, large: 17.90 } },
            { naam: "Creamy Chicken", ingredienten: "Roomsaus, kaas, gekruide kip, ui en champignons", afhaal: { small: 8.95, medium: 10.95, large: 13.95 }, levering: { small: 11.90, medium: 13.90, large: 17.90 } },
            { naam: "Creamy Dream", ingredienten: "Roomsaus, spek, room, ui en look", afhaal: { small: 8.95, medium: 10.95, large: 13.95 }, levering: { small: 11.90, medium: 13.90, large: 17.90 } },
            { naam: "Curry Oriënt", ingredienten: "Currysaus, gekruide kip, ui en ananas", afhaal: { small: 8.95, medium: 10.95, large: 13.95 }, levering: { small: 11.90, medium: 13.90, large: 17.90 } },
            { naam: "Don Salmon", ingredienten: "Roomsaus, gerookte zalm en ui", afhaal: { small: 8.95, medium: 10.95, large: 13.95 }, levering: { small: 13.90, medium: 15.90, large: 18.90 } },
            { naam: "Four Seasons", ingredienten: "Ham, salami, paprika en champignons", afhaal: { small: 8.95, medium: 10.95, large: 13.95 }, levering: { small: 12.90, medium: 14.90, large: 18.90 } },
            { naam: "Funky Chicken", ingredienten: "Ui, ananas, paprika en gekruide kip", afhaal: { small: 8.95, medium: 10.95, large: 13.95 }, levering: { small: 11.90, medium: 13.90, large: 17.90 } },
            { naam: "Frutti di Mare", ingredienten: "Zeevruchten mix", afhaal: { small: 8.95, medium: 10.95, large: 13.95 }, levering: { small: 13.90, medium: 15.90, large: 18.90 } },
            { naam: "Hawaï", ingredienten: "Ham, gekruide kip en ananas", afhaal: { small: 8.95, medium: 10.95, large: 13.95 }, levering: { small: 12.90, medium: 14.90, large: 18.90 } },
            { naam: "Hawaian Shrimps", ingredienten: "Scampi's, ananas en maïs", afhaal: { small: 8.95, medium: 10.95, large: 13.95 }, levering: { small: 13.90, medium: 15.90, large: 18.90 } },
            { naam: "Hot BBQ Chicken", ingredienten: "Barbecuesaus, gekruide kip, ui, paprika, feta en jalapenos", afhaal: { small: 8.95, medium: 10.95, large: 13.95 }, levering: { small: 11.90, medium: 13.90, large: 17.90 } },
            { naam: "Hot BBQ", ingredienten: "Barbecuesaus, shoarma, paprika en jalapenos", afhaal: { small: 8.95, medium: 10.95, large: 13.95 }, levering: { small: 11.90, medium: 13.90, large: 17.90 } },
            { naam: "Hot Lovers", ingredienten: "Jalapenos, pepperoni, paprika en ui", afhaal: { small: 8.95, medium: 10.95, large: 13.95 }, levering: { small: 11.90, medium: 13.90, large: 17.90 } },
            { naam: "King de Luxe", ingredienten: "Tonijn, paprika, ui en lookpoeder", afhaal: { small: 8.95, medium: 10.95, large: 13.95 }, levering: { small: 11.90, medium: 13.90, large: 17.90 } },
            { naam: "Meat Lovers", ingredienten: "Shoarma, ham, champignons en ui", afhaal: { small: 8.95, medium: 10.95, large: 13.95 }, levering: { small: 12.90, medium: 14.90, large: 18.90 } },
            { naam: "Meat Feast", ingredienten: "Ham, salami, kip en shoarma vlees", afhaal: { small: 8.95, medium: 10.95, large: 13.95 }, levering: { small: 13.90, medium: 15.90, large: 18.90 } },
            { naam: "Mega Fish", ingredienten: "Tonijn, ansjovis, champignons en ui", afhaal: { small: 8.95, medium: 10.95, large: 13.95 }, levering: { small: 12.90, medium: 14.90, large: 18.90 } },
            { naam: "New Yorker", ingredienten: "Pepperoni, ham, shoarma, ui en paprika", afhaal: { small: 8.95, medium: 10.95, large: 13.95 }, levering: { small: 13.90, medium: 15.90, large: 18.90 } },
            { naam: "Rucola", ingredienten: "Tomatensaus, kerstomaat, pesto en rucola", afhaal: { small: 8.95, medium: 10.95, large: 13.95 }, levering: { small: 11.95, medium: 13.95, large: 17.95 } },
            { naam: "Shoarma", ingredienten: "Shoarma en paprika", afhaal: { small: 8.95, medium: 10.95, large: 13.95 }, levering: { small: 11.95, medium: 13.95, large: 17.95 } },
            { naam: "Scampi Mampi", ingredienten: "Scampi's, verse tomaten en ui", afhaal: { small: 8.95, medium: 10.95, large: 13.95 }, levering: { small: 13.90, medium: 15.90, large: 18.90 } },
            { naam: "Shoarma de Luxe", ingredienten: "Shoarma, paprika, champignons, ui en feta", afhaal: { small: 8.95, medium: 10.95, large: 13.95 }, levering: { small: 12.95, medium: 14.95, large: 18.95 } },
            { naam: "Spicy Fiesta", ingredienten: "Gekruide kip, jalapenos, ui, paprika en maïs", afhaal: { small: 8.95, medium: 10.95, large: 13.95 }, levering: { small: 11.90, medium: 13.90, large: 17.90 } },
            { naam: "Toni Pepperoni", ingredienten: "Dubbele portie pepperoni en mozzarella", afhaal: { small: 8.95, medium: 10.95, large: 13.95 }, levering: { small: 11.90, medium: 13.90, large: 17.90 } },
            { naam: "Tonno", ingredienten: "Tonijn, olijven en paprika", afhaal: { small: 8.95, medium: 10.95, large: 13.95 }, levering: { small: 11.95, medium: 13.95, large: 17.95 } },
            { naam: "Vegetarian", ingredienten: "Champignons, paprika, ui, olijven, maïs en schijfjes tomaat", afhaal: { small: 8.95, medium: 10.95, large: 13.95 }, levering: { small: 12.50, medium: 14.50, large: 18.50 } },
            { naam: "Margarita", ingredienten: "Tomatensaus, gouda kaas, mozzarella", afhaal: { small: 8.95, medium: 10.95, large: 13.95 }, levering: { small: 11.90, medium: 13.90, large: 17.90 } },
            { naam: "Fungi", ingredienten: "Champignons en tomatensaus", afhaal: { small: 8.95, medium: 10.95, large: 13.95 }, levering: { small: 11.90, medium: 13.90, large: 17.90 } },
            { naam: "Prosciutto", ingredienten: "Tomatensaus en gerookte ham", afhaal: { small: 8.95, medium: 10.95, large: 13.95 }, levering: { small: 11.90, medium: 13.90, large: 17.90 } },
        ],
        pasta: [
            { naam: "King Salmone", detail: "Gerookte zalm, kaassaus, ui", afhaal: 11.95, levering: 12.95 },
            { naam: "Pesto Chicken", detail: "Gekruide kip, pesto, roomsaus", afhaal: 11.00, levering: 12.00 },
            { naam: "Scampi", detail: "Scampi's in kaassaus", afhaal: 11.95, levering: 12.95 },
            { naam: "Carbonara", detail: "Spek, kaas, kaassaus", afhaal: 11.00, levering: 12.00 },
            { naam: "Cremolati", detail: "Ham, kaas, kaassaus", afhaal: 11.00, levering: 12.00 },
            { naam: "Scampi Curry", detail: "Chinees curry, ui, ananas, scampi", afhaal: 11.95, levering: 12.95 },
            { naam: "Chicken Curry", detail: "Chinees curry, kip, ui, ananas", afhaal: 11.00, levering: 12.00 },
            { naam: "Pollo", detail: "Kip, paprika, champignon en kaassaus", afhaal: 11.00, levering: 12.00 },
            { naam: "Pollo Hot", detail: "Kip, paprika, champignon, kaassaus en jalapeños", afhaal: 11.00, levering: 12.00 },
            { naam: "BBQ Chicken", detail: "BBQ saus, kip, ui en paprika", afhaal: 11.00, levering: 12.00 },
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
        afhaalActieDinsdag: { small: 7.95, medium: 9.95, large: 12.95 },
        deliveryZones: ["Mechelen", "Muizen"],
    };

    const tp = menu.toppingPrijzen;
    const vs = menu.vleesSupplementPrijzen;
    const pd = menu.afhaalActieDinsdag;

    let huidigeModus = "afhaal";

    // enkel de knoppen, geen prijzen
    document.getElementById("pizzaPrijzen").innerHTML = `
        <div style="display:flex; gap:6px; margin-bottom:12px;">
            <button onclick="toonModus('afhaal')" id="btnAfhaal"
                style="flex:1; padding:6px; background:#4a7a00; border:none; color:white; border-radius:6px; cursor:pointer; font-family:Oswald,sans-serif; font-size:11px; letter-spacing:1px;">
                AFHAAL
            </button>
            <button onclick="toonModus('levering')" id="btnLevering"
                style="flex:1; padding:6px; background:transparent; border:0.5px solid rgba(255,255,255,0.2); color:rgba(255,255,255,0.5); border-radius:6px; cursor:pointer; font-family:Oswald,sans-serif; font-size:11px; letter-spacing:1px;">
                LEVERING
            </button>
        </div>
    `;

    // pasta prijzen blok leeg
    document.getElementById("pastaPrijzen").innerHTML = ``;

    // dolle dinsdag
    document.getElementById("afhaalActieDinsdag").innerHTML = `
        <br><p class="blokTitel">Dolle Dinsdag Afhaal</p>
        <div class="prijsRij"><span>Small</span><span>€${pd.small.toFixed(2)}</span></div>
        <div class="prijsRij"><span>Medium</span><span>€${pd.medium.toFixed(2)}</span></div>
        <div class="prijsRij"><span>Large</span><span>€${pd.large.toFixed(2)}</span></div>
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

    // toppings
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

    // pizza lijst met dropdown per item
    function renderPizzaLijst(modus) {
        document.getElementById("pizzaLijst").innerHTML = `
            <p class="categorieTitel">Pizza's</p>
            ${menu.pizza.map((p, i) => `
                <div class="menuRij" style="flex-direction:column; align-items:flex-start; cursor:pointer;" onclick="toggleDropdown('pizza-${i}')">
                    <div style="display:flex; justify-content:space-between; width:100%; align-items:center;">
                        <div>
                            <div class="itemNaam">${p.naam}</div>
                            <div class="itemDetail">${p.ingredienten}</div>
                        </div>
                        <div style="display:flex; align-items:center; gap:12px;">
                            <div class="itemPrijs">
                                vanaf €${modus === 'afhaal' ? p.afhaal.small.toFixed(2) : p.levering.small.toFixed(2)}
                            </div>
                            <span style="color:rgba(255,255,255,0.4); font-size:18px;">+</span>
                        </div>
                    </div>
                    <div id="pizza-${i}" style="display:none; width:100%; margin-top:10px; padding-top:10px; border-top:0.5px solid rgba(255,255,255,0.06);">
                        <div class="prijsRij"><span>Small</span><span>€${modus === 'afhaal' ? p.afhaal.small.toFixed(2) : p.levering.small.toFixed(2)}</span></div>
                        <div class="prijsRij"><span>Medium</span><span>€${modus === 'afhaal' ? p.afhaal.medium.toFixed(2) : p.levering.medium.toFixed(2)}</span></div>
                        <div class="prijsRij"><span>Large</span><span>€${modus === 'afhaal' ? p.afhaal.large.toFixed(2) : p.levering.large.toFixed(2)}</span></div>
                    </div>
                </div>
            `).join("")}
        `;
    }

    // pasta lijst met afhaal/levering prijs
    function renderPastaLijst(modus) {
        document.getElementById("pastaLijst").innerHTML = `
            <p class="categorieTitel" style="margin-top:32px;">Pasta's</p>
            ${menu.pasta.map(p => `
                <div class="menuRij">
                    <div>
                        <div class="itemNaam">${p.naam}</div>
                        <div class="itemDetail">${p.detail}</div>
                    </div>
                    <div class="itemPrijs">€${modus === 'afhaal' ? p.afhaal.toFixed(2) : p.levering.toFixed(2)}</div>
                </div>
            `).join("")}
        `;
    }

    // eerste render
    renderPizzaLijst("afhaal");
    renderPastaLijst("afhaal");

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

    // toggle dropdown per pizza
    window.toggleDropdown = function(id) {
        const el = document.getElementById(id);
        el.style.display = el.style.display === "none" ? "block" : "none";
    };

    // wissel afhaal/levering — update alles tegelijk
    window.toonModus = function(type) {
        huidigeModus = type;
        const btnAfhaal = document.getElementById("btnAfhaal");
        const btnLevering = document.getElementById("btnLevering");

        if (type === "afhaal") {
            btnAfhaal.style.background = "#4a7a00";
            btnAfhaal.style.color = "white";
            btnLevering.style.background = "transparent";
            btnLevering.style.color = "rgba(255,255,255,0.5)";
        } else {
            btnLevering.style.background = "#4a7a00";
            btnLevering.style.color = "white";
            btnAfhaal.style.background = "transparent";
            btnAfhaal.style.color = "rgba(255,255,255,0.5)";
        }

        renderPizzaLijst(type);
        renderPastaLijst(type);
    };
});