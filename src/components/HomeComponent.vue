<template>
  <v-app light class="main-app">
    <v-app-bar class="white">
      <img src="../assets/logo.png" alt="Vuetify.js">
      <v-spacer></v-spacer>
      <v-row class="">
        <v-col cols="auto"> <v-btn :to="{name:'Popular'}" text>Match Articles</v-btn></v-col>
        <v-col cols="auto"> <v-btn :to="{name:'Popular'}" text>About us</v-btn></v-col>
        <v-col cols="auto"><v-btn :to="{name:'Popular'}" text>Blog</v-btn></v-col>
        <v-col cols="auto"><v-btn :to="{name:'Popular'}" text>Popular Authors</v-btn></v-col>
      </v-row>
    </v-app-bar>
    <v-main>
      <section>
        <v-parallax :src="imageLink.main" height="600">
          <v-layout column align-center justify-center class="white--text">
            <h1 class="white--text mb-2 display-1 text-xs-center" style="font-weight: 900; text-shadow: 3px 2px #000000">The Search Engine for Matching Articles</h1>
            <div class="white--text subheading mb-3 text-xs-center" style="font-weight: 900; text-shadow: 2px 2px #000000">Use our large database to check for plagariased contents</div>
            <v-btn class="blue lighten-2 mt-5" dark large href="/pre-made-themes" :to="{name:'Popular'}">
              Get Started
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-layout
            column
            wrap
            class="my-5"
            align-center
        >
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="headline">The best way for Section Content Managers to Match Existing Articles</h2>
              <span class="subheading">
                No more restrictions, no more limits, no more charges
              </span>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">EngEd</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Our Authors</div>
                    </v-card-title>
                    <v-card-text>
                      Show your creativity to the whole community of EngEd not only to your mum or your friends.
                      We love making good content viral. In this moment EngEd is used by authors to match articles.Be unique, search if it exists!
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">Submission</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Open PR</div>
                    </v-card-title>
                    <v-card-text>
                      Time is important, we don't want you to waste it. Here you can get a massive feedback from real peer reviewers in minutes.
                      And if your article is appreciated you won't only get positive feedback but also lovely and sincere rewards. We pay handsomely!
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">share</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Create new connections</div>
                    </v-card-title>
                    <v-card-text>
                      Imagine if you can directly speak with the world's population.
                      Don't you think it would be easier to find nice people to interact with? Section is both local and global and help you to connect without limitations with people from your city, your state and your universe!
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section>
        <v-parallax :src="imageLink.main" height="380">
          <v-layout column align-center justify-center>
            <div class="headline white--text mb-3 text-xs-center">EngEd is a university student platform that allows everyone to reach a huge audience with their articles </div>
            <em>With the power of Section, you don't need to be famous or post pics of cute cats in order to get visibility</em>
            <v-btn class="blue lighten-2 mt-5" dark large href="/pre-made-themes">
              Get more info
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-container grid-list-md>


          <v-layout row wrap>
            <v-flex xs12 text-xs-center class="mt-5">
              <div class="headline">Are you amazed? Stay tuned!</div>
              <br>
              <div>We are launching the <a class="text-decoration-none" href="https://www.section.io/kubernetes-edge-interface/" target="_blank">Kubernetes Edge Interface</a> in a few time. If you want to be one of the first KEI users we will email you as soon as we're ready.
                In the beginning only few people will test before the launch. Let us know how KEI will help you!</div>
            </v-flex>
            <v-flex xs8 offset-xs2>

              <v-card class="elevation-0 transparent">

                <v-card-text>
                  <v-flex xs12 v-if="!subscribed">
                    <v-text-field filled label="Email address" :rules="emailRules" v-model="email" hint="Enter your email!" persistent-hint></v-text-field>
                  </v-flex>
                  <v-flex xs12 v-if="!subscribed">
                    <v-text-field filled multi-line label="Bio and curiosities"></v-text-field>
                  </v-flex>
                  <v-flex xs12 class="text-xs-center" v-if="!subscribed">
                    <v-btn class="blue lighten-2 mb-5" dark large @click="subscribe">Get in touch</v-btn>
                  </v-flex>
                  <v-flex xs12 class="text-xs-center" v-if="subscribed">
                    <v-btn class="green lighten-2 mb-5" dark large>Welcome on board!</v-btn>
                  </v-flex>
                </v-card-text>

              </v-card>

            </v-flex>
          </v-layout>
        </v-container>
      </section>

      <section>
        <v-parallax :src="imageLink.social_cover" height="380">
          <v-layout column align-center justify-center>
            <div class="headline white--text mb-3 text-xs-center">We are dropping cool news and opportunities on socials</div>
          </v-layout>
          <v-layout justify-space-around justify-center>

            <v-icon x-large dark>fab fa-facebook-f</v-icon>

            <v-icon x-large dark>fab fa-twitter</v-icon>

            <v-icon x-large dark>fab fa-reddit-alien</v-icon>

            <v-icon x-large dark>fab fa-instagram</v-icon>

            <v-icon x-large dark>fab fa-discord</v-icon>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-5">
            <v-flex xs12 sm4>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Company info</div>
                </v-card-title>
                <v-card-text>
                  We are not a company. We hate companies. Just imagine us like the guys from the Silicon Valley series.
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4 offset-sm1>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">We are hiring</div>
                </v-card-title>
                <v-card-text>
                  Are you a creative person? Do you like techy stuff? Complete the email form by writing your skills and interests
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>

      <section>
        <v-container>
          <v-layout>
            <v-flex xs12 class="text-xs-center">
              <img height="200px" src="../assets/search.svg">
            </v-flex>
          </v-layout>
        </v-container>
      </section>




      <v-footer class="">
        Miller Made It!
      </v-footer>

    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "HomeComponent",
  data: function() {
    return {
      title: "Match Articles",
      imageLink: {
        main:
            "https://firebasestorage.googleapis.com/v0/b/endorfinevue.appspot.com/o/assets%2Fb13f0434-b228-11e6-8e5d-5252025056ab_web_scale_0.4666667_0.4666667__.jpg?alt=media&token=660df23e-599e-434b-9313-ba69c973eeea",
        sub_main:
            // "https://firebasestorage.googleapis.com/v0/b/endorfinevue.appspot.com/o/assets%2FNight-Club-Clubbing-Jobs-Abroad2.jpg?alt=media&token=82bbda7d-5df4-430b-9217-adaf1c8485c5",
            "https://firebasestorage.googleapis.com/v0/b/endorfinevue.appspot.com/o/assets%2FNight-Club-Clubbing-Jobs-Abroad2.jpg?alt=media&token=82bbda7d-5df4-430b-9217-adaf1c8485c5",
        logo:
            "https://firebasestorage.googleapis.com/v0/b/endorfinevue.appspot.com/o/assets%2Fandroid-chrome-512x512.png?alt=media&token=8a0a66f6-4741-4ff6-8f28-eb9ec74374df",
        social_cover:
            "https://firebasestorage.googleapis.com/v0/b/endorfinevue.appspot.com/o/assets%2Fo-NIGHTCLUB-facebook.jpg?alt=media&token=cefc5c4c-9714-41da-9c22-f63caf5e89a4"
      },
      email: "",
      emailRules: [
        v => {
          return !!v || "E-mail is required";
        },
        v =>
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
            "E-mail must be valid"
      ],
      subscribed: false
    };
  },
  methods: {
    subscribe: function() {
      this.subscribed = !this.subscribed;
    }
  },
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
.finedTitle {
  font-weight: 900;
  text-shadow: 2px 2px #000000;
}

.social-icon {
  font-size: 21px;
  color: white;
}
</style>
