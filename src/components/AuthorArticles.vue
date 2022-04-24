<template>
  <v-container fluid class="main-app">
    <v-card flat class="mx-auto">
      <v-card-title>
        <h3 v-if="articles">Search Articles From {{author.name}}</h3>
        <v-spacer/>
        <v-avatar size="50">
          <v-img :src="author.profile_image"></v-img>
        </v-avatar>
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
          <template v-slot:item.tag_list="{item}">
            <span class="ma-1 pa-1 items" v-bind:key="tag" v-for="tag in item.tag_list"><v-icon size="10">mdi-check</v-icon> {{tag}}</span>
          </template>
          <template v-slot:item.created_at="{item}">
            <span class="items">{{getDateTimeFormat(item.created_at) }}</span>
          </template>
          <template v-slot:item.user="{item}">
            <v-avatar size="30">
              <v-img :src="item.user.profile_image"></v-img>
            </v-avatar>
            <span class="items"> {{item.user.name}}</span>
          </template>
          <template v-slot:item.title="{item}">
            <v-avatar size="30">
              <v-img :src="item.cover_image"></v-img>
            </v-avatar>
            <a class="text-decoration-none items" style="" :href="item.url" target="_blank"> {{ item.title }}</a>
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
  name: "AuthorArticles",
  mixins: [mixins],
  components: {Spinner},
  beforeRouteEnter (to, from, next){
    next((vm) => {
      vm.$store.dispatch("devAuthorArticles", {payload: to.params.username})
    })
  },
  data: () => ({
    search: '',
    headers: [
      {
        text: "S/N",
        align: "left",
        sortable: true,
        value: "id",
      },
      {
        text: "Posted On",
        align: "left",
        sortable: true,
        value: "created_at",
        width: '270px'
      },
      {
        text: "Tags",
        align: "left",
        sortable: true,
        value: "tag_list",
        width: '300px'
      },
      {
        text: "Title",
        align: "left",
        sortable: true,
        value: "title",
        width: '500px'
      },
      {
        text: "Description",
        align: "left",
        sortable: true,
        value: "description"
      },
    ],
  }),
  computed: {
    articles(){
      return this.$store.getters['gitGetter']('authorArticles')
    },
    author(){
      return this.articles[0]['user']
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