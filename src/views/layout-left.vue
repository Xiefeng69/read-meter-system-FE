<template>
    <div class="nav">
        <!-- exact: 只有在path为/时才添加router-active属性 -->
        <router-link class="nav-item" tag="div" to="/" activeClass="router-active" exact>
            <img src="../assets/panel.png" class="nav-icon" />
            <p class="nav-text">控制面板</p>
        </router-link>
        <router-link class="nav-item" tag="div" to="/stastic-panel" activeClass="router-active">
            <img src="../assets/stastic.png" class="nav-icon" />
            <p class="nav-text">数据统计</p>
        </router-link>
        <router-link class="nav-item" tag="div" to="/info-panel" activeClass="router-active">
            <img src="../assets/info.png" class="nav-icon" />
            <p class="nav-text">消息通知</p>
        </router-link>
        <router-link class="nav-item" tag="div" to="/about-system" activeClass="router-active">
            <img src="../assets/about.png" class="nav-icon" />
            <p class="nav-text">关于系统</p>
        </router-link>
    </div>
</template>

<script>
export default {
    name: "layout-left"
}
</script>


<style scoped>
.nav {
    width: 100%;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
}
.nav-item {
    font-size: 12px;
    color: #333;
    padding-top: 12px;
    padding-bottom: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.nav-text {
    margin-top: 5px;
}
.nav-icon {
    width: 25px;
    opacity: 0.8;
}
.router-active {
    background-color: #eaeaea;
    border-radius: 8px;
}
</style>
