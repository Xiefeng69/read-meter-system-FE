<template>
    <div class="main">
        <Toast v-show="uploadFileToast" @setToastClose="closeToast" />
        <div id="controller">
            <div style="display: flex; flex-direction: row">
                <div class="add-image-box" @click="()=>{uploadFileToast=!uploadFileToast}">
                    <img class="add-image-icon" src="../../assets/add.png" />
                    上传图片
                </div>
                <div class="refresh-box" @click="refreshPage">
                    <img style="width: 20px;" src="../../assets/refresh.png" />
                </div>
            </div>
            <div class="controller-box">
                <div class="controller-box-item controller-active" @click="changeToList">
                    <img class="controller-icon" src="../../assets/list.png" />
                </div>
                <div class="controller-box-item" @click="changeToGrid">
                    <img class="controller-icon" src="../../assets/grid.png" />
                </div>
            </div>
        </div>
        <div class="infoshow-container">
            <div v-if="this.$store.state.isListShow" class="list-show">
                <div class="list-title">
                    <div class="filename">filename</div>
                    <div class="date">date</div>
                    <div class="status">status</div>
                    <div class="result">result</div>
                </div>
                <div style="padding: 0 15px">
                   <div v-for="item in dataDetails" :key="item.id">
                        <ListShow :id="item.id" :filename="item.filename" :status="item.status" :date="item.date" :result="item.result" />
                    </div> 
                </div> 
            </div>
            <div v-else class="flat-show">
                <div v-for="item in dataDetails" :key="item.id">
                    <GridShow :id="item.id" :filename="item.filename" :status="item.status" :date="item.date" :result="item.result" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ListShow from '@/components/listShow.vue';
import GridShow from '@/components/gridShow.vue';
import Toast from '@/components/toast.vue';
import axios from 'axios';

export default {
    inject: ['reload'],
    data() {
        return {
            uploadFileToast: false,
            rawDataDetails: []
        }
    },
    components: {
        ListShow,
        GridShow,
        Toast
    },
    methods: {
        changeToList() {
            this.$store.commit('changeToList');
        },
        changeToGrid() {
            this.$store.commit('changeToGrid');
        },
        closeToast(payload) {
            if(payload?.reloadPage) {
                // 确定刷新页面
                this.reload()
            }
            this.uploadFileToast = false;
        },
        refreshPage() {
            this.reload();
        }
    },
    computed: {
        dataDetails() {
            let num = 1
            let afterDataDetails = [...this.rawDataDetails]
            for (let i of this.rawDataDetails) {
                i['id'] = num;
                num += 1;
            }
            return afterDataDetails;
        }
    },
    created() {
        axios.get('http://localhost:3000/public/').then((res) => {
            this.rawDataDetails = [...res.data.data]
        })
    }
}
</script>

<style scoped>
.main {
    position: relative;
}
#controller {
    width: calc(100%);
    display: flex;    
    justify-content: space-between;
    background: #fafafa;
    box-sizing: border-box;
    padding: 6px 20px;
    position: sticky;
    top: 0;
    border-bottom: 1px solid #e8e8e8;
}
.add-image-box {
    width: 100px;
    background: rgb(244, 244, 244);
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    cursor: pointer;
}
.add-image-icon {
    width: 18px;
    margin-right: 2px;
}
.refresh-box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    background: rgb(244, 244, 244);
    border-radius: 50%;
    cursor: pointer;
    margin-left: 8px;
}
.controller-box {
    width: 100px;
    padding: 6px 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    background: rgb(244, 244, 244);
}
.controller-box-item {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.controller-icon {
    width: 20px;
}
.infoshow-container {
    width: 100%;
    box-sizing: border-box;
    /*padding: 0 15px 0 15px;*/
    font-size: 14px;
}
.list-title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 25px;
    margin-bottom: 5px;
    box-sizing: border-box;
    background: rgb(250, 250, 250);
    border-bottom: 1px solid #e8e8e8;
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
.result {
    width: 10%;
}
.flat-show {
    display: flex;
    flex-wrap: wrap;
    padding: 10px 15px 0 15px;
}
</style>