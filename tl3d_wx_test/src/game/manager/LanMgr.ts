/**
* name 
*/
class LanMgr {
	constructor() {

	}

	static lans: Object = {
		10000: "该邮件已过期",
		10001: "当前无可删除的邮件",
		10002: "当前无可领取的邮件",
		10003: "今日获得的友情点已达上限，请明天再领取",
		10004: "今日刷新次数已达上限",
		10005: "钻石不足",
		10006: "快速战斗",
		10007: "剩余次数:{0}/{1}",
		10008: "暂无出战英雄，请前往布阵",
		10009: "手动",
		10010: "自动",
		10011: "今日快速战斗次数已用完",
		10012: "发送内容不能为空",
		10013: "还需{0}秒后才可发言",
		10014: "关卡未解锁",
		10015: "该难度未解锁",
		10016: "请先通关第{0}章",
		10017: "暂无英雄，请前往抽卡",
		10018: "该关卡已通关，重置后方可重复挑战",
		10019: "层级信息 :",
		10020: "怪物信息 :",
		10021: "挑 战",
		10022: "体力不足",
		10023: "数量不等的钻石",
		10024: "重置倒计时:",
		10025: "天",
		10026: "小时",
		10027: "分钟",
		10028: "我的排名:未上榜",
		10029: "我的排名:第{0}名",
		10030: "第{0}关",
		10031: "级",
		10032: "请先领取前一关卡的boss奖励",
		10033: "已领取奖励",
		10034: "该关卡没有奖励",
		10035: "{0}级开启",
		10036: "已购买",
		10037: "货币不足",
		10038: "确 定",
		10039: "取 消",
		10040: "系 统",
		10041: "领 取",
		10042: "前 往",
		10043: "已领取",
		10044: "(进度:{0}/{1})",
		10045: "未完成",
		10046: "赶快去领取通关奖励",
		10047: "别急，箱子还没装满",
		10048: "没有出战英雄",
		10049: "占领奖励:{0}",
		10050: "占领玩家:{0}",
		10051: "暂无",
		10052: "占领收益:{0}",
		10053: "可领取收益:{0}",
		10054: "撤退将会产生{0}分钟抢占冷却时间，确定撤退吗？",
		10055: "占领信息已更新，请重新选择。",
		10056: "你已占领传说宝藏，不能同时占领其他宝藏",
		10057: "只能占领更高级的宝藏",
		10058: "该领地在抢占中，请稍后",
		10059: "你的抢占还在冷却中,还需要{0}分钟",
		10060: "该领地已被抢占",
		10061: "该领地无人占领，且该玩家增加{0}分钟抢占冷却时间",
		10062: "不能抢占自己",
		10063: "公会:无",
		10064: "宝藏守护者",
		10065: "{0}分钟后发放奖励",
		10066: "占 领",
		10067: "抢 占",
		10068: "长度最多为6个汉字或12个字母数字!",
		10069: "不能包含特殊符号!",
		10070: "暂无记录!",
		10071: "请加入公会，才能使用公会聊天!",
		10072: "金币不足",
		10073: "钻石不足",
		10074: "公会贡献不足",
		10075: "每周{0}次",
		10076: "每日{0}次",
		10077: "请先通关当前关卡",
		10078: "该怪物已被击杀",
		10079: "第{0}章",
		10080: "我的伤害:{0}",
		10081: "剩余次数:{0}",
		10082: "购买次数不足，提高VIP等级可以增加购买次数",
		10083: "该关卡已经通关",
		10084: "挑战次数不足",
		10085: "请先通关前一难度",
		10086: "本次伤害:{0}",
		10087: "总 伤 害:{0}",
		10088: "伤害:{0}",
		10089: "剩余领取次数:{0}",
		10090: "未达到",
		10091: "无可领取次数",
		10092: "等级:{0}",
		10093: "开始挑战",
		10094: "查看排行",
		10095: "活动已过期",
		10096: "未到达领取条件，无法领取",
		10097: "无可兑换次数",
		10098: "购买",
		10099: "暂未开启，敬请期待！",
		10100: "请先通关普通难度",
		10101: "BOSS已死亡，{0}分钟后复活",
		10102: "普通{0}层",
		10103: "困难{0}层",
		10104: "等级不足",
		10105: "剩余次数不足",
		10106: "（剩余购买次数{0}次）",
		10107: "该关卡已挑战成功",
		10108: "请完成当前操作",
		10109: "请选择一个要转换的英雄",
		10110: "请选择要回复血量的英雄",
		10111: "请选择要复活的英雄",
		10112: "该英雄已死亡",
		10113: "只有30级以上英雄才可以上阵",
		10114: "没有挑战的玩家数据",
		10115: "回复血量成功",
		10116: "复活成功",
		10117: "神力:{0}",
		10118: "点击选择要回复血量的英雄:",
		10119: "点击选择要复活的英雄:",
		10120: "{0}不足！",
		10121: "剩余次数:{0}次",
		10122: "通关后解锁",
		10123: "vip{0}开启，或玩家等级{1}开启",
		10124: "剩余次数不足",
		10125: "暂无活动",
		10126: "达到购买上限",
		10127: "无可回复的英雄",
		10128: "无可复活的英雄",
		10129: "请输入你的名字",
		10130: "钻石不足，修改失败",
		10131: "名字太长，修改失败",
		10132: "名字存在敏感字符",
		10133: "该玩家已是你的好友",
		10134: "对方无阵容无法切磋",
		10135: "好友才能进行私聊",
		10136: "请输入要发送的信息",
		10137: "信息中包含非法字符",
		10138: "该玩家不是你的好友，不能进行聊天",
		10140: "删除聊天对象同时删除聊天记录？",
		10141: "私聊列表为空，点击好友头像可进行私聊",
		10142: "剩余次数:{0}次",
		10143: "未开启",
		10144: "{0}分后复活",
		10145: "{0}人抢夺",
		10146: "购买次数不足",
		10147: "无争夺人数",
		10148: "关卡",
		10149: "伤害",
		10150: "退出公会",
		10151: "解散公会",
		10152: "会长很懒，什么都没留下",
		10153: "级以上可自动加入",
		10154: "级以上可申请",
		10155: "申请列表为空",
		10156: "VIP等级不足，请前往充值",
		10157: "Lv.{0}",
		10158: "{0}级解锁",
		10159: "未达到公会限制等级",
		10160: "请输入公会名称！",
		10161: "护送次数:{0}",
		10162: "掠夺次数:{0}",
		10163: "护送次数不足",
		10164: "掠夺次数不足",
		10165: "该玩家已被掠夺{0}次",
		10166: "护送时间结束,不能掠夺",
		10167: "同一时间只能护送一次",
		10168: "自己商队不能掠夺",
		10169: "当前已经是最高品质",
		10170: "刷新品质中...",
		10171: "探 险",
		10172: "刷 新",
		10173: "免费刷新",
		10174: "不能连续掠夺同一个玩家2次",
		10175: "护送时间已结束",
		10176: "探险积分不足",
		10177: "探险未完成，不能领取奖励",
		10178: "有紫色以上品质未接取，确定要刷新吗",
		10179: "英雄已达上限",
		10180: "该英雄已在探险中",
		10181: "无满足条件英雄",
		10182: "派遣的英雄不符合条件",
		10183: "每只英雄只能同时在一只探险队伍",
		10184: "最大层数:{0}层",
		10185: "当前已是最高关卡",
		10186: "{0}后恢复一次",
		10187: "{0}分钟后恢复一次",
		10188: "剩余掠夺次数:{0}次",
		10189: "今日可占领次数:{0}次",
		10190: "{0}后刷新",
		10191: "产量:{0}",
		10192: "预计完成时间:{0}分钟",
		10193: "累积奖励:{0}",
		10194: "该矿点已采集完成",
		10195: "占领次数不足",
		10196: "删 除",
		10197: "该玩法只能自动战斗",
		10198: "本次战斗无法跳过",
		10199: "{0}回合之后才可跳过",
		10200: "神力达到{0}才可继续挑战",
		10201: "Vip可以增加扫荡次数",
		10202: "以上奖励通关邮件发放",
		10203: "你已在队伍中",
		10204: "没有上阵英雄，快去设置吧",
		10205: "友情点不足！",
		10206: "传说召唤需要VIP{0}解锁",
		10207: "请输入评价语!",
		10208: "不能挑战自己",
		10209: "请提升你的排名，才可以挑战该玩家",
		10210: "英雄不存在，不能添加",
		10211: "你在组队挑战中被踢出队伍",
		10212: "你在组队挑战中成为队长",
		10213: "请求超时",
		10214: "VIP{0}可以购买",
		10215: "已领取全部奖励",
		10216: "今日奖励已领取",
		10217: "微端下载成功，请前往微端体验！",
		10218: "不在活动时间",
		10219: "今日钻石已领取",
		10220: "每日奖励只能领取1次",
		10221: "请输入兑换码！",
		10222: "已达今日许愿上限，请明日再来!",
		10223: "限时热购已结束",
		10224: "活动已结束",
		10225: "今日可购买次数不足",
		10226: "英雄列表已满，是否前往分解英雄？",
		10227: "未达到可领取天数",
		10228: "该奖励已领取",
		10229: "暂未开启",
		10230: "未完成领取条件",
		10231: "取消了分享",
		10232: "分享失败{0}[{1}]",
		10233: "内测返利只能领取一次",
		10234: "兑换材料不足",
		10235: "购买后才可以领取",
		10236: "还未达到可领取天数",
		10237: "请选择其中一张卡片",
		10238: "最多锁定两个属性",
		10239: "锁定的属性不存在",
		10240: "洗练后才能更换属性",
		10241: "更换后神力将会降低，确定要更换吗？",
		10242: "该神器已满星",
		10243: "完成进阶之路可以解锁神器",
		10244: "解锁{0}把神器开启神器{1}",
		10245: "需要神器达到{0}级",
		10246: "未满足解锁条件",
		10247: "{0}后可领",
		10248: "数量不足，无法合成",
		10249: "请从奖励中选取一个",
		10250: "语音还没准备好！",
		10251: "{0}级才能发送同省聊天消息",
		10252: "{0}级才能发送跨服聊天消息",
		10253: "请加入队伍再发送组队信息",
		10254: "还有{0}秒才可以发送同省聊天消息",
		10255: "还有{0}秒才可以发送跨服聊天消息",
		10256: "你已加入其他公会",
		10257: "你成功加入公会{0}",
		10258: "申请成功，等待审核",
		10259: "加入公会后才能发送招募信息",
		10260: "今日次数已用完",
		10261: "你在组队挑战中，加入了{0}的队伍",
		10262: "没有符合条件的转移对象",
		10263: "没有更多了",
		10264: "请通关本章",
		10265: "数据不存在",
		10266: "队员{0}还未通过前置关卡",
		10267: "只有队长才能进行挑战",
		10268: "请通关前置关卡",
		10269: "你的最高关卡小于队伍的限制关卡",
		10270: "不能转移给最高关卡大于队长的玩家",
		10271: "确定要将队长转移给{0}吗",
		10272: "系统未开放",
		10273: "组队申请成功",
		10274: "请先创建队伍",
		10275: "队伍人数已满，无法邀请",
		10276: "{0} 拒绝你的组队邀请",
		10277: "每日只能派遣1只英雄",
		10278: "派遣成功",
		10279: "每日最多雇佣{0}个",
		10280: "雇佣成功",
		10281: "暂无奇遇事件",
		10282: "踩上滑板车，前进{0}格",
		10283: "衰神附体，后退{0}格",
		10284: "骰子不足，可通过挂机获得",
		10285: "未触发该问题事件",
		10286: "该奇遇已过期",
		10287: "资源不足",
		10288: "平局，请重新选择",
		10289: "强化等级已达上限",
		10290: "该装备未穿戴，不能强化",
		10291: "该英雄没有穿戴装备",
		10292: "精炼等级已达上限",
		10293: "该装备未穿戴，不能精炼",
		10294: "暂无可以镶嵌宝石",
		10295: "没有合成配置:{0}",
		10296: "数量不足,合成需要{0}个宝石",
		10297: "暂无可合成宝石",
		10298: "已是最高等级",
		10299: "最少合成一个",
		10300: "紫色以上才有套装属性",
		10301: "未穿戴装备",
		10302: "无满足条件可穿戴装备",
		10303: "穿戴6件装备才能激活{0}大师",
		10304: "强化",
		10305: "精炼",
		10306: "装备已达到最大等级",
		10307: "是否花费{0}",
		10308: "快速完成护送",
		10309: "一次性选择最多10个",
		10310: "六星以上英雄不能分解",
		10311: "开启2倍速需要VIP{0}级",
		10312: "或者{0}级",
		10313: "{0}需VIP{1}或者玩家{2}级后可跳过",
		10314: "{0}需VIP{1}或者{2}回合后可跳过",
		10315: "{0}需VIP{1}可跳过",
		10316: "数据异常",
		10317: "条件不满足",
		10318: "通关迷雾森林{0}层或者VIP{1}开启",
		10319: "该关卡已通过",
		10320: "不能添加自己为好友",
		10321: "请先输入名称",
		10322: "好友列表已满，无法申请",
		10323: "暂无可申请玩家",
		10324: "暂无好友申请",
		10325: "好友列表已满",
		10326: "成功添加{0}个好友",
		10327: "您同意了{0}的好友申请",
		10328: "您拒绝了{0}的好友申请",
		10329: "当前无好友，无法领取并赠送",
		10330: "无可赠送好友",
		10331: "已向所有好友赠送友情点",
		10332: "已领取所有好友赠送的友情点",
		10333: "上届荣耀之战未开启",
		10334: "暂无战斗记录",
		10335: "本来轮空没有回放",
		10336: "本来轮空没有押注",
		10337: "（战斗结束前{0}分钟不能押注）",
		10338: "（战斗结束前{0}秒不能押注）",
		10339: "不能押注同一组多次",
		10340: "比赛已结束不能押注",
		10341: "跨服对决未开启",
		10342: "当前不在报名时间内",
		10343: "不能重复报名",
		10344: "本服对决未开启",
		10345: "已满级",
		10346: "满阶以后才可升七星",
		10347: "请按要求添加指定的神灵",
		10348: "当前英雄觉醒已满级",
		10349: "当前英雄觉醒等级达到上限，请前往升星",
		10350: "请按要求添加指定的英雄",
		10351: "下阵失败，主阵容不允许为空",
		10352: "布阵失败！",
		10353: "不能同时上阵相同英雄",
		10354: "确定要更换2个英雄的装备和宝石？",
		10355: "替换装备失败！",
		10356: "上阵失败！",
		10357: "上阵成功！",
		10358: "到账成功",
		10359: "请输入信息",
		10360: "次数已用完，请明日再来",
		10361: "提升VIP等级可以增加挑战次数",
		10362: "该圣物不能升星",
		10363: "无可穿戴圣物",
		10364: "已养成的紫色品质以上才可以重生",
		10365: "下阵失败，黑暗森林进攻阵容不允许为空",
		10366: "一次性选择最多{0}个",
		10367: "请选择要重生的圣物",
		10368: "无满足要求的材料",
		10369: "当前无{0}星{1}",
		10370: "当前无{0}星{1}圣物",
		10371: "当前选择经验不足以强化1级",
		10372: "无可更换英雄",
		10373: "激活道具不足",
		10374: "已达融魂上限",
		10375: "融魂等级已达最大",
		10376: "需要{0}星才能突破",
		10377: "您已有队伍，不能再加入其它队伍",
		10378: "该队伍已满员",
		10379: "房间已满，无需一键邀请",
		10380: "{0}s之后才能一键邀请",
		10381: "您已被请出队伍",
		10382: "该玩家已离开",
		10383: "该玩家已加入队伍",
		10384: "房间人数已满，无需要求",
		10385: "需要满3个人才能进行匹配",
		10386: "所有队员准备后才能进行匹配",
		10387: "{0} 拒绝你的组队邀请",
		10388: "提升VIP等级，可增加快速战斗次数",
		10389: "当前战斗正在进行中",
		10390: "还需要{0}秒才能挑战Boss",
		10391: "战斗中无法切换地图",
		10392: "每日只能捐赠一次",
		10393: "会长才能报名",
		10394: "周六不能报名（本届公会战将于今日22点结束）",
		10395: "您没有参与本次公会战，不能进行挑战",
		10396: "次数不足，无法挑战",
		10397: "该玩家已死亡",
		10398: "没有上轮排名数据",
		10399: "本赛季公会未达到{0}段位",
		10400: "该段位已领取过",
		10401: "购买次数不足，请次日挑战",
		10402: "挑战过当前BOSS才可以进行扫荡",
		10403: "公会关卡最新数据已更新,请重新选择关卡挑战",
		10404: "公会战还有{0}开启",
		10405: "已有公会",
		10406: "每个公会最多{0}个副会长",
		10407: "会长离线{0}天以上，副会长才可篡位",
		10408: "会长离线{0}天以上，成员才可篡位",
		10409: "今日无招募次数",
		10410: "钻石不足",
		10411: "发布招募成功",
		10412: "会长和副会长才可以进行操作",
		10413: "当前无可领取求援奖励",
		10414: "当前无需进行求助",
		10415: "发送求助间隔需要5分钟",
		10416: "成功发送求援信息",
		10417: "不能同时求援同一阵营的英雄碎片",
		10418: "该援助已完成",
		10419: "援助次数已用完",
		10420: "请选择求援的碎片",
		10421: "当前已有公会，请退出后再来创建",
		10422: "VIP{0}可创建公会",
		10423: "该技能已满级",
		10424: "升级技能后才能重置",
		10425: "重置公会技能会返还所有帮贡，确定要花费{0}{1}重置公会技能?",
		10426: "装备总数已达上限",
		10427: "点击右上角世界地图解锁新章节",
		10428: "当前头像框已配置",
		10429: "头像框更换成功",
		10430: "获得英雄{0}解锁",
		10431: "当前头像已配置",
		10432: "头像更换成功",
		10433: "该形象已穿戴",
		10434: "未解锁",
		10435: "更换成功",
		10436: "最多提交200个字符",
		10437: "反馈内容不能为空",
		10438: "每日最多反馈三次",
		10439: "反馈失败",
		10440: "暂无更新内容",
		10441: "矿点不存在，请刷新",
		10442: "请输入账号",
		10443: "请阅读并同意，游戏用户须知和隐私保护指引",
		10444: "没有可用的服务器",
		10445: "该服务器正处于维护中，无法登录",
		10446: "该服于{0}开放",
		10447: "暂无排行信息",
		10448: "该商场未开放，无法进入",
		10449: "购买{0}*{1}",
		10450: "已达该道具限购上限，请下次再来",
		10451: "今日钻石刷新次数已达上限",
		10452: "解锁进阶奖励后可领取",
		10453: "本周积分礼包已领取",
		10454: "未开放",
		10455: "购买成功",
		10456: "本轮勇者之证进阶奖励已解锁",
		10457: "本轮勇者之证已满级，无需购买等级",
		10459: "未达到可领取等级",
		10460: "该奖励已全部领取",
		10461: "解锁进阶奖励后可以领取",
		10462: "神力未达到{0}，无法挑战",
		10463: "{0}级开启，升级可通关重复挑战或扫荡副本",
		10464: "请通关前面章节",
		10465: "请先领取前面通关奖励",
		10466: "玩家等级达到30级才可以进行评论",
		10467: "拥有该英雄才可以进行评价",
		10468: "无法点赞自己的评价",
		10469: "VIP{0}可领取",
		10470: "每日登录可领取",
		10471: "VIP3可领取",
		10472: "充值任意金额可领取",
		10473: "等待到账",
		10474: "已过期",
		10475: "￥",
		10476: "领取",
		10477: "布阵列表不允许为空",
		10478: "上阵队列已满",
		10479: "每场战斗只能使用一个雇佣英雄",
		10480: "布阵成功",
		10481: "是否要离开队伍?",
		10482: "奖励次数为0，确定要继续匹配吗?",
		10483: "拖动玩家可以对换位置",
		10484: "反馈成功",
		10485: "删除后的好友无法恢复，确定删除？",
		10486: "确定拉黑该好友？",
		10487: "确定取消拉黑该好友？",
		10488: "游戏版本更新",
		10489: "账号已在别处登录",
		10490: "连接已断开，请重新登录({0})",
		10491: "服务器繁忙请重新登录",
		10492: "获取数据失败，请稍后重试！",
		10493: "你的挂机收益达到上限，请前往挂机界面领取",
		10494: "每次补签需要花费{0}钻石，确定补签？",
		10495: "洗练后神力大于洗练前神力，确定要继续洗练吗？",
		10496: "确定要将玩家名字踢出队伍吗?",
		10497: "你已加入激战神域队伍中，确定要退出并前往组队挑战?",
		10498: "购买1个回复药水？",
		10499: "购 买",
		10500: "分解的英雄中包含4星以上英雄，是否确定分解？",
		10501: "该英雄已上阵，是否要下阵？",
		10502: "是否花费",
		10503: "押注？",
		10504: "押 注",
		10505: "奖励次数为0，确定要继续准备吗？",
		10506: "确定要取消匹配？",
		10507: "已用时：{0}秒",
		10508: "是",
		10509: "否",
		10510: "确定要按照本关最高伤害{0}进行扫荡吗？",
		10511: "免费",
		10512: "花费{0}钻石",
		10513: "确定要向世界发布招募信息，本次{0}。(今日剩余{1}次)",
		10514: "确定要解散公会[{0}]，解散公会操作不可逆，请三思！",
		10515: "确定要退出公会[{0}]",
		10516: "{0}离开了我们，祝他一路走好！",
		10517: "确定要转让会长给{0}?",
		10518: "确定要罢免{0}副会长职位?",
		10519: "确定要任命{0}为副会长?",
		10520: "{0}是副会长,确定要将逐出公会?",
		10521: "确定要逐出公会?",
		10522: "转让会长",
		10523: "罢免副会长",
		10524: "任命副会长",
		10525: "逐出公会",
		10526: "篡位",
		10527: "你要对{0}执行的操作是",
		10528: "确定要退出游戏？",
		10529: "确定要切换账号？",
		10530: "占领数据已刷新",
		10531: "你已占领其他领地，确定要撤退其他领地，占领该领地吗？",
		10532: "登录参数错误",
		10533: "连接服务器...",
		10534: "获取服务器列表失败！",
		10535: "游戏暂未开放",
		10536: "提 示",
		10537: "正在充值中，请稍等。",
		10538: "网络已断开,等待重连",
		10539: "准备首次精彩的战斗",
		10540: "初始化场景",
		10541: "连接中...",
		10542: "正在启动模块",
		10543: "加载语言包",
		10544: "加载基础资源",
		10545: "技能加载中",
		10546: "角色加载中",
		10547: "特效加载中",
		10548: "场景加载中",
		10549: "正在重连...",
		10550: "购买次数",
		10551: "确定要花费{0}",
		10552: "是否花费{0}",
		10553: "购买{0}次奖励次数",
		10554: "购买{0}次挑战次数",
		10555: "好友详情",
		10556: "扫 荡",
		10557: "积分x{0}",
		10558: "前排",
		10559: "后排",

		12000: "请按要求添加指定的圣物",
		12001: "继续领取",
		12002: "第{0}层",
		12003: "神秘岛屿",
		12004: "结算信息",
		12005: "战斗和挂机可以获得魂石，魂石用于英雄升级！",
		12006: "这里就是黑龙的巢穴，务必小心！",
		12007: "雅典娜",
		12008: "吼~~，诸神黄昏将要来临，你们会在我的黑焰下燃成灰烬",
		12009: "尼德霍格",
		12010: "在诸神面前，你只有死路一条！",
		12011: "托尔",
		12012: "不好，世界树的力量越来越弱！",
		12013: "这场神界浩劫终究还是没办法避免！",
		12014: "诸神在经历大战之后，需要长时间恢复！",
		12015: "但是冥界的力量已经开始侵蚀各地，我们需要一个神界召唤师加入！",
		12016: "欢迎来到神界，想要成为合格的召唤师必须拥有自己的英雄。",
		12017: `消耗 <span style='color:#f36f2f;'>神秘召唤书</span> 可以进行 <span style='color:#f36f2f;'>神秘召唤</span>，可以随机获得<span style='color:#f36f2f;'>3-5星英雄</span>哦！`,
		12018: `太棒了，竟然召唤到<span style='color:#f36f2f;'>守护{0}</span>！`,
		12019: `召唤师，我已经迫不及待了，快设置我出战！`,
		12020: `点击英雄头像，选择上阵英雄！`,
		12021: `刚刚战斗掉落了{0}碎片，一定数量的碎片可以合成英雄哦！`,
		12022: `我们合成了强力输出{0}！`,
		12023: `哼，你就是新的守护者么？就暂时与你并肩作战吧！`,
		12024: `每隔一段时间可以领取挂机收益，点击宝箱就可以领取了哦！`,
		12025: `快速战斗可以直接获得挂机2个小时收益。`,
		12026: `每个英雄都需要装备，装备可以大幅度提高英雄战斗力！`,
		12027: `进阶之路记录着召唤师的成长轨迹，进阶还可以领取传说神器。`,
		12028: `哇！有了{0}的加入，我们的颜值提升了一大截！`,
		12029: `凡人，与我并肩作战是你的荣誉。我能治疗受伤的神灵，但是别忘了布置我上阵！`,
		12030: `每完成5场战斗，可以获得挑战BOSS的资格。`,
		12031: `当然挑战BOSS可以获得通关奖励，别忘记领取了。`,
		12032: `装备强化可以大幅度提高装备基础属性！`,
		12033: `当英雄等级达到上限，需要进阶突破等级上限！`,
		12034: `别忘了领取七日奖励，次日登录领取<span style='color:#f36f2f;'>加百列</span>，七日登录领取<span style='color:#f36f2f;'>哈迪斯</span>!`,
		12035: `召唤师，恭喜你，完成的初级试炼！`,
		12036: `神器拥有强大的力量，面对越来越强大的黑暗力量，神器是必不可少的。`,
		12037: `雷神之锤上阵后可以提高所有英雄属性，还可以释放神器技能。`,
		12038: `神器在战斗时候会触发神器技能，赶紧去试试吧！`,
		12039: `我们又获得一把神器，宙斯之盾是最强的防御神器！`,
		12040: `解锁2把神器之后就可以开始强化。`,
		12041: `神器养成是所有神器共享，不用担心换神器带来的损失！`,
		12042: `竞技场汇聚着许多优秀召唤师，是证明实力的地方。`,
		12043: `神界发现一条裂缝，裂缝中出现了世界BOSS，大法师已经号令所有召唤师一起击杀它！`,
		12044: `神界之门开启后能聚集神界力量，召唤出指定阵营英雄！`,
		12045: `点击左右按钮，可以切换阵营`,
		12046: `每日副本能够产出大量魂石、金币等资源，是召唤师每日必做功能！`,
		12047: `精炼玩法已经开启，精炼可以大幅度提高战斗力！`,
		12048: `公会功能已经开启，公会中可以结识很多志同道合的召唤师。`,
		12049: `点击申请你心仪的公会申请或者创建一个公会！`,
		12050: `报告主人，在一片神秘岛屿发现了大量矿产。`,
		12051: `神秘岛屿分为普通、中级、高级，岛屿越好刷新的矿产等级越高`,
		12052: `由于争夺人数太多，神界指定规则，只有实力最强的人才可以占领并进行采集。`,
		12053: `现在我们选择一个占领玩家实力相近的或者无人占领矿点进行采集！`,
		12054: `新功能失落遗迹已经开启！失落遗迹埋葬的许多圣物，我们前往一探究竟。`,
		12055: `失落遗迹分为15关，每3关可以获得一个宝箱奖励。`,
		12056: `每次战斗都会记录剩余血量，记得合理上阵英雄哦！`,
		12057: `在神界的西部，有一片迷雾森林，只要进入的英雄都会迷失方向，只等待浓雾散开。我们快前往一探究竟！`,
		12058: `迷雾森林进行到一定关卡，可以领取丰厚奖励`,
		12059: `迷雾森林会产出融魂道具，融魂可以大幅度提高英雄属性。`,
		12060: `探险玩法已经开启，快来体验格子世界的乐趣！`,
		12061: `装备宝石可以增加装备属性，快速提升战斗力！`,
		12062: `宝石分为3种：攻击宝石、生命宝石、防御宝石，每次升级宝石需要消耗指定数量的宝石。`,
		12063: `哥布林是大陆上最精明的商人，但是他们矮小的身材导致经常被掠夺。`,
		12064: `哥布林商人发出请求，只要成功护送他们的召唤师，都可以获得丰厚奖励。`,
		12065: `掠夺其他玩家的护送商人，也可以获得可观奖励。`,
		12066: `试练塔已经解锁，里面充满了挑战。`,
		12067: `通关每个关卡可以获得进化徽章，进化徽章是英雄进阶的必备材料哦`,
		12068: `英雄觉醒可以大幅度提高英雄属性，还可以使用3星以下英雄作为材料！`,
		12069: `觉醒100级还可以获得新的时装！`,
		12070: `圣物蕴涵着强大的能量，拥有之后击败魔物将会更加得心应手！`,
		12071: `提升圣物等级可以让圣物的能量更加强大`,
		12072: `魔物数量众多，组队作战可以事半功倍哦，现在可以通过世界聊天寻找你的小伙伴！`,
		12073: `欢迎加入公会，在公会中可以挑战公会BOSS和公会战，还可以提高公会技能和兑换特殊奖励`,
		12074: `大厅可以查看公会信息和公会成员`,
		12075: `捐献可以获得公会贡献`,
		12076: `使用公会贡献兑换特殊奖励`,
		12077: `技能可以增加指定阵营属性`,
		12078: `首充可以领取超值大礼包！`,
		12079: `6星雅典娜拥有强力群攻，充值任意金额即可获得！`,
		12080: `艾米`,
		12081: "神力",
		12082: "积分：",
		12083: "公会：",
		12084: "无",
		12085: "({0}装备中)",
		12086: "亿",
		12087: "万",
		12088: "天",
		12089: "小时",
		12090: "分钟",
		12091: "个月",
		12092: "前",
		12093: "秒",
		12094: "倒计时: {0}天{1}小时",
		12095: "倒计时: {0}小时{1}分",
		12096: "{0}天{1}小时",
		12097: "分钟前",
		12098: "小时前",
		12099: "天前",
		12100: "刚刚离线",
		12101: "离线{0}分钟",
		12102: "离线{0}小时",
		12103: "离线{0}天",
		12104: "离线1个月以上",
		12105: "后免费",
		12106: "召唤一次",
		12107: "召唤十次",
		12108: "次",
		12109: "十连必出",
		12110: "首次十连必出",
		12111: "四星英雄",
		12112: "五星英雄",
		12113: "圣物",
		12114: "新手阵容",
		12115: "基础阵容",
		12116: "进阶阵容",
		12117: "图 鉴",
		12118: "英雄背景",
		12119: "剩余可输入文字：{0}",
		12120: "图鉴进度：{0}/{1}",
		12121: "属性总览",
		12122: "普通",
		12123: "困难",
		12124: "试炼塔排行",
		12125: "公会：{0}",
		12126: "试炼塔奖励",
		12127: "关卡信息",
		12128: "神力达到{0}",
		12129: "等级达到{0}",
		12130: "任 务",
		12131: "日 常",
		12132: "勇者之证",
		12133: "试炼任务",
		12134: "成 就",
		12135: "活动时间: {0}月{1}日~{0}月{1}日",
		12136: "激活专属奖励,勇者等级+{0}",
		12137: "购买等级",
		12138: "购买{0}级,升至{1}级",
		12139: "升至{0}级,立即领取以下奖励",
		12140: "[每周]",
		12141: "[赛季]",
		12142: "已解锁",
		12143: "解锁领取",
		12144: "每周挑战",
		12145: "终极试炼",
		12146: "活跃度+{0}",
		12147: "进行中...",
		12148: "完成上个任务开启",
		12149: "我要变强",
		12150: "新手入门",
		12151: "小资必备",
		12152: "土豪必刷",
		12153: "集 市",
		12154: "商 城",
		12155: "勋章商店",
		12156: "公会商店",
		12157: "结晶商店",
		12158: "遗迹商城",
		12159: "荣耀商店",
		12160: "神域商店",
		12161: "刷新有惊喜,别忘了哦!",
		12162: "走过路过,千万别错过!",
		12163: "挑战竞技场,可以获得勋章!",
		12164: "积极参与公会活动,获得公会贡献!",
		12165: "开启神界之门也会获得一个结晶哦!",
		12166: "失落遗迹奖励丰厚,每日0点更新!",
		12167: "参与荣耀之战或者进行押注,都可以获得大量荣耀币!",
		12168: "与好友组队,一起决战神域!",
		12169: "{0}折",
		12170: "刷新次数：{0}/{1}",
		12171: "免费次数:({0}/{1})",
		12172: "倒计时:{0}",
		12173: "集市刷新",
		12174: "确定要花费      {0}刷新集市商品",
		12175: "购买商品",
		12176: "今日可买{0}次",
		12177: "拥有：",
		12178: "我的神力",
		12179: "等级",
		12180: "我的等级",
		12181: "关卡",
		12182: "我的关卡",
		12183: "试炼塔",
		12184: "公会",
		12185: "公会等级",
		12186: "排行榜",
		12187: "未上榜",
		12188: "已膜拜",
		12189: "膜拜",
		12190: "邮件数量：{0}",
		12191: "邮 件",
		12192: "最近登录",
		12193: "默认分页",
		12194: "用户须知",
		12195: "隐私保护指引",
		12196: "汇杰思特游戏用户协议",
		12197: "你已占领新矿产，以下是上个矿产采集奖励",
		12198: "以上为上个矿点收益",
		12199: "采集成功",
		12200: "采集失败",
		12201: "{0}掠夺了你的矿点，损失了",
		12202: "{0}掠夺了你的矿点，没有损失",
		12203: "你抵御了{0}的抢占",
		12204: "你抵御了{0}的掠夺",
		12205: "你占领的{0}已经采集完成，以下是采集奖励。",
		12206: "请前往神秘岛屿领取！",
		12207: "你的{0}被{1}占领。",
		12208: "截止被占领，你共获得以下奖励",
		12209: "暂无收益",
		12210: "矿产",
		12211: "神秘人",
		12212: "开启",
		12213: "开启中...",
		12214: "当前可获得金币",
		12215: "剩余兑换次数",
		12216: "可掠夺:{0}次",
		12217: "可占领:{0}次",
		12218: "初始",
		12219: "觉醒",
		12220: "时装",
		12221: "未获得",
		12222: "更 换",
		12223: "玩家信息",
		12224: "修改昵称",
		12225: "英雄形象",
		12226: "英雄形象设置",
		12227: "头像设置",
		12228: "头像框设置",
		12229: "公 告",
		12230: "未知",
		12231: "加入",
		12232: "申请",
		12233: "我要加入",
		12234: "点击加入",
		12235: "公会技能",
		12236: "输出,治疗,辅助,控制,坦克",
		12237: "创建公会",
		12238: "VIP{0}可创建公会",
		12239: "免费援助",
		12240: "援助",
		12241: "求援中",
		12242: "可领取",
		12243: "公会救援",
		12244: "今日求援完成次数 ({0}/{1})",
		12245: "免费援助次数：",
		12246: "钻石援助次数：",
		12247: "求 援",
		12248: "在线",
		12249: "会长",
		12250: "副会长",
		12251: "成员",
		12252: "需要验证",
		12253: "直接加入",
		12254: "设 置",
		12255: "公会大厅",
		12256: "会长{0}退位让贤，将会长职位传给了{0}",
		12257: "道不同不相为谋，会长将{0}踢出了公会。",
		12258: "欢迎{0}加入了大家庭，一同求道！",
		12259: "申请列表",
		12260: "通关第{0}关",
		12261: "奖 励",
		12262: "最高关卡",
		12263: "公会副本",
		12264: "公会副本排行",
		12265: "我的排名：",
		12266: "击杀排行",
		12267: "青铜",
		12268: "白银",
		12269: "铂金",
		12270: "王者",
		12271: "暂无公会达到王者段位",
		12272: "赛季排名",
		12273: "我的赛季积分:",
		12274: "未入王者",
		12275: "会员排名",
		12276: "S{0}赛季",
		12277: "赛区排名",
		12278: "{0}组排名",
		12279: "段位宝箱",
		12280: "查看上轮排名",
		12281: "已报名",
		12282: "由于{0}级人数小于{1}人，不能参与本轮比赛",
		12283: "由于本轮轮空，直接获得积分，请静候下轮比赛",
		12284: "报名",
		12285: "等待会长报名中",
		12286: "王者第{0}名",
		12287: "下轮比赛倒计时：",
		12288: "未报名",
		12289: "赛",
		12290: "总战斗力：",
		12291: "已击败",
		12292: "挑 战",
		12293: "区服",
		12294: "公会贡献",
		12295: "已捐献",
		12296: "捐 献",
		12297: "奖励详情",
		12298: "收益提升",
		12299: "开启新章节",
		12300: "挂机",
		12301: "下一层",
		12302: "未通关",
		12303: "回合",
		12304: "通关奖励",
		12305: "击杀",
		12306: "{0}关后可击杀",
		12307: "快速战斗",
		12308: "神界之门",
		12309: "英雄转换",
		12310: "{0}星英雄掉落(整卡掉落概率{1}%，碎片掉落概率{2}%)",
		12311: "组队信息",
		12312: "激战神域邀请",
		12313: "你的好友{0}邀请你组队，一起激战神域，是否要加入？",
		12314: "神域积分：{0}",
		12315: "神域币：{0}",
		12316: "奖励次数：{0}次",
		12317: "{0}秒后自动准备",
		12318: "拖动玩家可以对换位置",
		12319: "{0}秒后自动开始",
		12320: "开始战斗",
		12321: "取消准备",
		12322: "准备",
		12323: "组队奖励加成{0}%",
		12324: "排 名",
		12325: "邀请好友",
		12326: "奖励加成：{0}%",
		12327: "准备完毕",
		12328: "未准备",
		12329: "队长",
		12330: "已邀请",
		12331: "邀 请",
		12332: "已阵亡",
		12333: "出战中",
		12334: "速度",
		12335: "生命上限",
		12336: "攻击上限",
		12337: "防御上限",
		12338: "更换英雄",
		12339: "阵营克制",
		12340: "主动技能",
		12341: "被动技能",
		12342: "类型",
		12343: "（{0}阶激活）",
		12344: "融魂",
		12345: "觉醒",
		12346: "升星",
		12347: "信息",
		12348: "速度增加",
		12349: "(英雄达到{0}星)",
		12350: "上限",
		12351: "生命",
		12352: "攻击",
		12353: "防御",
		12354: "英雄升阶",
		12355: "等级上限",
		12356: "升  阶",
		12357: "升  星",
		12358: "自动融魂",
		12359: "条件：英雄达到{0}星",
		12360: "觉醒+{0}解锁新时装",
		12361: "觉醒+{0}激活",
		12362: "敬请期待",
		12363: "消耗道具{0}激活",
		12364: "获得{0}解锁",
		12365: "已穿戴",
		12366: "穿 戴",
		12367: "激 活",
		12368: "解锁条件:英雄达到{0}阶",
		12369: "该技能已满级",
		12370: "升级条件:英雄达到{0}星自动升级",
		12371: "选择英雄",
		12372: "圣物图鉴",
		12373: "基础属性",
		12374: "品质：{0}",
		12375: "强 化",
		12376: "升星属性",
		12377: "升 星",
		12378: "介绍",
		12379: "替 换",
		12380: "脱 装",
		12381: "选 择",
		12382: "圣物升星",
		12383: "星级预览",
		12384: "圣物重生",
		12385: "已激活",
		12386: "未激活",
		12387: "本届",
		12388: "上届",
		12389: "第{0}组",
		12390: "已截止",
		12391: "报名倒计时：",
		12392: "预选赛进行中：",
		12393: "本服对决已结束",
		12394: "本届荣誉之战已结束",
		12395: "下一场开始倒计时：",
		12396: "跨服对决倒计时：",
		12397: "押注奖励",
		12398: "奖励",
		12399: "我的记录",
		12400: "对战选手",
		12401: "本服",
		12402: "跨服",
		12403: "冠军王位",
		12404: "胜利",
		12405: "失败",
		12406: "押注成功",
		12407: "押注失败",
		12408: "已押注",
		12409: "押注",
		12410: "社交",
		12411: "已收到请求 :{0}",
		12412: "层",
		12413: "荣耀之战",
		12414: "匹配赛",
		12415: "竞技场",
		12416: "好友切磋",
		12417: "每日副本",
		12418: "失落遗迹",
		12419: "关",
		12420: "迷雾森林",
		12421: "世界BOSS",
		12422: "商队护送",
		12423: "公会战",
		12424: "公会副本",
		12425: "神秘岛屿",
		12426: "激战神域",
		12427: "组队副本",
		12428: "{0}掠夺了你,损失了",
		12429: "{0}掠夺了你,由于护送的是传说商队，所以没有损失",
		12430: "掠夺记录",
		12431: "护送奖励",
		12432: "护送：{0}次",
		12433: "掠夺：{0}次",
		12434: "掠夺次数：{0}",
		12435: "强化大师{0}级",
		12436: "精炼大师{0}级",
		12437: "全身装备强化{0}级",
		12438: "全身装备精炼{0}级",
		12439: "获取途径",
		12440: "数量：{0}",
		12441: "精炼属性",
		12442: "精 炼",
		12443: "套装属性",
		12444: "{0}+{1}% (穿戴{2}件激活)",
		12445: "红色",
		12446: "橙色",
		12447: "紫色",
		12448: "强化大师未激活",
		12449: "精炼大师未激活",
		12450: "宝石合成",
		12451: "宝石背包",
		12452: "暂无未镶嵌的{0}",
		12453: "全部",
		12454: "神界答题",
		12455: "恭喜你！答对了，获得以下奖励：",
		12456: "很遗憾，回答错误，请再接再厉！",
		12457: "猜大小",
		12458: "恭喜你！猜对了大小，获得以下奖励：",
		12459: "很遗憾，你猜错了，请再接再厉！",
		12460: "前进",
		12461: "后退",
		12462: "猜拳对决",
		12463: "恭喜你！战胜了对手，获得以下奖励：",
		12464: "胜败乃兵家常事，不要气馁！",
		12465: "随机获得其中一种物品",
		12466: "眼力比拼",
		12467: "恭喜你！打开杯子后获得以下奖励：",
		12468: "奖励预览",
		12469: "回复血量",
		12470: "复活英雄",
		12471: "好友助阵",
		12472: "今日已雇佣: {0}/{1}",
		12473: "不能选择超过我方的最高神力英雄{0}%的好友英雄",
		12474: "来自好友",
		12475: "组队挑战排行榜",
		12476: "未挑战",
		12477: "转移队长",
		12478: "已通关",
		12479: "当前队伍关卡",
		12480: "组队挑战邀请",
		12481: "你的好友{0}邀请你进行组队挑战，是否要加入？",
		12482: "好友邀请",
		12483: "队  伍",
		12484: "组队大厅",
		12485: "单人挑战",
		12486: "挑  战",
		12487: "等待玩家加入",
		12488: "已申请",
		12489: "申 请",
		12490: "精炼副本",
		12491: "宝石副本",
		12492: "碎片副本",
		12493: "等级{0}级开启",
		12494: "扫 荡",
		12495: "召唤师，欢迎回到神界！",
		12496: "系统",
		12497: "表情",
		12498: "私聊",
		12499: "点击输入文字",
		12500: "{0}造成了{1}点伤害",
		12501: "大于",
		12502: "复活中",
		12503: "争夺人数：{0}",
		12504: "({0}后恢复1次)",
		12505: "伤害排名",
		12506: "概率",
		12507: "必掉",
		12508: "虚位以待",
		12509: "英雄碎片",
		12510: "选择奖励",
		12511: "开启倒计时：",
		12512: `恭喜获得神器"{0}"`,
		12513: "技能",
		12514: "洗练",
		12515: "已解锁{0}把",
		12516: "解锁{0}把神器开启强化",
		12517: "提升",
		12518: "神器{0}级",
		12519: "解锁{0}把神器开启技能升级",
		12520: "规 则",
		12521: "选择神器",
		12522: "卸 下",
		12523: "神器收集",
		12524: "把",
		12525: "神器升星",
		12526: "各星级特殊属性",
		12527: "（以上属性不叠加，只会生效最高星）",
		12528: "星",
		12529: "当前星级：{0}星",
		12530: "神器洗练",
		12531: "洗练等级：{0}级",
		12532: "当前经验",
		12533: "已满",
		12534: "自动升星",
		12535: "停止",
		12536: "（ 点击单条属性可锁定不被洗练 ）",
		12537: "已锁定{0}个技能，每次洗练消耗{1}钻石。",
		12538: "洗练有5级以上属性，确定要洗练吗？",
		12539: "战斗记录",
		12540: "挑战",
		12541: "防守",
		12542: "成功",
		12543: "积分",
		12544: "段位",
		12545: "本轮倒计时：",
		12546: "获得",
		12547: "本服排名:",
		12548: "跨服排名:",
		12549: "排名",
		12550: "历史最高：",
		12551: "竞技场排名",
		12552: "每日{0}结算，排名奖励通过邮件发放",
		12553: "开服基金",
		12554: "已结束",
		12555: "倒计时：",
		12556: "当前全服首充：{0}人",
		12557: "已关闭",
		12558: "已结束(领奖倒计时:{0})",
		12559: "兑换物品",
		12560: "公会：{0}",
		12561: "暂无公会",
		12562: "阵 容",
		12563: "{0}级：{1}",
		12564: "(被动)",
		12565: "(主动)",
		12566: "首次加载时间较长，请耐心等待",
		12567: "点击刷新",
		12568: "抵制不良游戏，拒绝盗版游戏。注意自我保护，谨防受骗上当。",
		12569: "适度游戏益脑，沉迷游戏伤身。合理安排时间，享受健康生活。",
		12570: "加载中...",
		12571: "再来一次",
		12572: "下一关",
		12573: "前往下一关",
		12574: "前往下一关({0}s)",
		12575: "英雄分解",
		12576: "分解预览",
		12577: "选择分解英雄",
		12578: "已拥有英雄：{0}/{1}",
		12579: "装备",
		12580: "精炼",
		12581: "宝石",
		12582: "分解",
		12583: "更换",
		12584: "穿戴",
		12585: "卸下",
		12586: "生       命：",
		12587: "攻       击：",
		12588: "防       御：",
		12589: "（已满级）",
		12590: "（已达上限）",
		12591: "装备分解",
		12592: "你将分解{0}件装备",
		12593: "未激活{0}大师",
		12594: "已激活{0}大师{1}级",
		12595: "强化大师",
		12596: "精炼大师",
		12597: "套装",
		12598: "{0}件套加成",
		12599: "选择装备",
		12600: "无套装加成",
		12601: "{0}{1}件套加成",
		12602: "剩余兑换{0}次",
		12603: "兑换",
		12604: "前往",
		12605: "充值",
		12606: "已充值",
		12607: "剩余{0}次",
		12608: "限购{0}次",
		12609: "基金",
		12610: "第{0}天可领取",
		12611: "你在删档测试中累计充值：{0}元",
		12612: "现在可以领取返利：{0}钻石",
		12613: "超级会员",
		12614: "单日累计充值{0}元",
		12615: "历史累计充值{0}元",
		12616: "分享奖励",
		12617: "英雄计划",
		12618: "快来一起战斗吧！",
		12619: "去邀请",
		12620: "今日福利",
		12621: "今日目标",
		12622: "今日任务",
		12623: "今日抢购",
		12624: "第{0}天",
		12625: "实名认证",
		12626: "去认证",
		12627: "我要领取",
		12628: "通关",
		12629: "星级",
		12630: "我的星级：{0}星",
		12631: "排行",
		12632: "剩余时间:",
		12633: "神界排行",
		12634: "关卡排行",
		12635: "等级排行",
		12636: "英雄星级",
		12637: "神力排行",
		12638: "恭喜购买成功！",
		12639: "等待到账...",
		12640: "{0}元礼包",

		11000: '进度条满之后才可挑战',
		11001: '通关前一关卡',
		11002: 'Lv.{0}级开启',
		11003: '通关前一章节',
		11004: '战力达到{0}开启',
		11005: '通关主线{0}后开启',
		11006: '已完成',
		11007: '正在完成',
		11008: '操作处于cd中',
		11009: '尚未达成',
		11010: '已結束',
		11011: '请选择要分解的装备',
		11012: '操作过于频繁',
		11013: '没有可选装备',
		11014: '兑换后超装备可拥有上限,无法兑换',
		11015: '刷新太频繁，请稍后再试',
		11016: '材料不足，觉醒失败',
		11017: '             {0}级可以发送消息',
		11018: '队伍已解散',
		20003: '世界之树，孕育着人类和英雄。',
		20004: '古老的封印被解开，黑龙“尼德霍格”苏醒了！',
		20005: '当黑龙啃食完世界之树的树根后，',
		20006: '面对这场浩劫，东西方的诸神将全力阻止这一切。',
		20007: '诸神将迎来毁灭的黄昏。',
		20011: '        为了预防青少年过渡游戏，未满18周岁的用户和身份信息不完整的用户将受到防沉迷系统的限制，《守护神域》积极响应国家新闻出版总署防沉迷政策要求，开发出手机游戏防沉迷系统。年龄已满18周岁的玩家，在填写身份资料后，可以不受防沉迷系统影响，自由进行游戏。根据身份信息未成年的，5小时将被强制下线并且必须下线休息5小时。\n        说明:系统只支持输入15位或18位中国身份证号码，持有其他证件（如:外国护照，军人证等）者，请与客服GM联系处理。填写身份信息将使我们可以对您的年龄做出判断，以确定您的游戏时间是否需要按照国家新闻出版总署的要求纳入防沉迷系统的管理。\n        隐私说明:用户填写的身份信息属于用户隐私、《守护神域》游戏绝对尊重用户个人的隐私权。所以，《守护神域》游戏绝对不会公开，编辑或透露用户的信息内容，除非有法律许可及公安管理规定。',
		20020: `      全服首充人数达到要求，并且玩家累计充值达到指定金额，即可领取奖励。`,
		20021: `亲爱的异界勇士们：\n《英雄计划》欢迎各位勇士参与本次游戏测试！\n本次测试为计费删档测试。\n开服时间：11月29日10:00\n关服时间：12月6日10:00\n测试结束后服务器将关闭，游戏内的角色数据也会被删除。\n当前测试为删档内测，不代表游戏的最终品质，所有问题和建议将安排在后续的开服计划中，为各位勇士呈现最优秀的游戏品质。\n感谢大家对游戏的支持，祝大家游戏愉快。`,
		20022: `为了给各位勇士提供更优质的游戏体验，在本次测试中，我们为各位勇士准备了以下的活动：\n【测试充值返还】\n在本次测试进行付费体验的玩家，系统会记录同一平台以及相同账号下累计充值总金额，并在不删档首发时返还同一账号下充值金额的200%钻石！\n返还规则：\n       1、删档期间玩家购买了游戏内任意礼包，则该类型礼包购买金额也应计入充值金额；\n        2、在不删档首发开启后，删档测试期间充值的玩家可通过游戏内领取钻石；\n        3、在不删档首发开启后，玩家可登陆删档期间的本账号所创建的任意一角色，但钻石会返利到首发期间首次创建的角色，完成一次领取后即完成返还。\n       4、返还的钻石不会激活游戏内的充值奖励（如首充奖励、累计充值奖励等）；\n       5、累计充值金额为本账号下所有角色充值金额的总和，系统赠送的钻石不会返还(包括充值时额外赠送的钻石)；\n       6、结合上述规则，例如：\n      加百列在删档测试期间一共充值了1000元，则在首发时可以获得20000钻石的返利。`,
	};

