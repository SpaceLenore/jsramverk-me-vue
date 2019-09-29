<template>
    <div class="outer-wrap">
        <Navbar/>
        <div class="content-wrap">
            <a href="#" class="inline-link" v-if="this.$store.state.jwt && !this.error" to="/report/update/" @click.prevent="updateReport">Uppdatera rapport</a>
            <h1 class="content-header">{{title}}</h1>
            <p class="text-paragraph">
                {{report}}
            </p>
        </div>
    </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import request from '../requests'

export default {
    data() {
        return {
            title: null,
            report: null,
            error: false
        }
    },
    components: {
        Navbar
    },
    methods: {
        reportCallback(response) {
            if (response.data.code == 200) {
                this.title = response.data.data.title
                this.report = response.data.data.report
            } else {
                this.error = true
                this.title = "Report not found"
                this.report = "The report you are looking for could not be found in the system. If you typed the URL by hand, check the number and try again. If you got here via a link you can try again later. If the error persists the report might have been deleted."
            }
        },
        updateReport() {
            this.$router.push('/reports/update/' + this.$route.params.id)
        }
    },
    created() {
        request.get('/reports/week/' + this.$route.params.id, this.reportCallback)
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
.text-paragraph {
    font-size: 1.1rem;
    line-height: 1.8rem;
}
.inline-link {
    color: #fff;
    text-decoration: none;
    cursor: pointer;
    border-bottom: 1px solid #fff;
}
.inline-link:hover {
    color: #ff9a56;
    border: none;
}
</style>
