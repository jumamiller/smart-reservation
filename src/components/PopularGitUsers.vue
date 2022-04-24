<template>
  <v-container fluid class="main-app">
    <v-card flat class="mx-auto">
      <v-card-title>
        <h3>Dev Articles Database</h3>
      </v-card-title>
      <v-card-text>
        <v-data-table
            :headers="headers"
            :items="articles"
            :search="search"
            :items-per-page="10"
        >
          <template v-slot:top>
            <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
            ></v-text-field>
          </template>
          <template v-slot:item.id="{index}">
            <span>{{index+1}}</span>
          </template>
          <template v-slot:item.created_at="{item}">
            <span>{{getDateTimeFormat(item.created_at) }}</span>
          </template>
          <template v-slot:item.user="{item}">
            <v-avatar size="30">
              <v-img :src="item.user.profile_image"></v-img>
            </v-avatar>
            <span> {{item.user.name}}</span>
          </template>
          <template v-slot:item.title="{item}">
            <v-avatar size="30">
              <v-img :src="item.cover_image"></v-img>
            </v-avatar>
            <a class="text-decoration-none" :href="item.url" target="_blank"> {{ item.title }}</a>
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
        text: "Posting Date",
        align: "left",
        sortable: false,
        value: "created_at",
      },
      {
        text: "Title",
        align: "left",
        sortable: false,
        value: "title"
      },
      {
        text: "Posted By",
        align: "left",
        sortable: false,
        value: "user",
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
</style>