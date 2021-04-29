<template>
    <div class="grid-item" @click="routeToDetail">
        <div class="filename">{{ filename }}</div>
        <div class="date">{{ date }}</div>
        <div class="status">
            <div v-if="status === 'success'" class="status-success"></div>
            <div v-if="status === 'warning'" class="status-warning"></div>
            <div v-if="status === 'error'" class="status-error"></div>
            <div v-if="status === 'pending'" class="status-pending"></div>
            <span>{{ status }}</span>
        </div>
        <div class="result">{{ result }}</div>
    </div>
</template>

<script>
export default {
    props: {
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
            type: String
        },
        id: {
            type: Number
        }
    },
    methods: {
        routeToDetail() {
            // this.$router.go(-1) 回退
            if(this.status !== 'pending') {
                this.$router.push(`/meter-detail/${this.id}`)
            } else {
                this.$store.commit('setPopupState', {
                    type: 'error',
                    text: 'pending中不可访问'
                })
                console.log('pending中不可访问');
            }
        }
    }
}
</script>

<style scoped>
.grid-item {
    width: 160px;
    box-sizing: border-box;
    padding: 10px 12px;
    border: 1px solid #ddd;
    border-radius: 20px;
    cursor: pointer;
    margin-right: 10px;
    margin-bottom: 10px;
    color: #333;
}
.grid-item:hover {
    background: rgb(234, 234, 235);
}
.filename {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-bottom: 6px;
    font-size: 16px;
    font-weight: 600;
}
.status {
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
.status-pending {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #aaa;
}
.status span {
    margin-left: 4px;
}
</style>