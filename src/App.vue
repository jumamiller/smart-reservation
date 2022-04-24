<template>
  <v-app>
    <v-card class="mb-16">
      <v-app-bar
          absolute
          color="deep-purple accent-4"
          dark
          class="main-app px-md-14 px-sm-0"
          outlined>
        <v-app-bar-nav-icon
            class="d-block d-lg-none me-2"
            @click="isDrawerOpen = !isDrawerOpen"
        ></v-app-bar-nav-icon>
        <router-link to="/"><img height="50" src="./assets/logo.png" alt="Vuetify.js"></router-link>
        <v-spacer></v-spacer>
        <v-row class="">
          <v-col cols="auto"> <v-btn :to="{name:'Popular'}" text>Match Articles</v-btn></v-col>
          <v-col cols="auto"> <v-btn :to="{name:'AboutUs'}" text>About us</v-btn></v-col>
          <v-col cols="auto"><v-btn :to="{name:'Blog'}" text>Blog</v-btn></v-col>
          <v-col cols="auto"><v-btn :to="{name:'Authors'}" text>Popular Authors</v-btn></v-col>
        </v-row>
      </v-app-bar>
    </v-card>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    isDrawerOpen: false,
  }),
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300&family=Spartan:wght@300&display=swap');
.main-app{
  background-color: #F4F5FA;
  font-family: 'Spartan', sans-serif;
  cursor: progress;
  width: 100%;
  margin: 0 auto;
}
</style>