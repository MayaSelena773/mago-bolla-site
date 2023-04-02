<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>


<template>
  <!--Css => "style" è da rimuovere; è usato solo ai fini di template testing-->
  <header class="teal accent-3">
        <div class="test-border0 test-header">
            <div class="test-border1 test-flex0" style="margin-left: 0.5%; padding: 0.3%;"><router-link to="/" style="color: black;">Logo</router-link></div> 
            <div class="test-border1 test-flex0" style="margin-right: 1%; padding: 1px;"> 
                <div class="test-flex0 test-border2" style="padding: 2%; padding: 1px; padding-right: 65px;">
                    <div class="test-border3" style="padding: 2%; margin: 1%;"><router-link to="/spettacoli" style="color: black;">Spettacoli</router-link></div>
                    <div class="test-border3" style="padding: 2%; margin: 1%;"><router-link to="/curriculum" style="color: black;">Curriculum</router-link></div>
                    <div class="test-border3" style="padding: 2%; margin: 1%;"><router-link to="/blog" style="color: black;">Blog</router-link></div>
                    <div class="test-border3" style="padding: 2%; margin: 1%;"><a href="#" style="color: orangered;">Dropdown</a></div>
                </div>
            </div>
        </div>
  </header>

  <main>
    <RouterView />
  </main>

  <!--Css => "style" è da rimuovere; è usato solo ai fini di template testing-->
  <footer class="indigo">  
        <div class="test-border0 test-footer">
            <div class="test-border1 container" style="padding: 0.3%; padding-top: 25px;"><div class="row s-12"><div class="col s-12 center"><h3>Logo</h3></div></div></div> 
            <div class="test-border1 container" style="margin-right: 2%; padding: 1px;"> 
                <div class="row s-12 test-flex0 test-border2 test-flex-dir0" style="padding: 2%; padding: 1px; padding-right: 25px; display: flex;"> 
                    <div class="col s-4 test-border3" style="padding: 1px; margin: 1%; text-align: center;"><router-link to="/" style="color: black;">Link</router-link></div>
                    <div class="col s-4 test-border3" style="padding: 1px; margin: 1%; text-align: center;"><router-link to="/" style="color: black;">Link</router-link></div>
                    <div class="col s-4 test-border3" style="padding: 1px; margin: 1%; text-align: center;"><router-link to="/" style="color: black;">Link</router-link></div>
                    <div class="col s-4 test-border3" style="padding: 1px; margin: 1%; text-align: center;"><router-link to="/" style="color: black;">Link</router-link></div>
                </div>
            </div>
        </div>
    </footer>    
  
</template>