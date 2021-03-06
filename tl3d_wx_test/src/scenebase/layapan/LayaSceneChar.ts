/**
* name 
*/
module layapan {
    import Display3DSprite = tl3d.Display3DSprite;
    import BloodManager = tl3d.BloodManager;
    import CharNameMeshVo = tl3d.CharNameMeshVo;
    import BloodLineMeshVo = tl3d.BloodLineMeshVo;
    import Display3D = tl3d.Display3D
    import Skill = tl3d.Skill
    import ProgrmaManager = tl3d.ProgrmaManager
    import Vector3D = tl3d.Vector3D
    import Vector2D = tl3d.Vector2D
    import Scene_data = tl3d.Scene_data
    import MathUtil = tl3d.MathUtil
    import MathClass = tl3d.MathClass
    import TestTriangle = tl3d.TestTriangle
    import LineDisplayShader = tl3d.LineDisplayShader
    import LineDisplaySprite = tl3d.LineDisplaySprite
    import Display3dMovie = tl3d.Display3dMovie
    import CombineParticle = tl3d.CombineParticle
    import ShadowManager = tl3d.ShadowManager
    import CharAction = tl3d.CharAction
    import Matrix3D = tl3d.Matrix3D



    export class LayaSceneChar extends LayaSceneBaseChar {
        // 血条颜色 对应素材 res_3d\ui\load\blood.png
        static BLOOD_COLOR_HP = 0;
        static BLOOD_COLOR_ANGER = 1;

        public skillitem: Array<tl3d.Skill>;//存放着角色的技能;

        public isMount: boolean = false;

        public static Defaul_Man_Avatar: number = 2002//男
        public static Defaul_WoMan_Avater: number = 2012//女

        public static MESH: string = "mesh";
        public static WEAPON_PART: string = "weapon";
        public static WEAPON_DEFAULT_SLOT: string = "w_01";
        public static MOUNT_SLOT: string = "mount_01";
        public static WING_SLOT: string = "wing_01";
        public static SEL_PART: string = "select";
        public static QUEST_ICON: string = "questicon";
        public static NONE_SLOT: string = "none";

        protected _px: number = 0;
        protected _py: number = 0;
        protected _pz: number = 0;
        private _pRotationY: number = 0;
        toRotationY: number = 0;
        private _pScale: number = 1;

        tittleHeight: number = 50;

        private _optimization: boolean = false;//当优化为true的时候 不显示



        constructor() {
            super();
            // this.shadow = true;
            this.skillitem = new Array();
            // this._bloodColor = LayaSceneChar.BLOOD_COLOR_HP;
            this._angerColor = LayaSceneChar.BLOOD_COLOR_ANGER;
        }


        /**强制角度 */
        set forceRotationY(val: number) {
            this.pRotationY = val;
            this.rotationY = val;
            this.toRotationY = val;
        }

        get pRotationY(): number {
            return this._pRotationY;
        }
        set pRotationY(val: number) {
            this._pRotationY = val;
            if (this.isMount) {
                this._mountChar.rotationY = val;
            } else {
                this.rotationY = val;
            }
        }

        get pScale(): number {
            return this._pScale;
        }
        set pScale(v: number) {
            this._pScale = v;
            this._mountChar && (this._mountChar.scale = v);
            this._wingDisplay && (this._wingDisplay.scale = v);
            this.scale = v;
            if (this._skinMesh) {
                this.tittleHeight = this._skinMesh.tittleHeight * v;
            }
        }


        protected _mountChar: LayaSceneBaseChar;

        setMount(v: string): boolean {
            this.isMount = (v && v.length != 0);
            if (this.isMount) {
                if (!this._mountChar) {
                    this._mountChar = new LayaSceneBaseChar();
                    this._mountChar.scale = this._pScale;
                }
                this._mountChar.setRoleUrl(getRoleUrl(v));
                this.setBind(this._mountChar, LayaSceneChar.MOUNT_SLOT);
                this._mountChar._scene = this._scene
                this._scene && this._scene.addMovieDisplay(this._mountChar);
            }
            else {
                this.setBind(null, null);
                if (this._mountChar) {
                    this._mountChar = null;
                }
            }
            return this.isMount;
        }

        private _wingDisplay: LayaSceneBaseChar;

