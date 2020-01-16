var iface;
(function (iface) {
    iface.tb_prop = {
        godEmployTypeKey: { propOnce: 0, propTen: 1, friendOnce: 2, friendTen: 3, diamondOnce: 4, diamondTen: 5, legend: 6 },
        godEmployType: { "0": '道具单次召唤', "1": '道具十连召唤', "2": '友情单次召唤', "3": '友情十连召唤', "4": '钻石单次召唤', "5": '钻石十连召唤', "6": '传说召唤' },
        currencyTypeKey: { gold: 0, diamond: 1, arena: 2, friend: 3, godExp: 4, guildDonate: 5, legendChip: 6, soulStone: 7, godCrystal: 8, darkEssence: 9, convertDust: 10, honour: 11, godDomain: 12, vipScore: 13 },
        currencyType: { "0": '金币', "1": '钻石', "2": '竞技币', "3": '友情点', "4": '神灵经验', "5": '公会贡献', "6": '传说碎片', "7": '灵魂石', "8": '神界结晶', "9": '黑暗精华', "10": '转换星尘', "11": '荣耀币', "12": '神域币', "13": 'VIP积分' },
        godUpgradeTypeKey: { oneLv: 0, multiLv: 1 },
        godUpgradeType: { "0": '升一级', "1": '升多级' },
        copyPrecondTypeKey: { copyId: 1, playerLevel: 2, taskId: 3, fightValue: 4 },
        copyPrecondType: { "1": '关卡ID', "2": '主角等级', "3": '任务ID', "4": '战斗力' },
        copyTypeKey: { main: 1, rune: 2, underground: 3, tower: 4 },
        copyType: { "1": '主线', "2": '符文副本', "3": '地下城', "4": '试练塔' },
        itemTypeKey: { resource: 1, gift: 2, materials: 3, god: 5, chip: 6, equip: 7, treasure: 8, timeItem: 9, optionalCard: 10, gemstone: 11 },
        itemType: { "1": '资源', "2": '礼包', "3": '材料', "5": '神灵', "6": '材料碎片', "7": '装备', "8": '宝物', "9": '限时物品', "10": '自选卡', "11": '宝石' },
        resTypeKey: { gold: 1, diamond: 2, friend: 3, arena: 4, roleExp: 5, godExp: 6, arenaNum: 7, thew: 8, guildExp: 9, guildDonate: 10, legendChip: 11, soulStone: 12, godCrystal: 13, darkEssence: 14, convertDust: 15, advtScore: 16, honour: 17, godDomain: 18, rechargeDmd: 19, matchNum: 20, vipScore: 21 },
        resType: { "1": '金币', "2": '钻石', "3": '友情点数', "4": '勋章', "5": '主角经验', "6": '神灵经验', "7": '竞技次数', "8": '体力', "9": '公会经验', "10": '公会贡献', "11": '传说碎片', "12": '灵魂石', "13": '神界结晶', "14": '黑暗精华', "15": '转换星尘', "16": '探险积分', "17": '荣耀币', "18": '神域币', "19": '充值的钻石', "20": '匹配赛次数', "21": 'VIP积分' },
        rewardDropTypeKey: { independence: 1, combine: 2 },
        rewardDropType: { "1": '独立概率掉落', "2": '合并概率掉落' },
        lineupTypeKey: { attack: 1, expedition: 2 },
        lineupType: { "1": '进攻通用', "2": '黑暗森林（失落遗迹）' },
        limitTypeKey: { quickMainNum: 1, fastFrightFreeNum: 2, friendPoint: 3, wishMaxNum: 4, wishFreeNum: 5, buyMarketRefreshNum: 6, guildDonate: 7, buyArenaNum: 8, buyGuildCopyNum: 9, buyDailyCopyNum1: 10, buyDailyCopyNum2: 11, buyDailyCopyNum3: 12, goldBuyNum: 13, buyWorldBossNum: 14, escortCount: 15, robCount: 16, buyMineRobNum: 17, mineOccupyNum: 18, advtFreeNum: 19, luckGodFreeNum: 20, luckEquipFreeNum: 21, luckArtFreeNum: 22, summonFreeNum: 23, buyMatchNum: 24, buyGodDmRewardNum: 25, propFreeNum: 26, diamondFreeNum: 27, goldBuyFreeNum: 28, dailyRewardNum: 29, luckTreasureFreeNum: 30, userQuestionNum: 31, dailyFreeHelpNum: 32, guildHelpAwardNum: 33, guildHelpBuyNum: 34, guildRecruitNum: 35 },
        limitType: { "1": '快速战斗次数', "2": '快速战斗免费次数', "3": '友情点', "4": '许愿最大次数', "5": '许愿免费次数', "6": '购买集市免费刷新次数', "7": '公会捐赠id', "8": '购买竞技场次数', "9": '购买公会副本挑战次数', "10": '购买每日副本金币试炼挑战次数', "11": '购买每日副本经验试炼挑战次数', "12": '购买每日副本碎片试炼挑战次数', "13": '金币兑换购买次数', "14": '世界boss挑战购买次数', "15": '商队护送次数', "16": '商队掠夺次数', "17": '神秘岛屿掠夺购买次数', "18": '神秘岛屿占领次数', "19": '探险免费次数', "20": '神灵转盘免费次数', "21": '装备转盘免费次数', "22": '神器转盘免费次数', "23": '限时召唤免费次数', "24": '购买匹配赛次数', "25": '购买激战神域奖励剩余次数', "26": '道具召唤免费次数', "27": '钻石召唤免费次数', "28": '金币兑换免费次数', "29": '每日奖励领取次数', "30": '宝物转盘免费次数', "31": '用户反馈次数', "32": '每日免费公会援助次数', "33": '公会援助奖励次数', "34": '公会援助购买次数', "35": '公会招募次数' },
        overplusTypeKey: { guildCopyNum: 1, dailyCopyNum1: 2, worldBossNum: 3, dailyCopyNum2: 4, dailyCopyNum3: 5, mineRobNum: 6, arenaNum: 7, matchNum: 8, godDmRewardNum: 9, marketRefreshNum: 10 },
        overplusType: { "1": '公会挑战剩余次数', "2": '每日副本金币试炼挑战剩余次数', "3": '世界boss挑战剩余次数', "4": '每日副本经验试炼挑战剩余次数', "5": '每日副本碎片试炼挑战剩余次数', "6": '神秘岛屿掠夺剩余次数', "7": '竞技场剩余次数', "8": '匹配赛剩余次数', "9": '激战神域奖励剩余次数', "10": '集市免费刷新剩余次数' },
        taskTypeKey: { mainLine: 1, achievement: 2, limitTime: 3, experience: 4 },
        taskType: { "1": '主线', "2": '成就', "3": '限时活动', "4": '历练（符文副本）任务，历练界面显示' },
        taskSubTypeKey: { employ: 1, lineup: 2, passCopy: 3, quickBattle: 4, passCopyByType: 5, costThew: 6, godNum: 9, godLevel: 10, awaken: 14, wish: 17, arenaDefeatNpc: 18, item: 20, arenaWin: 21, arenaWinStreak: 22, arenaDefWin: 23, playerLevel: 24, towerMaxFloor: 25, wearEquip: 26, stthEquip: 27, wearEquipOnSlot: 28, rfEquip: 29, wearAcc: 30, devourAcc: 31, diamondEmploy: 32, market: 33, arenaTopRank: 34, expeditionMax: 36, dailyCopy: 37, worldBoss: 38, worldChat: 39, friendNum: 40, sendPoint: 41, getPoint: 42, joinGuild: 43, guildDonate: 44, godUpgrade: 46, clgArena: 47, applyGuild: 48, doorEmploy: 49, clgCopyByType: 50, stthArtifact: 51, recycleEquip: 52, skillUpArtifact: 53, resolveGod: 54, atftMaxStthLv: 55, atftMaxSkillLv: 56, guildSkillUpgrade: 57, occupyMine: 58, advtDispatch: 59, fuseSoul: 60, clgForest: 61, maxForest: 62, escort: 63, atftBaptize: 64, gemCompound: 65, atftEnchant: 66, clgGuildWar: 67, openUI: 68, wearTreasure: 69, qualityGodNum: 70, robMine: 71, force: 72, gemLevel: 73, atftQualityNum: 74, atftStarLevel: 75, starTreasureNum: 76, gemCompNum: 77, gemWearNum: 78 },
        taskSubType: { "1": '召唤X只神灵', "2": '上阵X只神灵', "3": '通关指定副本', "4": '快速战斗', "5": '通关XX类型副本', "6": '消耗X点体力', "9": '拥有X只Y星Z级的神灵', "10": 'X型神灵升到Y级', "14": '进行X次胎Y神灵觉醒', "17": '许愿X次', "18": '竞技场中战胜指定NPC（怪物）', "20": '累计获得XX道具', "21": '竞技场累计进攻的胜利次数', "22": '竞技场连胜次数', "23": '竞技场中防御胜利次数', "24": '玩家等级', "25": '试练塔最高层数', "26": '穿戴X件Y品质的装备，且强化+M，精炼+N', "27": '强化X次装备', "28": '穿戴的Z、M、N……位装备，且强化到+X，精炼+Y', "29": '精炼X次装备', "30": '穿戴X件Y品质的饰品，且精炼+M', "31": '吞噬X件饰品', "32": '高级召唤X次', "33": '集市购买商品X次', "34": '竞技场最高排名X名', "36": '黑暗森林最高通关X关', "37": '完成每日试炼X次', "38": '挑战X次世界BOSS', "39": '世界发言X次', "40": '拥有X个好友', "41": '赠送友情值X次', "42": '领取友情值X次', "43": '是否加入/创建公会', "44": '公会捐献X次', "46": '升级神灵X次', "47": '竞技场挑战X次', "48": '申请/创建公会', "49": '神界之门召唤X次', "50": '挑战XX类型副本', "51": '神器强化X次', "52": '分解X件装备', "53": '神器技能升级X次', "54": '分解X只神灵', "55": '神器强化最高升到X级', "56": '神器技能最高升到X级', "57": '公会技能升级X次', "58": '占领X级矿产Y次', "59": '探险X次', "60": '神灵融魂X次', "61": '迷雾森林挑战X次', "62": '迷雾森林最高通关X关', "63": '护送X品质货物Y次', "64": '神器洗练X次', "65": '宝石合成X次', "66": '神器附魔X次', "67": '公会战挑战X次', "68": '打开X界面Y次', "69": '穿戴X件Y品质的宝物，且强化+M', "70": '获得X个Y品质的神灵', "71": '神秘岛屿掠夺X次', "72": '神力达到X', "73": '宝石总等级达到X', "74": '神器洗练到X条Y品质属性', "75": '神器升到Y星', "76": 'X个宝物升到Y星', "77": '合成X个Y级宝石', "78": '穿戴X个Y级宝石' },
        dailyTypeKey: { devourAcc: 1, upgradeGod: 2, employ: 3, stthEquip: 4, friend: 5, arena: 6, wish: 7, guildDonate: 8, guildCopy: 9, market: 10, dailyCopy: 11, worldBoss: 12, runeCopyWin: 13, bgCopyWin: 14, expeditionWin: 15, occupyMine: 16, advtDispatch: 17, clgForest: 18, escort: 19 },
        dailyType: { "1": '1=精炼饰品', "2": '2=神灵升级', "3": '3=召唤神灵（召唤界面中任意召唤）', "4": '4=装备强化', "5": '5=好友赠送（自己送出去的）', "6": '6=参加竞技场', "7": '7=许愿次数', "8": '8=公会捐献次数', "9": '9=挑战公会副本次数', "10": '10=集市购买次数', "11": '11=每日试炼次数', "12": '12=挑战世界BOSS次数', "13": '13=挑战历练副本胜利次数', "14": '14=挑战地下城胜利次数', "15": '15=失落遗迹胜利次数', "16": '16=神秘岛屿成功占领次数', "17": '17=探险派遣次数', "18": '18=迷雾森林挑战次数', "19": '19=护送次数' },
        guildJobTypeKey: { president: 1, vicePresident: 2, member: 3 },
        guildJobType: { "1": '会长', "2": '副会长', "3": '会员' },
        guildAutoJoinTypeKey: { yes: 0, no: 1 },
        guildAutoJoinType: { "0": '可以自动加入', "1": '不可以自动加入' },
        guildApplyOptTypeKey: { yes: 0, no: 1 },
        guildApplyOptType: { "0": '同意申请', "1": '拒绝申请' },
        mailStateTypeKey: { unread: 0, read: 1, get: 2 },
        mailStateType: { "0": '未读', "1": '已读', "2": '已领取' },
        sysOpenTypeKey: { battle: 100, quickBattle: 110, autoBattle: 120, chat: 130, province: 131, crossServer: 132, setting: 140, mail: 150, mainCity: 200, employ: 210, mine: 220, guild: 230, guildCopy: 231, background: 240, tower: 250, arena: 260, album: 270, friend: 310, firstCharge: 320, task: 340, market: 350, welfare: 360, wish: 361, levelAward: 362, monthCard: 363, payActivity: 364, shop: 370, activity: 380, openGift: 381, godRank: 382, timeLimitBuy: 383, luckTurnTable: 384, onlineAward: 385, share: 386, realNameAuth: 387, bindGift: 388, superVip: 389, microClient: 390, weekFund: 391, openSvrGift: 392, openSvrFund: 393, sevenDayLogin: 394, fourteenDayLogin: 395, rechargeRebate: 396, warrior: 397, god: 400, awaken: 401, fuseSoul: 402, raiseDegree: 403, treasure: 410, bag: 500, multiRecycle: 510, runeCopy: 600, sevenDay: 710, halfMonth: 711, expedition: 720, dailyCopy: 730, worldBoss: 740, rank: 750, door: 760, raiseStar: 770, resolve: 780, recharge: 790, artifact: 800, artifactBaptize: 801, artifactEnchant: 802, adventure: 810, escort: 820, forest: 830, equip: 910, equipStrength: 911, equipRefine: 912, gem: 913, honour: 920, match: 930, godDomain: 940, beStrong: 950, groupCopy: 960, home: 1000 },
        sysOpenType: { "100": '战斗', "110": '快速战斗', "120": '自动战斗', "130": '聊天', "131": '同省聊天', "132": '跨服聊天', "140": '设置', "150": '邮件', "200": '神界', "210": '召唤', "220": '神秘岛屿', "230": '公会', "231": '公会副本', "240": '地下城', "250": '试练塔', "260": '竞技场', "270": '图鉴', "310": '好友', "320": '首充', "340": '任务', "350": '集市', "360": '福利', "361": '许愿', "362": '等级奖励', "363": '月卡', "364": '付费活动', "370": '商城', "380": '活动', "381": '开服豪礼', "382": '神力排行榜', "383": '限时热购', "384": '幸运转盘', "385": '在线奖励', "386": '分享', "387": '实名认证', "388": '绑定豪礼', "389": '超级会员', "390": '微端下载', "391": '周基金', "392": '开服礼包', "393": '开服基金', "394": '七日登录', "395": '十四日登录', "396": '内测返利', "397": '勇者之证', "400": '神灵', "401": '神灵觉醒', "402": '神灵融魂', "403": '神灵进阶', "410": '宝物', "500": '背包', "510": '批量分解（装备）', "600": '历练', "710": '新手狂欢', "711": '半月庆典', "720": '失落遗迹', "730": '每日副本', "740": '世界BOSS', "750": '排行榜', "760": '神界之门', "770": '上古祭坛（神灵升星）', "780": '神灵分解', "790": '充值', "800": '神器', "801": '神器洗练', "802": '神器附魔', "810": '探险', "820": '护送', "830": '迷雾森林', "910": '装备', "911": '装备强化', "912": '装备精炼', "913": '宝石', "920": '荣耀之战', "930": '匹配赛', "940": '激战神域', "950": '我要变强', "960": '组队副本', "1000": '首页' },
        chatChannelTypeKey: { all: 0, world: 1, guild: 2, group: 3, whisper: 4, province: 5, crossServer: 6, system: 7 },
        chatChannelType: { "0": '全部聊天', "1": '世界聊天', "2": '公会聊天', "3": '组队聊天', "4": '私聊', "5": '同省', "6": '跨服', "7": '系统' },
        chatTypeKey: { text: 1, voice: 2, notice: 3 },
        chatType: { "1": '文本聊天', "2": '语音聊天', "3": '系统公告' },
        arenaClgTypeKey: { initiative: 1, fightBack: 2 },
        arenaClgType: { "1": '主动挑战', "2": '反击挑战' },
        useItemTypeKey: { chip: 1, gift: 2, employTicket: 3, optionalCard: 4 },
        useItemType: { "1": '使用碎片', "2": '使用礼包', "3": '使用召唤券', "4": '自选卡' },
        speOpeTypeKey: { dmOnceTotalNum: 1, rfshMktTotalNum: 2, psGtBkTotalNum: 3, doorTotalNum: 4, doorEmployNum: 5 },
        speOpeType: { "1": '累计钻石单招次数', "2": '累计刷新集市次数', "3": '累计通关巨人地下城次数', "4": '累计神界之门次数', "5": '神界之门召唤次数' },
        signInTypeKey: { none: 0, normal: 1, supplement: 2 },
        signInType: { "0": '未签到', "1": '正常签到', "2": '补签到' },
        vipPrivilegeTypeKey: { godMaxNum: 1, thewBuyNum: 2, arenaBuyNum: 3, quickBattleNum: 4, wishNum: 5, offlineIncomeTime: 6, hangupIncome: 7, guildCopyBuyNum: 8, dailyCopyBuyNum: 9, goldBuyNum: 10, worldBossNum: 11, runeCopyExtraNum: 12, matchBuyNum: 13, godDmRewardNum: 14 },
        vipPrivilegeType: { "1": '神灵上限增加', "2": '体力购买次数', "3": '竞技场购买次数增加', "4": '快速战斗次数', "5": '许愿次数上限增加', "6": '离线收益时间延长', "7": '挂机收益提升', "8": '公会副本购买次数增加', "9": '每日副本购买次数增加', "10": '金币兑换购买次数增加', "11": '世界boss购买次数增加', "12": '历练副本额外次数', "13": '匹配赛购买次数增加', "14": '激战神域购买次数增加' },
        levelPrivilegeTypeKey: { thewMaxNum: 1, battleSpeed: 2, runeCopy: 3, oneKeyRefine: 4, legendEmploy: 5, forest: 6, createGuild: 10 },
        levelPrivilegeType: { "1": '增加体力上限', "2": '战斗3倍加速开放', "3": '符文副本【扫荡】开启', "4": '一键精炼提前开启等级', "5": '传说召唤开启', "6": '迷雾森林【一键扫荡】开启', "10": '创建公会' },
        recordStateTypeKey: { unread: 0, read: 1, get: 2 },
        recordStateType: { "0": '未读', "1": '已读', "2": '已领取' },
        mailArgsTypeKey: { none: 0, item: 1, god: 2, honourBet: 3, honourAward: 4 },
        mailArgsType: { "0": '无', "1": '物品', "2": '神灵', "3": '荣耀之战押注', "4": '荣耀之战奖励' },
        equipStthTypeKey: { one: 1, five: 2 },
        equipStthType: { "1": '强化一次', "2": '强化五次' },
        redPointTypeKey: { mail: 0, point: 1, friend: 2, treasure: 3, newRecharge: 4, newMail: 5, newPoint: 6, newFriend: 7, rechargeSum: 8, consumeSum: 9, singleRecharge: 10, dailyRecharge: 11, giftPacks: 12, exchange: 13, loginSum: 14, dailyRechargeSum: 15, goundSum: 16, newArena: 17, sevenDay: 18, whisper: 19, guildApply: 20, guildCopyAward: 21, escort: 22, mine: 23, myMine: 24, guildWarAward: 25, openGifts: 26, matchDef: 27, inviteList: 28, refuseInvite: 29, newCommon: 30, inviteCopyList: 31, refuseCopyInvite: 32, groupCopyChange: 33, applyGroupCopy: 34, groupCopyKick: 35, groupCopyAppoint: 36, guildHelpCanGet: 37 },
        redPointType: { "0": '邮件', "1": '友情点', "2": '好友申请', "3": '宝藏', "4": '新充值', "5": '新邮件', "6": '新友情点', "7": '新好友申请', "8": '新累计充值', "9": '新累计消费', "10": '新单笔充值', "11": '新每日充值', "12": '新超值礼包', "13": '新兑换活动', "14": '新累计登陆', "15": '新每日累计充值', "16": '新地下城挑战', "17": '新竞技场记录', "18": '新手七天活动', "19": '有新私聊信息', "20": '有新公会申请信息', "21": '有可领取公会副本奖励信息', "22": '有新商队被劫记录信息', "23": '有新岛屿矿点记录信息', "24": '有我的矿点变化信息', "25": '有我可领取公会战宝箱奖励信息', "26": '有可领取的开服豪礼', "27": '新匹配赛防守记录', "28": '有组队邀请信息', "29": '有拒绝邀请信息', "30": '有新数据变化信息', "31": '有组队副本邀请信息', "32": '有拒绝组队副本邀请信息', "33": '组队副本有变化', "34": '申请加入组队副本', "35": '组队副本被踢出', "36": '组队副本任命队长', "37": '公会援助可领取' },
        activityTypeKey: { rechargeSum: 1, consumeSum: 2, singleRecharge: 3, dailyRecharge: 4, giftPacks: 5, exchange: 6, loginSum: 7, arenaSum: 8, goundSum: 9, loginday: 10, runeCopy: 11, friendPoint: 12, sellItem: 13, towerCopy: 14, godEmploy: 15, arenaTopRank: 16, hasLevelGod: 17, mainCopy: 18, getStarGod: 19, getStarAccessory: 20, getStarEquip: 21, playerLevel: 22, godAwaken: 23, refineAccessory: 24, strengthenEquip: 25, refineEquip: 26, fuseGod: 27, worldBoss: 28, guildCopy: 29, maxForest: 30, escortCount: 31, robCount: 32, atftBaptize: 33, advtDispatch: 34, mineOccupyNum: 35, mineRobNum: 36, door: 37, artifactLevel: 38, hasFriend: 39, maxForce: 40, matchWar: 41, godDomain: 42, artifactStarLevel: 43, artifactBaptize: 44, godAwakenLevel: 45, gemWearNum: 46, dailyCopy: 47, expedition: 48, qualityTreasureNum: 49, starTreasureNum: 50 },
        activityType: { "1": '累计充值', "2": '累计消费', "3": '单笔充值', "4": '每日充值', "5": '超值礼包', "6": '兑换活动', "7": '累计登陆', "8": '竞技场挑战', "9": '地下城挑战', "10": '登陆可领取', "11": '通关作战副本第X关', "12": '赠送好友X次友情点', "13": '出售道具', "14": '试练塔达到第X关', "15": '进行X次高级召唤', "16": '竞技场最高排名X名', "17": '拥有X个达到X等级的神灵', "18": '远征通关第X关', "19": '获得X个Y星神灵', "20": '获得X件Y品质的饰品', "21": '获得X件Y品质的装备', "22": '玩家等级达到X级', "23": '觉醒X次神灵', "24": '精炼X件Y品质的饰品到+Z', "25": '强化X件Y品质的装备到+Z', "26": '精炼X件Y品质的装备到+Z', "27": '上古祭坛合成X个Y星神灵', "28": '参与击杀X次世界BOSS', "29": '公会副本挑战X次', "30": '迷雾森林最高关卡', "31": '护送次数', "32": '掠夺商队次数', "33": '神器洗练次数', "34": '探险次数', "35": '神秘岛屿占领X座岛屿', "36": '神秘岛屿掠夺次数', "37": '神界之门次数', "38": '神器最高等级', "39": '拥有X个好友', "40": '神力达到X', "41": '匹配赛挑战X次', "42": '激战神域挑战X次', "43": '神器升到Y星', "44": '神器洗练到X条Y品质属性', "45": 'X个神灵觉醒到Y级', "46": '镶嵌X个Y级宝石', "47": '每日副本挑战成功X次', "48": '失落遗迹通关第X关', "49": 'X件Y品质的宝物', "50": 'X个宝物升到Y星' },
        operateActivityTypeKey: { rechargeSum: 1, consumeSum: 2, singleRecharge: 3, dailyRecharge: 4, giftPacks: 5, exchange: 6, loginSum: 7, arenaSum: 8, goundSum: 9, dailyCopy: 10, worldBoss: 11, expeditionMax: 12, mineOccupyNum: 13, mineRobNum: 14, escortCount: 15, robCount: 16, advtDispatch: 17, guildCopy: 18, door: 19, employ: 20, runeCopy: 21, dailyRechargeSum: 22, dailyConsumeSum: 23 },
        operateActivityType: { "1": '累计充值', "2": '累计消费', "3": '单笔充值', "4": '每日充值', "5": '超值礼包', "6": '兑换活动', "7": '累计登陆', "8": '竞技场挑战', "9": '地下城挑战', "10": '每日副本次数（完成才计算）', "11": '世界BOSS挑战次数', "12": '失落遗迹最高关卡', "13": '神秘宝藏占领次数（成功才计数）', "14": '神秘宝藏掠夺次数（不管胜负）', "15": '护送商队次数', "16": '掠夺商队次数（不管胜负）', "17": '探险次数', "18": '公会副本挑战次数', "19": '神界之门开启次数', "20": '钻石召唤次数', "21": '历练完成次数（成功才计数）', "22": '每日累计充值X元', "23": '每日累计消费X钻石' },
        equipRefineTypeKey: { nomal: 0, onekey: 1 },
        equipRefineType: { "0": '普通精炼', "1": '一键精炼' },
        rankTypeKey: { force: 1, level: 2, arenaSorce: 3, guildLevel: 4, god: 5, runeCopyFloor: 6, towerCopyFloor: 7, worldBoss: 8, forest: 9, summon: 10, match: 11, godDmWorld: 12, godDmLocal: 13, godStarLevel: 14, groupCopyFloor: 15 },
        rankType: { "1": '神力', "2": '等级', "3": '竞技场', "4": '公会', "5": '神灵', "6": '历练', "7": '试炼塔', "8": '世界boss', "9": '迷雾森林', "10": '限时召唤', "11": '匹配赛', "12": '跨服激战神域', "13": '本服激战神域', "14": '神灵星级', "15": '组队副本关卡' },
        globalTypeKey: { iMergeVersion: 1, iGuildWarSession: 2, iGuildWarSessionTime: 3, iGuildWarStartSession: 4, tActivityIds: 5, tShowBlockIds: 6, iOpenTime: 7, iLastRefreshTime: 8, iGuildWarUpdateTime: 9, iGuildWarSettleTime: 10, tGuildWarRegGuildId: 11, iSignInStartTime: 12, tLuckGodTypeNum: 13, tLuckEquipTypeNum: 14, tLuckArtTypeNum: 15, tLuckGodRecord: 16, tLuckEquipRecord: 17, iLuckGodId: 18, iLuckEquipId: 19, iLuckArtId: 20, tRankEndTimes: 21, tRankInfo: 22, iHonourWarSession: 23, iHonourWarSessionEndTime: 24, iHonourWarStage: 25, iHonourWarStageEndTime: 26, iHonourWarMaxRound: 27, iHonourWarRound: 28, iHonourWarRoundEndTime: 29, iHonourWarMatchEndTime: 30, iHonourWarBetStartTime: 31, iHonourWarBetEndTime: 32, tHonourWarRegPlayerId: 33, tHonourWarRankInfo: 34, tHonourWarRankPlayerId: 35, iHonourWarSettleTime: 36, tSysLiveInfo: 37, tGodDmRegEndTimes: 38, iHonourWarKuafuStage: 39, tLuckTreasureNum: 40, iLuckTreasureId: 41, tLuckTreasureRecord: 42, iOpenSvrGroupBuyTime: 43, iGuildLastRefreshTime: 44, iFriendLastRefreshTime: 45, tGroupCopyPlayerInfo: 46 },
        globalType: { "1": '合服版本号', "2": '公会战当前赛季ID', "3": '公会战当前赛季时间', "4": '公会战开始赛季ID', "5": '后台活动id列表', "6": '后台显示模块id列表', "7": '开服时间', "8": '最后刷新时间', "9": '公会战更新时间', "10": '公会战结算时间', "11": '公会战报名公会ID', "12": '每日签到本轮开始时间', "13": '神灵转盘保底次数', "14": '装备转盘保底次数', "15": '神器转盘保底次数', "16": '神灵转盘记录', "17": '装备转盘记录', "18": '神灵转盘ID', "19": '装备转盘ID', "20": '神器转盘ID', "21": '排行结束时间', "22": '历史排行信息', "23": '荣耀之战赛季', "24": '荣耀之战赛季结束时间', "25": '荣耀之战阶段', "26": '荣耀之战阶段结束时间', "27": '荣耀之战最大轮数', "28": '荣耀之战轮数', "29": '荣耀之战轮数结束时间', "30": '荣耀之战匹配结束时间', "31": '荣耀之战押注开始时间', "32": '荣耀之战押注结束时间', "33": '荣耀之战报名玩家ID', "34": '荣耀之战上届前三名玩家信息', "35": '荣耀之战本届前16名玩家ID', "36": '荣耀之战本届跨服结算时间', "37": '每天系统活跃度信息', "38": '激战神域队伍匹配结束时间', "39": '荣耀之战跨服阶段', "40": '宝物转盘保底次数', "41": '宝物转盘ID', "42": '宝物转盘记录', "43": '开服团购人数自增时间', "44": '公会最后刷新时间', "45": '好友最后刷新时间', "46": '全服首通信息' },
        expeditionOpTypeKey: { recover: 1, revive: 2 },
        expeditionOpType: { "1": '回复血量', "2": '复活' },
        godRaceTypeKey: { greece: 1, china: 2, northEurope: 3, light: 4, dark: 5 },
        godRaceType: { "1": '神殿', "2": '玄门', "3": '圣域', "4": '光明', "5": '黑暗' },
        dailyCopyTypeKey: { gold: 1, exp: 2, chip: 3 },
        dailyCopyType: { "1": '金币试炼', "2": '经验试炼', "3": '碎片试炼' },
        platformTypeKey: { bingo: 1, version: 2, changyu: 3, buddy: 4, lezhong: 5 },
        platformType: { "1": '冰菓', "2": '版署', "3": '畅娱', "4": '小伙伴', "5": '乐众' },
        fuseAttrTypeKey: { hp: 1, atk: 2, def: 3 },
        fuseAttrType: { "1": '血量', "2": '攻击', "3": '防御' },
        fuseNumTypeKey: { one: 1, ten: 2 },
        fuseNumType: { "1": '融魂一次', "2": '融魂十次' },
        escortRecordTypeKey: { success: 0, fail: 1 },
        escortRecordType: { "0": '抵御成功', "1": '抵御失败' },
        attrTypeKey: { hpMax: 1, atk: 2, def: 3, atkSpd: 4, crit: 5, critDmg: 6, effectHit: 7, effectResist: 8, suckBlood: 9, strikeBack: 10, rampage: 11, dizzy: 12, dmgRate: 13, healRate: 14, addDmg: 15, subDmg: 16, anger: 17, immuDizzy: 18 },
        attrType: { "1": '生命', "2": '攻击', "3": '防御', "4": '攻速', "5": '暴击率', "6": '暴击伤害', "7": '效果命中', "8": '效果抵抗', "9": '吸血', "10": '反击', "11": '再次出手', "12": '眩晕', "13": '伤害加成', "14": '治疗加成', "15": '增伤', "16": '减伤', "17": '怒气', "18": '免控率' },
        baptizeTypeKey: { normal: 1, advanced: 2 },
        baptizeType: { "1": '普通洗练', "2": '高级洗练' },
        gemTypeKey: { hp: 1, atk: 2, def: 3 },
        gemType: { "1": '生命', "2": '攻击', "3": '防御' },
        gemUpgradeTypeKey: { one: 1, five: 2 },
        gemUpgradeType: { "1": '升一级', "2": '升五级' },
        mineRecordTypeKey: { occupySuccess: 0, occupyFail: 1, robSuccess: 2, robFail: 3, finish: 4 },
        mineRecordType: { "0": '被抢占抵御成功', "1": '被抢占抵御失败', "2": '被掠夺抵御成功', "3": '被掠夺抵御失败', "4": '采集完成' },
        attackStateTypeKey: { free: 0, being: 1 },
        attackStateType: { "0": '空闲中', "1": '正在被攻打中' },
        exitTypeKey: { sessionError: 1, kick: 2, accountConflict: 3, heartBeatTimeout: 4 },
        exitType: { "1": '会话错误', "2": '被踢下线', "3": '账号冲突', "4": '心跳超时' },
        targetTypeKey: { enemyMinHp: 1, enemyRandom: 2, ownMinHp: 3, ownRandom: 4, self: 5, ownDead: 6, ownDeadOrSelf: 7, external: 8, ownRanNotSelf: 9, tagOne: 10, frontRow: 11, backRow: 12, ownAtkMax: 13, ownDeadOrHpLow: 14, sameMainTag: 15, allTag: 16, frontAndRandomBack: 17 },
        targetType: { "1": '敌方血量最低目标', "2": '敌方指定目标（自动战斗时则随机）', "3": '己方血量最低目标', "4": '己方指定目标（自动战斗时则随机）', "5": '自身', "6": '已死亡的队友', "7": '已死亡的队友或自身', "8": '外部指定的目标', "9": '己方随机(除自身)', "10": '默认1号位', "11": '前排', "12": '后排', "13": '己方攻击最高的单位', "14": '己方已死亡或血量最低的单位', "15": '目标与主技能一致(主技能在技能表skill的顺序须在该技能之前)', "16": '己方所有目标（包括死亡）', "17": '优先前排，前排人数不够在后排随机' },
        triggerTypeKey: { useSkill: 1, selfBeAtk: 2, selfDead: 3, ownBeAtk: 4, enterScene: 6, beCrit: 7, crit: 8, enemyDead: 9, leader: 10, eftAnyObj: 11, critAnyEnemy: 12, addAtt: 13, ownDead: 14, roundBefore: 15, addDamage: 16, inScene: 17, enterSceneFirst: 18, addBuff: 19 },
        triggerType: { "1": '自身施法时触发', "2": '自身被攻击时触发', "3": '自身死亡时触发', "4": '队友被攻击时触发（包括自身）', "6": '进场触发', "7": '被暴击时触发', "8": '暴击时触发', "9": '敌方死亡触发', "10": '作为队长时触发', "11": '效果对任一目标生效', "12": '对任一敌方造成暴击', "13": '被动属性加成（加到面板）', "14": '队友死亡时触发', "15": '大回合开始前触发', "16": '受到任何伤害时触发', "17": '在场时生效', "18": '首次进入战斗时生效', "19": '创建buff前触发' },
        trigSubTypeKey: { selfHpLess: 1, selfAndEnemyHp: 2, existBuffId: 3, existBuffType: 4, existBuffStatType: 5, enemyHpUp: 6, filterProfession: 7, filterBuff: 8 },
        trigSubType: { "1": '自身血量低于多少百分比触发', "2": '敌方生命与自身生命高低', "3": '中了某个指定的buff，条件值为buff_id', "4": '中了某种类型的buff，条件值为buff类型', "5": '中增益或减益buff，值为buff的状态类型', "6": '敌方血量高于多少百分比触发', "7": '对XX职业有效（神灵表type）', "8": '新添加的buff_id与触发参数配置ID一致且身上有该buff' },
        buffTypeKey: { attr: 1, immune: 2, god: 3, disablePositive: 4, noDeath: 5, bleed: 7, dizzy: 8, banRecover: 9, silence: 10, sneer: 13, recover: 16, sleep: 17, shield: 18, tag: 20, immuDizzy: 21, immuSleep: 22, immuBleed: 23, shareDmg: 24 },
        buffType: { "1": '属性变化', "2": '免疫减益效果', "3": '无敌（伤害为0）', "4": '无法获得增益效果', "5": '不死（受到致死伤害剩1点血）', "7": '流血', "8": '眩晕 ', "9": '无法回血', "10": '沉默（只能使用第1个技能）', "13": '嘲讽（所有敌人攻击自己）', "16": '回复血量 ', "17": '沉睡（被攻击后效果消失）', "18": '护盾', "20": '标记专用，无实际效果', "21": '免疫眩晕控制(类型8)', "22": '免疫沉睡控制(类型17)', "23": '免疫流血（类型7）', "24": '分摊伤害' },
        skillEftTypeKey: { all: 0, arena: 1, ground: 2, tower: 3 },
        skillEftType: { "0": '所有地方生效', "1": '仅竞技场生效', "2": '仅地下城生效', "3": '仅试炼场生效' },
        effectTypeKey: { attr: 1, addBuff: 2, changeCD: 3, reborn: 4, clearNegative: 5, buffTransfer: 6, chgHp: 7, dmgFixByBuff: 8, balanceAttr: 9, clearPositive: 11, changeAtkBar: 12, useSkillAgain: 15, beCrit: 16, beAtked: 17, immuDmg: 18, reboundDmg: 19, clearBuff: 20, casterAttr: 21, casterAttrByTemp: 22 },
        effectType: { "1": '属性变化', "2": '添加buff', "3": '改变技能CD', "4": '复活', "5": '清除减益buff', "6": '状态转移', "7": '血量变化', "8": '根据增减益buff数量修正伤害', "9": '均衡属性', "11": '清除增益buff', "12": '攻击条变化（可正可负）', "15": '再次出手', "16": '必定被暴击', "17": '反击', "18": '免疫本次伤害', "19": '伤害反弹', "20": '清除指定buff', "21": '给施法加的属性效果', "22": '给施法加的属性效果（当下满足条件的敌人生效）' },
        skillTypeKey: { passive: 0, initiative: 1, artifact: 2, anger: 3 },
        skillType: { "0": '被动技能', "1": '主动技能', "2": '神器技能', "3": '怒气技能' },
        upgradeTypeKey: { up: 1, none: 2, down: 3 },
        upgradeType: { "1": '晋级', "2": '保级', "3": '降级' },
        signTypeKey: { login: 1, vip: 2, recharge: 3 },
        signType: { "1": '登录', "2": 'vip', "3": '充值' },
        shareAwardTypeKey: { daily: 1, total: 2 },
        shareAwardType: { "1": '每日充值', "2": '历史累计' },
        summonTypeKey: { one: 1, ten: 2 },
        summonType: { "1": '购买一次', "2": '购买十次' },
        buffStatTypeKey: { positive: 1, negative: 2 },
        buffStatType: { "1": '增益', "2": '减益' },
        buffStackTypeKey: { stack: 1, cover: 2, coexistStack: 3, coexistCover: 4 },
        buffStackType: { "1": '叠加', "2": '覆盖', "3": '共存(达到上限后叠加)', "4": '共存(达到上限后覆盖)' },
        battleObjTypeKey: { god: 1, monster: 2 },
        battleObjType: { "1": '神灵', "2": '怪物' },
        buffTrigTypeKey: { dead: 2, always: 3, beAtk: 4, atking: 5, roundEnd: 6, bigRoundBefore: 7, atkEqualBuffCaster: 8, buffDefAndCasterTriggerSkill: 9, buffAllCasterTriggerEff: 10 },
        buffTrigType: { "2": '死亡', "3": '必定触发', "4": '被攻击时触发', "5": '攻击时触发', "6": '回合结束时触发', "7": '大回合开始前触发', "8": '攻击目标与buff施法者一致时触发', "9": '非自然移除触发，且由buff施法者实现技能（被清的buff不计算）', "10": '必定触发且由buff施法者实现效果' },
        skillPriorityTypeKey: { reborn: 1, rebornAndGuard: 2, recover: 3, shield: 4, normal: 9999 },
        skillPriorityType: { "1": '复活类技能', "2": '复活+守护类技能', "3": '回血类技能', "4": '护盾类技能', "9999": '普通技能' },
        flyTextTypeKey: { hpChange: 1, crit: 2, resist: 3, rampage: 4, passive: 5, reborn: 6, strikeBack: 7, banRecover: 8, shield: 9, god: 10, immune: 11, share: 12, reboundDmg: 13, angerDown: 14 },
        flyTextType: { "1": '血量变化', "2": '暴击', "3": '抵抗', "4": '追加回合', "5": '被动技能', "6": '复活', "7": '反击', "8": '无法回血', "9": '护盾', "10": '无敌', "11": '免疫', "12": '分摊', "13": '反弹', "14": '减怒' },
        battleOpTypeKey: { nextRound: 1, objInit: 2, atkBar: 3, useSkill: 4, hpChange: 5, flyText: 6, addBuff: 7, rmBuff: 8, buffChange: 9, atftInit: 10, angerChange: 11, atftUseSkill: 12, atkSpdChange: 13, atkBarMax: 14, trigPasvSkill: 15, hpMaxChange: 16, roleAngerChange: 17 },
        battleOpType: { "1": '下一个回合', "2": '对象初始化', "3": '攻击条变化', "4": '使用技能', "5": '血量变化', "6": '飘字', "7": '添加buff', "8": '移除buff', "9": 'buff变化', "10": '神器初始化', "11": '怒气变化', "12": '神器使用技能', "13": '攻速变化', "14": '通知攻击条上限', "15": '触发被动技能', "16": '血上限变化', "17": '角色怒气变化' },
        battleTypeKey: { common: 1, guildBoss: 2, worldBoss: 3, arena: 4, honour: 5, match: 6, godDomain: 7, ground: 8, tower: 9, groupCopy: 10 },
        battleType: { "1": '通用', "2": '公会boss', "3": '世界boss', "4": '竞技场', "5": '荣耀之战', "6": '匹配赛', "7": '激战神域', "8": '地下城', "9": '试练塔', "10": '组队副本' },
        uiTypeKey: { album: 1 },
        uiType: { "1": '图鉴' },
        groupJobTypeKey: { captain: 1, member: 2 },
        groupJobType: { "1": '队长', "2": '成员' },
        groupStateTypeKey: { no: 0, yes: 1 },
        groupStateType: { "0": '未准备', "1": '已准备' },
        groupJoinTypeKey: { yes: 0, no: 1 },
        groupJoinType: { "0": '允许加入', "1": '不允许加入' },
        groupInviteTypeKey: { yes: 0, no: 1 },
        groupInviteType: { "0": '接受邀请', "1": '不接受邀请' },
        equipUpgradeTypeKey: { one: 1, five: 2 },
        equipUpgradeType: { "1": '升一级', "2": '升五级' },
        guessTypeKey: { win: 1, loss: 2, draw: 3 },
        guessType: { "1": '赢', "2": '输', "3": '平' },
        counterLimitTypeKey: { checkOpenSvrGroupBuyAward: 1, fastFrightFreeNum: 2, friendPoint: 3 },
        counterLimitType: { "1": '检测开服团购奖励', "2": '快速战斗免费次数', "3": '友情点' },
        addAttrTypeKey: { fixedVal: 0, percentVal: 1, totalPerVal: 2 },
        addAttrType: { "0": '固定值', "1": '基础属性百分比', "2": '总属性百分比' },
        firstTypeKey: { godEmploy: 1 },
        firstType: { "1": '首次十连抽' },
        warriorTypeKey: { getLiveness: 1, costSoulStone: 2, costGold: 3, killWorldBoss: 4, getGod: 5, matchWin: 6, robTradeWin: 7, robMineWin: 8, riskType: 9, risk: 10, expeditionBox: 11, getTreasure: 12, getEquip: 13, getGamstone: 14, costDiamond: 15, honour: 16 },
        warriorType: { "1": '累计获得XX点活跃度', "2": '消耗XX魂石', "3": '消耗XX金币', "4": '累计参与击杀X个世界BOSS', "5": '获得X个Y星英雄', "6": '匹配赛胜利X场', "7": '商队护送掠夺胜利X次', "8": '神秘岛屿掠夺胜利X次', "9": '探险中参与X次Y玩法', "10": '探险X次', "11": '失落遗迹打开XX个宝箱', "12": '获得X个Y品质宝物', "13": '获得X件Y品质装备', "14": '获得X个Y级宝石', "15": '消耗XX钻石', "16": '荣耀之战晋级跨服XX名次' },
        applyOptTypeKey: { yes: 0, no: 1 },
        applyOptType: { "0": '同意申请', "1": '拒绝申请' },
        runTypeKey: { android: 1, ios: 2, wxgame: 3 },
        runType: { "1": '安卓', "2": 'IOS', "3": '小程序' }
    };
})(iface || (iface = {}));