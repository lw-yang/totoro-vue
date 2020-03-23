<template>
    <div class="home">
        <div class="home-advertise">

            <van-search v-model="searchValue"
                        shape="round"
                        right-icon="scan"
                        placeholder="请输入搜索关键词"
                        background="linear-gradient(to bottom, #d81e06, #DF4835)"
            />

            <div class="home-advertise-tab">
                <van-tabs style="width: 85%" color="white" background="linear-gradient(to bottom, #DF4835, #E87E70)" :border="false" >
                    <van-tab v-for="item in tabCategory" :title="item.name" :key="item.id" animated swipeable>
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

        <home-category :home-category-list="homeCategoryList"></home-category>

        <daily-special :specialProductList="specialProductList"></daily-special>

        <daily-choice :dailyChoiceList="dailyChoiceList"></daily-choice>

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
    import category from "../assets/js/category";
    import HomeCategory from "../components/home/HomeCategory";
    import homeCategoryList from "../assets/js/home-category"
    import { Divider } from 'vant';
    import DailySpecial from "../components/home/DailySpecial";
    import DailyChoice from "../components/home/DailyChoice";
    import {listDailyChoice, listDailySpecial} from "../api/advertise";

    Vue.use(Divider);
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
            DailyChoice,
            DailySpecial,
            HomeCategory
        },
        data() {
            return{
                searchValue: '',
                tabCategory: [],
                swipeImages: [
                    require("../assets/img/category/category_banner.png"),
                    require("../assets/img/category/category_banner.png"),
                ],
                homeCategoryList: [],
                specialProductList: [],
                dailyChoiceList: []
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
                this.tabCategory.push({"name":"首页","id":"0"})
                for (let item of category){
                    this.tabCategory.push(item)
                }
                console.log(e)
            })
            listCategories("home").then(res => {
                this.homeCategoryList = res.data
            }).catch(e => {
                this.homeCategoryList = homeCategoryList
                console.log(e)
            })

            listDailySpecial().then(res => {
                this.specialProductList = res.data
            }).catch(e => {
                console.log(e)
            })

            listDailyChoice().then(res => {
                console.log(res.data)
                this.dailyChoiceList = res.data
            }).catch(e => {
                console.log(e)
            })
        }
    }
</script>

<style lang="scss">
.home{
    height: calc(100vh - 55px);
    overflow: auto;
    background-color: #f8f8f8;
    &::-webkit-scrollbar{
        display: none;
    }
    &-advertise{
        width: 100%;
        height: 237px;
        background-image: linear-gradient(to bottom, #d81e06, white);

        .van-search{
            padding-bottom: 0;
        }

        &-swipe{
            padding-left: 12px;
            padding-right: 12px;
            border-radius: 30px;

        }

        &-tab{
            width: 100%;
            display: flex;

            .van-tab{
                color: #F4F4F4;
                font-size: 13px;
            }
            .van-tab--active{
                font-weight: bold;
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

    .van-divider{
        margin: 8px 0;
    }
}
</style>
