<template>
    <div class="home-category">
        <van-grid :column-num="5" clickable :border="false">
            <van-grid-item
                    v-for="item in homeCategoryList"
                    :key="item.id"
                    :text="item.name">
                <svg slot="icon" class="icon" aria-hidden="true" font-size="30px">
                    <use :xlink:href="'#'+item.img"></use>
                </svg>
            </van-grid-item>
        </van-grid>
    </div>

</template>

<script>
    import Vue from 'vue';
    import { Grid, GridItem } from 'vant';

    Vue.use(Grid);
    Vue.use(GridItem);
    export default {
        name: "HomeCategory",
        props: {
            homeCategoryList: Array
        }
    }
</script>

<style lang="scss">
.home-category{
    .van-grid-item__content{
        padding-bottom: 2px;
    }
    .van-grid-item__icon-wrapper{
        background-image: linear-gradient(to bottom right, #fbecc0, #ffbccb);
        height: 30px;
        width: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        /*border: 1px solid #f3d994;*/
        border-radius: 50%;
    }
    .van-grid-item__text{
        margin-top: 5px;
    }
}
</style>