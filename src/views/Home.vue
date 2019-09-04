<template>
    <div class="outer-wrap">
        <div class="major-display">
            <div class="highlight-title">JS-Ramverk</div>
            <div class="tagline">Vidars Me-Sida</div>
        </div>
        <Navbar/>
        <div class="content-wrap" id="home">
            <h1 class="content-header">Me-Sida</h1>
            <p>
                Detta är en Me-Sida skriven i vue till första upplagan av kursen JS-Ramverk på BTH Webbprogrammering.
                Jag går tredje året på programmet och på fritiden engagerar jag mig i ett open source-communityn, kodar
                och hackar lite. Jag började tjuvkika lite på olika front-end ramverk under sommaren av orelaterade anledningar
                och kom fram till att Vue passar mig bäst.
                <br><br>
                Jag granskade koden för de olika exempelsidorna och jämförde. Angular är fyllt av imports vilket som känns lite
                rörigt och fyllt med massa extra kod för lite funktionalitet. React däremot tydligare men skrev non-native javascript
                i js filer på ett kanska udda sätt. React kan däremot skrivas antingen i klasser eller på ett funktionellt sätt.
                <br><br>
                Jag finner att Vue har en ganska tydlig struktur, varje .vue fil innehåller 3 delar, template, script och style.
                Om jag inte hade valt Vue så hade det nog varit React.
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
.major-display {
    height: 100%;
    background: url('../assets/leaves-on-ground.jpg');
    background-position: bottom;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.highlight-title {
    margin-top: -20vh;
    font-size: 4rem;
    color: #fff;
    text-align: center;
    font-family: 'Martel', serif;
    font-weight: 800;
}
.tagline {
    color: #fff;
    text-align: center;
    font-family: 'Martel', serif;
    font-style: italic;
    font-size: 1.5rem;
}
</style>