	static lansArr = {
		20002: [[`规 则`, `1.公会副本每一关有一个BOSS，全公会玩家一起挑战，每次挑战后记录BOSS剩余血量.`, `2.每次挑战可以获得挑战奖励，击杀BOSS后，额外获得伤害排名奖励.`, `3.通关奖励和伤害排名奖励只能领取一次.`, `4.每个关卡通关奖励次数不能超过公会上限人数.`]],
		20003: [[`规 则`, `1.活动期间，购买基金即可激活.`, `2.七天内每天可以领取一次奖励，七天共可领取七次奖励.`]],
		20004: [[`规 则`, `1.每次许愿可以获得转盘上其中一个奖励.`, `2.每天可以获得一次免费许愿次数.`, `3.如果没有免费次数，许愿花费50钻石进行许愿.`, `4.每天限制许愿次数，提升VIP可以获得更多次数.`]],
		20008: [[`规 则`, `1.世界BOSS是来自己黑暗深渊的魔物，只有全服玩家齐心协力才能消灭.`, `2.世界BOSS分为不同等级，需要达到要求等级才能挑战.`, `3.挑战次数按照时间恢复，上限10次，可以花费钻石购买.`, `4.奖励分为:挑战奖励和排名奖励.`]],
		20009: [[`规 则`, `1.每天有一定掠夺和护送次数，每天0点重置.`, `2.每次护送最多被掠夺2次.`, `3.每天特定时间段，护送奖励翻倍.`, `4.可以花费钻石刷新到稀有商队.`, `5.每次护送15分钟，可以花费钻石进行加速`]],
		20012: [[`矿点分类`, `1.矿点分为1-5级，1-3级为金币矿，4-5级为钻石矿.`, `2.岛屿等级越高刷新出等级越高.`],
		[`刷新规则`, `1.每个岛屿特定时间点会刷新10个资源矿，资源矿等级根据岛屿等级决定.`, `2.已占领矿点不会刷新，只会在采集完成后消失.`],
		[`抢占规则`, `1.每个玩家只能占领一个矿点，每天只能占领3个岛屿.`, `2.玩家可以选择掠夺其他玩家矿点，掠夺成功会获得一定比例已采集的矿产.`, `3.掠夺会消耗一定的掠夺次数，掠夺次数可以购买.`, `4.玩家也可以选择直接抢占其他玩家矿点，抢占成功可以获得已采集部分矿产并占领该玩家矿点.`]
		],
		20013: [[`概 要`, `1.公会战采用跨服形式，相邻服务器进行战斗.`],
		[`休赛期规则`, `1.每周日1点-24点为跨服争霸休赛期，也是下个赛季报名期.`, `2.报名需要公会10名以上30级玩家.`, `3.报名成功后，公会中30级玩家均可以参加公会战.`],
		[`比赛期规则`, `1.每周一到周六为比赛期，比赛期每天6:00-22:00进行一轮比赛.`, `2.周一到周五均可以报名，报名成功会加入次日青铜组比赛.`, `3.每天5:30计算公会30级以上玩家数量，人数不足的公会本轮比赛休战，次轮人数达到才可以参加.`, `4.每天5:30更新玩家本轮比赛防守阵容，防守阵容根据竞技场防守阵容决定.`, `5.轮空的公会将直接获胜，并获得与所有公会成员积分之和以及获胜积分`],
		[`比赛规则`, `1.每周一0点，清空积分，初始都是青铜段位.`, `2.挑战战胜敌方公会玩家，可获得比赛积分.`, `3.比赛结束后根据比赛积分，判断双方胜负，胜利的公会会加上额外比赛积分.<br/>分别是青铜:1500 、白银:3000、铂金:4500、王者:7500`, `4.根据22:00的比赛积分，会确定小组排名.<br/>	a、青铜组:1-6晋级，其余保级<br/>	b、白银组:1-5晋级，6-9保级，其余保级<br/>	c、铂金组:1-4晋级，5-8保级，其余降级<br/>	d、王者组:进入王者组后，不会再降级`, `5.赛季累计积分:赛季开始后每轮比赛获得的积分将累计，作为最后王者组排名依旧.`, `6.每轮比赛开始后，2个公会积分都为0.`],
		[`挑战规则`, `1.每名玩家每天可以有3次出手机会，每个对手有3条生命.`, `2.如果未击败对手，对手血量将会记录，下次调整按照当前血量挑战.`, `3.每次挑战无论胜负，均可以获得1次翻拍奖励.`],
		[`奖励设定`, `1.公会在本赛季每提升一个段位均可开启对应段位宝箱，段位宝箱数量为当前公会晋级时的公会人数上限.`, `2.相同段位的宝箱每人每赛季最多领取1次，更换公会无法重复获取.`, `3.每个赛季周六23点发放赛季排名奖励.`, `4.每个公会内按照本赛季累计积分排行，每周结算一次，奖励按照最终段位发放.`]
		],
		20014: [[`规 则`, `1.荣耀之战为个人PVP争霸赛，玩家只需报名，后续系统自动匹配战斗，期间可以进行押注.`, `2.荣耀之战分为本服对决和跨服对决，本服对决的前16名玩家自动晋级到跨服对决比赛.`, `3.比赛采取淘汰制，胜利晋级下一轮比赛，失败则止步.`, `4.比赛开始时候，切记要保证最强阵容.`],
		[`比赛时间`, `1.报名时间:周一0点-周三11:30`, `2.本服预选赛:周三11:30-12:00`, `3.本服16进8:周三20:00`, `4.本服8进4:周四12:00`, `5.本服半决赛:周四20:00`, `6.本服决赛:周五12:00`, `7.跨服预选赛:周五20:00`, `8.跨服16进8:周六12:00`, `9.跨服8进4:周六20:00`, `10.跨服半决赛:周天12:00`, `11.跨服决赛:周天20:00`],
		[`押注规则`, `1.除了预选赛，其他比赛均可押注，押注成功即可获得奖励，奖励邮箱领取。每一轮比赛开始{0}分钟前均可进行押注.`]
		],
		20015: [[`规 则`, `1.匹配赛每周一开启，周日22:00结算本周奖励，重置挑战次数宝箱奖励.`, `2.匹配赛胜负会产生积分变化，积分会在赛季结束后重置，每个赛季结束时间以公告为准.`, `3.玩家根据分数决定自己的段位，段位分为荣耀王者、最强王者、钻石、铂金、黄金、白银、青铜.`, `4.每周会根据玩家段位和本服积分排名发放奖励.`, `5.玩家每天有一定挑战次数，挑战次数每日24点刷新.`]],
		20016: [[`规 则`, `1.活跃玩家加成:{0}%<br/>(除了一键邀请外玩家均是活跃玩家，每个玩家加成{3}%).`, `2.队长好友加成:{1}%<br/>(队伍中每有一名队长的好友，全队收益加成{4}%).`, `公会成员加成:{2}%<br/>(队伍中每有一名队长的公会成员，全队收益加成{5}%).`]],
		20017: [[`玩法概述`, `1.激战神域是跨服3人组队战斗玩法，其中神域积分用于争夺排名，获得稀有奖励，神域币用于商店兑换专属奖励.`],
		[`单人状态`, `1.自动匹配:系统将自动寻找并加入开服房间的空缺队伍.`, `2.创建队伍:成为队长，创建一个房间.`, `3.神域商店:兑换物品奖励.`, `4.排行榜:按照本服积分进行排行，神域积分每周一0点重置并发放奖励.`],
		[`组队状态`, `1.邀请好友:所有玩家都可以邀请好友，点击空置即可邀请.`, `2.更换位置:队长可以拖动玩家进行位置更换.`, `3.剩余奖励次数:每日3次，0点重置，可以购买，VIP越高购买次数越多.`, `4.出战:所有玩家准备完毕后，队长才可以开始.`],
		[`战斗状态`, `1.战斗采取车轮战.`, `2.按照出站顺序出战，死亡后，下一个上场.`, `3.每场之间保存血量.`, `4.全部死亡的一方判断为失败，另外一方胜利.`, `5.胜利失败均可获得奖励.`, `6.MVP为击杀最多的玩家;如果击杀一样，则判断积分高的为MVP;如果积分一样，则按照出站先的为MVP.`]
		],
		20018: [[`规 则`, `1.只有橙色和红色圣物才可以进行重生.`, `2.每次重生需要消耗一个重生石.`, `3.重生返还所有养成资源:经验返还成圣物升级石，升星消耗返还消耗的同种圣物.`]],
		20019: [[`规 则`, `1.圣物升级可以消耗圣物升级石或者其他圣物.`, `2.只有紫色及以下的圣物才能被作为材料消耗，按照选择圣物品质从低到高消耗.`, `3.每次只能强化1级，多余经验会返还成圣物升级石.`, `4.如果消耗的圣物已强化，则圣物的等级转换成经验继承到新的圣物上.`]],
		20021: [[`神界之门`, `1.每个神界密钥可以从对应阵营的神界之门中召唤1次英雄.`, `2.召唤将概率获得整卡或者碎片.`, `3.每次召唤必定获得1个神界结晶和一定数量转换星尘，一定数量的神界结晶可以用来兑换指定英雄.`],
		[`神力转换`, `1.通过转换星尘，可以4/5星英雄进行同阵营间随机转换.`, `2.英雄转换后，新生的英雄将继承原来英雄所有的属性和装备.`]
		],
		30001: [[`规 则`, `1.历练分为3个难度，普通、困难和地狱.`, `2.每个难度有10个副本，每个副本有10关卡，第10关是BOSS关卡.`, `3.通关普通所有关卡后才能开启困难，通关困难所有关卡后才能开启地狱.`]],
		30002: [[`规 则`, `1.英雄分为4个阵营，阵营之间存在克制关系，攻击克制单位可以造成额外的伤害.`, `2.自动战斗时，英雄会优先攻击克制的单位.`, `3.英雄出手顺序按照速度决定，速度越快，出手越早.`]],
		40001: [[`规 则`, `1.升星需要消耗若干个指定英雄，6星以后还需额外消耗一定数量进化徽章.`, `2.被消耗的英雄后会还所有养成材料.`, `3.3星以上英雄才可以升星，部分初始4星英雄只能升到6星，初始5星英雄都可以升到10星（可以通过图鉴辨别）.`, `4.9星升10星需要消耗9星任意阵营的英雄.`]],
		40002: [[`探险规则`, `1.每个骰子随机1-6点，根据点数移动对应格子，并触发格子事件.`, `2.事件分为：空、物品奖励、问题和奇遇等.`, `3.每完成一圈可以获得通关奖励.`, `4.骰子主要获得途径是领取挂机奖励.`]],
		40003: [[`组队副本`, `1.组队副本为多人玩法，玩家可以组建自己的队伍，或者加入他人队伍.`, `2.单人和组队都可以通关副本，只能挑战已解锁关卡.`, `3.队伍的关卡限制等于队长的最高关卡，加入和邀请的玩家需要不小于限制才能加入.`],
		[`奖 励`, `1.奖励分为：个人首通奖励、阶段性奖励和全服首通奖励.`, `2.个人首通奖励：首次通关新副本，可以获得首通奖励。队长直接挑战活动，队员通过邮件发放.`, `3.阶段性奖励：每通关指定关卡，可以领取阶段性奖励，阶段性奖励很丰厚，欢迎玩家突破自己.`, `4.全服首通奖励：全服首通了新副本，全服所有玩家都可以收到首通该副本奖励邮件.`]
		],
	};

