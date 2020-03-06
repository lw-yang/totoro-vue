<template>
    <div class="qr">
<!--        <nav-bar title="联 系 作 者" style="background-color: lightpink"></nav-bar>-->
        <div class="qr-top">

        </div>
        <div class="qr-image">
            <van-image
                    width="200"
                    height="200"
                    :src="qrImage"

            />
        </div>
        <div class="qr-bottom">
            <van-image
                    width="200"
                    height="200"
                    :src="nameImage"

            />
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Image } from 'vant';
    // import NavBar from "../../components/NavBar";

    Vue.use(Image);
    export default {
        name: "QrCode",
        // components: {NavBar},
        data() {
            return {
                qrImage: require('@/assets/img/user/qr1.jpg'),
                nameImage: require('@/assets/img/user/name.png')
            }
        }
    }
</script>

<style lang="scss" scoped>
.qr {

    &-top{
        background-color: lightpink;
        border-bottom: 1px solid #e6e6e6;
        height: 250px;
     }
    &-image{
        display: flex;
        justify-content: center;
        margin-top: -100px;
    }
    &-bottom{
        display: flex;
        justify-content: center;
    }

}
</style>