        public setWing(v: string): void {
            if (v && v.length) {
                if (!this._wingDisplay) {
                    this._wingDisplay = new LayaSceneBaseChar();
                    this._wingDisplay.scale = this._pScale;
                }
                this._wingDisplay.setRoleUrl(getRoleUrl(v));
                this._wingDisplay.setBind(this, LayaSceneChar.WING_SLOT);
                this._wingDisplay._scene = this._scene
                this._scene && this._scene.addMovieDisplay(this._wingDisplay);
            }
            else {
                if (this._wingDisplay) {
                    this._wingDisplay.setBind(null, null);
                    //this._wingDisplay.removeSelf();
                    this._wingDisplay = null;
                }
            }
        }


        private _weaponNum: number = -1;
        setWeapon(num: number): void {
            if (this._weaponNum == num) {
                return;
            }
            this._weaponNum = num;
            if (num <= 0) {//移除武器
                this.removePart(LayaSceneChar.WEAPON_PART);
            } else {
                this.setWeaponByAvatar(this._weaponNum);
            }
        }

        setWeaponByAvatar(avatar: number, $suffix: string = ""): void {
            this.addPart(LayaSceneChar.WEAPON_PART, LayaSceneChar.WEAPON_DEFAULT_SLOT, this.getSceneCharWeaponUrl(avatar, $suffix));
        }

        protected getSceneCharAvatarUrl(num: number): string {
            var $tempNum: string = String(num)
            if (num == 0) {
                //console.log("衣服为0")
                throw new Error("衣服为getSceneCharAvatarUrl");
            }
            var $url: string = getRoleUrl($tempNum);
            return $url
        }

        onMeshLoaded(): void {
            if (this._skinMesh) {
                this.tittleHeight = this._skinMesh.tittleHeight * this._pScale;
            }
        }

        /**
         * 播放动作
         * @param action 
         * @param completeState 0：重复播放 1：播放一次停止 2：播放完回到stand动作
         * @param needFollow 
         */
        play($action: string, $completeState: number = 0, needFollow: boolean = true,cb:Function = null): boolean {
            if (this.isMount) {
                this._mountChar.visible = Boolean($action != CharAction.JUMP)
                if ($action == CharAction.STANAD) {
                    super.play(CharAction.STAND_MOUNT);
                } else if ($action == CharAction.WALK) {
                    super.play(CharAction.WALK_MOUNT);
                } else {
                    if (this._mountChar.visible) {
                        super.play(CharAction.STAND_MOUNT);
                    } else {
                        super.play(CharAction.JUMP);
                    }
                }
                return this._mountChar.play($action, $completeState, needFollow,cb);
            } else {
                return super.play($action, $completeState, needFollow,cb)
            }
        }

        getCurrentAction(): string {
            if (this.isMount) {
                return this._mountChar.curentAction;
            } else {
                return this.curentAction;
            }
        }

        //平滑num=1为直接
        protected rotationToNew(value: number, num: number = 1): void {
            var anum: number = value - this.pRotationY;
            if (anum == 0) {
                return;
            }
            if (anum < 1) {
                this.pRotationY = value;
                return;
            }
            var a: number = ((value - this.pRotationY) % 360 + 360) % 360;
            if (a > 180) {
                this.pRotationY -= (360 - a) / num;
            } else {
                this.pRotationY += a / num;
            }
        }

        stopMove(): void {
            this.play(CharAction.STANAD);
        }

        watch($obj: any, $syn: boolean = false): void {
            if (!$obj) {
                //console.log("面向对象无")
                return;
            }
            var xx: number = $obj.x - this.px;
            var yy: number = $obj.z - this.pz;
            var distance: number = Math.sqrt(xx * xx + yy * yy);
            xx /= distance;
            yy /= distance;
            var angle: number = Math.asin(xx) / Math.PI * 180;
            if (yy <= 0) {
                angle = 180 - angle;
            }
            if (!isNaN(angle)) {
                this.forceRotationY = angle
            }
        }

        getCurrentPos(): Vector3D {
            return new Vector3D(this.px, this.py, this.pz);
        }

        skillVo: Skill;

        /*
		playSkill($skill: Skill): void {
			if (!this._scene) {
				return;
			}
			this._scene.skillManager.playSkill($skill);
			this.skillVo = $skill;
        }
        */

