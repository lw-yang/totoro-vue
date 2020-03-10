<template>
    <div class="login">
        <nav-bar title="用 户 登 录" class="login-title"></nav-bar>

        <div class="login-icon">
            <svg aria-hidden="true" style="height: 60px; width: 60px">
                <use xlink:href="#icon-longmao"></use>
            </svg>
        </div>

        <van-form colon label-width="80px" label-align="center" @submit="onSubmit" class="login-form">
            <van-field
                    v-model="username"
                    name="username"
                    label="账 号"
                    placeholder="用户名/邮箱/手机号"
                    :rules="[{ required: true, message: '请填写账号' }]"
                    class="login-form-username"
            />
            <van-field
                    v-model="password"
                    type="password"
                    name="password"
                    label="密 码"
                    placeholder="请输入密码"
                    :rules="[{ required: true, message: '请填写密码' }]"
                    class="login-form-password"
            />
            <div style="margin: 20px;">
                <van-button round block type="info" native-type="submit">
                    登 录
                </van-button>
            </div>
        </van-form>
        <div class="login-help">
            <div class="login-help-forget-password" @click="toForgetPassword">
                忘记密码？
            </div>
            <div class="login-help-register" @click="toRegister">
                没有账号？立即注册
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Field } from 'vant';
    import { Form } from 'vant';
    import { Button } from 'vant';
    import { Cell, CellGroup } from 'vant';
    import NavBar from "../../components/NavBar";
    import {login} from "../../api/user";

    Vue.use(Cell);
    Vue.use(CellGroup);
    Vue.use(Button);
    Vue.use(Form);
    Vue.use(Field);

    export default {
        name: "register",
        components: {NavBar},
        data() {
            return {
                username: '',
                password: '',
            };
        },
        methods: {
            onSubmit(values) {
                console.log('submit', values);

                login(values).then(res => {
                    let data = res.data

                    this.$store.commit("setUser", data)
                    this.$store.commit("setToken", data.token)

                    window.localStorage.setItem("token", data.token)

                    this.$router.go(-1)
                }).catch(err => {
                    console.log(err)
                })
            },
            toForgetPassword(){
            },
            toRegister(){
                this.$router.push("/register")
            }
        }
    }
</script>

<style lang="scss" >
.login{

    &-title{
        .van-nav-bar__title{
            font-weight: bold;
        }
    }

    &-icon{
        margin-top: 50px;
        display: flex;
        justify-content: center;
    }

    &-form{
        margin-top: 40px;
    }

    &-help{
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        &-forget-password{
            padding-left: 30px;
            font-size: 10px;
        }
        &-register{
            padding-right: 30px;
            font-size: 10px;
        }

    }

}
</style>