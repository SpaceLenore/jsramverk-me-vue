<template>
    <div class="outer-wrap">
        <Navbar/>
        <div class="content-wrap" v-if="$route.params.id == 1">
            <h1 class="content-header">Kmom 01</h1>
            <p>
                <a class="link" href="https://github.com/SpaceLenore/jsramverk-me-vue">Länk till GitHub Repot</a>
            </p>
            <h2>JS-Ramverk Me-Sida</h2>
            <p>Detta är min me-sida för kursen jsramverk skriven i VueJS.</p>

            <h3>Starta upp sidan</h3>
            <p>
                Börja med att installera node-modules via `npm install`, sedan kan du starta sidan med kommandot `npm run serve`.
                Då startar den upp en dev-server på port 8080 som standard (om porten är upptagen används 8081).
            </p>

            <h3>Versionshantering</h3>
            <p>
                För varje kursmoment som avklarats så publiceras en tagg (1.x för kmom01, 2.x för kmom02, osv...)
            </p>
        </div>
        <div class="content-wrap" v-if="$route.params.id == 2">
            <h1 class="content-header">Kmom 02</h1>
            <p>
                <a class="link" href="https://github.com/SpaceLenore/jsramverk-me-vue">Länk till GitHub Repot</a>
            </p>
            <h2>Registreringsformulär & Datepicker</h2>
            <p>
                I detta kursmoment gjordes ett registreringsformulär för nya användare. Formuläret innehåller användarens
                namn, födelsedag, epost och lösenord. Formuläret kräver även att man godkänner att sidan sparar ens persondata,
                detta för att följa GDPR-lagstiftningen. För att mata in sin födelsedag så får man tre fält på en rad som är tydligt
                markerade för år, månad och dag. Maxlängden av tecken (fyra för år och två för månad och datum) Om Siffrorna är utanför
                maxlängden så går det inte att skriva fler siffror i fältet. Om siffrorna man har skrivit i är utanför värdegränserna
                (till exempel 1900-nuvarande år för födelseår) så blir fältet rödmarkerat. Jag fick inte min insperation från någon specifik
                sida utan kollade på många olika implementationer och kom fram till att jag ville ha ett fast datumformat utan tvetydigheter
                samtidigt som det ska vara lätt att validera. 
            </p>
        </div>
    </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
    components: {
        Navbar
    }
};
</script>

<style>
.outer-wrap {
    height: 90vh;
    width: 100%;
    margin: 0;
    padding: 0;
}
</style>
