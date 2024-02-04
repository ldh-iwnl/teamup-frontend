<template>
<van-nav-bar
  title="标题"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
>
<template #right>
    <van-icon name="search" size="18" />
</template>

</van-nav-bar>

</template>

<script setup>
    const onClickLeft = () => alert("left")
    const onClickRight = () => alert("right")
</script>

<style scoped>

</style>