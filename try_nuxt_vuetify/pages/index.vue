<template>
  <v-row justify="center" align="center">
    <v-date-picker
      v-model="picker"
      :allowed-dates="allowed"
    ></v-date-picker>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      picker: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    }
  },
  methods: {
    allowed(val) {
      let today = new Date("2020-05-01")
      today = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate()
      )

      return today < new Date(val)
    }
  }
}
</script>
