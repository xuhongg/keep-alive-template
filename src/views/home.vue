<template>
    <div class="bj column">
        <div >home页
            <br>
              <van-button type="primary" @click="$router.push({name:'list'})">跳去列表</van-button>
        </div>
    </div>
</template>

<script>

export default {
    components: {
        
    },
    data() {
        return {};
    },
    mounted() {
       
    },
    methods: {},
};
</script>

<style lang="less" scoped>
@import "../main.less";

input::-webkit-input-placeholder {
    // 设置输入框文字颜色
}

div::-webkit-scrollbar,
span::-webkit-scrollbar {
    // 设置滚动条样式
    display: none;
}

span,
img {
    display: inline-block;
}
div,
span {
    -webkit-overflow-scrolling: touch;
}
.bj {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    background-size: 100% 100%;
    
    div{
         color: #2c3e50;
         font-size: 50px;
    }
}
</style>
