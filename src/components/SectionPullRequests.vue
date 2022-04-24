<template>
  <v-container fluid class="main-app">
    <v-card flat class="mx-auto">
      <v-card-title>
        <h3>Section Articles Database | Type To Match</h3>
      </v-card-title>
      <v-card-text>
        <v-data-table
            :headers="headers"
            :items="pullRequests"
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
                <v-img :src="item.user.avatar_url"></v-img>
              </v-avatar>
              <span class="items"> {{item.user.login}}</span>
            </router-link>
          </template>
          <template v-slot:item.title="{item}">
            <a class="text-decoration-none items" :href="item.issue_url" target="_blank"> {{ item.title }}</a>
          </template>
          <template v-slot:item.state="{item}">
            <span class="items"><v-icon size="10" color="red">mdi-radiobox-marked</v-icon> {{item.state}}</span>
          </template>
          <template v-slot:item.author_association="{item}">
            <span class="items">{{item.author_association}}</span>
          </template>
          <template v-slot:item.assignee="{item}">
            <router-link class="text-decoration-none" :to="{name: 'AuthorArticles', params: { }}">
              <v-avatar size="30">
                <v-img v-if="item.assignee" :src="item.assignee.avatar_url"></v-img>
              </v-avatar>
              <span class="items" v-if="item.assignee"> {{item.assignee.login}}</span>
            </router-link>
          </template>
        </v-data-table>
      </v-card-text>
      <Spinner v-if="pullRequests.length===0"/>
    </v-card>
  </v-container>
</template>

<script>
import mixins from "../mixins";
import Spinner from "@/plugins/loader/views/Spinner";

export default {
  name: "SectionPullRequests",
  mixins: [mixins],
  components: {Spinner},
  beforeRouteEnter (to, from, next){
    next((vm) => {
      vm.$store.dispatch("sectionPullRequests")
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
        sortable: false,
        value: "created_at",
      },
      {
        text: "Author",
        align: "left",
        sortable: true,
        value: "user",
      },
      {
        text: "Title",
        align: "left",
        sortable: true,
        value: "title",
      },
      {
        text: "Assignee",
        align: "left",
        sortable: true,
        value: "assignee"
      },
      {
        text: "Status",
        align: "left",
        sortable: true,
        value: "state"
      },
      {
        text: "Author Association",
        align: "left",
        sortable: true,
        value: "author_association"
      },
    ],
  }),
  computed: {
    pullRequests(){
      return this.$store.getters['gitGetter']('pullRequests')
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