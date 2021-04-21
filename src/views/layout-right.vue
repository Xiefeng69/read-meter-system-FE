<template>
    <div class="main-content">
        <router-view v-if="isRouterAlive" />
    </div>
</template>

<script>
export default {
    /* provide和inject用于父组件向子组件传递数据 */
    provide (){
        return {
            reload: this.reload
        }
    },
    data (){
        return {
            isRouterAlive: true
        }
    },
    methods: {
        reload() {
            console.log('hi');
            this.isRouterAlive = false;
            this.$nextTick(()=>{
                this.isRouterAlive = true
            })
        }
    }
}
</script>

<style scoped>
/* .main-content {
    padding: 30px 35px 0 35px;
} */
</style>