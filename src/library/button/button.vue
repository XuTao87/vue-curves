<template>
  <div>
    <div>{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: "ButtonCom",
  props: {
    text: {
      type: String,
      default: "按钮",
    },
  },
};
</script>

<style lang="scss" scoped>
</style>