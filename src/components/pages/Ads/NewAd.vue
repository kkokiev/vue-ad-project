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
            <v-btn class="primary" @click="onUpload">
              Upload image
              <v-icon right>cloud_upload</v-icon>
            </v-btn>

            <input
              ref="fileInput"
              type="file"
              style="display: none;"
              accept="image/*"
              @change="onFileChange"
            >

            <v-switch
              label="Add to promo?"
              v-model="form.promo"
            ></v-switch>
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex xs12>
            <img :src="form.imageSrc" height="120" v-if="form.imageSrc">
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex xs12>
            <v-spacer></v-spacer>
            <v-btn
              class="success"
              @click="onSubmit"
              :loading="loading"
              :disabled="!form.valid || !form.image || loading"
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
        valid: false,
        image: null,
        imageSrc: ''
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
  computed: {
    loading () {
      return this.$store.getters.loading
    }
  },
  methods: {
    onSubmit () {
      if (this.$refs.form.validate() && this.form.image) {
        const ad = {
          title: this.form.title,
          description: this.form.description,
          promo: this.form.promo,
          imageSrc: this.form.imageSrc
        }

        this.$store.dispatch('createAd', ad)
          .then(() => {
            this.$router.push('/list')
          })
          .catch(() => {})
      }
    },
    onUpload () {
      this.$refs.fileInput.click()
    },
    onFileChange (event) {
      const file = event.target.files[0]

      const reader = new FileReader()

      reader.onload = e => {
        this.form.imageSrc = reader.result
      }
      reader.readAsDataURL(file)
      this.form.image = file
    }
  },
  components: {
    'page-title': PageTitle
  }
}
</script>