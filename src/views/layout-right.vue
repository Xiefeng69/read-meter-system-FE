<template>
    <div class="main-content">
        <Popup v-show="this.$store.state.isPopupShow " />
        <router-view v-if="isRouterAlive" />
    </div>
</template>

<script>
import Popup from '@/components/popUp.vue';
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
    },
    components: {
        Popup
    }
}
</script>

<style scoped>
.main-content {
    position: relative;
}
</style>