        msgSpellStop(): void {
            if (this.skillVo) {
                ////console.log("停止技能播放");
                this.skillVo.removeSkillForce();
                this.changeAction(this._defaultAction)
                this.skillVo = null;
            }
            this.isSinging = false;
        }
        /*
        setScene(scene: Pan3d.SceneManager): void {
			super.setScene(scene);
			if (this._scene) {
				this._mountChar && this._scene.addMovieDisplay(this._mountChar);
				this._wingDisplay && this._scene.addMovieDisplay(this._wingDisplay);
			}
			this._bloodManager = this._scene instanceof PanScene ? this._scene.bloodManager : null;
			this.nameEnable = this._nameEnable;
			this.bloodEnable = this._bloodEnable;
			this.angerEnable = this._angerEnable;
		}

		removeSelf(): void {
			if (this._mountChar) {
				this._mountChar.removeSelf();
			}
			if (this._wingDisplay) {
				this._wingDisplay.removeSelf();
			}
			if (this._charNameVo) {
				this._charNameVo.visible = false;
			}
			if (this._charBloodVo) {
				this._charBloodVo.visible = false;
			}
			if (this._charAngerVo) {
				this._charAngerVo.visible = false;
			}
			super.removeSelf();
		}
        */
        public destory(): void {
            if (this._hasDestory) {
                return;
            }
            if (this.skillVo) {
                this.skillVo.removeSkillForce();
                this.skillVo = null;
            }
            if (this._mountChar) {
                this._mountChar.destory();
                this._mountChar = null;
            }

            if (this._wingDisplay) {
                this._wingDisplay.destory();
                this._wingDisplay = null;
            }
            if (this._charNameVo) {
                this._charNameVo.destory();
                this._charNameVo = null;
            }
            // if (this._charBloodVo) {
            //     this._charBloodVo.destory();
            //     this._charBloodVo = null;
            // }
            if (this._charAngerVo) {
                this._charAngerVo.destory();
                this._charAngerVo = null;
            }
            this._hasDestory = true;
            super.destory();
        }

        set visible(value: boolean) {
            this._visible = value;
            this.applyVisible();
        }
        get visible(): boolean {
            return this._visible
        }

        set optimization(value: boolean) {
            this._optimization = value;
            this.applyVisible();
        }
        get optimization(): boolean {
            return this._optimization
        }


        private _resultVisible: boolean = true;
        get resultVisible(): boolean {
            return this._resultVisible;
        }

        applyVisible(): void {
            var value: boolean = this._visible;
            if (this._visible) {
                if (this._optimization) {
                    value = false;
                } else {
                    value = true;
                }
            } else {
                value = false;
            }

            if (this._partDic) {
                if (this._partDic[LayaSceneChar.MESH]) {
                    for (var obj of this._partDic[LayaSceneChar.MESH]) {
                        obj.sceneVisible = value;
                    }
                }
            }

            // this._mountChar && (this._mountChar.sceneVisible = value);
            // this._wingDisplay && (this._wingDisplay.sceneVisible = value);

            this._resultVisible = value;
        }

        //摄像机是否2D
        protected _isCamera2D: boolean;
        set isCamera2D(v: boolean) {
            this._isCamera2D = v;
        }

        // 血条
        // protected _charBloodVo: BloodLineMeshVo;
        // protected _bloodColor: number;
        // set bloodColor(v: number) {
        //     this._bloodColor = v;
        //     this._charBloodVo && (this._charBloodVo.colortype = this._bloodColor);
        // }

        // private _hpRatio: number = 0;
        // set hpRatio(v: number) {
        //     this._hpRatio = v;
        //     this._charBloodVo && (this._charBloodVo.num = this._hpRatio);
        // }

        // get hpRatio(): number {
        //     return this._hpRatio;
        // }


        /** 血条缓动 */
        // public get lifenum(): number {
        //     return this._lifenum
        // }
        // private _lifenum: number = -1;
        // public set lifenum(value: number) {
        //     if (!this._charBloodVo) return;
        //     if (this._lifenum != -1) {
        //         Laya.Tween.clearTween(this);
        //         this.bloodMidNum = 0
        //         if (this._lifenum > value) {
        //             this.bloodMidNum = (this._lifenum - value) / 100
        //             Laya.Tween.to(this, { bloodMidNum: 0 }, 500);
        //             this.bloodNum = value;
        //         } else if (this._lifenum < value) {
        //             this.bloodNum = this._lifenum
        //             this.bloodMidNum = (value - this._lifenum) / 100;
        //             Laya.Tween.to(this, { bloodNum: value,bloodMidNum: 0}, 500);
        //         }
        //     } else {
        //         this.bloodNum = value;
        //         this.bloodMidNum = 0
        //     }
        //     this._lifenum = value;
        // }
        // private _bloodNum: number = 0
        // public set bloodNum(value: number) {
        //     this._bloodNum = value;
        //      if(this._charBloodVo){
        //         this._charBloodVo.num = value;
        //         this._charBloodVo.visibleChange = true;
        //      }
        // }
        // public get bloodNum(): number {
        //     return this._bloodNum
        // }

