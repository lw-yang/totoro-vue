<template>
    <div class="container">
        <router-view class="main"/>
        <van-tabbar route class="tabb" active-color="#f4456f">
            <van-tabbar-item replace to="/home" >
                <van-icon slot="icon" name="home-o" size="25px"/>
                首页
            </van-tabbar-item>
            <van-tabbar-item replace to="/category" icon="">
                <van-icon slot="icon" name="apps-o" size="25px"/>
                分类
            </van-tabbar-item>
            <van-tabbar-item replace to="/message" icon="">
                <van-icon slot="icon" name="comment-o" size="25px"/>
                消息
            </van-tabbar-item>
            <van-tabbar-item replace to="/cart" icon="">
                <van-icon slot="icon" name="shopping-cart-o" size="25px"/>
                购物车
            </van-tabbar-item>
            <van-tabbar-item replace to="/mine" icon="">
                <van-icon slot="icon" name="user-o" size="25px"/>
                我的
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Tabbar, TabbarItem } from 'vant';
    import { Icon } from 'vant';

    Vue.use(Icon);
    Vue.use(Tabbar);
    Vue.use(TabbarItem);

    export default {
        name: "Layout"
    }
</script>

<style lang="scss" scoped>
.container{
    width: 100%;

    .tabb{
        height: 55px;
    }

}

</style>