	/** 数字汉字 */
	static numChinese: Array<string> = [
		"零", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二", "十三", "十四", "十五", "十六", "十七", "十八", "十九", "二十", "二十一", "二十二", "二十三", "二十四", "二十五", "二十六", "二十七", "二十八", "二十九", "三十", "三十一", "三十二", "三十三", "三十四", "三十五", "三十六", "三十七", "三十八", "三十九", "四十", "四十一", "四十二", "四十三", "四十四", "四十五", "四十六", "四十七", "四十八", "四十九", "五十"
	];
	/** 品质颜色 */
	static qualityColor: string[] = ["","白色","绿色","蓝色","紫色","橙色","红色"];
	/** 品质名称 */
	static qualityName: string[] = ["", "普通", "高级", "精良", "稀有", "史诗", "传说"];
	static attrName: string[] = [
		"", "生命", "攻击", "防御", "速度",
		"暴击率", "暴击伤害", "效果命中", "效果抵抗",
		"吸血", "反击", "再次出手",
		"眩晕", "伤害加成", "治疗加成",
		"增伤", "减伤","怒气","免疫控制"
	];
	/** 宝石名称 */
	static baoshiName: string[] = ["", "生命宝石", "攻击宝石", "防御宝石"]
	/** 神灵阵营名称 */
	static GOD_RACE_NAME: string[] = ["全部", "神殿", "玄门", "圣域", "光明", "黑暗"];
	/** 神灵阵营属性 */
	static RACE_FORCE_STR: string[] = ["全能之力", "神殿之力", "玄门之力", "圣域之力", "光明之力", "黑暗之力"];
	/** 神灵类型名称 */
	static godTypeName: string[] = ["", "输出", "治疗", "辅助", "控制", "坦克"];
	/** 星级名称 */
	static starName: string[] = ["","一星","二星","三星","四星","五星","六星","七星","八星","九星","十星"];
	/** 频道名称 以频道为索引index*/
	static channelNames : string[] = ["","世界","公会","组队","私聊","同省","跨服","系统"];
	/**
	  * 
	  * @param defaultTxt 自定义提示
	  * @param id 编号提示
	  * @param args 传的是物品Id可跳转获得途径
	  */
	static getLan(defaultTxt: string, id: any = -1, ...args): string {
		let tempStr = LanMgr.lans[id] || defaultTxt;
		if (args.length > 0 && id != Lans.cost) {
			tempStr = FormatStr(tempStr, args);
		}
		if (id == Lans.daimond || id == 10037 || id == 10073 || id == 10130 || id == 10156) {/**钻石不足 */
			dispatchEvt(new game.TopUpEvent(game.TopUpEvent.SHOW_CHONGZHI_PANEL));
		} else if (id == 10082) {/**次数不足，增加VIP次数 */
			dispatchEvt(new game.TopUpEvent(game.TopUpEvent.SHOW_CHONGZHI_PANEL), true);
		} else if (id == Lans.glod) {/**金币不足 */
			UIMgr.showUI(UIConst.ExchangeGoldView);
		} else if (id == Lans.cost) {/**资源不足 */
			let item = tb.TB_item.get_TB_itemById(args[0]);
			tempStr = FormatStr(tempStr, [item ? item.name : `资源`]);
			if (args[0] == iface.tb_prop.resTypeKey.gold) {
				UIMgr.showUI(UIConst.ExchangeGoldView);
			} else {
				UIUtil.showJumpPanle(item ? item.ID : null);
			}
		} else if (id == Lans.awakenCost) {
			let item = tb.TB_item.get_TB_itemById(args[0]);
			UIUtil.showJumpPanle(item ? item.ID : null);
		}
		return tempStr;
	}

