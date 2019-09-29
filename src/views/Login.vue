<template>
    <div class="outer-wrap">
        <Navbar/>
        <div class="content-wrap">
            <h1 class="content-header">Logga In</h1>
            <div class="register-wrap">
                <form @submit.prevent="sendForm()">
                    <span class="fieldset">
                        <label for="email">E-post</label>
                        <input class="input-field" id="nextField" type="email" name="email" v-model="email">
                    </span>
                    <span class="fieldset">
                        <label for="password">Lösenord</label>
                        <input id="passwd" class="input-field" type="password" name="password" v-model="password">
                    </span>
                    <span class="fieldset">
                        <span class="form-error">
                            {{error}}
                        </span>
                    </span>
                    <input class="submit-register" type="submit" value="Logga In">
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
            email: null,
            password: null,
            error: null
        }
    },
    components: {
        Navbar
    },
    methods: {
        sendForm() {
            if (!this.email || !this.password) {
                this.error = "Alla fält måste vara ifyllda"
            }
            else {
                this.$request.post("/login", {
                    email: this.email,
                    password: this.password
                }, this.registerCallback);
            }
        },
        registerCallback(data) {
            if (data.data.code == 200) {
                this.$store.commit("setJwt", data.data.token)
                this.$router.push("/")
            } else {
                this.error = "Användarnamnet eller lösenordet matchar inte"
            }
            this.name = null
            this.email = null
            this.password = null
            this.birthday = {year: null, month: null, day: null}
            this.gdpr = null
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
    width: 20vw;
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

.datepicker {
    display: flex;
    align-items: center;
}

.date-field {
    padding: 5px;
    font-size: 1.2rem;
    border: 2px solid #fff;
    background:rgba(18, 22, 36, 0);
    color: #fff;
}

.date-field::-webkit-outer-spin-button,
.date-field::-webkit-inner-spin-button {
    margin: 0;
    display: none;
    -webkit-appearance: none;
    -moz-appearance:textfield;
}

.form-error {
    color: red;
    font-style: italic;
}

.form-success {
    color: green;
    font-style: italic;
}

.submit-register {
    padding: 0.5rem;
    font-size: 1.4rem;
    border: 4px solid #ff9a56;
    background: #ff9a56;
    color: #fff;
    cursor: pointer;
}

.submit-register:hover {
    border: 4px solid #fff;
    background: none;
}
</style>
