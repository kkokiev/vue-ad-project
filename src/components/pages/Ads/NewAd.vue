<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <page-title title="Create new ad"></page-title>

        <v-form v-model="form.valid" ref="form" validation class="mb-3">
          <v-text-field
            name="title"
            label="Add title"
            type="text"
            v-model="form.title"
            :rules="rules.title"
          >
          </v-text-field>

          <v-textarea
            name="description"
            label="Add description"
            type="text"
            v-model="form.description"
            :rules="rules.description"
          ></v-textarea>
        </v-form>

        <v-layout row class="mb-3">
          <v-flex xs12>
            <v-btn class="primary">
              Upload image
              <v-icon right>cloud_upload</v-icon>
            </v-btn>

            <v-switch
              label="Add to promo?"
              v-model="form.promo"
            ></v-switch>
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex xs12>
            <img src="https://cdn.vuetifyjs.com/images/carousel/planet.jpg" height="120">
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex xs12>
            <v-spacer></v-spacer>
            <v-btn
              class="success"
              @click="onSubmit"
              :disabled="!form.valid"
            >Create ad</v-btn>
          </v-flex>
        </v-layout>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import PageTitle from '@/components/ui/PageTitle'

export default {
  data () {
    return {
      form: {
        title: '',
        description: '',
        promo: false,
        valid: false
      },
      rules: {
        title: [
          v => !!v || 'Title is required'
        ],
        description: [
          v => !!v || 'Description is required'
        ]
      }
    }
  },
  methods: {
    onSubmit () {
      if (this.$refs.form.validate()) {
        const ad = {
          title: this.form.title,
          description: this.form.description,
          promo: this.form.promo,
          imageSrc: 'https://i2.wp.com/wp.laravel-news.com/wp-content/uploads/2016/09/vuejs.png?resize=1400%2C709'
        }

        this.$store.dispatch('createAd', ad)
      }
    }
  },
  components: {
    'page-title': PageTitle
  }
}
</script>