<!--创建首页模板-->
<template>
	<div class="home">
		<div class="home_top">
			<ul class="bgimg">
				<li class="imgbox1 active"></li>
				<li class="imgbox2"></li>
				<li class="imgbox3"></li>
				<li class="imgbox4"></li>
				<li class="imgbox5"></li>
				<li class="imgbox6"></li>
			</ul>
			<ul class="btnimg clear-fix">
				<li>
					<img src="src/assets/images/angelbabynew.jpg" alt="" />
					<span class="mask active"></span>
					<span class="border active"></span>
				</li>
				<li>
					<img src="src/assets/images/tfboysnew.jpg" alt="" />
					<span class="mask"></span>
					<span class="border"></span>
				</li>
				<li>
					<img src="src/assets/images/fbbnew.jpg" alt="" />
					<span class="mask"></span>
					<span class="border"></span>
				</li>
				<li>
					<img src="src/assets/images/wyfnew.jpg" alt="" />
					<span class="mask"></span>
					<span class="border"></span>
				</li>
				<li>
					<img src="src/assets/images/snh48new.jpg" alt="" />
					<span class="mask"></span>
					<span class="border"></span>
				</li>
				<li>
					<img src="src/assets/images/xzqnew.jpg" alt="" />
					<span class="mask"></span>
					<span class="border"></span>
				</li>
			</ul>
			<img src="src/assets/images/phone.png" alt="" class="phoneimg" />
			<a href="javascript" class="btn_download"></a>
			<div class="smdownload">
				<p>扫码下载</p>
				<img src="src/assets/images/kbewm20170310.jpg" alt="" />
			</div>
		</div>
		<div class="home_center">
			<ul class="clear-fix">
				<li><img src="src/assets/images/kuaibaonew.png" alt="" /></li>
				<li><img src="src/assets/images/videonew.png" alt="" /></li>
				<li style="padding-left: 26px;"><img src="src/assets/images/zhibonew.png" alt="" /></li>
				<li style="margin-left: -26px;"><img src="src/assets/images/zhuantinew.png" alt="" /></li>
			</ul>
		</div>
		<div class="home_bottom">
			<ul>
				<li>
					<a href="javascript:;" class="clear-fix">
						<i class="num1 fl"></i>
						<div class="fl">
							<p>腾讯新闻</p>
							<span>NEWS</span>
						</div>
					</a>
				</li>
				<li>
					<a href="javascript:;" class="clear-fix">
						<i class="num2 fl"></i>
						<div class="fl">
							<p>腾讯视频</p>
							<span>QQLIVE</span>
						</div>
					</a>
				</li>
				<li>
					<a href="javascript:;" class="clear-fix">
						<i class="num3 fl"></i>
						<div class="fl">
							<p>自选股</p>
							<span>PORTFOLIO</span>
						</div>
					</a>
				</li>
				<li>
					<a href="javascript:;" class="clear-fix">
						<i class="num4 fl"></i>
						<div class="fl">
							<p>腾讯体育</p>
							<span>SPORTS</span>
						</div>
					</a>
				</li>
				<li>
					<a href="javascript:;" class="clear-fix">
						<i class="num5 fl"></i>
						<div class="fl">
							<p>购物车</p>
							<span>CARS</span>
						</div>
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	//引入
	import { myhome} from '../assets/public/home.js' //注意路径

	//导出，默认
	export default {
		data() {
			return {}
		},
		methods: {},
		mounted: function() {
			myhome()
		}
	}
</script>
</script>

<style lang="scss">
	.home {
		width: 100%;
		.home_top {
			.bgimg {
				width: 100%;
				height: 494px;
				position: relative;
				top: 0px;
				left: 0px;
				li {
					width: 100%;
					height: 494px;
					display: none;
					position: absolute;
					left: 0px;
					top: 0px;
				}
				li.active {
					display: block;
				}
				.imgbox1 {
					background: url("../assets/images/abimg.jpg") center center no-repeat;
				}
				.imgbox2 {
					background: url("../assets/images/tfboysimg.jpg") center center no-repeat;
				}
				.imgbox3 {
					background: url("../assets/images/fbbimg.jpg") center center no-repeat;
				}
				.imgbox4 {
					background: url("../assets/images/wyfimgnew.jpg") center center no-repeat;
				}
				.imgbox5 {
					background: url("../assets/images/snh48img.jpg") center center no-repeat;
				}
				.imgbox6 {
					background: url("../assets/images/xzqimg.jpg") center center no-repeat;
				}
			}
			.btnimg {
				position: absolute;
				left: 177px;
				top: 490px;
				li {
					float: left;
					width: 80px;
					height: 46px;
					margin-right: 5px;
					position: relative;
					cursor: pointer;
					.mask {
						width: 80px;
						height: 46px;
						background-color: #000;
						opacity: 0.3;
						position: absolute;
						top: 0px;
						left: 0px;
					}
					.mask.active {
						opacity: 0;
					}
					.border {
						width: 80px;
						height: 46px;
						border: 2px solid #ffd308;
						position: absolute;
						top: -2px;
						left: -2px;
						display: none;
					}
					.border.active {
						display: block;
					}
				}
			}
			.phoneimg {
				width: 167px;
				height: 340px;
				position: absolute;
				top: 167px;
				left: 959px;
			}
			.btn_download {
				display: block;
				width: 220px;
				height: 70px;
				background: url("../assets/images/btn_downloadnew.png") no-repeat;
				background-position: 0 0;
				position: absolute;
				top: 437px;
				left: 933px;
			}
			.smdownload {
				position: absolute;
				top: 396px;
				left: 1175px;
				p {
					width: 89px;
					color: white;
					padding-bottom: 11px;
					font-size: 16px;
					text-align: center;
				}
				img {
					width: 90px;
					height: 90px;
				}
			}
		}
		.home_center {
			height: 513px;
			background: #f6f6f6;
			ul {
				width: 1000px;
				margin: 0 auto;
				padding-top: 60px;
				li {
					float: left;
					img {
						width: 250px;
						height: 434px;
						transition: 0.8s all ease;
					}
				}
			}
		}
		.home_bottom {
			height: 140px;
			background: #282828;
			ul {
				width: 840px;
				height: 140px;
				margin: 0 auto;
				padding-left: 160px;
				background: url("../assets/images/recommand.png") -301px 0 no-repeat;
				li {
					width: 164px;
					padding: 40px 0px;
					float: left;
					a {
						display: block;
						width: 164px;
						height: 100%;
						color: white;
					}
					i {
						display: block;
						width: 60px;
						height: 60px;
						background: url("../assets/images/recommand.png") no-repeat;
					}
					p {
						font-size: 16px;
						line-height: 32px;
						padding-left: 10px;
					}
					span {
						line-height: 20px;
						font-size: 14px;
						padding-left: 10px;
					}
					.num1 {
						background-position: -0px 0;
					}
					.num2 {
						background-position: -60px 0;
					}
					.num3 {
						background-position: -120px 0;
					}
					.num4 {
						background-position: -180px 0;
					}
					.num5 {
						background: url("../assets/images/GCT_14.png")
					}
				}
			}
		}
	}
</style>