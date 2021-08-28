<script>
const INPUT_TYPES = {
  TEXT: "text",
  NUMBER: "number"
}
const EVENT_TYPES = {
  FOCUS: "focus",
  BLUR: "blur"
}
const DISALLOW_KEYS = [
  "Minus", // マイナス（ハイフン）
  "KeyE", // HACK: Chromeではinput type="number"に指数を表すeが入力できてしまうため設定する
  "Semicolon", // プラス
  "Period", // ドット
]

export default {
  name: "MyInput",
  props: {
    value: {
      type: [String, Number]
    }
  },
  data() {
    return {
      inputType: "text",
      editableValue: this.value,
    }
  },
  methods: {
    changeInputType(e) {
      if (e.type === EVENT_TYPES.FOCUS) {
        this.editableValue = this.editableValue.replaceAll(",", "")
        this.inputType = INPUT_TYPES.NUMBER
      } else if (e.type === EVENT_TYPES.BLUR) {
        this.inputType = INPUT_TYPES.TEXT
        this.editableValue = new Intl.NumberFormat("ja-JP").format(this.editableValue)
      }
    },
    onInput(e) {
      this.editableValue = e.target.value
      this.$emit("input", this.editableValue)
    },
    onKeydown(e) {
      const code = e.code
      const isDisallowKey = DISALLOW_KEYS.some(key => key === code)
      if (isDisallowKey) {
        e.preventDefault()
      }
    }
  },
}
</script>

<style scoped>
input {
  font-size: 32px;
  padding: 10px;
  text-align: right;
}
input[type="number"]::-webkit-outer-spin-button, 
input[type="number"]::-webkit-inner-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
} 
</style>

<template>
  <input
    :value="editableValue"
    @input="onInput"
    :type="inputType"
    @focus="changeInputType"
    @blur="changeInputType"
    @keydown="onKeydown"
  />
</template>