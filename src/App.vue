<template>
    <div id="box">
        <!--头部-->
        <div class="header">
            <div class="header_center clear-fix">
                <img src="src/assets/images/kbpclogo.png" alt="" class="logo fl"/>
                <ul class="go fl">
                    <li>
                        <router-link to="/home">首页</router-link>
                    </li>
                    <li>
                        <router-link to="/download">下载</router-link>
                    </li>
                </ul>
                <img src="src/assets/images/kbpctxtnew.png" alt="" class="txt fr"/>
            </div>
        </div>
        <!--中间部分-->
        <div class="section">
            <router-view></router-view>
        </div>
        <!--底部-->
        <div class="footer">
            Copyright © 1998 - 2017 Tencent. All Rights Reserved
        </div>

    </div>
</template>

<script>

    //导出，默认
    export default {
        data() {
            return {}
        },
        methods: {},
        mounted: function () {
        }
    }

</script>

<style lang="scss">
    *,
    html,
    body {
        margin: 0px;
        padding: 0px;
    }

    .header {
        height: 60px;
        width: 100%;
        background: #f6f6f6;
        box-sizing: border-box;
        border-bottom: 4px solid #e94220;
        .header_center {
            width: 1000px;
            height: 56px;
            line-height: 56px;
            margin: 0 auto;
            .logo {
                display: block;
                width: 64px;
                height: 36px;
                margin: 10px 33px 0 0;
            }
            ul {
                height: 36px;
                margin: 0px;
                padding-top: 20px;
                li {
                    float: left;
                    width: 130px;
                    height: 22px;
                    line-height: 24px;
                    text-align: center;
                    border-left: 1px solid #e4e4e4;
                    border-right: 1px solid #e4e4e4;
                    a {
                        font-size: 20px;
                        color: #333;
                        &:hover {
                            text-decoration: none;
                        }
                    }
                    a.active {
                        /*color: #e94220;*/
                    }
                    .router-link-active {
                        color: #e94220;
                        text-decoration: none;
                    }
                }
                li:last-child {
                    border-left: 0px;
                    margin-left: -0.5px;
                }
            }
            .txt {
                display: block;
                width: 226px;
                height: 20px;
                margin-top: 20px;
            }
        }
    }

    .footer {
        height: 56px;
        line-height: 56px;
        text-align: center;
        background: #1b1b1b;
        color: #fff;
        font-size: 12px;
    }
</style>