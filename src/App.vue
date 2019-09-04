<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>

export default {
    components: {
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Martel:400,800&display=swap');
@import url('https://fonts.googleapis.com/css?family=Fira+Sans:300&display=swap');

html,
body,
#app {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background: #121624;    
}
.content-wrap {
    width: 60%;
    margin: auto;
    padding: 2rem 0;
    background: #121624;
    color: #fff;
    font-family: 'Fira Sans', sans-serif;
    font-weight: 300;
    font-size: 1.1rem;
}

.content-header {
    font-size: 2rem;
    font-weight: 400;
    font-style: italic;
    font-family: 'Martel', serif;
}

*::selection {
    background: #ff9a56;
    color: #121624;
}

.link {
    color: #fff;
    text-decoration: none;
    border-bottom: 2px dotted #ff9a56;
}

.link:hover {
    color: #ff9a56;
    text-decoration: none;
    border-bottom: none;
}
</style>