        // private _bloodMidNum: number = 0
        // public set bloodMidNum(value: number) {
        //     this._bloodMidNum = value;
        //     if(this._charBloodVo){
        //         this._charBloodVo.midNum = value;
        //         this._charBloodVo.visibleChange = true;
        //     }
            
        // }
        // public get bloodMidNum(): number {
        //     return this._bloodMidNum;
        // }




        // 是否显示血条
        // private _bloodEnable: boolean = false;
        // set bloodEnable(v: boolean) {
        //     this._bloodEnable = v;
        //     if (!this._charBloodVo) {
        //         // this._charBloodVo = (this._scene).bloodMgr.getBloodLineMeshVo()
        //         // this._charBloodVo.colortype = 0
        //     }
        //     // this._charBloodVo.visible = v;
        // }

        //怒气条
        protected _charAngerVo: BloodLineMeshVo;
        protected _angerColor: number;
        set angerColor(v: number) {
            this._angerColor = v;
            this._charAngerVo && (this._charAngerVo.colortype = this._angerColor);
        }

        private _angerRatio: number = 0;
        set angerRatio(v: number) {
            this._angerRatio = v;
            this._charAngerVo && (this._charAngerVo.num = this._angerRatio);
        }
        get angerRatio(): number {
            return this._angerRatio;
        }

        // 名字
        protected _charNameVo: CharNameMeshVo;
        protected _charName: string;

        setcharNameSize(size: number) {
            //字体只支持22字号以内
            this._charNameVo && (this._charNameVo.size = size);
        }

        //#000000 颜色和描边色
        setcharNameColor(color: string,scolor:string = '') {
            this._charNameVo && (this._charNameVo.color = color);
            this._charNameVo && (this._charNameVo.scolor = scolor);
        }

        set charName(v: string) {
            if (this._charName == v) return;
            this._charName = v;
            this._charNameVo && (this._charNameVo.name = this._charName);
        }

        get charName(): string {
            return this._charName || "";
        }

        // 是否显示名字
        protected _nameEnable: boolean = false;
        set nameEnable(v: boolean) {
            this._nameEnable = v;
            if (!this._charNameVo) {
                this._charNameVo = (this._scene).bloodMgr.getCharNameMeshVo(LanMgr.getLan("{0}", -1, random(99)))
            } else {
                this._charNameVo.name = LanMgr.getLan("{0}", -1, random(99));
            }
        }


        public updateBind(): void {
            super.updateBind();
            this.updateWeaponScale();
            this.refreshPos();
        }

        private updateWeaponScale(): void {
            if (this._partDic && this._partDic.hasOwnProperty(LayaSceneChar.WEAPON_PART)) {
                var ary = this._partDic[LayaSceneChar.WEAPON_PART];
                if (ary instanceof Array) {
                    for (var i: number = 0; i < ary.length; i++) {
                        let item = ary[i];
                        if (item instanceof Display3DSprite) {
                            item.scale = this._pScale;
                        }
                    }
                }
            }
        }

        public refreshPos(): void {
            let posY: number = this.py + this.tittleHeight;
            
            if (this.isMount) {
                posY += 20;
            }
            //处理怒气条位置
            if (this._charAngerVo) {
                this._charAngerVo.pos.x = this.px;
                this._charAngerVo.pos.y = posY;
                this._charAngerVo.pos.z = this.pz;
                this._charAngerVo.visible = this._resultVisible;
                posY += (this._isCamera2D ? 5 : 5);
            }
            //处理血条和名字位置 -FIXME--0
            // if (this._charBloodVo) {
            //     this._charBloodVo.pos.x = this.px;
            //     this._charBloodVo.pos.y = posY;
            //     this._charBloodVo.pos.z = this.pz;
            //     // this._charBloodVo.visible = this._resultVisible;
            //     posY += (this._isCamera2D ? 10 : 10);
            // }
            if (this._charNameVo) {
                this._charNameVo.pos.x = this.px;
                this._charNameVo.pos.y = posY
                this._charNameVo.pos.z = this.pz;
                this._charNameVo.visible = this._resultVisible;

                // posY += 6;
            }
        }
        public get px(): number {
            return this._px
        }
        public set px(value: number) {
            this._px = value
            if (this._mountChar) {
                this._mountChar.x = this._px
            } else {
                this.x = this.px
            }
        }

