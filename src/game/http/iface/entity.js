/**
Adventure
探险表
**/
var _Class = module.exports = function(opts){
    this.playerId = opts && opts.playerId || null;/*玩家ID*/
    this.acceptableList = opts && opts.acceptableList || null;/*可领取的探险任务列表*/
    this.advtKey = opts && opts.advtKey || 0;/*探险任务最大编号*/
    this.advts = opts && opts.advts || null;/*探险任务数据*/

};
_Class.tableName = 'Adventure';
_Class.selectCols = 'playerId,acceptableList,advtKey,advts';/**
Arena

**/
var _Class = module.exports = function(opts){
    this.playerId = opts && opts.playerId || null;/*角色ID*/
    this.rank = opts && opts.rank || 0;/*排名*/
    this.topRank = opts && opts.topRank || 0;/*最高排名*/
    this.battleCnt = opts && opts.battleCnt || 0;/*战斗次数*/
    this.atkWinCnt = opts && opts.atkWinCnt || 0;/*进攻胜利次数*/
    this.defWinCnt = opts && opts.defWinCnt || 0;/*防守胜利次数*/
    this.winStreak = opts && opts.winStreak || 0;/*连胜次数*/
    this.maxWinStreak = opts && opts.maxWinStreak || 0;/*最高连胜次数*/
    this.battleRecords = opts && opts.battleRecords || null;/*战斗记录*/

};
_Class.tableName = 'Arena';
_Class.selectCols = 'playerId,rank,topRank,battleCnt,atkWinCnt,defWinCnt,winStreak,maxWinStreak,battleRecords';/**
Bag
背包表
**/
var _Class = module.exports = function(opts){
    this.playerId = opts && opts.playerId || null;/**/
    this.items = opts && opts.items || null;/*普通物品*/
    this.equipKey = opts && opts.equipKey || 0;/*装备最大编号*/
    this.equips = opts && opts.equips || null;/*装备*/
    this.timeKey = opts && opts.timeKey || 0;/*限时物品最大编号*/
    this.timeItems = opts && opts.timeItems || null;/*限时物品*/
    this.treasureKey = opts && opts.treasureKey || 0;/*宝物最大编号*/
    this.treasures = opts && opts.treasures || null;/*宝物*/
    this.gemKey = opts && opts.gemKey || 0;/*宝石最大编号*/
    this.gemstones = opts && opts.gemstones || null;/*宝石*/

};
_Class.tableName = 'Bag';
_Class.selectCols = 'playerId,items,equipKey,equips,timeKey,timeItems,treasureKey,treasures,gemKey,gemstones';/**
BanIp

**/
var _Class = module.exports = function(opts){
    this.ip = opts && opts.ip || null;/*账号IP*/
    this.endTime = opts && opts.endTime || 0;/*封IP结束时间戳*/
    this.reason = opts && opts.reason || null;/*封IP原因*/
    this.operator = opts && opts.operator || null;/*操作人*/

};
_Class.tableName = 'BanIp';
_Class.selectCols = 'ip,endTime,reason,operator';/**
ClientConfig
客户端配置
**/
var _Class = module.exports = function(opts){
    this.dev_id = opts && opts.dev_id || 0;/*设备类型*/
    this.dev_config = opts && opts.dev_config || null;/*客户端配置*/

};
_Class.tableName = 'ClientConfig';
_Class.selectCols = 'dev_id,dev_config';/**
CondMail
条件邮件表
**/
var _Class = module.exports = function(opts){
    this.idx = opts && opts.idx || 0;/*邮件唯一ID*/
    this.pf_id = opts && opts.pf_id || 0;/*平台ID*/
    this.sex = opts && opts.sex || 0;/*性别（-1-无限制，0-男，1-女）*/
    this.is_online = opts && opts.is_online || 0;/*是否在线（1-在线，0-所有)*/
    this.min_lv = opts && opts.min_lv || 0;/*最小等级*/
    this.max_lv = opts && opts.max_lv || 0;/*最大等级*/
    this.reg_time_start = opts && opts.reg_time_start || 0;/*注册开始时间*/
    this.reg_time_end = opts && opts.reg_time_end || 0;/*注册结束时间*/
    this.last_login_time = opts && opts.last_login_time || 0;/*最后登录时间*/
    this.send_time = opts && opts.send_time || 0;/*发送时间*/
    this.title = opts && opts.title || null;/*邮件标题*/
    this.content = opts && opts.content || null;/*邮件内容*/
    this.gold = opts && opts.gold || 0;/*元宝*/
    this.bind_gold = opts && opts.bind_gold || 0;/*绑定元宝*/
    this.goodsinfo = opts && opts.goodsinfo || null;/*道具信息*/

};
_Class.tableName = 'CondMail';
_Class.selectCols = 'idx,pf_id,sex,is_online,min_lv,max_lv,reg_time_start,reg_time_end,last_login_time,send_time,title,content,gold,bind_gold,goodsinfo';/**
Copy
副本表
**/
var _Class = module.exports = function(opts){
    this.playerId = opts && opts.playerId || null;/*玩家id*/
    this.expeditionPlayerIds = opts && opts.expeditionPlayerIds || null;/*黑暗森林守关者id列表*/
    this.expeditionSelfHpInfo = opts && opts.expeditionSelfHpInfo || null;/*黑暗森林玩家自身血量信息*/
    this.expeditionEnemyName = opts && opts.expeditionEnemyName || null;/*黑暗森林守关者名字*/
    this.expeditionEnemyLevel = opts && opts.expeditionEnemyLevel || 0;/*黑暗森林守关者等级*/
    this.expeditionEnemySex = opts && opts.expeditionEnemySex || 0;/*黑暗森林守关者性别*/
    this.expeditionEnemyForce = opts && opts.expeditionEnemyForce || 0;/*黑暗森林守关者神力值*/
    this.expeditionEnemyLineupInfo = opts && opts.expeditionEnemyLineupInfo || null;/*黑暗森林守关者布阵信息*/
    this.expeditionEnemyHpInfo = opts && opts.expeditionEnemyHpInfo || null;/*黑暗森林守关者血量信息*/
    this.expeditionId = opts && opts.expeditionId || 0;/*黑暗森林通关关卡ID*/
    this.expeditionRewardInfo = opts && opts.expeditionRewardInfo || null;/*黑暗森林奖励领取次数信息*/
    this.honourWarRegTime = opts && opts.honourWarRegTime || 0;/*荣耀之战报名时间*/
    this.mapBoxAwardIds = opts && opts.mapBoxAwardIds || null;/*地图宝箱已领取ID*/
    this.copyUnlockId = opts && opts.copyUnlockId || 1000;/*副本解锁章节*/
    this.guildCopyRankIds = opts && opts.guildCopyRankIds || null;/*公会副本排行已领邮件副本ID*/
    this.dailyCopyIds = opts && opts.dailyCopyIds || null;/*每日副本通关ID（数组）*/
    this.friendHelpList = opts && opts.friendHelpList || null;/*好友援助列表*/
    this.helpGodId = opts && opts.helpGodId || null;/*已援助神灵ID*/

};
_Class.tableName = 'Copy';
_Class.selectCols = 'playerId,expeditionPlayerIds,expeditionSelfHpInfo,expeditionEnemyName,expeditionEnemyLevel,expeditionEnemySex,expeditionEnemyForce,expeditionEnemyLineupInfo,expeditionEnemyHpInfo,expeditionId,expeditionRewardInfo,honourWarRegTime,mapBoxAwardIds,copyUnlockId,guildCopyRankIds,dailyCopyIds,friendHelpList,helpGodId';/**
Counter
玩家计数器
**/
var _Class = module.exports = function(opts){
    this.playerId = opts && opts.playerId || null;/*玩家ID*/
    this.escortRefreshCount = opts && opts.escortRefreshCount || 0;/*护送刷新次数*/
    this.sysLiveInfo = opts && opts.sysLiveInfo || 0;/*活跃度统计信息*/
    this.quickBattleFreeNum = opts && opts.quickBattleFreeNum || 0;/*快速战斗免费次数*/
    this.limitInfo = opts && opts.limitInfo || null;/*限制次数信息*/

};
_Class.tableName = 'Counter';
_Class.selectCols = 'playerId,escortRefreshCount,sysLiveInfo,quickBattleFreeNum,limitInfo';/**
Currency
货币表
**/
var _Class = module.exports = function(opts){
    this.playerId = opts && opts.playerId || null;/**/
    this.gold = opts && opts.gold || 0;/*金币*/
    this.diamond = opts && opts.diamond || 0;/*钻石*/
    this.arena = opts && opts.arena || 0;/*竞技币*/
    this.friend = opts && opts.friend || 0;/*友情点*/
    this.godExp = opts && opts.godExp || 0;/*神灵经验*/
    this.guildDonate = opts && opts.guildDonate || 0;/*公会贡献*/
    this.legendChip = opts && opts.legendChip || 0;/*传说碎片*/
    this.soulStone = opts && opts.soulStone || 0;/*灵魂石*/
    this.godCrystal = opts && opts.godCrystal || 0;/*神界结晶*/
    this.darkEssence = opts && opts.darkEssence || 0;/*黑暗精华*/
    this.convertDust = opts && opts.convertDust || 0;/*转换星尘*/
    this.honour = opts && opts.honour || 0;/*荣耀币*/
    this.godDomain = opts && opts.godDomain || 0;/*神域币*/
    this.vipScore = opts && opts.vipScore || 0;/*VIP积分*/

};
_Class.tableName = 'Currency';
_Class.selectCols = 'playerId,gold,diamond,arena,friend,godExp,guildDonate,legendChip,soulStone,godCrystal,darkEssence,convertDust,honour,godDomain,vipScore';/**
Escort
商队护送
**/
var _Class = module.exports = function(opts){
    this.playerId = opts && opts.playerId || null;/*玩家ID*/
    this.tradeId = opts && opts.tradeId || 0;/*护送商队ID*/
    this.endTime = opts && opts.endTime || 0;/*护送结束时间*/
    this.robCount = opts && opts.robCount || 0;/*被成功掠夺次数*/
    this.robbers = opts && opts.robbers || null;/*掠夺者ID*/
    this.multiple = opts && opts.multiple || 1;/*奖励倍数*/

};
_Class.tableName = 'Escort';
_Class.selectCols = 'playerId,tradeId,endTime,robCount,robbers,multiple';/**
EscortRecord
商队被截记录
**/
var _Class = module.exports = function(opts){
    this.recordId = opts && opts.recordId || null;/*记录id*/
    this.playerId = opts && opts.playerId || null;/*玩家id*/
    this.recordTime = opts && opts.recordTime || 0;/*记录时间*/
    this.recordType = opts && opts.recordType || 0;/*记录类型*/
    this.tradeId = opts && opts.tradeId || 0;/*商队id*/
    this.robberId = opts && opts.robberId || 0;/*抢夺者Id*/
    this.multiple = opts && opts.multiple || 0;/*奖励倍数*/

};
_Class.tableName = 'EscortRecord';
_Class.selectCols = 'recordId,playerId,recordTime,recordType,tradeId,robberId,multiple';/**
Extend

**/
var _Class = module.exports = function(opts){
    this.playerId = opts && opts.playerId || null;/*角色ID*/
    this.counterP3 = opts && opts.counterP3 || 0;/*道具召唤胎3计数器*/
    this.counterP4 = opts && opts.counterP4 || 0;/*道具召唤胎4计数器*/
    this.counterP5 = opts && opts.counterP5 || 0;/*道具召唤胎5计数器*/
    this.counter4 = opts && opts.counter4 || 0;/*钻石召唤胎4计数器*/
    this.counter5 = opts && opts.counter5 || 0;/*钻石召唤胎5计数器*/
    this.counter5s = opts && opts.counter5s || 0;/*召唤特殊胎5计数器*/
    this.godAlbum = opts && opts.godAlbum || null;/*神灵图鉴*/
    this.thew = opts && opts.thew || 0;/*体力*/
    this.lastThewTime = opts && opts.lastThewTime || 0;/*上次体力结算时间*/
    this.mainProgress = opts && opts.mainProgress || 0;/*主线进度*/
    this.lastProgressTime = opts && opts.lastProgressTime || 0;/*下一关开始时间*/
    this.runeCopyInfo = opts && opts.runeCopyInfo || null;/*符文副本信息*/
    this.lineupInfo = opts && opts.lineupInfo || null;/*布阵信息*/
    this.lineupArtifactInfo = opts && opts.lineupArtifactInfo || null;/*布阵神器信息*/
    this.limitInfo = opts && opts.limitInfo || null;/*限制信息*/
    this.wishNums = opts && opts.wishNums || null;/*许愿保底次数*/
    this.lastRefreshTime = opts && opts.lastRefreshTime || 0;/*上次跨时间戳刷新时间*/
    this.arenaFailTime = opts && opts.arenaFailTime || 0;/*竞技场挑战失败时间*/
    this.marketList = opts && opts.marketList || null;/*集市商品列表*/
    this.shopList = opts && opts.shopList || null;/*商品购买次数*/
    this.marketRefreshReplyTime = opts && opts.marketRefreshReplyTime || 0;/*集市刷新时间*/
    this.groundCopyInfo = opts && opts.groundCopyInfo || null;/*地下城副本信息*/
    this.towerCopyInfo = opts && opts.towerCopyInfo || null;/*试炼塔副本信息*/
    this.towerAwardInfo = opts && opts.towerAwardInfo || null;/*试炼塔额外奖励信息*/
    this.systemMailId = opts && opts.systemMailId || 0;/*系统邮件ID*/
    this.speOpeInfo = opts && opts.speOpeInfo || null;/*特殊操作信息*/
    this.dailyOnlineTime = opts && opts.dailyOnlineTime || 0;/*本日在线时间*/
    this.totalOnlineTime = opts && opts.totalOnlineTime || 0;/*总在线时间*/
    this.onlineEndTime = opts && opts.onlineEndTime || 0;/*在线时间结算时间戳*/
    this.indulgeOnlineTime = opts && opts.indulgeOnlineTime || 0;/*防沉迷在线时间*/
    this.indulgeOutlineTime = opts && opts.indulgeOutlineTime || 0;/*防沉迷离线时间*/
    this.indulgeEndTime = opts && opts.indulgeEndTime || 0;/*防沉迷统计时间*/
    this.afkAward = opts && opts.afkAward || null;/*挂机奖励*/
    this.lastAfkTime = opts && opts.lastAfkTime || 0;/*上次更新挂机奖励时间*/
    this.lastGetAfkTime = opts && opts.lastGetAfkTime || 0;/*上次领取挂机奖励时间*/
    this.treasureAtkEndTime = opts && opts.treasureAtkEndTime || 0;/*宝藏攻击结束时间戳*/
    this.redPointInfo = opts && opts.redPointInfo || null;/*红点数据信息*/
    this.treasureId = opts && opts.treasureId || 0;/*占领宝藏ID*/
    this.guildCopyDamageInfo = opts && opts.guildCopyDamageInfo || null;/*公会副本伤害信息*/
    this.guildCopyAwardInfo = opts && opts.guildCopyAwardInfo || null;/*公会副本通关奖励信息*/
    this.overplusInfo = opts && opts.overplusInfo || null;/*剩余次数（每天0点重置）*/
    this.worshipInfo = opts && opts.worshipInfo || null;/*膜拜信息（每天0点重置）*/
    this.maxHistoryForce = opts && opts.maxHistoryForce || 0;/*最大历史总战斗力*/
    this.initState = opts && opts.initState || 0;/*玩家初始化数据状态*/
    this.worldBossReplyTime = opts && opts.worldBossReplyTime || 0;/*世界boss回复时间*/
    this.mergeVersion = opts && opts.mergeVersion || 0;/*合服版本号*/
    this.artifactInfo = opts && opts.artifactInfo || null;/*神器信息*/
    this.escortTradeId = opts && opts.escortTradeId || 0;/*随机护送商队ID*/
    this.guildSkillInfo = opts && opts.guildSkillInfo || null;/*公会技能信息*/
    this.mineRobReplyTime = opts && opts.mineRobReplyTime || 0;/*神秘岛屿掠夺回复时间*/
    this.advtScore = opts && opts.advtScore || 0;/*探险积分*/
    this.forestCurFloor = opts && opts.forestCurFloor || 0;/*迷雾森林当前层数*/
    this.forestMaxFloor = opts && opts.forestMaxFloor || 0;/*迷雾森林最高层数*/
    this.doneForestChests = opts && opts.doneForestChests || null;/*已领取的迷雾森林宝箱*/
    this.guildWarSession = opts && opts.guildWarSession || 0;/*公会战奖励赛季ID*/
    this.guildWarAwardCount = opts && opts.guildWarAwardCount || null;/*公会战奖励次数*/
    this.maxGodForce = opts && opts.maxGodForce || 0;/*最高神灵战力值*/
    this.doneSysOpenChests = opts && opts.doneSysOpenChests || null;/*已领取的系统开启宝箱*/
    this.godFateIds = opts && opts.godFateIds || null;/*神灵图鉴套装ID*/
    this.matchClgList = opts && opts.matchClgList || null;/*匹配赛挑战列表*/
    this.matchClgListTime = opts && opts.matchClgListTime || 0;/*匹配赛上次刷新挑战列表时间*/
    this.clgMatchNum = opts && opts.clgMatchNum || 0;/*匹配赛主动挑战次数(每周清)*/
    this.doneMatchChests = opts && opts.doneMatchChests || null;/*已领取的匹配赛挑战宝箱*/
    this.lastMatchDefNum = opts && opts.lastMatchDefNum || 0;/*上次查看的匹配赛防守次数*/
    this.maxStarLevel = opts && opts.maxStarLevel || 0;/*神灵历史最高星级*/
    this.maxStarLevelForce = opts && opts.maxStarLevelForce || 0;/*最高星级时最高战力*/
    this.artifactSkillLv = opts && opts.artifactSkillLv || 1;/*神器技能等级*/
    this.artifactStrengthLv = opts && opts.artifactStrengthLv || 0;/*神器强化等级*/
    this.artifactBaptizeLv = opts && opts.artifactBaptizeLv || 1;/*神器洗练等级*/
    this.artifactBaptizeExp = opts && opts.artifactBaptizeExp || 0;/*神器洗练经验*/
    this.artifactStarLv = opts && opts.artifactStarLv || 0;/*神器星级*/
    this.artifactStarExp = opts && opts.artifactStarExp || 0;/*神器星级经验*/
    this.artifactBaptizeAttrs = opts && opts.artifactBaptizeAttrs || null;/*神器洗练属性*/
    this.treasureBooks = opts && opts.treasureBooks || null;/*宝物图鉴*/
    this.guildCopyMaxDmg = opts && opts.guildCopyMaxDmg || null;/*公会副本最高伤害*/
    this.guildHelpEndTime = opts && opts.guildHelpEndTime || 0;/*公会求援结算时间戳*/
    this.firstIds = opts && opts.firstIds || null;/*终身首次ID*/
    this.godAlbumAward = opts && opts.godAlbumAward || null;/*神灵图鉴奖励*/

};
_Class.tableName = 'Extend';
_Class.selectCols = 'playerId,counterP3,counterP4,counterP5,counter4,counter5,counter5s,godAlbum,thew,lastThewTime,mainProgress,lastProgressTime,runeCopyInfo,lineupInfo,lineupArtifactInfo,limitInfo,wishNums,lastRefreshTime,arenaFailTime,marketList,shopList,marketRefreshReplyTime,groundCopyInfo,towerCopyInfo,towerAwardInfo,systemMailId,speOpeInfo,dailyOnlineTime,totalOnlineTime,onlineEndTime,indulgeOnlineTime,indulgeOutlineTime,indulgeEndTime,afkAward,lastAfkTime,lastGetAfkTime,treasureAtkEndTime,redPointInfo,treasureId,guildCopyDamageInfo,guildCopyAwardInfo,overplusInfo,worshipInfo,maxHistoryForce,initState,worldBossReplyTime,mergeVersion,artifactInfo,escortTradeId,guildSkillInfo,mineRobReplyTime,advtScore,forestCurFloor,forestMaxFloor,doneForestChests,guildWarSession,guildWarAwardCount,maxGodForce,doneSysOpenChests,godFateIds,matchClgList,matchClgListTime,clgMatchNum,doneMatchChests,lastMatchDefNum,maxStarLevel,maxStarLevelForce,artifactSkillLv,artifactStrengthLv,artifactBaptizeLv,artifactBaptizeExp,artifactStarLv,artifactStarExp,artifactBaptizeAttrs,treasureBooks,guildCopyMaxDmg,guildHelpEndTime,firstIds,godAlbumAward';/**
Friend
好友表
**/
var _Class = module.exports = function(opts){
    this.playerId = opts && opts.playerId || null;/**/
    this.friends = opts && opts.friends || null;/*好友*/
    this.requests = opts && opts.requests || null;/*好友邀请*/
    this.groupId = opts && opts.groupId || null;/*队伍ID*/
    this.isInvite = opts && opts.isInvite || null;/*是否接受组队邀请*/
    this.godDmGrade = opts && opts.godDmGrade || 1;/*神域段位*/
    this.godDmScore = opts && opts.godDmScore || 1000;/*神域积分*/
    this.godDmRank = opts && opts.godDmRank || 0;/*激战神域排名*/
    this.inviteCd = opts && opts.inviteCd || null;/*邀请CD列表*/
    this.inviteInfo = opts && opts.inviteInfo || null;/*邀请列表信息*/
    this.refuseInvite = opts && opts.refuseInvite || null;/*拒绝邀请*/
    this.oneKeyInviteCd = opts && opts.oneKeyInviteCd || 0;/*一键邀请CD*/
    this.lastRefreshTime = opts && opts.lastRefreshTime || 0;/*最后刷新时间*/
    this.blackLists = opts && opts.blackLists || null;/*黑名单*/
    this.groupCopyId = opts && opts.groupCopyId || null;/*组队副本ID*/
    this.isCopyInvite = opts && opts.isCopyInvite || null;/*是否接受组队副本邀请*/
    this.groupCopyFloor = opts && opts.groupCopyFloor || 0;/*组队副本关卡*/
    this.inviteCopyCd = opts && opts.inviteCopyCd || null;/*组队副本邀请CD列表*/
    this.inviteCopyInfo = opts && opts.inviteCopyInfo || null;/*组队副本邀请列表信息*/
    this.refuseCopyInvite = opts && opts.refuseCopyInvite || null;/*组队副本拒绝邀请*/
    this.groupCopyChapterAward = opts && opts.groupCopyChapterAward || null;/*组队副本每章奖励ID(数组)*/
    this.groupCopyServerAwardId = opts && opts.groupCopyServerAwardId || 0;/*组队副本全服奖励ID*/

};
_Class.tableName = 'Friend';
_Class.selectCols = 'playerId,friends,requests,groupId,isInvite,godDmGrade,godDmScore,godDmRank,inviteCd,inviteInfo,refuseInvite,oneKeyInviteCd,lastRefreshTime,blackLists,groupCopyId,isCopyInvite,groupCopyFloor,inviteCopyCd,inviteCopyInfo,refuseCopyInvite,groupCopyChapterAward,groupCopyServerAwardId';/**
FriendHelp
好友援助
**/
var _Class = module.exports = function(opts){
    this.helpId = opts && opts.helpId || null;/*援助ID*/
    this.playerId = opts && opts.playerId || null;/*玩家ID*/
    this.godInfo = opts && opts.godInfo || null;/*神灵信息*/
    this.hireFriendId = opts && opts.hireFriendId || null;/*已雇佣好友ID*/
    this.createTime = opts && opts.createTime || 0;/*创建时间*/

};
_Class.tableName = 'FriendHelp';
_Class.selectCols = 'helpId,playerId,godInfo,hireFriendId,createTime';/**
Global
全局表
**/
var _Class = module.exports = function(opts){
    this.globalId = opts && opts.globalId || 0;/*全局key枚举值*/
    this.strValue = opts && opts.strValue || null;/*字符串值*/
    this.intValue = opts && opts.intValue || 0;/*数值值*/

};
_Class.tableName = 'Global';
_Class.selectCols = 'globalId,strValue,intValue';/**
GmRecharge

**/
var _Class = module.exports = function(opts){
    this.pId = opts && opts.pId || 0;/*平台ID*/
    this.orderId = opts && opts.orderId || null;/*订单ID*/
    this.channelId = opts && opts.channelId || null;/*渠道ID*/
    this.accountId = opts && opts.accountId || null;/*平台账号ID*/
    this.playerId = opts && opts.playerId || null;/*玩家ID*/
    this.playerName = opts && opts.playerName || null;/*玩家名字*/
    this.itemId = opts && opts.itemId || null;/*商品ID*/
    this.itemType = opts && opts.itemType || 0;/*商品类型*/
    this.amount = opts && opts.amount || 0;/*充值金额(分)*/
    this.gold = opts && opts.gold || 0;/*元宝数量*/
    this.firstGold = opts && opts.firstGold || 0;/*首购赠送*/
    this.plusGold = opts && opts.plusGold || 0;/*赠送元宝*/
    this.item = opts && opts.item || null;/*道具配置(json)*/
    this.moneyType = opts && opts.moneyType || 0;/*货币类型*/
    this.payTime = opts && opts.payTime || 0;/*支付时间*/
    this.state = opts && opts.state || 0;/*订单状态*/

};
_Class.tableName = 'GmRecharge';
_Class.selectCols = 'pId,orderId,channelId,accountId,playerId,playerName,itemId,itemType,amount,gold,firstGold,plusGold,item,moneyType,payTime,state';/**
God
神灵表
**/
var _Class = module.exports = function(opts){
    this.playerId = opts && opts.playerId || null;/*角色ID*/
    this.godKey = opts && opts.godKey || 0;/*神灵最大编号*/
    this.gods = opts && opts.gods || null;/*神灵*/
    this.skinIds = opts && opts.skinIds || null;/*已激活皮肤ID*/
    this.maxStarLvInfo = opts && opts.maxStarLvInfo || null;/*神灵获得最高星级信息*/
    this.godAwakens = opts && opts.godAwakens || null;/*已觉醒神灵模板ID*/

};
_Class.tableName = 'God';
_Class.selectCols = 'playerId,godKey,gods,skinIds,maxStarLvInfo,godAwakens';/**
GroupCopy
组队副本
**/
var _Class = module.exports = function(opts){
    this.groupId = opts && opts.groupId || null;/*队伍id*/
    this.dismissTime = opts && opts.dismissTime || 0;/*自动解散时间*/
    this.memberList = opts && opts.memberList || null;/*成员列表*/
    this.battleReport = opts && opts.battleReport || null;/*战报信息*/
    this.applyList = opts && opts.applyList || null;/*申请列表*/

};
_Class.tableName = 'GroupCopy';
_Class.selectCols = 'groupId,dismissTime,memberList,battleReport,applyList';/**
Groups
队伍
**/
var _Class = module.exports = function(opts){
    this.groupId = opts && opts.groupId || null;/*队伍id*/
    this.autoJoin = opts && opts.autoJoin || 0;/*自动加入*/
    this.regTime = opts && opts.regTime || 0;/*开始匹配时间*/
    this.memberList = opts && opts.memberList || null;/*成员列表*/

};
_Class.tableName = 'Groups';
_Class.selectCols = 'groupId,autoJoin,regTime,memberList';/**
Guild
公会
**/
var _Class = module.exports = function(opts){
    this.guildId = opts && opts.guildId || null;/*公会id*/
    this.name = opts && opts.name || null;/*公会名字*/
    this.head = opts && opts.head || 0;/*公会头像*/
    this.level = opts && opts.level || 1;/*公会等级*/
    this.exp = opts && opts.exp || 0;/*公会经验*/
    this.num = opts && opts.num || 0;/*公会人数*/
    this.notice = opts && opts.notice || null;/*公会公告*/
    this.signIn = opts && opts.signIn || 0;/*今日签到总人数*/
    this.oldSignIn = opts && opts.oldSignIn || 0;/*昨日签到总人数*/
    this.limitLevel = opts && opts.limitLevel || 0;/*限制进入等级*/
    this.autoJoin = opts && opts.autoJoin || 0;/*自动加入*/
    this.memberList = opts && opts.memberList || null;/*成员列表*/
    this.applyList = opts && opts.applyList || null;/*申请列表*/
    this.copyMosterInfo = opts && opts.copyMosterInfo || null;/*副本怪物信息*/
    this.copyId = opts && opts.copyId || 0;/*通关副本ID*/
    this.copyAwardCount = opts && opts.copyAwardCount || null;/*公会通关奖励次数*/
    this.pId = opts && opts.pId || 0;/*创建者的平台ID*/
    this.sId = opts && opts.sId || 0;/*创建者的原始服务器ID*/
    this.createTime = opts && opts.createTime || 0;/*公会创建时间*/
    this.guildWarRegTime = opts && opts.guildWarRegTime || 0;/*公会战报名时间*/
    this.guildWarSession = opts && opts.guildWarSession || 0;/*公会战奖励赛季ID*/
    this.guildWarGrade = opts && opts.guildWarGrade || 0;/*公会战最高段位*/
    this.guildWarAwardInfo = opts && opts.guildWarAwardInfo || null;/*公会战奖励信息*/

};
_Class.tableName = 'Guild';
_Class.selectCols = 'guildId,name,head,level,exp,num,notice,signIn,oldSignIn,limitLevel,autoJoin,memberList,applyList,copyMosterInfo,copyId,copyAwardCount,pId,sId,createTime,guildWarRegTime,guildWarSession,guildWarGrade,guildWarAwardInfo';/**
GuildHelp
公会援助表
**/
var _Class = module.exports = function(opts){
    this.helpId = opts && opts.helpId || null;/*援助索引ID*/
    this.helpType = opts && opts.helpType || 0;/*援助类型*/
    this.playerId = opts && opts.playerId || null;/*玩家ID*/
    this.guildId = opts && opts.guildId || null;/*公会ID*/
    this.helpNum = opts && opts.helpNum || 0;/*援助次数*/
    this.getNum = opts && opts.getNum || 0;/*领取次数*/
    this.createTime = opts && opts.createTime || 0;/*创建时间*/
    this.helpPos = opts && opts.helpPos || 0;/*位置*/

};
_Class.tableName = 'GuildHelp';
_Class.selectCols = 'helpId,helpType,playerId,guildId,helpNum,getNum,createTime,helpPos';/**
GuildWar
公会战报名信息
**/
var _Class = module.exports = function(opts){
    this.guildId = opts && opts.guildId || null;/*公会ID*/
    this.guildHead = opts && opts.guildHead || 0;/*公会图标*/
    this.guildLevel = opts && opts.guildLevel || 0;/*公会等级*/
    this.guildName = opts && opts.guildName || null;/*公会名字*/
    this.guildPid = opts && opts.guildPid || 0;/*公会的平台ID*/
    this.guildSid = opts && opts.guildSid || 0;/*公会的原始服务器ID*/
    this.presidentId = opts && opts.presidentId || null;/*会长ID*/
    this.presidentName = opts && opts.presidentName || null;/*会长名字*/
    this.regTime = opts && opts.regTime || 0;/*报名时间*/
    this.endTime = opts && opts.endTime || 0;/*本赛季结束时间*/
    this.dailyScore = opts && opts.dailyScore || 0;/*今日积分*/
    this.maxGuildGrade = opts && opts.maxGuildGrade || 1;/*本赛季最高段位*/
    this.totalScore = opts && opts.totalScore || 0;/*赛季积分*/
    this.totalForce = opts && opts.totalForce || 0;/*总战斗力*/
    this.guildGrade = opts && opts.guildGrade || 1;/*公会段位*/
    this.upgradeType = opts && opts.upgradeType || 0;/*公会晋级类型*/
    this.memberInfo = opts && opts.memberInfo || null;/*公会成员信息*/
    this.matchGuildId = opts && opts.matchGuildId || null;/*本轮匹配到的公会ID*/
    this.matchGroupId = opts && opts.matchGroupId || 0;/*公会分组ID*/

};
_Class.tableName = 'GuildWar';
_Class.selectCols = 'guildId,guildHead,guildLevel,guildName,guildPid,guildSid,presidentId,presidentName,regTime,endTime,dailyScore,maxGuildGrade,totalScore,totalForce,guildGrade,upgradeType,memberInfo,matchGuildId,matchGroupId';/**
GuildWarRankLog
公会赛季排行日志表
**/
var _Class = module.exports = function(opts){
    this.logId = opts && opts.logId || null;/*赛季排行日志ID*/
    this.session = opts && opts.session || 0;/*第几赛季*/
    this.guildRank = opts && opts.guildRank || 0;/*公会赛季排名*/
    this.guildId = opts && opts.guildId || null;/*公会ID*/
    this.guildHead = opts && opts.guildHead || 0;/*公会图标*/
    this.guildLevel = opts && opts.guildLevel || 0;/*公会等级*/
    this.guildName = opts && opts.guildName || null;/*公会名字*/
    this.guildPid = opts && opts.guildPid || 0;/*公会的平台ID*/
    this.guildSid = opts && opts.guildSid || 0;/*公会的原始服务器ID*/
    this.presidentId = opts && opts.presidentId || null;/*会长ID*/
    this.presidentName = opts && opts.presidentName || null;/*会长名字*/
    this.totalForce = opts && opts.totalForce || 0;/*公会总战斗力*/

};
_Class.tableName = 'GuildWarRankLog';
_Class.selectCols = 'logId,session,guildRank,guildId,guildHead,guildLevel,guildName,guildPid,guildSid,presidentId,presidentName,totalForce';/**
Honour
荣耀之战
**/
var _Class = module.exports = function(opts){
    this.recordId = opts && opts.recordId || null;/*记录ID*/
    this.session = opts && opts.session || 0;/*赛季ID*/
    this.stage = opts && opts.stage || 0;/*阶段ID*/
    this.groupId = opts && opts.groupId || 0;/*小组ID*/
    this.round = opts && opts.round || 0;/*轮数*/
    this.pos = opts && opts.pos || 0;/*位置*/
    this.winner = opts && opts.winner || 0;/*获胜方（1：左方，2：右方）*/
    this.updateTime = opts && opts.updateTime || 0;/*更新时间*/
    this.leftId = opts && opts.leftId || null;/*左方玩家ID*/
    this.rightId = opts && opts.rightId || null;/*右方玩家ID*/
    this.leftInfo = opts && opts.leftInfo || null;/*左方玩家信息*/
    this.rightInfo = opts && opts.rightInfo || null;/*右方玩家信息*/
    this.betInfo = opts && opts.betInfo || null;/*押注信息*/
    this.battleInfo = opts && opts.battleInfo || null;/*战斗回放信息*/

};
_Class.tableName = 'Honour';
_Class.selectCols = 'recordId,session,stage,groupId,round,pos,winner,updateTime,leftId,rightId,leftInfo,rightInfo,betInfo,battleInfo';/**
HonourMatch
荣耀之战匹配表
**/
var _Class = module.exports = function(opts){
    this.recordId = opts && opts.recordId || null;/*记录ID*/
    this.session = opts && opts.session || 0;/*赛季ID*/
    this.stage = opts && opts.stage || 0;/*阶段ID*/
    this.groupId = opts && opts.groupId || 0;/*小组ID*/
    this.round = opts && opts.round || 0;/*轮数*/
    this.pos = opts && opts.pos || 0;/*位置*/
    this.winner = opts && opts.winner || 0;/*获胜方（1：左方，2：右方）*/
    this.updateTime = opts && opts.updateTime || 0;/*更新时间*/
    this.leftId = opts && opts.leftId || null;/*左方玩家ID*/
    this.rightId = opts && opts.rightId || null;/*右方玩家ID*/
    this.leftInfo = opts && opts.leftInfo || null;/*左方玩家信息*/
    this.rightInfo = opts && opts.rightInfo || null;/*右方玩家信息*/
    this.betInfo = opts && opts.betInfo || null;/*押注信息*/
    this.battleInfo = opts && opts.battleInfo || null;/*战斗回放信息*/

};
_Class.tableName = 'HonourMatch';
_Class.selectCols = 'recordId,session,stage,groupId,round,pos,winner,updateTime,leftId,rightId,leftInfo,rightInfo,betInfo,battleInfo';/**
HonourReg
荣耀之战报名表
**/
var _Class = module.exports = function(opts){
    this.session = opts && opts.session || 0;/*赛季ID*/
    this.playerId = opts && opts.playerId || null;/*玩家ID*/
    this.name = opts && opts.name || null;/*玩家名字*/
    this.sex = opts && opts.sex || 0;/*玩家性别*/
    this.head = opts && opts.head || null;/*玩家头像*/
    this.level = opts && opts.level || 0;/*玩家等级*/
    this.pId = opts && opts.pId || 0;/*平台ID*/
    this.sId = opts && opts.sId || 0;/*玩家原始服务器ID*/
    this.forceNum = opts && opts.forceNum || 0;/*玩家战斗力*/
    this.lineupInfo = opts && opts.lineupInfo || null;/*玩家阵容信息*/
    this.guildName = opts && opts.guildName || null;/*公会名字*/
    this.guildPid = opts && opts.guildPid || 0;/*公会Pid*/
    this.guildSid = opts && opts.guildSid || 0;/*公会Sid*/
    this.headFrame = opts && opts.headFrame || 0;/*头像框*/
    this.showGodId = opts && opts.showGodId || 0;/*展示神灵ID*/
    this.showSkinId = opts && opts.showSkinId || 0;/*展示神灵皮肤ID*/

};
_Class.tableName = 'HonourReg';
_Class.selectCols = 'session,playerId,name,sex,head,level,pId,sId,forceNum,lineupInfo,guildName,guildPid,guildSid,headFrame,showGodId,showSkinId';/**
Mail
邮件表
**/
var _Class = module.exports = function(opts){
    this.mailId = opts && opts.mailId || null;/*邮件id*/
    this.playerId = opts && opts.playerId || null;/*玩家id*/
    this.type = opts && opts.type || 0;/*类型*/
    this.state = opts && opts.state || 0;/*状态*/
    this.endtime = opts && opts.endtime || 0;/*结束时间*/
    this.title = opts && opts.title || null;/*标题*/
    this.content = opts && opts.content || null;/*内容*/
    this.item = opts && opts.item || null;/*物品配置*/
    this.fromTo = opts && opts.fromTo || null;/*来源*/

};
_Class.tableName = 'Mail';
_Class.selectCols = 'mailId,playerId,type,state,endtime,title,content,item,fromTo';/**
MatchWar
匹配赛表
**/
var _Class = module.exports = function(opts){
    this.playerId = opts && opts.playerId || null;/*玩家ID*/
    this.name = opts && opts.name || null;/*玩家名字*/
    this.sex = opts && opts.sex || 0;/*玩家性别*/
    this.head = opts && opts.head || null;/*玩家头像*/
    this.level = opts && opts.level || 0;/*玩家等级*/
    this.pId = opts && opts.pId || 0;/*平台ID*/
    this.sId = opts && opts.sId || 0;/*玩家原始服务器ID*/
    this.forceNum = opts && opts.forceNum || 0;/*玩家战斗力*/
    this.lineupInfo = opts && opts.lineupInfo || null;/*匹配赛防守阵容*/
    this.guildName = opts && opts.guildName || null;/*公会名字*/
    this.guildPid = opts && opts.guildPid || 0;/*公会Pid*/
    this.guildSid = opts && opts.guildSid || 0;/*公会Sid*/
    this.score = opts && opts.score || 0;/*匹配赛积分*/
    this.defNum = opts && opts.defNum || 0;/*总防守次数*/
    this.battleRecords = opts && opts.battleRecords || null;/*战斗记录*/
    this.headFrame = opts && opts.headFrame || 0;/*头像框*/

};
_Class.tableName = 'MatchWar';
_Class.selectCols = 'playerId,name,sex,head,level,pId,sId,forceNum,lineupInfo,guildName,guildPid,guildSid,score,defNum,battleRecords,headFrame';/**
Mine
神秘岛屿矿点信息表
**/
var _Class = module.exports = function(opts){
    this.mineIndex = opts && opts.mineIndex || 0;/*矿点唯一索引*/
    this.islandId = opts && opts.islandId || 0;/*岛屿ID*/
    this.mineId = opts && opts.mineId || 0;/*矿点ID*/
    this.mineType = opts && opts.mineType || 0;/*矿点类型*/
    this.occupierId = opts && opts.occupierId || null;/*占领者ID*/
    this.occupyTime = opts && opts.occupyTime || 0;/*已采集时间*/
    this.startTime = opts && opts.startTime || 0;/*收益开始时间戳*/
    this.robCount = opts && opts.robCount || 0;/*被掠夺次数*/
    this.profitInfo = opts && opts.profitInfo || null;/*当前收益信息*/

};
_Class.tableName = 'Mine';
_Class.selectCols = 'mineIndex,islandId,mineId,mineType,occupierId,occupyTime,startTime,robCount,profitInfo';/**
MineRecord
岛屿矿点记录
**/
var _Class = module.exports = function(opts){
    this.recordId = opts && opts.recordId || null;/*记录id*/
    this.playerId = opts && opts.playerId || null;/*玩家id*/
    this.recordTime = opts && opts.recordTime || 0;/*记录时间*/
    this.recordType = opts && opts.recordType || 0;/*记录类型*/
    this.mineType = opts && opts.mineType || 0;/*矿点类型*/
    this.robberId = opts && opts.robberId || 0;/*抢夺者Id*/
    this.state = opts && opts.state || 0;/*状态*/
    this.rewardInfo = opts && opts.rewardInfo || null;/*奖励信息*/

};
_Class.tableName = 'MineRecord';
_Class.selectCols = 'recordId,playerId,recordTime,recordType,mineType,robberId,state,rewardInfo';/**
News
系统消息
**/
var _Class = module.exports = function(opts){
    this.idx = opts && opts.idx || null;/*系统消息索引*/
    this.title = opts && opts.title || null;/*公告标题*/
    this.content = opts && opts.content || null;/*消息内容*/
    this.start_time = opts && opts.start_time || 0;/*开始时间*/

};
_Class.tableName = 'News';
_Class.selectCols = 'idx,title,content,start_time';/**
Notice
公告消息
**/
var _Class = module.exports = function(opts){
    this.idx = opts && opts.idx || 0;/*系统消息索引*/
    this.content = opts && opts.content || null;/*消息内容*/
    this.start_time = opts && opts.start_time || 0;/*开始时间*/
    this.end_time = opts && opts.end_time || 0;/*消息结束时间*/
    this.interval_time = opts && opts.interval_time || 0;/*消息间隔*/

};
_Class.tableName = 'Notice';
_Class.selectCols = 'idx,content,start_time,end_time,interval_time';/**
Notices
公告表
**/
var _Class = module.exports = function(opts){
    this.idx = opts && opts.idx || null;/*公告索引*/
    this.title = opts && opts.title || null;/*公告标题*/
    this.content = opts && opts.content || null;/*公告内容*/
    this.start_time = opts && opts.start_time || 0;/*开始时间*/
    this.pf_id = opts && opts.pf_id || 0;/*平台id*/

};
_Class.tableName = 'Notices';
_Class.selectCols = 'idx,title,content,start_time,pf_id';/**
Player

**/
var _Class = module.exports = function(opts){
    this.playerId = opts && opts.playerId || null;/*角色ID*/
    this.userId = opts && opts.userId || 0;/*账号ID*/
    this.userName = opts && opts.userName || null;/*用户名*/
    this.createTime = opts && opts.createTime || 0;/*角色创建时间*/
    this.sex = opts && opts.sex || 0;/*性别*/
    this.name = opts && opts.name || null;/**/
    this.head = opts && opts.head || null;/*外部头像链接*/
    this.headId = opts && opts.headId || 0;/*头像id*/
    this.level = opts && opts.level || 1;/*玩家等级*/
    this.exp = opts && opts.exp || 0;/*玩家经验*/
    this.vipLevel = opts && opts.vipLevel || 0;/*VIP等级*/
    this.robot = opts && opts.robot || 0;/*机器人标记*/
    this.guildId = opts && opts.guildId || null;/*公会id*/
    this.guildName = opts && opts.guildName || null;/*公会名字*/
    this.guildPid = opts && opts.guildPid || 0;/*公会Pid*/
    this.guildSid = opts && opts.guildSid || 0;/*公会Sid*/
    this.lastLoginTime = opts && opts.lastLoginTime || 0;/*最后登录时间*/
    this.lastLogoutTime = opts && opts.lastLogoutTime || 0;/*最后登出时间*/
    this.lastLoginIp = opts && opts.lastLoginIp || null;/*最后登录IP*/
    this.gmLevel = opts && opts.gmLevel || 0;/*GM等级*/
    this.gagEndTime = opts && opts.gagEndTime || 0;/*禁言结束时间*/
    this.guildApplyEndTime = opts && opts.guildApplyEndTime || 0;/*公会申请结束时间戳*/
    this.pId = opts && opts.pId || 0;/*平台ID*/
    this.sId = opts && opts.sId || 0;/*玩家原始服务器ID*/
    this.channelId = opts && opts.channelId || null;/*渠道id*/
    this.deviceId = opts && opts.deviceId || 0;/*设备id(1-android,2-ios)*/
    this.isNewPlayer = opts && opts.isNewPlayer || 0;/*是否是新号（改名后值变为1）*/
    this.isIndulge = opts && opts.isIndulge || 0;/*是否防沉迷（0：不防沉迷，1.：防沉迷）*/
    this.isCertification = opts && opts.isCertification || 0;/*是否实名认证*/
    this.forceNum = opts && opts.forceNum || 0;/*玩家当前神力值*/
    this.accountName = opts && opts.accountName || null;/*账号名*/
    this.gmsServerId = opts && opts.gmsServerId || 0;/*后台服务器ID*/
    this.lineupInfo = opts && opts.lineupInfo || null;/*攻击阵容信息*/
    this.headFrame = opts && opts.headFrame || 0;/*头像框*/
    this.showGodId = opts && opts.showGodId || 0;/*展示神灵ID*/
    this.showSkinId = opts && opts.showSkinId || 0;/*展示神灵皮肤ID*/

};
_Class.tableName = 'Player';
_Class.selectCols = 'playerId,userId,userName,createTime,sex,name,head,headId,level,exp,vipLevel,robot,guildId,guildName,guildPid,guildSid,lastLoginTime,lastLogoutTime,lastLoginIp,gmLevel,gagEndTime,guildApplyEndTime,pId,sId,channelId,deviceId,isNewPlayer,isIndulge,isCertification,forceNum,accountName,gmsServerId,lineupInfo,headFrame,showGodId,showSkinId';/**
Recharge

**/
var _Class = module.exports = function(opts){
    this.pId = opts && opts.pId || 0;/*平台ID*/
    this.orderId = opts && opts.orderId || null;/*订单ID*/
    this.cpOrderId = opts && opts.cpOrderId || null;/*cp游戏订单号*/
    this.uid = opts && opts.uid || null;/*平台用户的 uid*/
    this.userName = opts && opts.userName || null;/*平台用户的用户名*/
    this.money = opts && opts.money || 0.00;/*商品价格(元) 例：1.00*/
    this.goodsId = opts && opts.goodsId || 0;/*商品ID*/
    this.goodsName = opts && opts.goodsName || null;/*商品名*/
    this.serverId = opts && opts.serverId || 0;/*支付时的游戏服*/
    this.playerId = opts && opts.playerId || null;/*支付时角色信息*/
    this.payTime = opts && opts.payTime || 0;/*支付时间*/
    this.state = opts && opts.state || 0;/*订单状态*/

};
_Class.tableName = 'Recharge';
_Class.selectCols = 'pId,orderId,cpOrderId,uid,userName,money,goodsId,goodsName,serverId,playerId,payTime,state';/**
RechargeOrder
充值订单
**/
var _Class = module.exports = function(opts){
    this.orderId = opts && opts.orderId || null;/*订单ID*/
    this.cpOrderId = opts && opts.cpOrderId || null;/*cp游戏订单号*/
    this.playerId = opts && opts.playerId || null;/*支付时角色信息*/
    this.uid = opts && opts.uid || null;/*平台用户的 uid*/
    this.userName = opts && opts.userName || null;/*平台用户的用户名*/
    this.money = opts && opts.money || 0.00;/*商品价格(元) 例：1.00*/
    this.goodsId = opts && opts.goodsId || 0;/*商品ID*/
    this.goodsName = opts && opts.goodsName || null;/*商品名*/
    this.pId = opts && opts.pId || 0;/*平台ID*/
    this.sId = opts && opts.sId || 0;/*支付时的游戏服*/
    this.payTime = opts && opts.payTime || 0;/*支付时间*/
    this.state = opts && opts.state || 0;/*订单状态(0：生成订单，1：支付成功，2：充值成功)*/

};
_Class.tableName = 'RechargeOrder';
_Class.selectCols = 'orderId,cpOrderId,playerId,uid,userName,money,goodsId,goodsName,pId,sId,payTime,state';/**
ServerList

**/
var _Class = module.exports = function(opts){
    this.serverId = opts && opts.serverId || null;/*游戏服唯一id*/
    this.address = opts && opts.address || null;/**/
    this.serverState = opts && opts.serverState || 0;/**/
    this.population = opts && opts.population || 0;/**/
    this.openTime = opts && opts.openTime || 0;/*开服时间戳*/
    this.serverIp = opts && opts.serverIp || null;/*服务器IP*/
    this.gmsServerId = opts && opts.gmsServerId || 0;/*后台服务器ID*/

};
_Class.tableName = 'ServerList';
_Class.selectCols = 'serverId,address,serverState,population,openTime,serverIp,gmsServerId';/**
ServerPlatform

**/
var _Class = module.exports = function(opts){
    this.platformId = opts && opts.platformId || null;/*平台id*/
    this.idx = opts && opts.idx || null;/*平台内部服务器序号*/
    this.serverName = opts && opts.serverName || null;/*平台内该服显示的名称*/
    this.serverId = opts && opts.serverId || null;/*游戏服唯一id*/
    this.gmsServerId = opts && opts.gmsServerId || 0;/*原始服务器ID*/
    this.mergeServerId = opts && opts.mergeServerId || 0;/*合服后服务器ID*/

};
_Class.tableName = 'ServerPlatform';
_Class.selectCols = 'platformId,idx,serverName,serverId,gmsServerId,mergeServerId';/**
Task

**/
var _Class = module.exports = function(opts){
    this.playerId = opts && opts.playerId || null;/**/
    this.dailyTasks = opts && opts.dailyTasks || null;/*日常任务数据*/
    this.liveness = opts && opts.liveness || 0;/*活跃度*/
    this.doneChests = opts && opts.doneChests || null;/*已领取的活跃度宝箱*/
    this.curTasks = opts && opts.curTasks || null;/*当前任务数据*/
    this.doneTasks = opts && opts.doneTasks || null;/*已完成的任务*/
    this.guideStep = opts && opts.guideStep || 0;/*引导步数*/
    this.guideWeakStep = opts && opts.guideWeakStep || null;/*弱引导步数信息*/
    this.curMainTask = opts && opts.curMainTask || 0;/*当前主线任务ID*/
    this.advanceLevel = opts && opts.advanceLevel || 0;/*进阶之路等级*/
    this.advanceInfos = opts && opts.advanceInfos || null;/*进阶之路信息*/
    this.warriorLevel = opts && opts.warriorLevel || 1;/*勇者之证等级*/
    this.warriorExp = opts && opts.warriorExp || 0;/*勇者之证经验*/
    this.warriorAdvance = opts && opts.warriorAdvance || 0;/*勇者之证进阶奖励激活标识（0：未激活，1：激活）*/
    this.warriorWeekTasks = opts && opts.warriorWeekTasks || null;/*勇者之证周任务*/
    this.warriorMonthTasks = opts && opts.warriorMonthTasks || null;/*勇者之证月任务*/
    this.warriorLevelAwards = opts && opts.warriorLevelAwards || null;/*勇者之证等级奖励*/
    this.warriorAdvanceAwards = opts && opts.warriorAdvanceAwards || null;/*勇者之证进阶奖励*/
    this.warriorWeekAward = opts && opts.warriorWeekAward || 0;/*勇者之证进阶每周奖励领取标识（0：未领取，1：已领取）*/

};
_Class.tableName = 'Task';
_Class.selectCols = 'playerId,dailyTasks,liveness,doneChests,curTasks,doneTasks,guideStep,guideWeakStep,curMainTask,advanceLevel,advanceInfos,warriorLevel,warriorExp,warriorAdvance,warriorWeekTasks,warriorMonthTasks,warriorLevelAwards,warriorAdvanceAwards,warriorWeekAward';/**
User

**/
var _Class = module.exports = function(opts){
    this.id = opts && opts.id || null;/**/
    this.account = opts && opts.account || null;/*玩家账号*/
    this.userName = opts && opts.userName || null;/*用户名*/
    this.password = opts && opts.password || null;/*密码*/
    this.loginCount = opts && opts.loginCount || 0;/*登录次数*/
    this.createTime = opts && opts.createTime || 0;/*创建账号时间*/
    this.lastLoginTime = opts && opts.lastLoginTime || 0;/*最后登录时间*/
    this.banEndTime = opts && opts.banEndTime || 0;/*封号结束时间戳*/
    this.pid = opts && opts.pid || 0;/*平台id*/
    this.channelId = opts && opts.channelId || null;/*渠道id*/

};
_Class.tableName = 'User';
_Class.selectCols = 'id,account,userName,password,loginCount,createTime,lastLoginTime,banEndTime,pid,channelId';/**
Welfare
福利表
**/
var _Class = module.exports = function(opts){
    this.playerId = opts && opts.playerId || null;/*玩家ID*/
    this.loginCount = opts && opts.loginCount || 0;/*今日登录次数*/
    this.totalLoginDay = opts && opts.totalLoginDay || 0;/*总登录天数*/
    this.dailySignIn = opts && opts.dailySignIn || null;/*每日签到（1：已签，2：补签）*/
    this.todaySignIn = opts && opts.todaySignIn || 0;/*今日是否签到（存签到日期）*/
    this.totalSignIn = opts && opts.totalSignIn || null;/*累计签到*/
    this.levelGiftPack = opts && opts.levelGiftPack || null;/*等级礼包*/
    this.loginGiftPack = opts && opts.loginGiftPack || null;/*登录礼包*/
    this.thewSignIn = opts && opts.thewSignIn || null;/*三餐签到（1：已签到，2：已补签）*/
    this.firstRecharge = opts && opts.firstRecharge || null;/*首充礼包*/
    this.lastGmRechargeId = opts && opts.lastGmRechargeId || null;/*最后GM充值Id*/
    this.gmRechargeSum = opts && opts.gmRechargeSum || 0;/*GM充值总数*/
    this.lastRechargeId = opts && opts.lastRechargeId || null;/*最后充值ID*/
    this.rechargeSum = opts && opts.rechargeSum || 0;/*充值总数*/
    this.dailyRechargeSum = opts && opts.dailyRechargeSum || 0;/*每天充值总数*/
    this.rechargeCount = opts && opts.rechargeCount || 0;/*充值次数*/
    this.rechargeGoodsIds = opts && opts.rechargeGoodsIds || null;/*充值后通知客户端商品Id列表*/
    this.privilegeGiftPack = opts && opts.privilegeGiftPack || null;/*特权礼包*/
    this.monthCardEndTime = opts && opts.monthCardEndTime || 0;/*月卡结束时间*/
    this.lifelongCard = opts && opts.lifelongCard || 0;/*终身卡（1：已购买）*/
    this.monthCardAward = opts && opts.monthCardAward || 0;/*月卡领奖（1：已领取）*/
    this.lifelongCardAward = opts && opts.lifelongCardAward || 0;/*终身卡领奖（1：已领取）*/
    this.goodsRechargeCount = opts && opts.goodsRechargeCount || null;/*每个挡位充值次数*/
    this.activityInfo = opts && opts.activityInfo || null;/*活动信息（开始时间，结束时间，活动统计，最后统计时间）*/
    this.activityCountInfo = opts && opts.activityCountInfo || null;/*活动奖励次数信息*/
    this.sevendayInfo = opts && opts.sevendayInfo || null;/*七天任务信息*/
    this.sevendayExtraAward = opts && opts.sevendayExtraAward || null;/*七天额外奖励信息*/
    this.buyLevelFund = opts && opts.buyLevelFund || 0;/*购买等级基金次数*/
    this.levelFundAward = opts && opts.levelFundAward || null;/*等级基金奖励信息*/
    this.condMailIdx = opts && opts.condMailIdx || null;/*条件邮件idx*/
    this.signInStartTime = opts && opts.signInStartTime || 0;/*每日签到开始时间*/
    this.signInLoginCount = opts && opts.signInLoginCount || 0;/*每日签到登录领取次数*/
    this.signInVipCount = opts && opts.signInVipCount || 0;/*每日签到VIP领取次数*/
    this.signInRechargeCount = opts && opts.signInRechargeCount || 0;/*每日签到充值领取次数*/
    this.shareNumToday = opts && opts.shareNumToday || 0;/*当天分享次数*/
    this.shareNumTotal = opts && opts.shareNumTotal || 0;/*累计分享次数*/
    this.doneShares = opts && opts.doneShares || null;/*已领取的分享奖励*/
    this.luckGodNum = opts && opts.luckGodNum || 0;/*神灵转盘幸运值*/
    this.luckGodTypeNums = opts && opts.luckGodTypeNums || null;/*神灵转盘抽取次数信息*/
    this.luckEquipNum = opts && opts.luckEquipNum || 0;/*装备转盘幸运值*/
    this.luckEquipTypeNums = opts && opts.luckEquipTypeNums || null;/*装备转盘抽取次数信息*/
    this.luckArtTypeNums = opts && opts.luckArtTypeNums || null;/*装备转盘抽取次数信息*/
    this.luckTreasureNum = opts && opts.luckTreasureNum || 0;/*宝物转盘幸运值*/
    this.luckTreasureTypeNums = opts && opts.luckTreasureTypeNums || 0;/*宝物转盘抽取次数信息*/
    this.luckTreasureId = opts && opts.luckTreasureId || 0;/*宝物转盘ID*/
    this.luckGodId = opts && opts.luckGodId || 0;/*神灵转盘ID*/
    this.luckEquipId = opts && opts.luckEquipId || 0;/*装备转盘ID*/
    this.luckArtId = opts && opts.luckArtId || 0;/*神器转盘ID*/
    this.luckEquipAward = opts && opts.luckEquipAward || null;/*装备转盘幸运奖励领取信息*/
    this.summonId = opts && opts.summonId || 0;/*限时召唤ID*/
    this.summonScore = opts && opts.summonScore || 0;/*限时召唤积分*/
    this.doneSummonChests = opts && opts.doneSummonChests || null;/*已领取的限时召唤宝箱*/
    this.groupBuyId = opts && opts.groupBuyId || 0;/*限时团购ID*/
    this.groupBuyInfo = opts && opts.groupBuyInfo || null;/*限时团购信息*/
    this.autonymAwardNum = opts && opts.autonymAwardNum || 0;/*实名认证奖励次数*/
    this.onlineTimeAward = opts && opts.onlineTimeAward || null;/*在线时间奖励*/
    this.doneOpenGifts = opts && opts.doneOpenGifts || null;/*已领取的开服豪礼*/
    this.firstRechargeTime = opts && opts.firstRechargeTime || null;/*各档首充时间戳*/
    this.mobileNumber = opts && opts.mobileNumber || 0;/*手机号码*/
    this.bindMobileAward = opts && opts.bindMobileAward || 0;/*绑定手机奖励（1已领取0未领取）*/
    this.downloadApkAward = opts && opts.downloadApkAward || 0;/*下载微端奖励*/
    this.superVip = opts && opts.superVip || 0;/*超级会员（1是，0不是）*/
    this.superVipAward = opts && opts.superVipAward || 0;/*超级会员礼包奖励*/
    this.consumeSum = opts && opts.consumeSum || 0;/*总消费元宝数*/
    this.dailyConsumeSum = opts && opts.dailyConsumeSum || 0;/*每日消费元宝数*/
    this.weekFund = opts && opts.weekFund || null;/*已购买周基金ID(数组)*/
    this.weekFundAward = opts && opts.weekFundAward || null;/*已领取周基金奖励ID(数组)*/
    this.openSvrGiftAwardNums = opts && opts.openSvrGiftAwardNums || null;/*已领取的开服礼包次数*/
    this.dailyRechargeNums = opts && opts.dailyRechargeNums || null;/*每日充值可领取次数*/
    this.dailyRechargeAwardNums = opts && opts.dailyRechargeAwardNums || null;/*每日充值已领取次数*/
    this.sevendayInit = opts && opts.sevendayInit || 0;/*半月活动初始化*/
    this.riskIds = opts && opts.riskIds || null;/*大富翁已踩到ID*/
    this.curRiskId = opts && opts.curRiskId || 0;/*当前大富翁ID*/
    this.riskKey = opts && opts.riskKey || 0;/*奇遇自增ID*/
    this.riskInfo = opts && opts.riskInfo || null;/*奇遇信息*/
    this.dayRechargeLimit = opts && opts.dayRechargeLimit || null;/*每日充值限制次数*/
    this.weekRechargeLimit = opts && opts.weekRechargeLimit || null;/*每周充值限制次数*/
    this.monthRechargeLimit = opts && opts.monthRechargeLimit || null;/*每月充值限制次数*/
    this.openSvrGroupBuyAward = opts && opts.openSvrGroupBuyAward || null;/*开服团购奖励信息*/
    this.openSvrRechargeSum = opts && opts.openSvrRechargeSum || 0;/*开服团购总充值数*/
    this.rechargeRebate = opts && opts.rechargeRebate || 0;/*充值返利是否领取*/

};
_Class.tableName = 'Welfare';
_Class.selectCols = 'playerId,loginCount,totalLoginDay,dailySignIn,todaySignIn,totalSignIn,levelGiftPack,loginGiftPack,thewSignIn,firstRecharge,lastGmRechargeId,gmRechargeSum,lastRechargeId,rechargeSum,dailyRechargeSum,rechargeCount,rechargeGoodsIds,privilegeGiftPack,monthCardEndTime,lifelongCard,monthCardAward,lifelongCardAward,goodsRechargeCount,activityInfo,activityCountInfo,sevendayInfo,sevendayExtraAward,buyLevelFund,levelFundAward,condMailIdx,signInStartTime,signInLoginCount,signInVipCount,signInRechargeCount,shareNumToday,shareNumTotal,doneShares,luckGodNum,luckGodTypeNums,luckEquipNum,luckEquipTypeNums,luckArtTypeNums,luckTreasureNum,luckTreasureTypeNums,luckTreasureId,luckGodId,luckEquipId,luckArtId,luckEquipAward,summonId,summonScore,doneSummonChests,groupBuyId,groupBuyInfo,autonymAwardNum,onlineTimeAward,doneOpenGifts,firstRechargeTime,mobileNumber,bindMobileAward,downloadApkAward,superVip,superVipAward,consumeSum,dailyConsumeSum,weekFund,weekFundAward,openSvrGiftAwardNums,dailyRechargeNums,dailyRechargeAwardNums,sevendayInit,riskIds,curRiskId,riskKey,riskInfo,dayRechargeLimit,weekRechargeLimit,monthRechargeLimit,openSvrGroupBuyAward,openSvrRechargeSum,rechargeRebate';/**
WorldBoss
世界boss表
**/
var _Class = module.exports = function(opts){
    this.bossId = opts && opts.bossId || 0;/*世界bossId*/
    this.bossHp = opts && opts.bossHp || 0;/*世界boss当前血量*/
    this.reviveTime = opts && opts.reviveTime || 0;/*世界boss复活时间*/
    this.playerDamage = opts && opts.playerDamage || null;/*玩家伤害信息*/
    this.records = opts && opts.records || null;/*攻击记录*/

};
_Class.tableName = 'WorldBoss';
_Class.selectCols = 'bossId,bossHp,reviveTime,playerDamage,records';/**
World
世界服全局表
**/
var _Class = module.exports = function(opts){
    this.globalId = opts && opts.globalId || 0;/*全局key枚举值*/
    this.strValue = opts && opts.strValue || null;/*字符串值*/
    this.intValue = opts && opts.intValue || 0;/*数值值*/

};
_Class.tableName = 'World';
_Class.selectCols = 'globalId,strValue,intValue';/**
WorldOrder
世界服订单
**/
var _Class = module.exports = function(opts){
    this.orderId = opts && opts.orderId || null;/*订单ID*/
    this.playerId = opts && opts.playerId || null;/*玩家ID*/
    this.pId = opts && opts.pId || 0;/*平台ID*/
    this.sId = opts && opts.sId || 0;/*玩家原始服务器ID*/
    this.time = opts && opts.time || 0;/*订单时间*/
    this.state = opts && opts.state || 0;/*订单状态*/
    this.type = opts && opts.type || 0;/*订单类型*/
    this.info = opts && opts.info || null;/*其他信息*/

};
_Class.tableName = 'WorldOrder';
_Class.selectCols = 'orderId,playerId,pId,sId,time,state,type,info';/**
WorldPlayer
世界服玩家
**/
var _Class = module.exports = function(opts){
    this.playerId = opts && opts.playerId || null;/*玩家ID*/
    this.serverId = opts && opts.serverId || 0;/*服务器ID*/

};
_Class.tableName = 'WorldPlayer';
_Class.selectCols = 'playerId,serverId';/**
_db_param
全局表
**/
var _Class = module.exports = function(opts){
    this.paramId = opts && opts.paramId || 0;/**/
    this.strValue = opts && opts.strValue || null;/*字符串值*/
    this.intValue = opts && opts.intValue || 0;/*数值值*/

};
_Class.tableName = '_db_param';
_Class.selectCols = 'paramId,strValue,intValue';/**
t_ban_player
封号
**/
var _Class = module.exports = function(opts){
    this.pf_id = opts && opts.pf_id || 0;/*平台ID*/
    this.channel_id = opts && opts.channel_id || 0;/*渠道ID*/
    this.srv_id = opts && opts.srv_id || 0;/*服务器ID*/
    this.logsrv_id = opts && opts.logsrv_id || 0;/*平台登录服务器ID*/
    this.dev_id = opts && opts.dev_id || 1;/*设备ID(1-android,2-ios)*/
    this.part_id = opts && opts.part_id || 1;/*大区ID*/
    this.player_id = opts && opts.player_id || null;/*玩家ID*/
    this.player_name = opts && opts.player_name || null;/*玩家名*/
    this.ban_time = opts && opts.ban_time || 0;/*封禁截止时间*/
    this.reason = opts && opts.reason || null;/*封禁原因*/
    this.operator = opts && opts.operator || null;/*操作人员*/
    this.time = opts && opts.time || 0;/*操作时间*/

};
_Class.tableName = 't_ban_player';
_Class.selectCols = 'pf_id,channel_id,srv_id,logsrv_id,dev_id,part_id,player_id,player_name,ban_time,reason,operator,time';/**
t_ban_speak
禁言
**/
var _Class = module.exports = function(opts){
    this.pf_id = opts && opts.pf_id || 0;/*平台ID*/
    this.channel_id = opts && opts.channel_id || 0;/*渠道ID*/
    this.srv_id = opts && opts.srv_id || 0;/*服务器ID*/
    this.logsrv_id = opts && opts.logsrv_id || 0;/*平台登录的服务器ID*/
    this.dev_id = opts && opts.dev_id || 1;/*设备ID(1-android,2-ios)*/
    this.part_id = opts && opts.part_id || 1;/*大区ID*/
    this.player_id = opts && opts.player_id || 0;/*玩家ID*/
    this.player_name = opts && opts.player_name || null;/*玩家名*/
    this.ban_time = opts && opts.ban_time || 0;/*封禁截止时间*/
    this.reason = opts && opts.reason || null;/*封禁原因*/
    this.operator = opts && opts.operator || null;/*操作人员*/
    this.time = opts && opts.time || 0;/*操作时间*/

};
_Class.tableName = 't_ban_speak';
_Class.selectCols = 'pf_id,channel_id,srv_id,logsrv_id,dev_id,part_id,player_id,player_name,ban_time,reason,operator,time';/**
t_ban_user_ip
封禁玩家IP
**/
var _Class = module.exports = function(opts){
    this.pf_id = opts && opts.pf_id || 0;/*平台ID*/
    this.channel_id = opts && opts.channel_id || 0;/*渠道ID*/
    this.srv_id = opts && opts.srv_id || 0;/*服务器ID*/
    this.logsrv_id = opts && opts.logsrv_id || 0;/*平台登录的服务器ID*/
    this.dev_id = opts && opts.dev_id || 1;/*设备ID(1-android,2-ios)*/
    this.part_id = opts && opts.part_id || 1;/*大区ID*/
    this.ip = opts && opts.ip || null;/*玩家IP*/
    this.ban_time = opts && opts.ban_time || 0;/*封禁截止时间*/
    this.reason = opts && opts.reason || null;/*封禁原因*/
    this.operator = opts && opts.operator || null;/*操作人员*/
    this.time = opts && opts.time || 0;/*操作时间*/

};
_Class.tableName = 't_ban_user_ip';
_Class.selectCols = 'pf_id,channel_id,srv_id,logsrv_id,dev_id,part_id,ip,ban_time,reason,operator,time';/**
t_config_advance_task
进阶任务配置表
**/
var _Class = module.exports = function(opts){
    this.id = opts && opts.id || 0;/*任务ID*/
    this.name = opts && opts.name || null;/*任务名称*/
    this.advance_lv = opts && opts.advance_lv || 0;/*进阶等级*/

};
_Class.tableName = 't_config_advance_task';
_Class.selectCols = 'id,name,advance_lv';/**
t_config_asset
玩家表扩展字段描述表（对应t_log_asset_x， x对应id字段）
**/
var _Class = module.exports = function(opts){
    this.id = opts && opts.id || 0;/*资产ID*/
    this.name = opts && opts.name || null;/*资产名称（如1-元宝，2-绑定元宝）*/
    this.tab = opts && opts.tab || null;/*对应的表(如元宝：t_log_asset_1, 绑定元宝)*/

};
_Class.tableName = 't_config_asset';
_Class.selectCols = 'id,name,tab';/**
t_config_color
颜色ID名称匹配表
**/
var _Class = module.exports = function(opts){
    this.id = opts && opts.id || 0;/*颜色ID*/
    this.name = opts && opts.name || null;/*颜色名称（如白，绿）*/

};
_Class.tableName = 't_config_color';
_Class.selectCols = 'id,name';/**
t_config_dup
副本ID名称匹配表
**/
var _Class = module.exports = function(opts){
    this.id = opts && opts.id || 0;/*副本ID*/
    this.type = opts && opts.type || 0;/*副本类型（没有则用默认值）*/
    this.name = opts && opts.name || null;/*副本名称*/

};
_Class.tableName = 't_config_dup';
_Class.selectCols = 'id,type,name';/**
t_config_guide_task
引导任务配置表
**/
var _Class = module.exports = function(opts){
    this.id = opts && opts.id || 0;/*任务ID*/
    this.name = opts && opts.name || null;/*任务名称*/

};
_Class.tableName = 't_config_guide_task';
_Class.selectCols = 'id,name';/**
t_config_item
道具配置表
**/
var _Class = module.exports = function(opts){
    this.tid = opts && opts.tid || 0;/*模板id*/
    this.name = opts && opts.name || null;/*名字*/
    this.type = opts && opts.type || 0;/*类型*/
    this.subtype = opts && opts.subtype || 0;/*子类型*/
    this.detail = opts && opts.detail || null;/*名字详细描述（包含名字）*/
    this.other = opts && opts.other || null;/*扩展字段，可存储其他相关信息，默认为空*/
    this.quality = opts && opts.quality || 0;/*品质*/

};
_Class.tableName = 't_config_item';
_Class.selectCols = 'tid,name,type,subtype,detail,other,quality';/**
t_config_liveness
活跃度ID名称匹配表
**/
var _Class = module.exports = function(opts){
    this.id = opts && opts.id || 0;/*活跃度系统ID*/
    this.name = opts && opts.name || null;/*活跃度系统名字*/

};
_Class.tableName = 't_config_liveness';
_Class.selectCols = 'id,name';/**
t_config_map
地图配置表
**/
var _Class = module.exports = function(opts){
    this.id = opts && opts.id || 0;/*地图ID*/
    this.name = opts && opts.name || null;/*地图名称*/

};
_Class.tableName = 't_config_map';
_Class.selectCols = 'id,name';/**
t_config_player_ext
玩家表扩展字段描述表（t_player表有用到ext1等扩展字段才需要加此描述表）
**/
var _Class = module.exports = function(opts){
    this.name = opts && opts.name || null;/*字段名（ext1,ext2,ext3...）*/
    this.field_desc = opts && opts.field_desc || null;/*字段描述*/

};
_Class.tableName = 't_config_player_ext';
_Class.selectCols = 'name,field_desc';/**
t_config_rank
排行类型匹配表
**/
var _Class = module.exports = function(opts){
    this.id = opts && opts.id || 0;/*排行类型ID*/
    this.name = opts && opts.name || null;/*排行名称（如宝石排行，装备排行等）*/
    this.base_table = opts && opts.base_table || null;/*排行名称（如宝石排行，装备排行等）*/
    this.cond_1 = opts && opts.cond_1 || null;/*条件1名称*/
    this.cond_2 = opts && opts.cond_2 || null;/*条件2名称*/

};
_Class.tableName = 't_config_rank';
_Class.selectCols = 'id,name,base_table,cond_1,cond_2';/**
t_config_source
来源配置表（主要用于道具，资产获得消耗相关表）
**/
var _Class = module.exports = function(opts){
    this.id = opts && opts.id || null;/*来源ID*/
    this.name = opts && opts.name || null;/*来源名称*/

};
_Class.tableName = 't_config_source';
_Class.selectCols = 'id,name';/**
t_config_step
进阶线ID名称匹配表
**/
var _Class = module.exports = function(opts){
    this.id = opts && opts.id || 0;/*进阶线类型ID*/
    this.name = opts && opts.name || null;/*进阶线名称（如坐骑）*/

};
_Class.tableName = 't_config_step';
_Class.selectCols = 'id,name';/**
t_config_task
任务配置表
**/
var _Class = module.exports = function(opts){
    this.id = opts && opts.id || 0;/*任务ID*/
    this.name = opts && opts.name || null;/*任务名称*/
    this.type = opts && opts.type || 0;/*任务类型ID*/
    this.min_lv = opts && opts.min_lv || 0;/*最小领取等级*/

};
_Class.tableName = 't_config_task';
_Class.selectCols = 'id,name,type,min_lv';/**
t_log_activity_join
活动参与日志
**/
var _Class = module.exports = function(opts){
    this.index = opts && opts.index || null;/*索引*/
    this.pf_id = opts && opts.pf_id || 0;/*平台ID*/
    this.channel_id = opts && opts.channel_id || 0;/*渠道ID*/
    this.srv_id = opts && opts.srv_id || 0;/*服务器ID*/
    this.logsrv_id = opts && opts.logsrv_id || 0;/*平台登录的服务器ID*/
    this.dev_id = opts && opts.dev_id || 1;/*设备ID(1-android,2-ios)*/
    this.part_id = opts && opts.part_id || 1;/*大区ID*/
    this.player_id = opts && opts.player_id || 0;/*玩家ID*/
    this.player_name = opts && opts.player_name || null;/*玩家名*/
    this.user_name = opts && opts.user_name || null;/*用户名*/
    this.id = opts && opts.id || 0;/*活动ID*/
    this.name = opts && opts.name || null;/*活动名*/
    this.type = opts && opts.type || 0;/*活动类型*/
    this.join_level = opts && opts.join_level || 0;/*参与等级*/
    this.time = opts && opts.time || 0;/*参与时间*/
    this.limit = opts && opts.limit || 0;/*限制次数*/

};
_Class.tableName = 't_log_activity_join';
_Class.selectCols = 'index,pf_id,channel_id,srv_id,logsrv_id,dev_id,part_id,player_id,player_name,user_name,id,name,type,join_level,time,limit';/**
t_log_advance_task
进阶任务日志
**/
var _Class = module.exports = function(opts){
    this.pf_id = opts && opts.pf_id || 0;/*平台ID*/
    this.srv_id = opts && opts.srv_id || 0;/*服务器ID*/
    this.channel_id = opts && opts.channel_id || 0;/*渠道ID*/
    this.logsrv_id = opts && opts.logsrv_id || 0;/*平台登录的服务器ID*/
    this.dev_id = opts && opts.dev_id || 1;/*设备ID(1-android,2-ios)*/
    this.part_id = opts && opts.part_id || 1;/*大区ID*/
    this.player_id = opts && opts.player_id || null;/*玩家id*/
    this.create_time = opts && opts.create_time || 0;/*创角时间*/
    this.task_id = opts && opts.task_id || 0;/*任务ID*/
    this.accept_time = opts && opts.accept_time || 0;/*接受时间*/
    this.finish_time = opts && opts.finish_time || 0;/*完成时间*/
    this.task_state = opts && opts.task_state || 0;/*任务状态：0-接取，1-完成*/

};
_Class.tableName = 't_log_advance_task';
_Class.selectCols = 'pf_id,srv_id,channel_id,logsrv_id,dev_id,part_id,player_id,create_time,task_id,accept_time,finish_time,task_state';/**
t_log_asset_type_1
金币日志
**/
var _Class = module.exports = function(opts){
    this.id = opts && opts.id || null;/*索引*/
    this.source_id = opts && opts.source_id || null;/*来源ID*/
    this.time = opts && opts.time || null;/*事件发生时间*/
    this.user_name = opts && opts.user_name || null;/*账号名*/
    this.player_id = opts && opts.player_id || null;/*玩家id*/
    this.player_name = opts && opts.player_name || null;/*玩家名*/
    this.opt_type = opts && opts.opt_type || null;/*操作类型：1、增加；2、扣除。*/
    this.change_asset = opts && opts.change_asset || null;/*增加/扣除的资产*/
    this.remain_asset = opts && opts.remain_asset || null;/*剩余的资产*/
    this.pf_id = opts && opts.pf_id || 0;/*平台ID*/
    this.channel_id = opts && opts.channel_id || 0;/*渠道ID*/
    this.srv_id = opts && opts.srv_id || 0;/*服务器ID*/
    this.logsrv_id = opts && opts.logsrv_id || 0;/*平台登录的服务器ID*/
    this.dev_id = opts && opts.dev_id || 1;/*设备ID(1-android,2-ios)*/
    this.part_id = opts && opts.part_id || 1;/*大区ID*/
    this.is_inner = opts && opts.is_inner || 0;/*是否内部资产*/
    this.item_id = opts && opts.item_id || 0;/*本次资产消费服务类型（如道具ID）*/
    this.item_name = opts && opts.item_name || null;/*购买服务或道具的名称*/
    this.item_num = opts && opts.item_num || 0;/*购买服务的次数或道具数量*/
    this.item_desc = opts && opts.item_desc || null;/*购买服务的描述*/
    this.date_time = opts && opts.date_time || 0;/*日志时间*/

};
_Class.tableName = 't_log_asset_type_1';
_Class.selectCols = 'id,source_id,time,user_name,player_id,player_name,opt_type,change_asset,remain_asset,pf_id,channel_id,srv_id,logsrv_id,dev_id,part_id,is_inner,item_id,item_name,item_num,item_desc,date_time';/**
t_log_asset_type_2
钻石日志
**/
var _Class = module.exports = function(opts){
    this.id = opts && opts.id || null;/*索引*/
    this.source_id = opts && opts.source_id || null;/*来源ID*/
    this.time = opts && opts.time || null;/*事件发生时间*/
    this.user_name = opts && opts.user_name || null;/*账号名*/
    this.player_id = opts && opts.player_id || null;/*玩家id*/
    this.player_name = opts && opts.player_name || null;/*玩家名*/
    this.opt_type = opts && opts.opt_type || null;/*操作类型：1、增加；2、扣除。*/
    this.change_asset = opts && opts.change_asset || null;/*增加/扣除的资产*/
    this.remain_asset = opts && opts.remain_asset || null;/*剩余的资产*/
    this.pf_id = opts && opts.pf_id || 0;/*平台ID*/
    this.channel_id = opts && opts.channel_id || 0;/*渠道ID*/
    this.srv_id = opts && opts.srv_id || 0;/*服务器ID*/
    this.logsrv_id = opts && opts.logsrv_id || 0;/*平台登录的服务器ID*/
    this.dev_id = opts && opts.dev_id || 1;/*设备ID(1-android,2-ios)*/
    this.part_id = opts && opts.part_id || 1;/*大区ID*/
    this.is_inner = opts && opts.is_inner || 0;/*是否内部资产*/
    this.item_id = opts && opts.item_id || 0;/*本次资产消费服务类型（如道具ID）*/
    this.item_name = opts && opts.item_name || null;/*购买服务或道具的名称*/
    this.item_num = opts && opts.item_num || 0;/*购买服务的次数或道具数量*/
    this.item_desc = opts && opts.item_desc || null;/*购买服务的描述*/
    this.date_time = opts && opts.date_time || 0;/*日志时间*/

};
_Class.tableName = 't_log_asset_type_2';
_Class.selectCols = 'id,source_id,time,user_name,player_id,player_name,opt_type,change_asset,remain_asset,pf_id,channel_id,srv_id,logsrv_id,dev_id,part_id,is_inner,item_id,item_name,item_num,item_desc,date_time';/**
t_log_chat
聊天记录
**/
var _Class = module.exports = function(opts){
    this.id = opts && opts.id || null;/*索引*/
    this.pf_id = opts && opts.pf_id || 0;/*平台ID*/
    this.channel_id = opts && opts.channel_id || 0;/*渠道ID*/
    this.srv_id = opts && opts.srv_id || 0;/*服务器ID*/
    this.logsrv_id = opts && opts.logsrv_id || 0;/*服务器ID*/
    this.dev_id = opts && opts.dev_id || 1;/*设备ID(1-android,2-ios)*/
    this.part_id = opts && opts.part_id || 1;/*大区ID*/
    this.chat_channel_id = opts && opts.chat_channel_id || 0;/*频道（2-世界频道，3-队伍频道，4-公会频道，5-喇叭，6-场景频道，7-私聊频道）*/
    this.from_id = opts && opts.from_id || null;/*玩家ID*/
    this.from_name = opts && opts.from_name || null;/*玩家名*/
    this.to_name = opts && opts.to_name || null;/*玩家名*/
    this.content = opts && opts.content || null;/*聊天内容*/
    this.time = opts && opts.time || 0;/*时间*/

};
_Class.tableName = 't_log_chat';
_Class.selectCols = 'id,pf_id,channel_id,srv_id,logsrv_id,dev_id,part_id,chat_channel_id,from_id,from_name,to_name,content,time';/**
t_log_chat_monitor
聊天监控日志（前端有上报才需要记录）
**/
var _Class = module.exports = function(opts){
    this.id = opts && opts.id || null;/*索引*/
    this.player_id = opts && opts.player_id || null;/*玩家ID*/
    this.content = opts && opts.content || null;/*聊天内容*/
    this.time = opts && opts.time || 0;/*上报时间*/

};
_Class.tableName = 't_log_chat_monitor';
_Class.selectCols = 'id,player_id,content,time';/**
t_log_client
客户端日志
**/
var _Class = module.exports = function(opts){
    this.id = opts && opts.id || null;/*索引*/
    this.content = opts && opts.content || null;/*客户端存储信息*/
    this.version = opts && opts.version || 0;/*等级*/
    this.devOS = opts && opts.devOS || 0;/*设备操作系统信息*/
    this.mobile = opts && opts.mobile || 0;/*设备类型*/
    this.pf_id = opts && opts.pf_id || 0;/*平台ID*/
    this.channel_id = opts && opts.channel_id || 0;/*渠道ID*/
    this.srv_id = opts && opts.srv_id || 0;/*服务器ID*/
    this.accountId = opts && opts.accountId || null;/*账号ID*/
    this.accountName = opts && opts.accountName || null;/*用户名*/
    this.playerId = opts && opts.playerId || null;/*玩家id*/
    this.playerName = opts && opts.playerName || null;/*玩家名称*/
    this.level = opts && opts.level || 0;/*等级*/
    this.deviceTime = opts && opts.deviceTime || 0;/*设备时间*/
    this.device = opts && opts.device || null;/*设备类型*/
    this.time = opts && opts.time || null;/**/

};
_Class.tableName = 't_log_client';
_Class.selectCols = 'id,content,version,devOS,mobile,pf_id,channel_id,srv_id,accountId,accountName,playerId,playerName,level,deviceTime,device,time';/**
t_log_dup_join
副本参与
**/
var _Class = module.exports = function(opts){
    this.id = opts && opts.id || null;/*索引*/
    this.pf_id = opts && opts.pf_id || 0;/*平台ID*/
    this.channel_id = opts && opts.channel_id || 0;/*渠道ID*/
    this.srv_id = opts && opts.srv_id || 0;/*服务器ID*/
    this.logsrv_id = opts && opts.logsrv_id || 0;/*平台登录的服务器ID*/
    this.dev_id = opts && opts.dev_id || 1;/*设备ID(1-android,2-ios)*/
    this.part_id = opts && opts.part_id || 1;/*大区ID*/
    this.player_id = opts && opts.player_id || null;/*玩家ID*/
    this.dup_id = opts && opts.dup_id || 0;/*副本ID*/
    this.dup_name = opts && opts.dup_name || null;/*副本名称*/
    this.join_level = opts && opts.join_level || null;/*副本参与等级*/
    this.dup_type = opts && opts.dup_type || null;/*副本类型*/
    this.dup_type_name = opts && opts.dup_type_name || null;/*副本类型名称*/
    this.time = opts && opts.time || 0;/*参与时间(时间戳)*/
    this.limit = opts && opts.limit || 0;/*每日限制次数*/

};
_Class.tableName = 't_log_dup_join';
_Class.selectCols = 'id,pf_id,channel_id,srv_id,logsrv_id,dev_id,part_id,player_id,dup_id,dup_name,join_level,dup_type,dup_type_name,time,limit';/**
t_log_dup_reset
副本重置日志
**/
var _Class = module.exports = function(opts){
    this.id = opts && opts.id || null;/*索引*/
    this.pf_id = opts && opts.pf_id || 0;/*平台ID*/
    this.srv_id = opts && opts.srv_id || 0;/*服务器ID*/
    this.channel_id = opts && opts.channel_id || 0;/*渠道ID*/
    this.logsrv_id = opts && opts.logsrv_id || 0;/*平台服ID*/
    this.dev_id = opts && opts.dev_id || 1;/*设备ID(1-android,2-ios)*/
    this.part_id = opts && opts.part_id || 1;/*大区ID*/
    this.type_id = opts && opts.type_id || 0;/*副本类型ID*/
    this.type_name = opts && opts.type_name || null;/*副本类型名称*/
    this.dup_id = opts && opts.dup_id || 0;/*副本ID*/
    this.dup_name = opts && opts.dup_name || null;/*副本名称*/
    this.player_id = opts && opts.player_id || null;/*玩家ID*/
    this.gold = opts && opts.gold || 0;/*消耗的货币*/
    this.currency_type = opts && opts.currency_type || 0;/*货币类型（1-元宝，2-绑定元宝。。。，对应t_config_asset表）*/
    this.time = opts && opts.time || 0;/*时间*/

};
_Class.tableName = 't_log_dup_reset';
_Class.selectCols = 'id,pf_id,srv_id,channel_id,logsrv_id,dev_id,part_id,type_id,type_name,dup_id,dup_name,player_id,gold,currency_type,time';/**
t_log_friend
好友日志
**/
var _Class = module.exports = function(opts){
    this.id = opts && opts.id || null;/*索引*/
    this.player_id = opts && opts.player_id || null;/*玩家id*/
    this.handle_player_id = opts && opts.handle_player_id || 0;/*被操作的玩家id*/
    this.opreation = opts && opts.opreation || 0;/*操作类型，1-addfriend 2-delfriend 3-addblack 4-delblack*/
    this.log_time = opts && opts.log_time || 0;/*时间戳*/
    this.pf_id = opts && opts.pf_id || 0;/*平台ID*/
    this.channel_id = opts && opts.channel_id || 0;/*渠道ID*/
    this.srv_id = opts && opts.srv_id || 0;/*服务器ID*/
    this.logsrv_id = opts && opts.logsrv_id || 0;/*平台登录的服务器ID*/
    this.dev_id = opts && opts.dev_id || 1;/*设备ID(1-android,2-ios)*/
    this.part_id = opts && opts.part_id || 1;/*大区ID*/

};
_Class.tableName = 't_log_friend';
_Class.selectCols = 'id,player_id,handle_player_id,opreation,log_time,pf_id,channel_id,srv_id,logsrv_id,dev_id,part_id';/**
t_log_guide_task
引导任务日志
**/
var _Class = module.exports = function(opts){
    this.pf_id = opts && opts.pf_id || 0;/*平台ID*/
    this.srv_id = opts && opts.srv_id || 0;/*服务器ID*/
    this.channel_id = opts && opts.channel_id || 0;/*渠道ID*/
    this.logsrv_id = opts && opts.logsrv_id || 0;/*平台登录的服务器ID*/
    this.dev_id = opts && opts.dev_id || 1;/*设备ID(1-android,2-ios)*/
    this.part_id = opts && opts.part_id || 1;/*大区ID*/
    this.player_id = opts && opts.player_id || null;/*玩家id*/
    this.create_time = opts && opts.create_time || 0;/*创角时间*/
    this.task_id = opts && opts.task_id || 0;/*任务ID*/
    this.time = opts && opts.time || 0;/*操作时间*/
    this.task_state = opts && opts.task_state || 0;/*任务状态：0-跳过，1-完成*/

};
_Class.tableName = 't_log_guide_task';
_Class.selectCols = 'pf_id,srv_id,channel_id,logsrv_id,dev_id,part_id,player_id,create_time,task_id,time,task_state';/**
t_log_guild_pay
帮会玩家充值记录
**/
var _Class = module.exports = function(opts){
    this.order_num = opts && opts.order_num || null;/*订单号*/
    this.pf_id = opts && opts.pf_id || 0;/*订单号*/
    this.srv_id = opts && opts.srv_id || 0;/*订单号*/
    this.channel_id = opts && opts.channel_id || 0;/*订单号*/
    this.logsrv_id = opts && opts.logsrv_id || 0;/*订单号*/
    this.dev_id = opts && opts.dev_id || 1;/*设备ID(1-android,2-ios)*/
    this.part_id = opts && opts.part_id || 1;/*大区ID*/
    this.user_id = opts && opts.user_id || 0;/*玩家ID*/
    this.user_name = opts && opts.user_name || null;/*玩家名*/
    this.player_id = opts && opts.player_id || null;/*角色ID*/
    this.player_name = opts && opts.player_name || null;/*角色名*/
    this.pay_time = opts && opts.pay_time || 0;/*充值时间*/
    this.pay_gold = opts && opts.pay_gold || 0;/*充值元宝*/
    this.money = opts && opts.money || 0.00;/*充值金额*/
    this.currency_type = opts && opts.currency_type || 0;/*货币类型（1-人民币，2-平台币，3-地区货币）*/
    this.guild_id = opts && opts.guild_id || 0;/*所在帮会ID*/
    this.guild_name = opts && opts.guild_name || null;/*所在帮会名*/

};
_Class.tableName = 't_log_guild_pay';
_Class.selectCols = 'order_num,pf_id,srv_id,channel_id,logsrv_id,dev_id,part_id,user_id,user_name,player_id,player_name,pay_time,pay_gold,money,currency_type,guild_id,guild_name';/**
t_log_item_consume
道具消耗日志
**/
var _Class = module.exports = function(opts){
    this.id = opts && opts.id || null;/*事件ID*/
    this.source_id = opts && opts.source_id || 0;/*事件类型（来源）*/
    this.time = opts && opts.time || 0;/*事件时间*/
    this.user_name = opts && opts.user_name || null;/*用户名*/
    this.player_id = opts && opts.player_id || null;/*玩家ID*/
    this.player_name = opts && opts.player_name || null;/*玩家名*/
    this.item_id = opts && opts.item_id || 0;/*道具ID*/
    this.tid = opts && opts.tid || 0;/*道具模板ID*/
    this.item_type = opts && opts.item_type || 0;/*道具类型*/
    this.quantity = opts && opts.quantity || 0;/*数量*/
    this.bind = opts && opts.bind || -1;/*是否绑定（0-非绑定， 1-绑定）*/
    this.pos = opts && opts.pos || 0;/*背包位置*/
    this.deadline = opts && opts.deadline || -1;/*到期时间（0-永久）*/
    this.other = opts && opts.other || null;/*其他（可包含阶数，强化等级，随机属性）*/
    this.pf_id = opts && opts.pf_id || 0;/*平台ID*/
    this.channel_id = opts && opts.channel_id || 0;/*渠道ID*/
    this.srv_id = opts && opts.srv_id || 0;/*服务器ID*/
    this.logsrv_id = opts && opts.logsrv_id || 0;/*平台登录的服务器ID*/
    this.dev_id = opts && opts.dev_id || 1;/*设备ID(1-android,2-ios)*/
    this.part_id = opts && opts.part_id || 1;/*大区ID*/
    this.color = opts && opts.color || 0;/*颜色*/

};
_Class.tableName = 't_log_item_consume';
_Class.selectCols = 'id,source_id,time,user_name,player_id,player_name,item_id,tid,item_type,quantity,bind,pos,deadline,other,pf_id,channel_id,srv_id,logsrv_id,dev_id,part_id,color';/**
t_log_item_get
道具获得日志
**/
var _Class = module.exports = function(opts){
    this.id = opts && opts.id || null;/*事件ID*/
    this.source_id = opts && opts.source_id || 0;/*事件类型（来源）*/
    this.time = opts && opts.time || 0;/*事件时间*/
    this.user_name = opts && opts.user_name || null;/*用户名*/
    this.player_id = opts && opts.player_id || null;/*玩家ID*/
    this.player_name = opts && opts.player_name || null;/*玩家名*/
    this.item_id = opts && opts.item_id || 0;/*道具ID*/
    this.tid = opts && opts.tid || 0;/*道具模板ID*/
    this.item_type = opts && opts.item_type || 0;/*道具类型*/
    this.quantity = opts && opts.quantity || 0;/*数量*/
    this.bind = opts && opts.bind || -1;/*是否绑定（0-非绑定， 1-绑定）*/
    this.pos = opts && opts.pos || 0;/*背包位置*/
    this.deadline = opts && opts.deadline || -1;/*到期时间（0-永久）*/
    this.other = opts && opts.other || null;/*其他（可包含阶数，强化等级，随机属性）*/
    this.pf_id = opts && opts.pf_id || 0;/*平台ID*/
    this.channel_id = opts && opts.channel_id || 0;/*渠道ID*/
    this.srv_id = opts && opts.srv_id || 0;/*服务器ID*/
    this.logsrv_id = opts && opts.logsrv_id || 0;/*平台登录的服务器ID*/
    this.dev_id = opts && opts.dev_id || 1;/*设备ID(1-android,2-ios)*/
    this.part_id = opts && opts.part_id || 1;/*大区ID*/
    this.color = opts && opts.color || 0;/*颜色*/

};
_Class.tableName = 't_log_item_get';
_Class.selectCols = 'id,source_id,time,user_name,player_id,player_name,item_id,tid,item_type,quantity,bind,pos,deadline,other,pf_id,channel_id,srv_id,logsrv_id,dev_id,part_id,color';/**
t_log_level_up
玩家升级记录
**/
var _Class = module.exports = function(opts){
    this.id = opts && opts.id || null;/*玩家ID*/
    this.player_id = opts && opts.player_id || null;/*玩家ID*/
    this.player_name = opts && opts.player_name || null;/*玩家名称*/
    this.user_id = opts && opts.user_id || 0;/*用户ID*/
    this.user_name = opts && opts.user_name || null;/*用户名*/
    this.level = opts && opts.level || 0;/*等级*/
    this.time = opts && opts.time || 0;/*时间*/
    this.pf_id = opts && opts.pf_id || 0;/*平台ID*/
    this.channel_id = opts && opts.channel_id || 0;/*渠道ID*/
    this.srv_id = opts && opts.srv_id || 0;/*服务器ID*/
    this.logsrv_id = opts && opts.logsrv_id || 0;/*平台登录的服务器ID*/
    this.dev_id = opts && opts.dev_id || 1;/*设备ID(1-android,2-ios)*/
    this.part_id = opts && opts.part_id || 1;/*大区ID*/

};
_Class.tableName = 't_log_level_up';
_Class.selectCols = 'id,player_id,player_name,user_id,user_name,level,time,pf_id,channel_id,srv_id,logsrv_id,dev_id,part_id';/**
t_log_load
加载日志
**/
var _Class = module.exports = function(opts){
    this.id = opts && opts.id || null;/*索引*/
    this.user_id = opts && opts.user_id || 0;/*账号ID*/
    this.user_name = opts && opts.user_name || 0;/*账号名*/
    this.player_id = opts && opts.player_id || 0;/*角色ID*/
    this.player_name = opts && opts.player_name || null;/*角色名*/
    this.step = opts && opts.step || 0;/*加载步骤(110-版本号文件加载完成,120-主程序加载完成,130-socket连接成功,140-必须资源加载完成,150-创建角色完成,160-必须数据接收完成,170-进入场景,180-创建欢迎界面,190-第一个任务完成,200-进入第二个场景,达到10级-210)*/
    this.time = opts && opts.time || 0;/*时间*/
    this.ip = opts && opts.ip || null;/*登录IP*/
    this.pf_id = opts && opts.pf_id || 0;/*平台ID*/
    this.channel_id = opts && opts.channel_id || 0;/*渠道ID*/
    this.srv_id = opts && opts.srv_id || 0;/*服务器ID*/
    this.logsrv_id = opts && opts.logsrv_id || 0;/*平台登录的服务器ID*/
    this.dev_id = opts && opts.dev_id || 1;/*设备ID(1-android,2-ios)*/
    this.part_id = opts && opts.part_id || 1;/*大区ID*/

};
_Class.tableName = 't_log_load';
_Class.selectCols = 'id,user_id,user_name,player_id,player_name,step,time,ip,pf_id,channel_id,srv_id,logsrv_id,dev_id,part_id';/**
t_log_login
玩家登出日志（若玩家跨天登录，则需要在零点多记录一条数据，logout_time为23:59:59）
**/
var _Class = module.exports = function(opts){
    this.id = opts && opts.id || null;/*索引*/
    this.pf_id = opts && opts.pf_id || 0;/*平台ID*/
    this.channel_id = opts && opts.channel_id || 0;/*渠道*/
    this.srv_id = opts && opts.srv_id || 0;/*服务器ID*/
    this.logsrv_id = opts && opts.logsrv_id || 0;/*平台登录服务器ID*/
    this.dev_id = opts && opts.dev_id || 1;/*设备ID(1-android,2-ios)*/
    this.part_id = opts && opts.part_id || 1;/*大区ID*/
    this.player_id = opts && opts.player_id || null;/*角色ID*/
    this.player_name = opts && opts.player_name || null;/*角色昵称*/
    this.user_id = opts && opts.user_id || 0;/*账号ID*/
    this.user_name = opts && opts.user_name || null;/*账号名*/
    this.login_time = opts && opts.login_time || 0;/*登录时间*/
    this.login_level = opts && opts.login_level || 0;/*登录前等级*/
    this.logout_time = opts && opts.logout_time || 0;/*下线时间*/
    this.logout_level = opts && opts.logout_level || 0;/*下线前等级*/
    this.online_time = opts && opts.online_time || 0;/*本次在线时间*/
    this.day_time = opts && opts.day_time || 0;/*本日累计在线时长*/
    this.map_id = opts && opts.map_id || null;/*地图ID*/
    this.xpos = opts && opts.xpos || null;/*X坐标*/
    this.ypos = opts && opts.ypos || null;/*Y坐标*/
    this.ip = opts && opts.ip || null;/*最后登录IP*/
    this.imei = opts && opts.imei || null;/*登录设备*/
    this.reason = opts && opts.reason || null;/*下线原因*/

};
_Class.tableName = 't_log_login';
_Class.selectCols = 'id,pf_id,channel_id,srv_id,logsrv_id,dev_id,part_id,player_id,player_name,user_id,user_name,login_time,login_level,logout_time,logout_level,online_time,day_time,map_id,xpos,ypos,ip,imei,reason';/**
t_log_mail
玩家邮件记录
**/
var _Class = module.exports = function(opts){
    this.mail_id = opts && opts.mail_id || null;/*邮件id*/
    this.send_id = opts && opts.send_id || null;/*发送id*/
    this.send_name = opts && opts.send_name || null;/*发送者*/
    this.receive_id = opts && opts.receive_id || null;/*接收玩家id*/
    this.receive_name = opts && opts.receive_name || null;/*接收玩家名字*/
    this.receive_time = opts && opts.receive_time || null;/*邮件发送时间*/
    this.gold_bind = opts && opts.gold_bind || null;/*绑定元宝*/
    this.gold = opts && opts.gold || null;/*元宝*/
    this.attach = opts && opts.attach || null;/*附件内容*/
    this.title = opts && opts.title || null;/*标题*/
    this.content = opts && opts.content || null;/*内容*/
    this.state = opts && opts.state || 0;/*0-未读 1-已读 2-提取附件 3-未读删除 4-已读删除 5-已提取附件删除*/

};
_Class.tableName = 't_log_mail';
_Class.selectCols = 'mail_id,send_id,send_name,receive_id,receive_name,receive_time,gold_bind,gold,attach,title,content,state';/**
t_log_marry
结婚日志
**/
var _Class = module.exports = function(opts){
    this.id = opts && opts.id || null;/*事件ID*/
    this.player_id = opts && opts.player_id || 0;/*玩家ID*/
    this.log_time = opts && opts.log_time || 0;/*日志时间*/
    this.opt = opts && opts.opt || null;/*玩家操作描述*/
    this.ring_lv = opts && opts.ring_lv || null;/*戒指等级*/
    this.ring_exp = opts && opts.ring_exp || null;/*戒指经验*/
    this.marry_time = opts && opts.marry_time || 0;/*结婚时间*/
    this.marry_wedding = opts && opts.marry_wedding || 0;/*婚礼类型：1-温馨婚礼，2-喜庆婚礼，3-奢华婚礼*/
    this.mate_id = opts && opts.mate_id || 0;/*配偶ID*/
    this.mate_sex = opts && opts.mate_sex || 0;/*配偶性别*/
    this.ct_step = opts && opts.ct_step || 0;/*姻缘阶数*/
    this.ct_lv = opts && opts.ct_lv || 0;/*姻缘等级*/
    this.lt_lv = opts && opts.lt_lv || 0;/*爱情树等级*/
    this.lt_exp = opts && opts.lt_exp || 0;/*爱情树经验*/
    this.pf_id = opts && opts.pf_id || 0;/*平台ID*/
    this.channel_id = opts && opts.channel_id || 0;/*渠道ID*/
    this.srv_id = opts && opts.srv_id || 0;/*服务器ID*/
    this.logsrv_id = opts && opts.logsrv_id || 0;/*平台登录的服务器ID*/
    this.dev_id = opts && opts.dev_id || 1;/*设备ID(1-android,2-ios)*/
    this.part_id = opts && opts.part_id || 1;/*大区ID*/

};
_Class.tableName = 't_log_marry';
_Class.selectCols = 'id,player_id,log_time,opt,ring_lv,ring_exp,marry_time,marry_wedding,mate_id,mate_sex,ct_step,ct_lv,lt_lv,lt_exp,pf_id,channel_id,srv_id,logsrv_id,dev_id,part_id';/**
t_log_merge_player_inventory_item
合服被合掉的玩家的库存背包道具
**/
var _Class = module.exports = function(opts){
    this.id = opts && opts.id || null;/*索引ID*/
    this.time = opts && opts.time || 0;/*时间*/
    this.player_id = opts && opts.player_id || 0;/*玩家ID*/
    this.tid = opts && opts.tid || 0;/*道具模板ID*/
    this.quantity = opts && opts.quantity || 0;/*数量*/
    this.pf_id = opts && opts.pf_id || 0;/*平台ID*/
    this.srv_id = opts && opts.srv_id || 0;/*服务器ID*/
    this.dev_id = opts && opts.dev_id || 1;/*设备ID(1-android,2-ios)*/

};
_Class.tableName = 't_log_merge_player_inventory_item';
_Class.selectCols = 'id,time,player_id,tid,quantity,pf_id,srv_id,dev_id';/**
t_log_only_login
玩家登录日志（只记录登入的）
**/
var _Class = module.exports = function(opts){
    this.id = opts && opts.id || null;/*索引*/
    this.pf_id = opts && opts.pf_id || 0;/*平台ID*/
    this.channel_id = opts && opts.channel_id || 0;/*渠道*/
    this.srv_id = opts && opts.srv_id || 0;/*服务器ID*/
    this.logsrv_id = opts && opts.logsrv_id || 0;/*平台登录服务器ID*/
    this.dev_id = opts && opts.dev_id || 1;/*设备ID(1-android,2-ios)*/
    this.part_id = opts && opts.part_id || 1;/*大区ID*/
    this.player_id = opts && opts.player_id || null;/*角色ID*/
    this.player_name = opts && opts.player_name || null;/*角色昵称*/
    this.user_id = opts && opts.user_id || 0;/*账号ID*/
    this.user_name = opts && opts.user_name || null;/*账号名*/
    this.login_time = opts && opts.login_time || 0;/*登录时间*/
    this.login_level = opts && opts.login_level || 0;/*登录前等级*/
    this.map_id = opts && opts.map_id || null;/*地图ID*/
    this.xpos = opts && opts.xpos || null;/*X坐标*/
    this.ypos = opts && opts.ypos || null;/*Y坐标*/
    this.ip = opts && opts.ip || null;/*登录IP*/
    this.imei = opts && opts.imei || null;/*登录设备*/

};
_Class.tableName = 't_log_only_login';
_Class.selectCols = 'id,pf_id,channel_id,srv_id,logsrv_id,dev_id,part_id,player_id,player_name,user_id,user_name,login_time,login_level,map_id,xpos,ypos,ip,imei';/**
t_log_open_gift
礼包开启日志
**/
var _Class = module.exports = function(opts){
    this.id = opts && opts.id || null;/*索引*/
    this.pf_id = opts && opts.pf_id || 0;/*平台ID*/
    this.channel_id = opts && opts.channel_id || 0;/*渠道ID*/
    this.srv_id = opts && opts.srv_id || 0;/*服务器ID*/
    this.logsrv_id = opts && opts.logsrv_id || 0;/*平台对应的服务器ID*/
    this.dev_id = opts && opts.dev_id || 1;/*设备ID(1-android,2-ios)*/
    this.part_id = opts && opts.part_id || 1;/*大区ID*/
    this.player_id = opts && opts.player_id || null;/*玩家ID*/
    this.player_name = opts && opts.player_name || null;/*玩家名称*/
    this.gift_id = opts && opts.gift_id || 0;/*礼包ID*/
    this.gift_name = opts && opts.gift_name || null;/*礼包名称*/
    this.currency_type = opts && opts.currency_type || 0;/*货币类型（1-元宝, 2-绑定元宝,...）*/
    this.consume_gold = opts && opts.consume_gold || 0;/*开启消耗货币数量*/
    this.count = opts && opts.count || 0;/*开启个数*/
    this.time = opts && opts.time || 0;/*开启时间*/

};
_Class.tableName = 't_log_open_gift';
_Class.selectCols = 'id,pf_id,channel_id,srv_id,logsrv_id,dev_id,part_id,player_id,player_name,gift_id,gift_name,currency_type,consume_gold,count,time';/**
t_log_pay
充值日志
**/
var _Class = module.exports = function(opts){
    this.order_num = opts && opts.order_num || 0;/*充值订单编号*/
    this.user_id = opts && opts.user_id || 0;/*用户ID*/
    this.user_name = opts && opts.user_name || null;/*用户名*/
    this.player_id = opts && opts.player_id || null;/*角色ID*/
    this.player_name = opts && opts.player_name || null;/*角色名*/
    this.pay_time = opts && opts.pay_time || 0;/*充值时间*/
    this.pay_num = opts && opts.pay_num || 0;/*充值次数*/
    this.pay_gold = opts && opts.pay_gold || 0;/*充值币数量*/
    this.is_succ = opts && opts.is_succ || 0;/*是否充值成功 （0 已支付，元宝待发放   1 已成功)*/
    this.level = opts && opts.level || 0;/*玩家所有角色的最高等级*/
    this.currency_type = opts && opts.currency_type || 0;/*货币类型 currency_type   （1-人民币，2-平台币，3-地区货币）*/
    this.money = opts && opts.money || 0.00;/*金额*/
    this.pay_channel = opts && opts.pay_channel || null;/*充值渠道（支付宝。。。）*/
    this.type = opts && opts.type || 0;/*类型（1，正常充值，2充值测试，3发放福利）*/
    this.last_update_time = opts && opts.last_update_time || 0;/*最后更新时间*/
    this.pf_id = opts && opts.pf_id || 0;/*平台ID*/
    this.srv_id = opts && opts.srv_id || 0;/*服务器ID*/
    this.channel_id = opts && opts.channel_id || 0;/*渠道ID*/
    this.logsrv_id = opts && opts.logsrv_id || 0;/*平台登录的服务器ID*/
    this.dev_id = opts && opts.dev_id || 1;/*设备ID(1-android,2-ios)*/
    this.part_id = opts && opts.part_id || 1;/*大区ID*/
    this.ip = opts && opts.ip || 0;/*IP*/
    this.tid = opts && opts.tid || null;/*道具ID*/
    this.item_type = opts && opts.item_type || 0;/*商品类型*/
    this.first_gold = opts && opts.first_gold || 0;/*首购额外赠送元宝*/
    this.plus_gold = opts && opts.plus_gold || 0;/*附加元宝*/

};
_Class.tableName = 't_log_pay';
_Class.selectCols = 'order_num,user_id,user_name,player_id,player_name,pay_time,pay_num,pay_gold,is_succ,level,currency_type,money,pay_channel,type,last_update_time,pf_id,srv_id,channel_id,logsrv_id,dev_id,part_id,ip,tid,item_type,first_gold,plus_gold';/**
t_log_player_rename
修改角色名记录
**/
var _Class = module.exports = function(opts){
    this.id = opts && opts.id || null;/*索引*/
    this.pf_id = opts && opts.pf_id || 0;/*平台ID*/
    this.srv_id = opts && opts.srv_id || 0;/*服务器ID（如：100001）*/
    this.logsrv_id = opts && opts.logsrv_id || 0;/*平台对应的服务器ID（如：1）*/
    this.dev_id = opts && opts.dev_id || 1;/*设备ID(1-android,2-ios)*/
    this.part_id = opts && opts.part_id || 1;/*大区ID*/
    this.user_name = opts && opts.user_name || null;/*账号名*/
    this.player_id = opts && opts.player_id || null;/*角色ID*/
    this.old_name = opts && opts.old_name || null;/*原来的角色名*/
    this.new_name = opts && opts.new_name || null;/*新的角色名*/
    this.time = opts && opts.time || 0;/*时间*/

};
_Class.tableName = 't_log_player_rename';
_Class.selectCols = 'id,pf_id,srv_id,logsrv_id,dev_id,part_id,user_name,player_id,old_name,new_name,time';/**
t_log_rank_guild
公会排名
**/
var _Class = module.exports = function(opts){
    this.guild_id = opts && opts.guild_id || null;/*帮会Id*/
    this.guild_name = opts && opts.guild_name || null;/*帮会名称*/
    this.guild_level = opts && opts.guild_level || null;/*帮会等级*/
    this.fight = opts && opts.fight || null;/*帮会战斗力*/
    this.member_num = opts && opts.member_num || null;/*成员数量*/
    this.max_num = opts && opts.max_num || null;/*可达到的最大成员数量*/
    this.create_time = opts && opts.create_time || null;/*建立时间*/
    this.master_name = opts && opts.master_name || null;/*帮主名称*/
    this.rank = opts && opts.rank || null;/*排名*/
    this.record_time = opts && opts.record_time || null;/*记录时间*/

};
_Class.tableName = 't_log_rank_guild';
_Class.selectCols = 'guild_id,guild_name,guild_level,fight,member_num,max_num,create_time,master_name,rank,record_time';/**
t_log_rank_type_1
xx排行日志(x,cond1,cond2对应t_config_rank表中的id,cond1,cond2字段)
**/
var _Class = module.exports = function(opts){
    this.id = opts && opts.id || null;/*索引*/
    this.user_name = opts && opts.user_name || null;/*账号名*/
    this.player_id = opts && opts.player_id || null;/*角色ID*/
    this.player_name = opts && opts.player_name || null;/*角色名*/
    this.guild_name = opts && opts.guild_name || null;/*公会名字*/
    this.vip_level = opts && opts.vip_level || 0;/*VIP等级*/
    this.cond_1 = opts && opts.cond_1 || 0;/*排行条件1对应的值（如总等级值）*/
    this.cond_2 = opts && opts.cond_2 || 0;/*排行条件2对应的值（如总战力值），没有条件2可以按默认值来*/
    this.time = opts && opts.time || 0;/*上榜时间*/
    this.rank = opts && opts.rank || 0;/*名次*/
    this.create_time = opts && opts.create_time || 0;/*记录时间*/

};
_Class.tableName = 't_log_rank_type_1';
_Class.selectCols = 'id,user_name,player_id,player_name,guild_name,vip_level,cond_1,cond_2,time,rank,create_time';/**
t_log_rank_type_2
xx排行日志(x,cond1,cond2对应t_config_rank表中的id,cond1,cond2字段)
**/
var _Class = module.exports = function(opts){
    this.id = opts && opts.id || null;/*索引*/
    this.user_name = opts && opts.user_name || null;/*账号名*/
    this.player_id = opts && opts.player_id || null;/*角色ID*/
    this.player_name = opts && opts.player_name || null;/*角色名*/
    this.guild_name = opts && opts.guild_name || null;/*公会名字*/
    this.vip_level = opts && opts.vip_level || 0;/*VIP等级*/
    this.cond_1 = opts && opts.cond_1 || 0;/*排行条件1对应的值（如总等级值）*/
    this.cond_2 = opts && opts.cond_2 || 0;/*排行条件2对应的值（如总战力值），没有条件2可以按默认值来*/
    this.time = opts && opts.time || 0;/*上榜时间*/
    this.rank = opts && opts.rank || 0;/*名次*/
    this.create_time = opts && opts.create_time || 0;/*记录时间*/

};
_Class.tableName = 't_log_rank_type_2';
_Class.selectCols = 'id,user_name,player_id,player_name,guild_name,vip_level,cond_1,cond_2,time,rank,create_time';/**
t_log_rank_type_3
xx排行日志(x,cond1,cond2对应t_config_rank表中的id,cond1,cond2字段)
**/
var _Class = module.exports = function(opts){
    this.id = opts && opts.id || null;/*索引*/
    this.user_name = opts && opts.user_name || null;/*账号名*/
    this.player_id = opts && opts.player_id || null;/*角色ID*/
    this.player_name = opts && opts.player_name || null;/*角色名*/
    this.guild_name = opts && opts.guild_name || null;/*公会名字*/
    this.vip_level = opts && opts.vip_level || 0;/*VIP等级*/
    this.cond_1 = opts && opts.cond_1 || 0;/*排行条件1对应的值（如总等级值）*/
    this.cond_2 = opts && opts.cond_2 || 0;/*排行条件2对应的值（如总战力值），没有条件2可以按默认值来*/
    this.time = opts && opts.time || 0;/*上榜时间*/
    this.rank = opts && opts.rank || 0;/*名次*/
    this.create_time = opts && opts.create_time || 0;/*记录时间*/

};
_Class.tableName = 't_log_rank_type_3';
_Class.selectCols = 'id,user_name,player_id,player_name,guild_name,vip_level,cond_1,cond_2,time,rank,create_time';/**
t_log_rank_type_4
xx排行日志(x,cond1,cond2对应t_config_rank表中的id,cond1,cond2字段)
**/
var _Class = module.exports = function(opts){
    this.id = opts && opts.id || null;/*索引*/
    this.user_name = opts && opts.user_name || null;/*账号名*/
    this.player_id = opts && opts.player_id || null;/*角色ID*/
    this.player_name = opts && opts.player_name || null;/*角色名*/
    this.guild_name = opts && opts.guild_name || null;/*公会名字*/
    this.vip_level = opts && opts.vip_level || 0;/*VIP等级*/
    this.cond_1 = opts && opts.cond_1 || 0;/*排行条件1对应的值（如总等级值）*/
    this.cond_2 = opts && opts.cond_2 || 0;/*排行条件2对应的值（如总战力值），没有条件2可以按默认值来*/
    this.time = opts && opts.time || 0;/*上榜时间*/
    this.rank = opts && opts.rank || 0;/*名次*/
    this.create_time = opts && opts.create_time || 0;/*记录时间*/

};
_Class.tableName = 't_log_rank_type_4';
_Class.selectCols = 'id,user_name,player_id,player_name,guild_name,vip_level,cond_1,cond_2,time,rank,create_time';/**
t_log_rank_type_5
xx排行日志(x,cond1,cond2对应t_config_rank表中的id,cond1,cond2字段)
**/
var _Class = module.exports = function(opts){
    this.id = opts && opts.id || null;/*索引*/
    this.user_name = opts && opts.user_name || null;/*账号名*/
    this.player_id = opts && opts.player_id || null;/*角色ID*/
    this.player_name = opts && opts.player_name || null;/*角色名*/
    this.guild_name = opts && opts.guild_name || null;/*公会名字*/
    this.vip_level = opts && opts.vip_level || 0;/*VIP等级*/
    this.cond_1 = opts && opts.cond_1 || 0;/*排行条件1对应的值（如总等级值）*/
    this.cond_2 = opts && opts.cond_2 || 0;/*排行条件2对应的值（如总战力值），没有条件2可以按默认值来*/
    this.time = opts && opts.time || 0;/*上榜时间*/
    this.rank = opts && opts.rank || 0;/*名次*/
    this.create_time = opts && opts.create_time || 0;/*记录时间*/

};
_Class.tableName = 't_log_rank_type_5';
_Class.selectCols = 'id,user_name,player_id,player_name,guild_name,vip_level,cond_1,cond_2,time,rank,create_time';/**
t_log_rank_type_6
xx排行日志(x,cond1,cond2对应t_config_rank表中的id,cond1,cond2字段)
**/
var _Class = module.exports = function(opts){
    this.id = opts && opts.id || null;/*索引*/
    this.user_name = opts && opts.user_name || null;/*账号名*/
    this.player_id = opts && opts.player_id || null;/*角色ID*/
    this.player_name = opts && opts.player_name || null;/*角色名*/
    this.guild_name = opts && opts.guild_name || null;/*公会名字*/
    this.vip_level = opts && opts.vip_level || 0;/*VIP等级*/
    this.cond_1 = opts && opts.cond_1 || 0;/*排行条件1对应的值（如总等级值）*/
    this.cond_2 = opts && opts.cond_2 || 0;/*排行条件2对应的值（如总战力值），没有条件2可以按默认值来*/
    this.time = opts && opts.time || 0;/*上榜时间*/
    this.rank = opts && opts.rank || 0;/*名次*/
    this.create_time = opts && opts.create_time || 0;/*记录时间*/

};
_Class.tableName = 't_log_rank_type_6';
_Class.selectCols = 'id,user_name,player_id,player_name,guild_name,vip_level,cond_1,cond_2,time,rank,create_time';/**
t_log_rank_type_7
xx排行日志(x,cond1,cond2对应t_config_rank表中的id,cond1,cond2字段)
**/
var _Class = module.exports = function(opts){
    this.id = opts && opts.id || null;/*索引*/
    this.user_name = opts && opts.user_name || null;/*账号名*/
    this.player_id = opts && opts.player_id || null;/*角色ID*/
    this.player_name = opts && opts.player_name || null;/*角色名*/
    this.guild_name = opts && opts.guild_name || null;/*公会名字*/
    this.vip_level = opts && opts.vip_level || 0;/*VIP等级*/
    this.cond_1 = opts && opts.cond_1 || 0;/*排行条件1对应的值（如总等级值）*/
    this.cond_2 = opts && opts.cond_2 || 0;/*排行条件2对应的值（如总战力值），没有条件2可以按默认值来*/
    this.time = opts && opts.time || 0;/*上榜时间*/
    this.rank = opts && opts.rank || 0;/*名次*/
    this.create_time = opts && opts.create_time || 0;/*记录时间*/

};
_Class.tableName = 't_log_rank_type_7';
_Class.selectCols = 'id,user_name,player_id,player_name,guild_name,vip_level,cond_1,cond_2,time,rank,create_time';/**
t_log_sale
销售日志
**/
var _Class = module.exports = function(opts){
    this.id = opts && opts.id || null;/*自增长ID*/
    this.sale_id = opts && opts.sale_id || 0;/*交易id*/
    this.sell_id = opts && opts.sell_id || null;/*卖家玩家id*/
    this.sell_time = opts && opts.sell_time || 0;/*出售时间*/
    this.buy_id = opts && opts.buy_id || null;/*购买玩家id*/
    this.buy_time = opts && opts.buy_time || 0;/*购买时间*/
    this.quantity = opts && opts.quantity || 0;/*数量*/
    this.tid = opts && opts.tid || 0;/*物品模版id*/
    this.color = opts && opts.color || 0;/*颜色*/
    this.attr_list = opts && opts.attr_list || null;/*随机属性*/
    this.total_price = opts && opts.total_price || 0;/*总价*/
    this.valid_time = opts && opts.valid_time || 0;/*物品有效时间*/
    this.pf_id = opts && opts.pf_id || 0;/*平台ID*/
    this.channel_id = opts && opts.channel_id || 0;/*渠道ID*/
    this.srv_id = opts && opts.srv_id || 0;/*服务器ID*/
    this.logsrv_id = opts && opts.logsrv_id || 0;/*平台登录的服务器ID*/

};
_Class.tableName = 't_log_sale';
_Class.selectCols = 'id,sale_id,sell_id,sell_time,buy_id,buy_time,quantity,tid,color,attr_list,total_price,valid_time,pf_id,channel_id,srv_id,logsrv_id';/**
t_log_shop
商城购买记录
**/
var _Class = module.exports = function(opts){
    this.id = opts && opts.id || null;/*索引*/
    this.player_id = opts && opts.player_id || null;/*玩家ID*/
    this.player_name = opts && opts.player_name || null;/*玩家名称*/
    this.user_name = opts && opts.user_name || null;/*账户名称*/
    this.tid = opts && opts.tid || 0;/*道具模版id*/
    this.item_type = opts && opts.item_type || 0;/*道具类型id*/
    this.item_name = opts && opts.item_name || null;/*道具名称*/
    this.currency_type = opts && opts.currency_type || 0;/*货币类型(1-元宝, 2-绑定元宝,...)*/
    this.buy_num = opts && opts.buy_num || 0;/*购买数量*/
    this.consume = opts && opts.consume || 0;/*总价格*/
    this.time = opts && opts.time || 0;/*购买时间*/
    this.pf_id = opts && opts.pf_id || 0;/*平台ID*/
    this.channel_id = opts && opts.channel_id || 0;/*渠道ID*/
    this.srv_id = opts && opts.srv_id || 0;/*服务器ID*/
    this.logsrv_id = opts && opts.logsrv_id || 0;/*平台登录的服务器ID*/
    this.dev_id = opts && opts.dev_id || 1;/*设备ID(1-android,2-ios)*/
    this.part_id = opts && opts.part_id || 1;/*大区ID*/
    this.is_inner = opts && opts.is_inner || 0;/*是否内部元宝*/

};
_Class.tableName = 't_log_shop';
_Class.selectCols = 'id,player_id,player_name,user_name,tid,item_type,item_name,currency_type,buy_num,consume,time,pf_id,channel_id,srv_id,logsrv_id,dev_id,part_id,is_inner';/**
t_log_step
进阶日志（进阶类型对应t_config_step表）
**/
var _Class = module.exports = function(opts){
    this.id = opts && opts.id || null;/*索引*/
    this.type = opts && opts.type || 0;/*进阶类型（1-坐骑，2-神兵，3-翅膀，4-宠骑，5-宠武）*/
    this.step = opts && opts.step || 0;/*进阶到的阶数*/
    this.time = opts && opts.time || 0;/*时间戳*/
    this.player_id = opts && opts.player_id || null;/*玩家ID*/
    this.pf_id = opts && opts.pf_id || 0;/*平台ID*/
    this.channel_id = opts && opts.channel_id || 0;/*渠道ID*/
    this.srv_id = opts && opts.srv_id || 0;/*服务器ID*/
    this.logsrv_id = opts && opts.logsrv_id || 0;/*平台登录的服务器ID*/
    this.dev_id = opts && opts.dev_id || 1;/*设备ID(1-android,2-ios)*/
    this.part_id = opts && opts.part_id || 1;/*大区ID*/

};
_Class.tableName = 't_log_step';
_Class.selectCols = 'id,type,step,time,player_id,pf_id,channel_id,srv_id,logsrv_id,dev_id,part_id';/**
t_log_task
任务日志
**/
var _Class = module.exports = function(opts){
    this.pf_id = opts && opts.pf_id || 0;/*平台ID*/
    this.srv_id = opts && opts.srv_id || 0;/*服务器ID*/
    this.channel_id = opts && opts.channel_id || 0;/*渠道ID*/
    this.logsrv_id = opts && opts.logsrv_id || 0;/*平台登录的服务器ID*/
    this.dev_id = opts && opts.dev_id || 1;/*设备ID(1-android,2-ios)*/
    this.part_id = opts && opts.part_id || 1;/*大区ID*/
    this.player_id = opts && opts.player_id || null;/*玩家id*/
    this.task_id = opts && opts.task_id || 0;/*任务ID*/
    this.task_name = opts && opts.task_name || null;/*任务名称*/
    this.task_type = opts && opts.task_type || 0;/*任务类型（主线任务，支线任务）*/
    this.player_level = opts && opts.player_level || 0;/*玩家领取等级*/
    this.user_name = opts && opts.user_name || null;/*用户名*/
    this.ip = opts && opts.ip || null;/*登录IP*/
    this.create_time = opts && opts.create_time || 0;/*领取时间*/
    this.finish_time = opts && opts.finish_time || 0;/*完成时间*/
    this.task_state = opts && opts.task_state || 0;/*任务状态：0-接取，1-完成*/
    this.task_cycle = opts && opts.task_cycle || 0;/*任务循环次数*/
    this.story_type = opts && opts.story_type || 0;/*任务剧情方式：1-长剧情，2-短剧情(只有少年群侠传需要此字段，其他游戏无需添加)*/

};
_Class.tableName = 't_log_task';
_Class.selectCols = 'pf_id,srv_id,channel_id,logsrv_id,dev_id,part_id,player_id,task_id,task_name,task_type,player_level,user_name,ip,create_time,finish_time,task_state,task_cycle,story_type';/**
t_log_title
称号日志表(没有可不做记录)
**/
var _Class = module.exports = function(opts){
    this.id = opts && opts.id || null;/*索引*/
    this.pf_id = opts && opts.pf_id || 0;/*平台ID*/
    this.srv_id = opts && opts.srv_id || 0;/*服务器ID*/
    this.logsrv_id = opts && opts.logsrv_id || 0;/*平台对应的服务器ID*/
    this.dev_id = opts && opts.dev_id || 1;/*设备ID(1-android,2-ios)*/
    this.part_id = opts && opts.part_id || 1;/*大区ID*/
    this.player_id = opts && opts.player_id || null;/*玩家ID*/
    this.operate_type = opts && opts.operate_type || 0;/*操作类型（1-新增，2-延迟时效,3-叠加属性，4-不操作, 5-删除）*/
    this.title_id = opts && opts.title_id || 0;/*称号ID*/
    this.title_name = opts && opts.title_name || null;/*称号名*/
    this.expire_time = opts && opts.expire_time || 0;/*超时时间（0表示永久）*/
    this.time = opts && opts.time || 0;/*添加时间*/

};
_Class.tableName = 't_log_title';
_Class.selectCols = 'id,pf_id,srv_id,logsrv_id,dev_id,part_id,player_id,operate_type,title_id,title_name,expire_time,time';/**
t_player
玩家信息总览（ext1,exr2,ext3对应t_config_player_ext）
**/
var _Class = module.exports = function(opts){
    this.pf_id = opts && opts.pf_id || 0;/*平台id*/
    this.srv_id = opts && opts.srv_id || 0;/*区服Id*/
    this.channel_id = opts && opts.channel_id || 0;/*渠道id*/
    this.logsrv_id = opts && opts.logsrv_id || 0;/*平台登录的服务器id*/
    this.dev_id = opts && opts.dev_id || 1;/*设备ID(1-android,2-ios)*/
    this.part_id = opts && opts.part_id || 1;/*大区ID*/
    this.user_id = opts && opts.user_id || 0;/*用户id*/
    this.user_name = opts && opts.user_name || null;/*用户名*/
    this.player_id = opts && opts.player_id || null;/*玩家id*/
    this.player_name = opts && opts.player_name || null;/*玩家名称*/
    this.create_time = opts && opts.create_time || 0;/*创角时间*/
    this.profession = opts && opts.profession || 0;/*职业*/
    this.sex = opts && opts.sex || 0;/*性别*/
    this.last_login_time = opts && opts.last_login_time || 0;/*最后登录时间*/
    this.last_offline_time = opts && opts.last_offline_time || 0;/*最后下线时间*/
    this.last_update_time = opts && opts.last_update_time || 0;/*最后更新时间*/
    this.is_online = opts && opts.is_online || 0;/*在线标志（1：在线，0：不在线）*/
    this.total_online_time = opts && opts.total_online_time || 0;/*总在线时间（秒）*/
    this.level = opts && opts.level || 0;/*角色等级*/
    this.vip_level = opts && opts.vip_level || 0;/*VIP级别*/
    this.ip = opts && opts.ip || null;/*最后登录IP*/
    this.power = opts && opts.power || 0;/*战斗力*/
    this.remain_gold = opts && opts.remain_gold || 0;/*玩家剩余资产（包含内部）,该资产为充值所获得的（如：元宝）*/
    this.consume_gold = opts && opts.consume_gold || 0;/*玩家已消耗资产(包含内部)，该资产为充值所获得的（如：元宝）*/
    this.guild_name = opts && opts.guild_name || null;/*帮派名称*/
    this.exp = opts && opts.exp || 0;/*经验值*/
    this.map_id = opts && opts.map_id || 0;/*地图ID*/
    this.xpos = opts && opts.xpos || 0;/*X坐标*/
    this.ypos = opts && opts.ypos || 0;/*Y坐标*/
    this.ext1 = opts && opts.ext1 || null;/*扩展字段1*/
    this.ext2 = opts && opts.ext2 || null;/*扩展字段2*/
    this.ext3 = opts && opts.ext3 || null;/*扩展字段3*/

};
_Class.tableName = 't_player';
_Class.selectCols = 'pf_id,srv_id,channel_id,logsrv_id,dev_id,part_id,user_id,user_name,player_id,player_name,create_time,profession,sex,last_login_time,last_offline_time,last_update_time,is_online,total_online_time,level,vip_level,ip,power,remain_gold,consume_gold,guild_name,exp,map_id,xpos,ypos,ext1,ext2,ext3';/**
t_realtime_online
实时在线数据
**/
var _Class = module.exports = function(opts){
    this.pf_id = opts && opts.pf_id || 0;/*平台ID*/
    this.channel_id = opts && opts.channel_id || 0;/*渠道ID*/
    this.srv_id = opts && opts.srv_id || 0;/*服务器ID*/
    this.logsrv_id = opts && opts.logsrv_id || 0;/*平台登录的服务器ID*/
    this.dev_id = opts && opts.dev_id || 1;/*设备ID(1-android,2-ios)*/
    this.part_id = opts && opts.part_id || 1;/*大区ID*/
    this.time = opts && opts.time || 0;/*记录时间（五分钟记录一次）*/
    this.online_count = opts && opts.online_count || 0;/*在线人数*/

};
_Class.tableName = 't_realtime_online';
_Class.selectCols = 'pf_id,channel_id,srv_id,logsrv_id,dev_id,part_id,time,online_count';/**
t_realtime_register
实时注册数据
**/
var _Class = module.exports = function(opts){
    this.pf_id = opts && opts.pf_id || 0;/*平台ID*/
    this.channel_id = opts && opts.channel_id || 0;/*平台ID*/
    this.srv_id = opts && opts.srv_id || 0;/*服务器ID*/
    this.logsrv_id = opts && opts.logsrv_id || 0;/*平台登录的服务器ID*/
    this.dev_id = opts && opts.dev_id || 1;/*设备ID(1-android,2-ios)*/
    this.part_id = opts && opts.part_id || 1;/*大区ID*/
    this.time = opts && opts.time || 0;/*记录时间（五分钟记录一次）*/
    this.register_count = opts && opts.register_count || 0;/*注册人数*/

};
_Class.tableName = 't_realtime_register';
_Class.selectCols = 'pf_id,channel_id,srv_id,logsrv_id,dev_id,part_id,time,register_count';/**
t_system_liveness
每天个系统活跃度数据
**/
var _Class = module.exports = function(opts){
    this.id = opts && opts.id || null;/*自增ID*/
    this.sys_type = opts && opts.sys_type || 0;/*系统类型*/
    this.log_day = opts && opts.log_day || 0;/*统计时间*/
    this.time = opts && opts.time || 0;/*记录时间*/
    this.open_count = opts && opts.open_count || 0;/*已开启并登录人数*/
    this.live_count = opts && opts.live_count || 0;/*参与人数*/
    this.total_count = opts && opts.total_count || 0;/*参与总数*/

};
_Class.tableName = 't_system_liveness';
_Class.selectCols = 'id,sys_type,log_day,time,open_count,live_count,total_count';/**
t_user
账号信息
**/
var _Class = module.exports = function(opts){
    this.pf_id = opts && opts.pf_id || 0;/*平台ID*/
    this.srv_id = opts && opts.srv_id || 0;/*服务器ID*/
    this.channel_id = opts && opts.channel_id || 0;/*渠道ID*/
    this.logsrv_id = opts && opts.logsrv_id || 0;/*平台登录的服务器ID*/
    this.dev_id = opts && opts.dev_id || 1;/*设备ID(1-android,2-ios)*/
    this.part_id = opts && opts.part_id || 1;/*大区ID*/
    this.user_id = opts && opts.user_id || 0;/*账号ID*/
    this.user_name = opts && opts.user_name || null;/*账号名*/
    this.reg_time = opts && opts.reg_time || 0;/*注册时间*/
    this.reg_ip = opts && opts.reg_ip || null;/*跳转的IP*/
    this.source = opts && opts.source || 0;/*用户来源*/

};
_Class.tableName = 't_user';
_Class.selectCols = 'pf_id,srv_id,channel_id,logsrv_id,dev_id,part_id,user_id,user_name,reg_time,reg_ip,source';