	/** 获取提示语言 */
	static getLanArr(id: any, defaultTxt: Array<Array<string>> = [], ...args): Array<Array<string>> {
		let strArr: Array<Array<string>> = LanMgr.lansArr[id] || defaultTxt;
		for (let arr of strArr) {
			for (let i = 0; i < arr.length; i++) {
				arr[i] = FormatStr(arr[i], args);
			}
		}
		return strArr;
	}

	static getMsgById(msgId: number): string {
		let tbMsg = tb.TB_msgCode.get_TB_msgCodeById(msgId);
		return tbMsg ? tbMsg.text : `TB_msgCode不存在id:${msgId}`;
	}

	static getMsgByCode(code: string): string {
		let tbMsg = tb.TB_msgCode.get_TB_msgCodeByCode(code);
		return tbMsg ? tbMsg.text : code;
	}
	
}

/**多语言编号 */
enum Lans {
	/**体力不足 */
	thew = 10022,
	/**金币不足 */
	glod = 10072,
	/**钻石不足 */
	daimond = 10005,
	/**资源不足,需要传物品Id*/
	cost = 10120,
	awakenCost = 11016,		// 觉醒材料

	GroupNotRegTime = 321,		// 队伍还未匹配
	OccupyInfoHasRefresh = 221, // 占领信息已刷新
}