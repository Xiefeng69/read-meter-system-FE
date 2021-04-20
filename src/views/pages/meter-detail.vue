<template>
    <div class="main">
        <div class="controller">
            <router-link to="/" tag="div" class="controller-icon-box">
                <img src="@/assets/arrow.png" />
            </router-link>
        </div>
        <div class="abstract">
            <div>
                {{ absData.filename }}
                <div style="cursor: pointer">
                    <img src="@/assets/copy.png" />
                    <span>copy url</span>
                </div>
            </div>
            <div class="status">
                <div v-if="absData.status === 'success'" class="status-success"></div>
                <div v-if="absData.status === 'warning'" class="status-warning"></div>
                <div v-if="absData.status === 'error'" class="status-error"></div>
                <span>{{ absData.status }}</span>
            </div>
            <div>date: {{ absData.date }}</div>
            <div>detect result: {{ absData.result }}</div>
        </div>
        <div class="detail">
            <div class="detail-title">
                <div></div>
                <span>Details</span>
            </div>
            <div class="detail-list">
                <div v-for="(item, index) in detailList" :key="index" class="list-item">
                    <span>{{ item }}</span>
                    <div>
                        <img src="@/assets/preview.png" />
                        <span style="margin-left: 5px">preview</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            detailList: [
                'origin image',
                'object detection',
                'image gray',
                'image binarization',
                'image connectivity',
                'hough circle detect',
                'LSD line detect',
                'pointer refine',
                'final result'
            ],
            absData: {},
            detData: {}
        }
    },
    created() {
        // console.log(this.$route.params);
        axios.get(`http://localhost:3000/public/meter-details?id=${this.$route.params.id}`).then((res) => {
            console.log(res);
            this.absData = { ...res.data.data.absData }
            this.detData = { ...res.data.data.detData }
        })
    }
}
</script>

<style scoped>
.controller {
    width: 100%;
    position: sticky;
    top: 0;
    background: #fafafa;
    box-sizing: border-box;
    padding: 6px 20px;
}
.controller-icon-box {
    width: 30px;
    padding: 6px 4px;
    background: rgb(244, 244, 244);
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.controller img {
    width: 18px;
    opacity: 0.8;
}
.abstract {
    margin-top: 15px;
    margin-left: auto;
    margin-right: auto;
    width: 85%;
    box-sizing: border-box;
    padding: 20px 20px;
    background: #f5f5f5;
    color: #333;
    border-radius: 20px;
}
.abstract div img {
    width: 14px;
    height: 14px;
}
.abstract span {
    font-size: 16px;
    font-weight: 500;
}
.abstract div:nth-child(1) {
    font-weight: 600;
    font-size: 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.abstract div:nth-child(2) {
    margin-top: 12px;
}
.abstract div:nth-child(3), .abstract div:nth-child(4) {
    margin-top: 4px;
}
.status {
    width: 25%;
    display: flex;
    align-items: center;
}
.status-success {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: green;
}
.status-warning {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: yellow;
}
.status-error {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: red;
}
.status span {
    margin-left: 4px;
}
.detail {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 14px;
    box-sizing: content-box;
}
.detail-title {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}
.detail-title div {
    width: 5px;
    height: 13px;
    border-radius: 10px;
    background: #666;
}
.detail-title span {
    margin-left: 8px;
}
.detail-list img {
    width: 14px;
    height: 14px;
    opacity: 0.8;
}
.list-item {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
    padding: 6px 10px;
    box-sizing: border-box;
    border-radius: 10px;
    color: #333;
    font-size: 14px;
}
.list-item:nth-child(even) {
    background: rgb(244, 245, 245);
}
.list-item:hover {
    background: rgb(234, 234, 235);
}
.list-item div {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
</style>