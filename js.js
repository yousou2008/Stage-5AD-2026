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
});