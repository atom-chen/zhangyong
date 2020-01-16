/*
* name;
*/
module common {
    export class LoadingView extends DialogExt {
        bg: Laya.Image;
        logo: Laya.Image;
        tip: Laya.Label;
        //
        bar_bg: Laya.Image;
        bar_value: Laya.Image;
        bar_bg2: Laya.Image;
        bar_value2: Laya.Image;
        //
        lbl_progress: Laya.Label;
        lbl_info: Laya.Label;
        lbl_info2: Laya.Label;
        lbl_refreh: Laya.Label;
        box_bar: Laya.Box;
        constructor() {
            super();
            this.width = Laya.stage.width;
            this.height = Laya.stage.height;
            this.group = UIConst.login_group;

            let blackbg = new Laya.Image("preload/black.jpg");
            blackbg.width = this.width;
            blackbg.height = this.height;
            this.addChild(blackbg);

            //背景
            this.bg = new Laya.Image(SkinUtil.getSysMapSkin(ModuleConst.loading));
            this.bg.centerX = 0;
            this.bg.centerY = 0;
            //logo
            this.logo = new Laya.Image("preload/logo_da.png");
            // this.logo.centerX = 0;
            // this.logo.y = 70 + Launch.offsetY;
            this.logo.right = 10;
            this.logo.top = 10;

            //tip
            this.tip = new Laya.Label("首次加载时间较长，请耐心等待");
            this.tip.anchorX = 0.5;
            this.tip.x = this.width >> 1;
            this.tip.y = 1131 + Launch.offsetY;
            this.tip.color = ColorConst.BLACK;
            this.tip.fontSize = 23;

            //刷新
            this.lbl_refreh = new Laya.Label("点击刷新");
            this.lbl_refreh.x = 530 + Launch.offsetX;
            this.lbl_refreh.y = 1131 + Launch.offsetY;
            this.lbl_refreh.align = "center";
            this.lbl_refreh.color = ColorConst.GREEN;
            this.lbl_refreh.fontSize = 23;
            this.lbl_refreh.underline = true;
            this.lbl_refreh.once(Laya.Event.CLICK, this, () => {
                BingoSDK.gameRefresh();
            });

            // 批准文号：新广出审[2017]3428号 ISBN：978-7-7979-6890-4  出版服务单位：北京科海电子出版社  著作权人：福州天米互动游戏有限公司  著作权登记号：2016SR017541
 
            //新广出审[2017]3428 号；
            this.lbl_info = new Laya.Label("抵制不良游戏，拒绝盗版游戏。注意自我保护，谨防受骗上当。");
            this.lbl_info.centerX = 0;
            this.lbl_info.y = 1200 + Launch.offsetY;
            this.lbl_info.align = "center";
            this.lbl_info.color = ColorConst.BLACK;
            this.lbl_info.fontSize = 18;

            //网络游戏出版物号：ISBN 978-7-7979-6890-4 
            this.lbl_info2 = new Laya.Label("适度游戏益脑，沉迷游戏伤身。合理安排时间，享受健康生活。");
            this.lbl_info2.centerX = 0;
            this.lbl_info2.y = 1230 + Launch.offsetY;
            this.lbl_info2.align = "center";
            this.lbl_info2.color = ColorConst.BLACK;
            this.lbl_info2.fontSize = 18;


            this.bar_bg = new Laya.Image("preload/bar_bg.png");
            this.bar_value = new Laya.Image("preload/bar.png");
            this.bar_bg2 = new Laya.Image("preload/bar_bg.png");
            this.bar_value2 = new Laya.Image("preload/bar.png");
            this.lbl_progress = new Laya.Label("加载中......");
            //box
            this.box_bar = new Laya.Box();
            this.box_bar.x = 26 + Launch.offsetX;
            this.box_bar.y = 1046 + Launch.offsetY;
            this.box_bar.width = 668
            this.box_bar.height = 75;
            //
            this.bar_value.x = 27;
            this.bar_value.y = 5;
            this.bar_value2.x = 27;
            this.bar_value2.y = 50;
            this.bar_bg2.y=45;
            this.bar_value2.scaleX = 0;
            //
            this.lbl_progress.centerX = 0;
            this.lbl_progress.y = 1;
            this.lbl_progress.anchorX = 0.5;
            this.lbl_progress.align = "center";
            this.lbl_progress.color = ColorConst.ZONGSE;
            this.lbl_progress.fontSize = 22;
            //
            this.box_bar.addChildren(this.bar_bg, this.bar_value, this.lbl_progress,this.bar_bg2, this.bar_value2);

            this.addChild(this.bg);
            this.addChild(this.logo);
            this.addChild(this.tip);
            this.addChild(this.lbl_refreh);
            this.addChild(this.lbl_info);
            this.addChild(this.lbl_info2);
            this.addChild(this.box_bar);
        }

        public onOpened(): void {
            super.onOpened();
            this.setProgres2();
            this.lbl_progress.text = this.dataSource ? this.dataSource : LanMgr.getLan("加载中...", -1);
            this.bar_value.scaleX = 0;
        }

        /**
         * 设置进度条
         * @param value 
         */
        public setProgress(value: number): void {
            let sufix = this.dataSource ? this.dataSource : LanMgr.getLan("加载中...", -1)
            this.lbl_progress.text = sufix + Math.ceil(value * 100).toFixed(0) + "%";
            this.bar_value.scaleX = value;
        }

        private setProgres2():void
        {
            this.bar_value2.scaleX = 0;
            if(!this.parent)return;
            Laya.Tween.to(this.bar_value2,{scaleX: 1},2000,Laya.Ease.linearInOut,Laya.Handler.create(this,()=>{
                Laya.timer.frameOnce(10,this,()=>{
                    this.setProgres2();
                });
            }));
        }

        public onClosed() {
            super.onClosed();
            Laya.Tween.clearAll(this.bar_value2);
            this.bar_value2.scaleX = 0;
        }
    }
}