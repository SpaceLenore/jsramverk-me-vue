<template>
    <div id="nav" class="navbar">
        <div class="nav-title">
            JS-Ramverk
        </div>
        <div class="nav-link-wrap">
            <router-link class="nav-link" to="/">Home</router-link>
            <span v-if="this.$store.state.jwt">
                <router-link class="nav-link" to="/report">Skriv Rapport</router-link>
                <a href="#" class="nav-link" to="/logout" @click.prevent="logout" >Logga Ut</a>
            </span>
            <span v-else>
                <router-link class="nav-link" to="/register">Skapa Konto</router-link>
                <router-link class="nav-link" to="/login">Logga In</router-link>
            </span>
            <select class="reports-dropdown" @change="changeKmom($event)">
                <option disabled selected>Redovisningstexter</option>
                <option value="1">Kmom01</option>
                <option value="2">Kmom02</option>
            </select>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            kmom: 0
        }
    },
    methods: {
        changeKmom: function (newKmom) {
            let kmomNumber = newKmom.target.selectedOptions[0].value;
            this.$router.push("/reports/week/" + kmomNumber)
        },
        logout: function () {
            this.$store.commit("setJwt", null)
        }
    }
}
</script>

<style scoped>
.navbar {
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #1b2338;
    color: #fff;
    font-size: 1.3rem;
}

.nav-link-wrap {
    padding: 0 1rem;
}

.nav-link {
    margin: 0 1rem;
    color: #fff;
    text-decoration: none;
    border-bottom: 1px solid #fff;
}

.nav-link:hover {
    border: none;
    color: #ff9a56;
}

.nav-title {
    padding: 0 3rem;
    color: #ff9a56;
}

.reports-dropdown {
    background: rgba(0, 0, 0, 0);
    border: 1px solid #fff;
    padding: 0.5rem;
    color: #fff;
}

.reports-dropdown option {
    background: #1b2338;
    color: #fff;
}
</style>