/*
 * @Author: HuangGuoYong 
 * @Date: 2018-09-28 19:23:47 
 * @Last Modified by: HuangGuoYong
 * @Last Modified time: 2019-03-14 20:35:37
 */


module game {
    
    export class GuajiBottomView extends ui.guaji.GuajiBottomUI {
        private uiScene: Base2dSceneLayer;
        private _enter: boolean;
        constructor() {
            super();
            this.img_coinblock.mouseEnabled = false;
            this.box_bxeff.on(Laya.Event.CLICK, this, this.onClickBX);
            this.boxCoinClick.on(Laya.Event.CLICK, this, this.onClickBX);
            this.uiScene = new Base2dSceneLayer();
            // this.box_coineff.addChild(this.uiScene);
            this.addChild(this.uiScene);
            this.setScenePos();
        }

        public setScenePos(){
            this.uiScene.setPos(Launch.offsetX, Launch.offsetY + GuajiView.OffY);
        }

        public onExit(): void {
            this._enter = false;
            this._isOpenJT = false;
            this.lbTime.visible = false;
            this.pgTime.visible = false;
            this.box_effGuang.stop();
            this.anim_bomb.stop();
            this.anim_bomb.visible = false;
            Laya.timer.clearAll(this);
            if (this._coinEff) {
                this.uiScene.removeEffect(this._coinEff);
                this._coinEff = null;
            }
            this.removeLeftEff();
            this.stopBattleEff();
            this.uiScene.onExit();
        }

        public onEnter(): void {
            this._enter = true;
            this._isOpenJT = false;
            this._curCoinEffLv = 0;
            this.ani1.gotoAndStop(0);
            this.coinEff.gotoAndStop(0);
            this.box_coineff.visible = false;
            Laya.timer.loop(5000, this, this.updateCoinEff);
            this.updateCoinEff();
            this.box_effGuang.play(0, true, "normal");
            this.uiScene.onShow();
            this.updateInterval();
        }

        /** 更新定时器 */
        public updateInterval(): void {
            Laya.timer.clear(this, this.updateTime);
            // 挂机时间
            if (App.hero.lastGetAfkTime > 0) {
                this.lbTime.visible = true;
                this.pgTime.visible = true;
                Laya.timer.loop(61000, this, this.updateTime);
                this.updateTime();
            } else {
                this.lbTime.visible = false;
                this.pgTime.visible = false;
            }
        }

        /** 更新挂机时间 */
        private updateTime(): void {
            let time = App.serverTimeSecond - App.hero.lastGetAfkTime;
            time = time > 0 ? time : 0;
            let maxTime = GuajiModel.getInstance().getMaxOfflineTime();
            if (time >= maxTime) {
                this.lbTime.text = GameUtil.toCountdown(maxTime, "hh:mm");
                this.pgTime.value = 1;
                Laya.timer.clear(this, this.updateTime);
            } else {
                this.lbTime.text = GameUtil.toCountdown(time, "hh:mm");
                // 60秒之内进度空
                this.pgTime.value = time >= 60 ? (time / maxTime) : 0;
            }
        }

        private _isOpenJT: boolean;
        /** 宝箱打开静态动画 */
        public bxOpenJTEff(): void {
            if (this._isOpenJT) return;
            this._isOpenJT = true;
            this.box_effGuang.play(0, true, "openJT");
        }
        /** 宝箱打开动态动画 */
        public bxOpenDTEff(): void {
            this._isOpenJT = false;
            this.box_effGuang.play(0, false, "openDT");
            this.anim_bomb.visible = true;
            this.anim_bomb.play(0, false);
            Laya.timer.frameOnce(10, this, this.openDTEnd);
        }
        private openDTEnd(): void {
            this.box_effGuang.play(0, true, "normal");
        }

        /** 金币图片 */
        public static CoinEffSkinArr: string[] = ["", "guaji/jinbi1.png", "guaji/jinbi2.png", "guaji/jinbi3.png"];
        /** 金币图片宽高 */
        public static SizeAry: any[] = [[0, 0], [313, 115], [549, 164], [689, 194]];
        private _curCoinEffLv: number = 0;
        private updateCoinEff(force: boolean = false): void {
            if (this.box_coineff.visible && this.coinEff.isPlaying) return;
            let lv: number = this.getCoinEffLv();
            this.box_coineff1.visible = false;
            if (!force && this._curCoinEffLv == lv) return;
            this._curCoinEffLv = lv;
            this.box_coineff.visible = lv > 0;
            this.ani1.gotoAndStop(0);
            this.img_coinblock.skin = GuajiBottomView.CoinEffSkinArr[lv];
            let sizeAry = GuajiBottomView.SizeAry[lv] || [0, 0];
            this.boxCoinClick.width = sizeAry[0];
            this.boxCoinClick.height = sizeAry[1] - 30;
            Laya.timer.once(400, this, () => {
                this.playCoinGuangEff(this.box_coineff.visible, lv);
            });
        }

