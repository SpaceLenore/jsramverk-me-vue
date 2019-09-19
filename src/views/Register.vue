<template>
    <div class="outer-wrap">
        <Navbar/>
        <div class="content-wrap">
            <h1 class="content-header">Registrera användare</h1>
            <div class="register-wrap">
                <form @submit.prevent="sendForm()">
                    <span class="fieldset">
                        <label for="name">Namn</label>
                        <input class="input-field" type="text" name="name" v-model="name">
                    </span>
                    <span class="fieldset">
                        <label for="birthday">Födelsedag</label>
                        <span class="datepicker">
                            <input class="date-field" type="number" name="year" placeholder="year" min="1900" :max="new Date().getFullYear()" maxlength="4" v-model="birthday.year" @keyup="limitchars($event)">&nbsp;-&nbsp;
                            <input class="date-field" type="number" name="month" placeholder="month" min="01" max="12" maxlength="2" v-model="birthday.month" @keyup="limitchars($event)">&nbsp;-&nbsp;
                            <input class="date-field" type="number" name="day" placeholder="day" min="01" max="31" maxlength="2" v-model="birthday.day" @keyup="limitchars($event)">
                        </span>
                    </span>
                    <span class="fieldset">
                        <label for="email">E-post</label>
                        <input class="input-field" id="nextField" type="email" name="email" v-model="email">
                    </span>
                    <span class="fieldset">
                        <label for="password">Lösenord (minst 10 tecken)</label>
                        <input id="passwd" class="input-field" type="password" name="password" pattern=".{10,}" v-model="password">
                    </span>
                    <span class="fieldset no-col">
                        <input type="checkbox" name="gdpr" v-model="gdpr">
                        <label for="gdpr">Jag accepterar att hemsidan sparar min persondata i enighet med GDPR</label>
                    </span>
                    <span class="fieldset" v-if="errors">
                        <span class="form-error" v-for="error in errors" v-bind:key="error">
                            {{error}}
                        </span>
                    </span>
                    <input class="submit-register" type="submit" value="Skapa Konto">
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
            errors: [],
            name: null,
            birthday: {
                year: null,
                month: null,
                day: null
            },
            email: null,
            password: null,
            gdpr: null
        }
    },
    components: {
        Navbar
    },
    methods: {
        sendForm() {
            this.errors = [];
            
            if (!this.name || !this.birthday || !this.email || !this.password || !this.gdpr) {
                this.errors.push("Alla fält måste vara ifyllda")
            }
            else if (this.password.length < 10) {
                this.errors.push("Lösenordet måste vara längre än 10 tecken")
            }
            else {
                this.name = null
                this.email = null
                this.password = null
                this.birthday = {year: null, month: null, day: null}
                this.gdpr = null
            }
        },
        limitchars(e) {
            if (e.target.value.length > e.target.maxLength) {
                e.target.value = e.target.value.toString().slice(0,e.target.maxLength)
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
