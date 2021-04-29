<template>
    <div class="container">
        <div class="popup" :class="[this.$store.state.popUpType === 'success' ? 'type-success' : 'type-error']">
            {{ this.$store.state.popUpText }}
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.container {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: absolute;
    z-index: 11;
    pointer-events: none;
}
.popup {
    position: fixed;
    width: 15%;
    margin-top: 12px;
    padding: 12px 18px;
    border-radius: 8px;
    color: white;
    font-size: 12px;
    display: flex;
    justify-content: center;
    pointer-events: initial;
}
.type-success {
    background: rgba(0, 128, 0, 0.75);
}
.type-error {
    background: rgba(255, 0, 0, 0.75);
}
</style>