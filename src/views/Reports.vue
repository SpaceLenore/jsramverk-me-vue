<template>
    <div class="outer-wrap">
        <Navbar/>
        <div class="content-wrap">
            <h1 class="content-header">Kmom01</h1>
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
