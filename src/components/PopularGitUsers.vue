<template>
  <v-container fluid class="main-app">
    <v-card flat class="mx-auto">
      <v-card-title>
        <h3>Articles Database | Search To Match</h3>
      </v-card-title>
      <v-card-text>
        <v-data-table
            :headers="headers"
            :items="articles"
            :search="search"
            :items-per-page="10"
            style="background: #F4F5FA"
        >
          <template v-slot:top>
            <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Enter Article Title To Find Matches"
                single-line
                hide-details
            ></v-text-field>
          </template>
          <template v-slot:item.id="{index}">
            <span class="items">{{index+1}}</span>
          </template>
          <template v-slot:item.created_at="{item}">
            <span class="items">{{getDateTimeFormat(item.created_at) }}</span>
          </template>
          <template v-slot:item.user="{item}">
            <router-link class="text-decoration-none" :to="{name: 'AuthorArticles', params: { username:item.user.username}}">
              <v-avatar size="30">
                <v-img :src="item.user.profile_image"></v-img>
              </v-avatar>
              <span class="items"> {{item.user.name}}</span>
            </router-link>
          </template>
          <template v-slot:item.title="{item}">
            <v-avatar size="30">
              <v-img :src="item.cover_image"></v-img>
            </v-avatar>
            <a class="text-decoration-none items" :href="item.url" target="_blank"> {{ item.title }}</a>
          </template>
          <template v-slot:item.description="{item}">
            <a class="text-decoration-none items" style="color:#000000" :href="item.url" target="_blank"> {{ item.description }}</a>
          </template>
        </v-data-table>
      </v-card-text>
      <Spinner v-if="articles.length===0"/>
    </v-card>
  </v-container>
</template>

<script>
import mixins from "../mixins";
import Spinner from "@/plugins/loader/views/Spinner";

export default {
  name: "PopularGitUsers",
  mixins: [mixins],
  components: {Spinner},
  beforeRouteEnter (to, from, next){
    next((vm) => {
      vm.$store.dispatch("devArticles")
    })
  },
  data: () => ({
    search: '',
    headers: [
      {
        text: "S/N",
        align: "left",
        sortable: false,
        value: "id",
      },
      {
        text: "Posted On",
        align: "left",
        sortable: false,
        value: "created_at",
        width: '270px'
      },
      {
        text: "Author",
        align: "left",
        sortable: false,
        value: "user",
        width: '200px'
      },
      {
        text: "Title",
        align: "left",
        sortable: false,
        value: "title",
        width: '500px'
      },
      {
        text: "Description",
        align: "left",
        sortable: false,
        value: "description"
      },
    ],
  }),
  computed: {
    articles(){
      return this.$store.getters['gitGetter']('articles')
    }
  },
}
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
.items{
  font-size: 12px;
  font-weight: 600;
}
</style>