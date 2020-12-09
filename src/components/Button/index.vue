<template>
  <button @click="handleClick"><slot /></button>
</template>

<script>
export default {
  name: '',
  data(){
      return{
          isClick: false
      }
  },
  methods:{
      handleClick(event){
          if(this.isClick) return
          this.isClick = true
          //click事件其实就是Register组件的submit事件
          this.$listeners.click(event).finally(() => {
              this.isClick = false
          })
      }
  }
}
</script>

<style lang="less" scoped>

</style>
