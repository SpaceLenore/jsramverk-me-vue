<template>
    <div class="outer-wrap">
        <Navbar/>
        <div class="content-wrap">
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
            report: null
        }
    },
    components: {
        Navbar
    },
    methods: {
        reportCallback(response) {
            console.log("callback fired and got:", response);
            
            if (response.data.code == 200) {
                this.title = response.data.data.title
                this.report = response.data.data.report
            } else {
                console.log("code not 200");
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
</style>