        public get pz(): number {
            return this._pz
        }
        public set pz(value: number) {
            this._pz = value
            if (this._mountChar) {
                this._mountChar.z = this._pz
            } else {
                this.z = this.pz
            }
        }

        private lineSprite: LineDisplaySprite;

        public update(): void {
            if (!this._skinMesh) {
                return;
            }
            if (this._optimization) {
                return;
            }

            super.update();
            if (this._showHitBox) {
                if (!this.lineSprite) {
                    ProgrmaManager.getInstance().registe(LineDisplayShader.LineShader, new LineDisplayShader)
                    this.lineSprite = new LineDisplaySprite();
                    this.lineSprite.clear();

                    for (var i: number = 0; i < this._triIndex.length / 3; i++) {
                        var a: Vector3D = this._skinMesh.hitPosItem[this._triIndex[i * 3 + 0]]
                        var b: Vector3D = this._skinMesh.hitPosItem[this._triIndex[i * 3 + 1]]
                        var c: Vector3D = this._skinMesh.hitPosItem[this._triIndex[i * 3 + 2]]

                        this.lineSprite.makeLineMode(a, b);
                        this.lineSprite.makeLineMode(b, c);
                        this.lineSprite.makeLineMode(c, a);
                    }

                    this.lineSprite.upToGpu()
                }
                this.lineSprite.posMatrix = this.posMatrix.clone();
                this.lineSprite.update()
            }
        }

        public math_distance($other: Display3dMovie): number {
            return MathClass.math_distance(this.px, this.pz, $other.x, $other.z)
        }
        public get2dPos(): Vector2D {
            var $v2d: Vector2D = new Vector2D
            var $nScale: number = 0.25 / scene2d.Override2dEngine.htmlScale
            if (this._mountChar) {

                $v2d.x = this._mountChar.px
                $v2d.y = this._mountChar.pz
            } else {
                $v2d.x = this.px
                $v2d.y = this.pz
            }
            $v2d.x = $v2d.x / $nScale
            $v2d.y = $v2d.y / -1 * (Math.sin(45 * Math.PI / 180)) / $nScale
            return $v2d
        }
        public set2dPos($x: number, $y: number): void {
            var $nScale: number = 0.25 / scene2d.Override2dEngine.htmlScale
            var $tx: number = $x * $nScale;
            var $tz: number = $y * $nScale / (Math.sin(45 * Math.PI / 180)) * -1;

            this._px = $tx
            this._pz = $tz

            if (this._mountChar) {
                this._mountChar.x = $tx;
                this._mountChar.z = $tz;
            } else {
                this.x = $tx;
                this.z = $tz;
            }

        }
        private _showHitBox = false;
        // private triIndex: Array<number> = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7]
        // private triIndex: Array<number> = [0, 4, 5, 0, 5, 1, 1, 5, 6, 1, 6, 2, 2, 6, 7, 2, 7, 3, 3, 7, 4, 3, 4, 0]
        protected _triIndex: Array<number> = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 0, 4, 5, 0, 5, 1, 1, 5, 6, 1, 6, 2, 2, 6, 7, 2, 7, 3, 3, 7, 4, 3, 4, 0]

        protected _hitBox2DItem: Array<Vector2D>;