        private getCoinEffLv(): number {
            if (App.hero.lastGetAfkTime == 0) return 0;
            let time = App.serverTimeSecond - App.hero.lastGetAfkTime;
            if (time < 300) {
                return 0;
            }
            if (time < 600) {
                return 1;
            }
            if (time < 1800) {
                return 2;
            }
            return 3;
        }


        /** 点击宝箱 */
        private onClickBX(): void {
            //判断挂机时间于领取箱子的最小时间
            if (!GuajiModel.getInstance().isCanReceiveBX()) {
                showToast(LanMgr.getLan('', 10047));
                return;
            }
            dispatchEvt(new GuajiEvent(GuajiEvent.LINGQU_GUAJI_JIANGLI));
        }

        /** 播放特效：领取挂机奖励成功 */
        public afterRewardSucc(): void {
            if (this.box_coineff.visible) {
                if (this.parent) {
                    this.parent.addChild(this.box_coineff1);
                    this.box_coineff1.y = 107 + this.y;
                }
                this.box_coineff1.visible = true;
                this.coinEff.play(1, false);
                this.coinEff.once(Laya.Event.COMPLETE, this, this.updateCoinEff);
                Laya.timer.once(300, this, () => {
                    AudioMgr.playSound("sound/ui_gold.mp3");
                });
                this.ani1.play(1, false);
                this.addLeftEff();
                Laya.timer.once(1000, this, () => {
                    this.removeLeftEff();
                });
                this.bxOpenDTEff();
            }
        }

        private _coinEff: tl3d.CombineParticle
        private playCoinGuangEff(play: boolean, lv: number): void {
            if (lv >= 3) {
                // let targetPos = this.lbTime.localToGlobal(new Laya.Point(0, 0));
                // let pos = this.uiScene.get3dPos(targetPos.x, targetPos.y - 30);
                let v3 = this.uiScene.get3dPos(360, 930)
                this.uiScene.addEffect(this, 1000008, v3, 4, 30, ($particle: tl3d.CombineParticle) => {
                    if (this._coinEff) {
                        this.uiScene.removeEffect(this._coinEff);
                    }
                    this._coinEff = $particle;
                });
            } else {
                if (this._coinEff || !this._enter) {
                    this.uiScene.removeEffect(this._coinEff);
                    this._coinEff = null;
                }
            }
        }

        //添加左边特效
        private _leftEff: any;
        private _hasLeftEff: boolean = false;
        private addLeftEff(): void {
            if (this._hasLeftEff) return;
            this._hasLeftEff = true;
            let v3 = this.uiScene.get3dPos(360, 990)
            this.uiScene.addEffect(this, 10000025, v3, 4, 0, ($particle) => {
                this._leftEff = $particle;
                if (!this._hasLeftEff) {
                    this.removeLeftEff();
                }
            });
        }

        //移除左边特效
        private removeLeftEff(): void {
            this._hasLeftEff = false;
            if (this._leftEff) {
                this.uiScene.removeEffect(this._leftEff);
                this._leftEff = null;
            }
        }

        private _battleEff
        /**
         * 播放挑战boss特效
         */
        public playBattleEff(): void {
            // let targetPos = this.btn_onplay.localToGlobal(new Laya.Point(0, 0));
            // let pos = this.uiScene.get3dPos(targetPos.x + (this.btn_onplay.width >> 1), targetPos.y + (this.btn_onplay.height >> 1));
            let v3 = this.uiScene.get3dPos(360, 990)
            this.uiScene.addEffect(this, 10000026, v3, 5, 0, ($particle) => {
                if (this._battleEff) {
                    this.uiScene.removeEffect($particle);
                    return;
                }
                this._battleEff = $particle;
            });
        }

        public stopBattleEff() {
            if (this._battleEff) {
                this.uiScene.removeEffect(this._battleEff);
                this._battleEff = null;
            }
        }



    }
}