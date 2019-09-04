<template>
    <div class="outer-wrap">
        <div class="major-display">
            <div class="highlight-title">404: Not Found</div>
            <div class="tagline">The page you're looking for could not be found.</div>
        </div>
        <Navbar/>
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
