<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>




<template>
    <div>
        <!--HEADER-->
        <header :class="$route.name" class="mb_l">
            <div class="padd_s flex_bet">
                <div>
                    <!--Logo-->
                    <router-link to="/">
                        <img class="logobolla" src="/public/img/magobolla.png" alt="bollaLogo">
                    </router-link>
                </div> 
                <!--Menu-->
                <div class="ms_hide"> 
                    <ul class="ms_flex ms_menu">
                        <li class="padd_lr neon-menu"><router-link to="/fotoevideo">FOTO E VIDEO</router-link></li>
                        <li class="padd_lr neon-menu"><router-link to="/blog">BLOG</router-link></li>
                        <li class="padd_lr neon-menu"><router-link to="/curriculum">CV</router-link></li>
                        <li class="padd_lr neon-menu"><a href="#">CONTATTI</a></li>
                    </ul>
                </div>
            </div>
        </header>

        <main>
            <RouterView />
        </main>

       <!--FOOTER-->
        <footer class="indigo">  
            <div class="row">
                <!--Logo footer-->
                <div class="col s12 m4 center">
                    <img class="logo" src="/public/img/logoMagobolla.png" alt="logo.img">
                </div>
                <!--Links footer-->
                <div class="col s12 m4 center">
                    <h6 class="foot_title">Social</h6>
                    <ul>
                        <li>
                            <a href="https://www.instagram.com/baby.tirannosauro/">insta Baby-T</a>
                        </li>
                        <li>
                            fb Stefano Magobolla
                        </li>
                        <li>
                            <a href="https://www.youtube.com/@baby-t-stefanobono3537">Youtube</a>
                        </li>
                    </ul>
                </div>
                <div class="col s12 m4 center">
                    <h6 class="foot_title">Contatti</h6>
                    <ul>
                        <li>
                            <a href="mailto:magobolla@libero.it">magobolla@libero.it</a>
                        </li>
                        <li>347 713 1832</li>
                    </ul>
                </div>
            </div>
        </footer>
    </div>        
</template>