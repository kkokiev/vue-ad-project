<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <page-title title="My ads"></page-title>

        <v-card
          class="elevation-10 mb-4"
          v-for="ad in adsMy"
          :key="ad.id"
        >
          <v-layout row>
            <v-flex xs4>
              <v-card-media
                :src="ad.imageSrc"
                height="160"
              >
              </v-card-media>
            </v-flex>
            <v-flex xs8>
              <v-card-text>
                <h2 class="priamry">{{ ad.title }}</h2>
                <p>{{ ad.description }}</p>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="info" :to="'/ad/' + ad.id">Open</v-btn>
              </v-card-actions>
            </v-flex>
          </v-layout>
        </v-card>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import PageTitle from '@/components/ui/PageTitle'

export default {
  computed: {
    adsMy () {
      return this.$store.getters.adsMy
    }
  },
  components: {
    'page-title': PageTitle
  }
}
</script>