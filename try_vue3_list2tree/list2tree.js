Vue.createApp({
  data() {
    return {
      items: [
        { id: 0, value: "item-0", indent: 0},
        { id: 1, value: "item-1", indent: 1},
        { id: 2, value: "item-2", indent: 1},
      ]
    }
  },
  methods: {
    onInput(e, item) {
      item.value = e.target.innerText
    },
    onTab(item, index) {
      item.indent++
    }
  },
  computed: {
    tree() {
      return this.items.map(item => item.value + item.indent).join('\n')
    }
  }
}).mount('#app')
