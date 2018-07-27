<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>

        <page-title title="Orders"></page-title>
        
        <v-list
          two-line
        >
          <v-list-tile
            v-for="order in orders"
            :key="order.id"
          >
            <v-list-tile-action>
              <v-checkbox
                :input-value="order.done"
                @change="markDone(order)"
                color="success"
              ></v-checkbox>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{ order.name }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ order.phone }}</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn
                :to="'/ad/' + order.adId"
                class="primary"
              >Open</v-btn>
            </v-list-tile-action>
          </v-list-tile>

        </v-list>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import PageTitle from '@/components/ui/PageTitle'

export default {
  data () {
    return {
      orders: [
        {
          id: 'o1',
          name: 'Clientname',
          phone: '1-234-56789',
          adId: '1',
          done: false
        }
      ]
    }
  },
  methods: {
    markDone (order) {
      order.done = true
    }
  },
  components: {
    'page-title': PageTitle
  }
}
</script>