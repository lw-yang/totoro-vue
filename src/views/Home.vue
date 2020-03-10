<template>
    <div class="home">
        <div class="home-advertise">
            <van-notice-bar mode="link" click="noticeBar" style="height: 30px; font-size: 12px">
                {{noticeText}}
            </van-notice-bar>

            <van-search v-model="searchValue"
                        shape="round"
                        right-icon="scan"
                        placeholder="请输入搜索关键词"
                        background="linear-gradient(to right, #d81e06, #e98f36)"
            />

            <div class="home-advertise-tab">
                <van-tabs style="width: 85%" color="white" background="linear-gradient(to right, #d81e06, #e87e37)" :border="false" >
                    <van-tab v-for="item in tabCategory" :title="item.name" :key="item.id" animated swipeable>
                        <router-view/>
                    </van-tab>
                </van-tabs>
                <div class="home-advertise-tab-more" @click="toCategory">
                    <van-icon name="bars" size="17"/>分类
                </div>
            </div>


            <div class="home-advertise-swipe">
                <van-swipe :autoplay="3000" :height="150">
                    <van-swipe-item v-for="(image, index) in swipeImages" :key="index">
                        <van-image
                                height="150"
                                :src="image"
                        />
                    </van-swipe-item>
                </van-swipe>
            </div>

        </div>


    </div>
</template>

<script>
    import Vue from 'vue';
    import { NoticeBar } from 'vant';
    import { Search } from 'vant';
    import { Swipe, SwipeItem } from 'vant';
    import { Image } from 'vant';
    import { Tab, Tabs } from 'vant';
    import {listCategories} from "../api/category";

    Vue.use(Tab);
    Vue.use(Tabs);
    Vue.use(Image);
    Vue.use(Swipe);
    Vue.use(SwipeItem);
    Vue.use(Search);
    Vue.use(NoticeBar);

    export default {
        name: 'Home',
        components: {
        },
        data() {
            return{
                searchValue: '',
                noticeText: "Totoro商城-Totoro商城-Totoro商城-Totoro商城-Totoro商城-Totoro商城",
                tabCategory: [],
                swipeImages: [
                    'https://img.yzcdn.cn/vant/apple-1.jpg',
                    'https://img.yzcdn.cn/vant/cat.jpeg'
                ]
            }
        },
        methods: {
            noticeBar(){

            },
            toCategory(){
                this.$router.replace("/category")
            }
        },
        created() {
            listCategories().then(res => {
                this.tabCategory.push({"name":"首页","id":"0"})
                for (let item of res.data){
                    this.tabCategory.push(item)
                }
            }).catch(e => {
                console.log(e)
            })
        }
    }
</script>

<style lang="scss">
.home{
    height: 500px;
    &-advertise{
        width: 100%;
        height: 240px;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        background-image: linear-gradient(to right, #d81e06, #e98f36);

        &-swipe{
            padding-left: 12px;
            padding-right: 12px;
        }

        &-tab{
            width: 100%;
            display: flex;

            .van-tab{
                color: #F4F4F4;
                font-size: 13px;
            }
            .van-tab--active{
                font-size: 14px;
            }

            &-more{
                color: #F4F4F4;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 14px;
                padding-left: 4px;
            }
        }
    }
}
</style>
