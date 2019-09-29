<template>
    <div class="outer-wrap">
        <Navbar/>
        <div class="content-wrap">
            <h1 class="content-header">Skriv rapport</h1>
            <div class="register-wrap">
                <form @submit.prevent="sendForm()">
                    <span class="fieldset">
                        <label for="week">Vecka / Kmom</label>
                        <input class="input-field" id="nextField" type="number" name="week" v-model="week">
                    </span>
                    <span class="fieldset">
                        <label for="title">Titel</label>
                        <input class="input-field" id="nextField" type="text" name="title" v-model="title">
                    </span>
                    <span class="fieldset">
                        <label for="report">Rapport</label>
                        <textarea class="input-field" name="report" cols="30" rows="10" v-model="report"></textarea>
                    </span>
                    <span class="fieldset">
                        <span class="form-error">
                            {{error}}
                        </span>
                    </span>
                    <input class="submit-register" type="submit" value="Skicka Rapport">
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
    data() {
        return {
            week: null,
            title: null,
            report: null,
            error: null
        }
    },
    components: {
        Navbar
    },
    methods: {
        sendForm() {
            if (!this.week || !this.title || !this.report) {
                this.error = "Alla fält måste vara ifyllda"
            }
            else {
                this.$request.post("/reports", {
                    week: this.week,
                    title: this.title,
                    report: this.report
                }, this.registerCallback);
            }
        },
        registerCallback(data) {
            if (data.data.code == 201) {
                this.title = null
                this.report = null
                this.$router.push('/reports/week/' + this.week)
            } else {
                this.error = "Ett fel uppstod"
            }
        }
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

.register-wrap {
    display: flex;
    flex-direction: column;
}

.fieldset {
    width: 100%;
    margin:1.2rem 0;
    display: flex;
    flex-direction: column;
}

.no-col {
    flex-direction: row;
}

.fieldset:focus-within > label {
    color: #ff9a56;
}

input:focus {outline:0;}

.input-field {
    padding: 5px;
    font-size: 1.2rem;
    border: 4px solid #fff;
    background:rgba(18, 22, 36, 0);
    color: #fff;
}

.input-field:invalid, .date-field:invalid {
    border-color: red;
}

.form-error {
    color: red;
    font-style: italic;
}

.form-success {
    color: green;
    font-style: italic;
}

.submit-report {
    padding: 0.5rem;
    font-size: 1.4rem;
    border: 4px solid #ff9a56;
    background: #ff9a56;
    color: #fff;
    cursor: pointer;
}

.submit-report:hover {
    border: 4px solid #fff;
    background: none;
}
</style>
