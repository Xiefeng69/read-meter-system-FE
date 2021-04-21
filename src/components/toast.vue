<template>
    <div>
        <div class="background" @click="this.closeToast"></div>
        <div class="toast-bg">
            <div class="toast">
                <div class="toast-bar">
                    <span>文件上传</span>
                    <img src="@/assets/add.png" @click="this.closeToast" />
                </div>
                <p>* 仅接受png，jpg和jpeg格式图片</p>
                <input name="upfile" type="file" accept="image/png,image/jpg,image/jpeg" @change="changeFile" />
                <div class="upload-btn" @click="uploadFile">
                    <img src="@/assets/upload.png" alt="">
                    上传
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
            targetFile: null
        }
    },
    methods: {
        closeToast(){
            this.$emit('setToastClose')
        },
        closeToastandReload() {
            this.$emit('setToastClose', {'reloadPage': true})
        },
        changeFile(e) {
            // 也可以直接使用refs
            this.targetFile = e.target.files[0]
        },
        uploadFile() {
            if(this.targetFile) {
                let formData = new FormData()
                //let path = this.targetFile['path']
                formData.append('file', this.targetFile)
                axios.post('http://localhost:3000/public/upload-image', formData, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                }).then((res) => {
                    if(res.data.status === 200) {
                        this.closeToastandReload()
                    }
                })
            } else {
                console.log('选择上传文件');
            }
        }
    }
}
</script>

<style scoped>
.background {
    width: 100%;
    height: 100vh;
    position: absolute;
    background: black;
    z-index: 10;
    opacity: 0.8;
}
.toast-bg {
    width: 100%;
    height: 100vh;
    background: transparent;
    position: absolute;
    z-index: 10;
    color: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
}
.toast {
    box-sizing: border-box;
    width: 300px;
    height: 180px;
    background: #f7f7f7;
    pointer-events: initial;
    border-radius: 15px;
    padding: 15px 20px;
}
.toast p {
    margin-top: 20px;
    font-size: 12px;
    color: orangered;
}
.toast input {
    margin-top: 5px;
}
.toast-bar {
    display: flex;
    justify-content: space-between;
}
.toast-bar img {
    width: 16px;
    height: 16px;
    transform: rotate(45deg);
    cursor: pointer;
}
.upload-btn {
    margin-top: 25px;
    box-sizing: border-box;
    width: 80px;
    margin-left: auto;
    margin-right: auto;
    background: #ccc;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px 8px;
    cursor: pointer;
}
img {
    width: 22px;
    height: 22px;
}
</style>