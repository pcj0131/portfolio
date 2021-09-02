<template>
    <div id = "app">
        <!-- navbar -->
        <div id="nav">
            <Nav />
        </div>

        <!-- banner -->
        <div id="banner">
            <Banner />
        </div>

        <!-- about -->
        <div id="about">
            <About />
        </div>

        <!-- skill -->
        <div id="skill">
            <Skill />
        </div>

        <!-- career -->
        <div id="career">
            <Career />
        </div>
    </div>
</template>

<script>
import Nav from './components/Nav.vue';
import Banner from './components/Banner.vue';
import About from './components/About.vue';
import Skill from './components/Skill.vue';
import Career from './components/Career.vue';

export default {
  name: 'App',
  components: {
    Nav,
    Banner,
    About,
    Skill,
    Career,
  },
  data() {
    return {

    };
  },
  methods: {

  },
};
</script>

<style>
    #banner {
        position: relative;
        height: 100vh;
    }

    #about {
        height: 100vh;
    }

    #skill {
        height: 100vh;
    }

    #career {
        height: 100vh;
    }
    @media screen and (max-width: 1024px) {
        #app {
            width: 100%;
            margin: 0 auto;
            background-size: cover;
        }
    }
</style>
