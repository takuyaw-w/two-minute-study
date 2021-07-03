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
      this.$nextTick(function() {
        this.selectItem(index + 1)
      })
    },
    onBackspace(item, index) {
      if (index === 0) return;
      if (item.value != '') return;
      item.indent--;

      for (let i = index + 1; i < this.items.length; i++) {
        if (this.items[i -1].indent + 2 !== this.items[i].indent) break;
        this.items[i].indent--;
      }
      this.items.splice(index, 1)
      this.getDiv(index - 1).focus()
    }
  },
  computed: {
    tree() {
      let parents = [0]
      let items = this.items;

      for (let i = 1; i < items.length; i++) {
        parents[items[i].indent] = i;
        items[i].parent = parents[items[i].indent - 1];
        items[items[i].parent].lastChild = i;
      }

      let prefix = ''
      let lines = [items[0].value]

      for (let i = 1; i < items.length; i++) {
        let parentIndex = items[i].parent;

        if (items[i].indent > 1) {
          prefix = prefix.slice(0, (items[i].indent - 2) * 4);
          if (items[items[parentIndex].parent].lastChild === parentIndex) {
            prefix += '    '
          } else {
            prefix += '|   '
          }
        } else {
          prefix = ''
        }
        lines[i] = prefix

        if (items[parentIndex].lastChild === i) {
          lines[i] += '└── '
        } else {
          lines[i] += '├── ';
        }
        lines[i] += items[i].value
      }
      return lines.join('\n')
    }
  }
}).mount('#app')
