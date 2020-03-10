<template>
    <div class="history">
        <div class="history-text">
            <div class="history-text-title">我的足迹</div>
            <div class="history-text-more" @click="more">
                更多
                <van-icon name="arrow" size="" color="#8a8a8a"/>
            </div>
        </div>
        <van-image
                width="70"
                height="70"
                v-for="item in historyList"
                :key="item.name"
                :src="item.src"
                class="history-image"
                @click="productInfo(item.link)"
        />
    </div>
</template>

<script>
    export default {
        name: "BrowseHistory",
        props: {
            historyList: Array
        },
        methods: {
            productInfo(link){
                this.$router.push(link)
            },
            more(){
                console.log("more")
            }
        }
    }
</script>

<style lang="scss" scoped>
.history{
    margin-top: 5px;
    padding-bottom: 5px;
    background-color: white;
    /*height: 110px;*/
    &-text{
        display: flex;
        justify-content: space-between;

        &-title{
            color: #8a8a8a;
            font-size: 13px;
            padding-left: 10px;
            padding-top: 5px;
            padding-bottom: 5px;
        }
        &-more{
            color: #8a8a8a;
            font-size: 13px;
            padding-right: 10px;
            padding-top: 5px;
            padding-bottom: 5px;
            display: flex;
            align-items: center;
        }
    }

    &-image{
        margin-left: 10px;
    }
}
</style>