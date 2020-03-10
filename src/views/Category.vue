<template>
    <div class="category">
        <div class="category-search">
            <van-search
                    v-model="searchValue"
                    show-action
                    shape="round"
                    placeholder="请输入搜索关键词"
                    @search="onSearch"
            >
                <div slot="action" @click="onSearch">搜索</div>
            </van-search>
        </div>
        <div class="category-container">
            <div class="category-container-sidebar">
                <van-sidebar  v-model="activeKey" @change="onChange">
                    <van-sidebar-item v-for="item in categoryList" :key="item.id" :title="item.name"/>
                </van-sidebar>
            </div>
            <div class="category-container-main">
                <div class="category-container-main-banner">
                    <van-image
                            height="145"
                            :src="bannerImage"
                    />
                </div>
                <div class="category-container-main-sub">
                    <div class="category-container-main-sub-title">
                        热门分类
                    </div>
                    <div class="category-container-main-sub-category">
                        <van-grid :column-num="3" square clickable>
                            <van-grid-item
                                    v-for="item in subList"
                                    :key="item.id"
                                    :text="item.name">
                                <svg slot="icon" class="icon" aria-hidden="true" font-size="40px">
                                    <use :xlink:href="'#'+item.img"></use>
                                </svg>
                            </van-grid-item>
                        </van-grid>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import Vue from 'vue';
    import { Sidebar, SidebarItem } from 'vant';
    import { Search } from 'vant';
    import {listCategories} from "../api/category";
    import { Grid, GridItem } from 'vant';

    Vue.use(Grid);
    Vue.use(GridItem);
    Vue.use(Search);
    Vue.use(Sidebar);
    Vue.use(SidebarItem);

    export default {
        name: "Category",
        data() {
            return {
                activeKey: 0,
                searchValue: '',
                categoryList: [{"name":"推荐分类","id":"0"}],
                subList: [],
                bannerImage: require("../assets/img/category/category_banner.png")
            };
        },
        methods: {
            onChange(index) {
                this.activeKey = index
                if (index === 0){
                    listCategories("recommend").then(res => {
                        this.subList = res.data
                    }).catch(e => {
                        console.log(e)
                    })
                    return
                }

                let parentId = this.categoryList[index].id
                listCategories(null, parentId).then(res => {
                    this.subList = res.data
                }).catch(e => {
                    console.log(e)
                })
            },
            onSearch(val) {
                console.log(val)
            },
        },
        created() {
            listCategories().then(res => {
                for (let item of res.data){
                    this.categoryList.push(item)
                }
            }).catch(e => {
                console.log(e)
            })
            listCategories("recommend").then(res => {
                this.subList = res.data
            }).catch(e => {
                console.log(e)
            })
        }
    }
</script>

<style lang="scss">
.category{

    &-search{
    }

    &-container{
        display: flex;

        &-sidebar{
            width: 118px;
            height:  calc(100vh - 109px);
            overflow: scroll;

            &::-webkit-scrollbar{
                display: none;
            }

            .van-sidebar-item{
                font-size: 13px;
                text-align: center;
                background-color: #F4F4F4;
            }

            .van-sidebar-item--select{
                background-color: white;
                font-weight: bold;
                font-size: 14px;
            }
        }


        &-main{
            margin-left: 10px;
            display: flex;
            flex-direction: column;
            width: 100%;
            padding-right: 10px;

            &-banner{
                height: 145px;
                width: 100%;
            }
            &-sub{
                margin-top: 10px;

                &-title{
                    line-height: 30px;
                    height: 30px;
                    padding-left: 10px;
                    font-size: 13px;
                    color: #8a8a8a;
                    font-weight: bold;
                }
                &-category{
                    height:  calc(100vh - 290px);
                    overflow: scroll;

                    &::-webkit-scrollbar{
                        display: none;
                    }

                    .van-grid-item__text{
                        padding-top: 10px;
                    }
                }
            }
        }
    }
}
</style>