<template>
    <div class="outer-wrap">
        <Navbar/>
         <div class="content-wrap">
            <h1 class="content-header">uppdatera rapport</h1>
            <div class="register-wrap">
                <form @submit.prevent="updateReport()">
                    <span class="fieldset">
                        <label for="title">Titel</label>
                        <input class="input-field" id="nextField" type="text" name="title" v-model="title">
                    </span>
                    <span class="fieldset">
                        <label for="report">Rapport</label>
                        <textarea class="input-field" name="report" cols="30" rows="10" v-model="report"></textarea>
                    </span>
                    <input class="submit-register" type="submit" value="Skicka Rapport">
                </form>
            </div>
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
            }
        },
        updateReport() {
            if (!this.error && this.title && this.report){
                request.put('/reports', {
                    week: this.$route.params.id,
                    title: this.title,
                    report: this.report
                }, this.updateCallback)
            }
        },
        updateCallback(req) {
            if (req.data.code == 201) {
                this.$router.push('/reports/week/' + this.$route.params.id)
            }
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
