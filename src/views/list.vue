<template>
    <div class="bj column">
        <div class="flex">list页面</div>
         <van-button type="info" @click="$router.push({name:'Home'})">跳回首页</van-button>
          <van-button type="primary" @click="list.push('newlistitem'+`${new Date().toLocaleDateString()}`)">增加列表</van-button>
        <div class="box">
            <span class="boxItem" v-for="(item,index) in list" :key="index" @click="$router.push({name:'detail',params:{data:item}})">
                {{item}}
            </span>
        </div>
      
    </div>
</template>

<script>

export default {
    components: {
        
    },
  beforeRouteLeave(to, from, next) {
        if (to.name != "Home") {
           //不回首页 不需要销毁
            console.log('enter beforeRouteLeave detail')
            from.meta.keepAlive = true;
        } else {
           //进入首页 调用distory方法 清除所有缓存 保证下次进列表页 永远是刷新的
            console.log('enter beforeRouteLeave home')
            let vnode = this.$vnode
            let parentVnode = vnode && vnode.parent;
            if (parentVnode && parentVnode.componentInstance && parentVnode.componentInstance.cache) {
                var key = vnode.key == null
                    ? vnode.componentOptions.Ctor.cid + (vnode.componentOptions.tag ? `::${vnode.componentOptions.tag}` : '')
                    : vnode.key;
                var cache = parentVnode.componentInstance.cache;
                var keys = parentVnode.componentInstance.keys;
                console.log('cache', cache)
                console.log('keys', keys)
                console.log('cache[key]', cache[key])
            
                if (cache[key]) {
                    console.log('enter destroy')
                    //清除实例
                    this.$destroy()
                    // remove key
                    if (keys.length) {
                        var index = keys.indexOf(key)
                        if (index > -1) {
                            keys.splice(index, 1)
                        }
                    }
                    //清除此缓存
                    cache[key] = null
                }
            }
        }
        next();
    },

    data() {
        return {
            list:['1111','2222','3333']
        };
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
    .box{
        display: flex;
        flex-direction: column;
        .boxItem{
            width: 200px;
            height: 50px;
        }
    }
}
</style>
