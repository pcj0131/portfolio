<template>
    <section class="navbar-container">
        <nav class="navbar is-fixed-top">
            <div class="navbar-brand">
                <div class="navbar-item">
                    <a class="navbar-item" v-scroll-to="'.banner-container'">
                        <font-awesome-icon :icon="['fas','home']"/>
                        &nbsp;HOME
                    </a>
                    <a class="navbar-item" v-scroll-to="'.about-container'">
                        <font-awesome-icon :icon="['fas','user']"/>
                        &nbsp;ABOUT
                    </a>
                    <a class="navbar-item" v-scroll-to="'.skill-container'">
                        <font-awesome-icon :icon="['fas','book']"/>
                        &nbsp;SKILL
                    </a>
                    <a class="navbar-item" v-scroll-to="'.career-container'">
                        <font-awesome-icon :icon="['fas','briefcase']"/>
                        &nbsp;CAREER
                    </a>
                    <a class="navbar-item" href="./resume.pdf" target="_blank">
                        <font-awesome-icon :icon="['fas','file']"/>
                        &nbsp;RESUME
                    </a>
                    
                </div>
             </div>
        </nav>
    </section>
</template>

<style>
    .navbar {
        position: fixed;
        width: 100%;
        height: 10%;
        top:0;
        z-index: 99;
    }
    .navbar-brand {
        width: 100%;
    }
    .navbar-items {
        width: 100%
    }

    .navbar-item {
        display: block;
        padding: 0 30px;
        font-size: 20px;
    }
    @media screen and (max-width: 1024px) {
        .navbar {
            width: 100%;
            height: 1%;
        }
        .navbar-item {
            font-size: 0.7rem;
            padding: 0 5px;
        }
    }
</style>
