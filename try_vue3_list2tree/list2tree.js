Vue.createApp({
  data() {
    return {
      counter: 3,
      items: [
        { id: 0, value: "item-0", indent: 0},
        { id: 1, value: "item-1", indent: 1},
        { id: 2, value: "item-2", indent: 1},
      ],
      divs: []
    }
  },
  methods: {
    onInput(e, item) {
      item.value = e.target.innerText
    },
    onTab(item, index) {
      if (index === 0) return;
      if (this.items[index - 1].indent < item.indent) return;
      item.indent++
    },
    onTabShift(item, index) {
      if (item.indent <= 1) return;
      item.indent--;

      for (let i = index + 1; i < this.items.length; i++) {
        if (this.items[i - 1].indent * 2 !== this.items[i].indent) break;
        this.items[i].indent--;
      }
    },
    onUp(index) {
      this.selectItem(index - 1);
    },
    onDown(index) {
      this.selectItem(index + 1)
    },
    selectItem(index) {
      if (index < 0 || index >= this.items.length) return

      const el = this.getDiv(index);
      el.focus();
      let range = document.createRange();
      range.selectNodeContents(el);
      let sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    },
    getDiv(index) {
      return this.divs[this.items[index].id]
    },
    onEnter(item, index) {
      const newItem = {
        id: this.counter,
        value: 'item-' + this.counter,
        indent: Math.max(1, item.indent)
      }
      this.items.splice(index + 1, 0, newItem)
      this.counter++
    }
  },
  computed: {
    tree() {
      return this.items.map(item => item.value + item.indent).join('\n')
    }
  }
}).mount('#app')