        public math3DWorldtoDisplay2DPos($pos: Vector3D): Vector2D {
            var m: Matrix3D = this._scene.cameraMatrix.clone();
            m.append(this._scene.viewMatrx3D.clone());
            var fovw: number = Scene_data.stageWidth
            var fovh: number = Scene_data.stageHeight

            var p: Vector3D = m.transformVector($pos);
            var b: Vector2D = new Vector2D;
            b.x = ((p.x / p.w) + 1) * (fovw / 2)
            b.y = ((-p.y / p.w) + 1) * (fovh / 2)
            return b;
        }
        public mouseClik(lineA: Vector3D, $lineB: Vector3D): boolean {

            var $pos: Vector3D = this._scene.cameraMatrix.transformVector(this.getCurrentPos())

            if ($pos.z < 10) { //在Z后面
                return false
            }
            var hitVec2: Vector2D = this.math3DWorldtoDisplay2DPos($lineB)

            if (this._skinMesh) {
                if (!this._hitBox2DItem) {
                    this._hitBox2DItem = new Array;
                }
                this._hitBox2DItem.length = 0
                for (var j: number = 0; j < this._skinMesh.hitPosItem.length; j++) {
                    var temppp: Vector3D = this.posMatrix.transformVector(this._skinMesh.hitPosItem[j])
                    this._hitBox2DItem.push(this.math3DWorldtoDisplay2DPos(temppp))
                }
                for (var i: number = 0; i < this._triIndex.length / 3; i++) {
                    TestTriangle.baseTri.p1 = this._hitBox2DItem[this._triIndex[i * 3 + 0]];
                    TestTriangle.baseTri.p2 = this._hitBox2DItem[this._triIndex[i * 3 + 1]];
                    TestTriangle.baseTri.p3 = this._hitBox2DItem[this._triIndex[i * 3 + 2]];
                    if (TestTriangle.baseTri.checkPointIn(hitVec2)) {
                        // console.log(this._hitBox2DItem)
                        return true
                    }
                }
            } else {
                if (Vector2D.distance(hitVec2, this.math3DWorldtoDisplay2DPos(this.posMatrix.position)) < 20) {
                    return true
                }

            }
            return false




            //var $pos: Vector3D = Scene_data.cam3D.cameraMatrix.transformVector(this.getCurrentPos())
            //          if ($pos.z < Scene_data.cam3D.distance / 3) { //在Z后面
            //              return false
            //          }

            //          var hitVec2: Vector2D = MathUtil.math3DWorldtoDisplay2DPos($lineB)
            //          if (this._skinMesh) {
            //              if (!this._hitBox2DItem) {
            //                  this._hitBox2DItem = new Array;
            //              }
            //              this._hitBox2DItem.length = 0
            //              for (var j: number = 0; j < this._skinMesh.hitPosItem.length; j++) {
            //                  var temppp: Vector3D = this.posMatrix.transformVector(this._skinMesh.hitPosItem[j])
            //                  this._hitBox2DItem.push(MathUtil.math3DWorldtoDisplay2DPos(temppp))
            //              }
            //              for (var i: number = 0; i < this._triIndex.length / 3; i++) {
            //                  TestTriangle.baseTri.p1 = this._hitBox2DItem[this._triIndex[i * 3 + 0]];
            //                  TestTriangle.baseTri.p2 = this._hitBox2DItem[this._triIndex[i * 3 + 1]];
            //                  TestTriangle.baseTri.p3 = this._hitBox2DItem[this._triIndex[i * 3 + 2]];
            //                  if (TestTriangle.baseTri.checkPointIn(hitVec2)) {
            //                      console.log(this._hitBox2DItem)
            //                      return true
            //                  }
            //              }
            //          } else {
            //              if (Vector2D.distance(hitVec2, MathUtil.math3DWorldtoDisplay2DPos(this.posMatrix.position)) < 20) {
            //                  return true
            //              }

            //          }
            //          return false

        }

        public removeStage(): void {
            super.removeStage()
            if (this._charNameVo) {
                this._charNameVo.visible = false
            }
            // if (this._charBloodVo) {
            //     this._charBloodVo.visible = false
            // }
            if (this._mountChar) {
                (this._scene).removeMovieDisplay(this._mountChar);
            }
            if (this._wingDisplay) {
                (this._scene).removeMovieDisplay(this._wingDisplay);
            }
        }

        public addStage(): void {
            super.addStage();
            if (this._charNameVo) {
                this._charNameVo.visible = true;
            }
            // if (this._charBloodVo) {
            //     this._charBloodVo.visible = true;
            // }
            if (this._mountChar) {
                (this._scene).addMovieDisplay(this._mountChar);
            }
            if (this._wingDisplay) {
                (this._scene).addMovieDisplay(this._wingDisplay);
            }
        }

    }
}