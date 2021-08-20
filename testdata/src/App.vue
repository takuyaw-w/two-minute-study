<template>
  <div id="app">
  </div>
</template>

<script>

export default {
  name: 'App',
  data:() => ({
    origin: "aaaa",
    copy: ""
  }),
  created() {
    console.log(this.$data["origin"])
    console.log(this.$data["copy"])
    this.goodCopyData(this.origin, "copy")
    console.log(this.$data["origin"])
    console.log(this.$data["copy"])
  },
  methods: {
    /**
     * データのコピーを行う。
     * 動作する。
     * @param {any | any[]} from コピー元
     * @param {string} to コピー先（key名）
     */
    goodCopyData(from, to) {
      this.$data[to] = from 
    },
    /**
     * データのコピーを行う。
     * 動作しない。
     * @param {any | any[]} from コピー元
     * @param {string} to コピー先（key名）
     */
    // badCopyData(from, to) {
    //   to = from
    // }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
