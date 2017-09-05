<!--创建下载页模板-->
<template>
    <div class="download">
        <div class="download_top">
            <ul class="clear-fix">
                <li class="num11">
                    <a href="https://itunes.apple.com/cn/app/kuai-bao/id996866372" class="gratis"></a>
                    <p>在iPhone里的appstore中搜&nbsp&nbsp 索"<span> 快报 </span>"亦可完成下载。</p>
                </li>
                <li class="num22">
                    <img src="src/assets/images/kbewm20170310.jpg" alt=""/>
                    <p>用微信" 扫一扫  "或专业二维码应用扫描，即可下载。</p>
                </li>
                <li class="num33">
                    <a href="#" class="native"></a>
                    <p>将&nbsp&nbsp"<span>快报</span>"&nbsp&nbsp安装包下载到您的电脑，然后通过数据线安装到您的手机。</p>
                </li>
            </ul>
        </div>
        <div class="download_bottom clear-fix">
            <i class="mobile fl"></i>
            <div class="browser fl">
                <p>手机浏览器</p>
                <div>手机浏览器请访问
                    <a href="">http://cnews.qq.com/m</a>,可直接下载快报。
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    //导出，默认
    export default {
        data() {
            return {}
        }
    }
</script>

<style lang="scss">
    .download {
        width: 100%;
        .download_top {
            width: 100%;
            height: 490px;
            background: url("../assets/images/downloadbg.jpg") center no-repeat;
            ul {
                width: 1000px;
                height: 329px;
                margin: 0 auto;
                padding-top: 160px;
                background: url("../assets/images/downbg.png") no-repeat;
                li {
                    width: 269px;
                    height: 209px;
                    padding: 70px 23px 0;
                    margin-left: 27.5px;
                    float: left;
                    p {
                        padding: 14px 6px 0 8px;
                        font-size: 18px;
                        line-height: 26px;
                        color: #282828;
                        span {
                            color: #6eb31c;
                        }
                    }
                    a {
                        display: block;
                        width: 270px;
                        height: 80px;
                        background-position: 0 0px;
                    }
                    .gratis {
                        background: url("../assets/images/iphonedownload.png") no-repeat;
                    }
                    .native {
                        background: url("../assets/images/androiddownload.png") no-repeat;
                    }
                }
                .num11 {
                    margin-left: 0px;
                    span {
                        color: #e94220;
                    }
                }
                .num22 {
                    width: 235px;
                    padding: 25px 40px 0;
                    img {
                        width: 93px;
                        height: 93px;
                        margin-left: 74px;
                    }
                    p {
                        padding-top: 40px;
                    }
                }
            }
        }
        .download_bottom {
            height: 140px;
            background: #f6f6f6;
            padding: 32px 0 0 443px;
            .mobile {
                display: block;
                width: 92px;
                height: 92px;
                background: url("../assets/images/down_btns.png");
                background-position: 0 -161px;
            }
            .browser {
                color: #282828;
                font-size: 12px;
                padding: 15px 0 0 15px;
                p {
                    color: #d0ba8b;
                    font-size: 24px;
                }
                div {
                    margin-top: 10px;
                    font-family: "\u5b8b\u4f53", SimSun;
                    a {
                        color: #e94220;
                    }
                }
            }
        }
    }
</style>