import { Ref, ref, isRef, computed } from 'vue'

export const useFormatDate = (date: Date | Ref<Date>) => {
  const dateRef = isRef(date) ? date : ref(date)
  return computed(() => {
    return `${dateRef.value.getFullYear()}/${dateRef.value.getMonth() + 1}/${dateRef.value.getDate()}`
  })
}
