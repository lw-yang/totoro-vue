<template>
    <div class="sec">
        <div class="sec-title">
            <div class="sec-title-text">Totoro秒杀</div>
            <div class="sec-title-time">
                <van-count-down :time="time" millisecond format="HH:mm:ss:SS"></van-count-down>
            </div>
        </div>
        <div class="sec-product" >
            <div class="sec-product-item" v-for="item in secProductList" :key="item.id">
                <div class="sec-product-item-image">
                    <van-image
                            width="80"
                            height="80"
                            :src="item.image"
                    />
                </div>
                <div class="sec-product-item-discount-price">￥{{item.discountPrice}}</div>
                <div class="sec-product-item-price">￥{{item.price}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { CountDown } from 'vant';
    import { Image } from 'vant';

    Vue.use(Image);
    Vue.use(CountDown);
    export default {
        name: "secKill",
        props: {
            secProductList: Array
        },
        data() {
            return {
                time: 30 * 60 * 60 * 1000,
            };
        }
    }
</script>

<style lang="scss">
.sec{
    margin: 20px 10px 10px 10px;
    border: 1px solid #ededed;
    border-radius: 10px;
    background-color: white;

    &-title{
        display: flex;
        align-items: center;
        height: 30px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        background-color: #edd1ab;

        &-text{
            font-weight: bold;
            font-size: 12px;
            padding-left: 10px;
            padding-right: 10px;
        }

        &-time{
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid #fa2d2e;
            border-radius: 10px;
            height: 15px;
            width: 70px;

            .van-count-down{
                color: #d81e06;
                font-size: 11px;
            }
        }
    }

    &-product{
        display: flex;
        overflow: auto;

        &::-webkit-scrollbar{
            display: none;
        }
        &-item{
            padding: 10px 0 10px 10px;

            &-image{

            }
            &-price{
                color: #8a8a8a;
                text-decoration: line-through;
                font-size: 11px;
                display: flex;
                justify-content: center;
            }
            &-discount-price{
                font-size: 11px;
                display: flex;
                justify-content: center;
            }
        }
    }
}
</style>