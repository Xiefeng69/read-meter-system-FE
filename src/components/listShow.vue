<template>
    <router-link class="list-item" :class="[id%2 === 0 ? 'item-even' : 'item-odd']" to="/meter-detail" tag="div">
        <div class="filename">{{ filename }}</div>
        <div class="date">{{ date }}</div>
        <div class="status">
            <div v-if="status === 'success'" class="status-success"></div>
            <div v-if="status === 'warning'" class="status-warning"></div>
            <div v-if="status === 'error'" class="status-error"></div>
            <span>{{ status }}</span>
        </div>
        <div class="result">{{ result }}</div>
    </router-link>
</template>

<script>
export default {
    props: {
        id: {
            type: Number
        },
        filename: {
            type: String
        },
        status: {
            type: String
        },
        date: {
            type: String
        },
        result: {
            type: Number
        }
    }
}
</script>

<style scoped>
.list-item {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    margin-bottom: 5px;
    padding: 4px 10px;
    box-sizing: border-box;
    border-radius: 10px;
}
.list-item:hover {
    background: rgb(234, 234, 235);
}
.item-even {
    background: rgb(244, 245, 245);
}
.filename {
    width: 35%;
}
.date {
    width: 25%;
}
.status {
    width: 25%;
    display: flex;
    align-items: center;
}
.status-success {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: green;
}
.status-warning {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: yellow;
}
.status-error {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: red;
}
.status span {
    margin-left: 4px;
}
.result {
    width: 10%;
}
</style>