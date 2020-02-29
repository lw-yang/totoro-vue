<template>
    <div class="register">
        <nav-bar :title="title" class="register-title"></nav-bar>
        <van-form colon label-width="70px" label-align="center" @submit="onSubmit" class="register-form">
            <van-field
                    v-model="username"
                    name="username"
                    label="账 号"
                    placeholder="用户名/邮箱/手机号"
                    :rules="[{ required: true, message: '请填写账号' }]"
                    class="register-form-username"
            />
            <van-field
                    v-model="password"
                    type="password"
                    name="password"
                    label="密 码"
                    placeholder="请输入密码"
                    :rules="[{ required: true, message: '请填写密码' }]"
                    class="register-form-password"
            />
            <van-field
                    v-model="rPassword"
                    type="password"
                    name="rPassword"
                    label="密 码"
                    placeholder="请再次输入密码"
                    :rules="[{ validator, message: '两次输入密码不一致'}]"
                    class="register-form-password"
            />
            <div style="margin: 20px;">
                <van-button round block type="info" native-type="submit">
                    注 册
                </van-button>
            </div>
        </van-form>

    </div>
</template>

<script>
    import Vue from 'vue';
    import { Field } from 'vant';
    import { Cell, CellGroup } from 'vant';
    import NavBar from "../../components/NavBar";

    Vue.use(Cell);
    Vue.use(CellGroup);
    Vue.use(Field);

    export default {
        name: "register",
        components: {NavBar},
        data() {
            return {
                username: '',
                password: '123',
                rPassword: '123',
                title: "用户注册"
            }
        },
        methods: {
            onSubmit(values){
                console.log('submit', values);
            },
            validator(rPassword){
                return this.password === rPassword
            }
        }
    }
</script>

<style lang="scss" >
.register{
    &-title{
        .van-nav-bar__title{
            font-weight: bold;
        }
    }

    &-form{
        margin-top: 150px;
    }
}
</style>