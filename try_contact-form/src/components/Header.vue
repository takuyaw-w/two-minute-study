<template>
  <header>
    <div class="container">
      <h1><img src="./../assets/logo.png" alt=""></h1>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
header{
  border-bottom: 2px solid #0e271c;
}
.container h1{
  position: relative;
  text-align: center;
  height: 50px;
  line-height: 50px;
}
.container h1 img{
  display: inline;
  text-align: center;
  margin: auto;
  height: 50px;
}
</style>
