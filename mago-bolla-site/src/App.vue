<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>




<template>
    <div>
        <!--HEADER-->
        <header :class="$route.name" class="mb_l">
            <div class="padd_m flex_bet">
                <div class="">
                    <!--Logo-->
                    <router-link to="/">
                        <span>
                            <h1 class="title_white">MAGOBOLLA</h1>
                        </span>
                    </router-link>
                </div> 
                <!--Menu-->
                <div class=""> 
                    <ul class="ms_flex ms_menu">
                        <li class="padd_left"><router-link to="/fotoevideo">FOTO E VIDEO</router-link></li>
                        <li class="padd_left"><router-link to="/blog">BLOG</router-link></li>
                        <li class="padd_left"><router-link to="/curriculum">CV</router-link></li>
                        <li class="padd_left"><a href="#">CONTATTI</a></li>
                    </ul>
                </div>
            </div>
        </header>

        <main>
            <RouterView />
        </main>

       <!--FOOTER-->
        <footer class="indigo">  
            <div class="row flex_bet">
                <!--Logo footer-->
                <div class="col s-6 center">
                    <img class="logo" src="/public/img/logoMagobolla.png" alt="logo.img">
                </div>
                <!--Links footer-->
                <div class="col s-6"> 
                    <div class="row"> 
                        <div class="col s-4"><router-link to="/">Link</router-link></div>
                        <div class="col s-4"><router-link to="/">Link</router-link></div>
                        <div class="col s-4"><router-link to="/">Link</router-link></div>
                        <div class="col s-4"><router-link to="/">Link</router-link></div>
                    </div>
                </div>
            </div>
        </footer>
    </div>        
</template>