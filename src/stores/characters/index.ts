import { ACCOUNT_DATA, ACCOUNT_INSTANCE_TIMES, ACCOUNT_TUTORIAL, ADDONS, ARENA_TEAM, ARENA_TEAM_MEMBER, AUCTIONBIDDERS, AUCTIONHOUSE, BANNED_ADDONS, BATTLEGROUND_DESERTERS, BUGREPORT, CALENDAR_EVENTS, CALENDAR_INVITES, CHANNELS, CHARACTER_ACCOUNT_DATA, CHARACTER_ACHIEVEMENT, CHARACTER_ACHIEVEMENT_PROGRESS, CHARACTER_ACTION, CHARACTER_ARCHAEOLOGY_COMPLETED, CHARACTER_ARCHAEOLOGY_PROJECTS, CHARACTER_ARCHAEOLOGY_SITES, CHARACTER_ARENA_STATS, CHARACTER_AURA, CHARACTER_BANNED, CHARACTER_BATTLEGROUND_DATA, CHARACTER_BATTLEGROUND_RANDOM, CHARACTER_CUF_PROFILES, CHARACTER_CURRENCY, CHARACTER_DECLINEDNAME, CHARACTER_EQUIPMENTSETS, CHARACTER_FISHINGSTEPS, CHARACTER_GIFTS, CHARACTER_GLYPHS, CHARACTER_HOMEBIND, CHARACTER_INSTANCE, CHARACTER_INVENTORY, CHARACTER_PET, CHARACTER_PET_DECLINEDNAME, CHARACTER_QUESTSTATUS, CHARACTER_QUESTSTATUS_DAILY, CHARACTER_QUESTSTATUS_MONTHLY, CHARACTER_QUESTSTATUS_REWARDED, CHARACTER_QUESTSTATUS_SEASONAL, CHARACTER_QUESTSTATUS_WEEKLY, CHARACTER_REPUTATION, CHARACTER_REWARDSTATUS_LFG, CHARACTERS, CHARACTER_SKILLS, CHARACTER_SOCIAL, CHARACTER_SPELL, CHARACTER_SPELL_COOLDOWN, CHARACTER_STATS, CHARACTER_TALENT, CHARACTER_VOID_STORAGE, CORPSE, CORPSE_PHASES, GAME_EVENT_CONDITION_SAVE, GAME_EVENT_SAVE, GM_SUBSURVEY, GM_SURVEY, GM_TICKET, GROUP_INSTANCE, GROUP_MEMBER, GROUPS, GUILD, GUILD_ACHIEVEMENT, GUILD_ACHIEVEMENT_PROGRESS, GUILD_BANK_EVENTLOG, GUILD_BANK_ITEM, GUILD_BANK_RIGHT, GUILD_BANK_TAB, GUILD_EVENTLOG, GUILD_FINDER_APPLICANT, GUILD_FINDER_GUILD_SETTINGS, GUILD_MEMBER, GUILD_MEMBER_WITHDRAW, GUILD_NEWSLOG, GUILD_OLD_MEMBER, GUILD_RANK, INSTANCE, INSTANCE_RESET, ITEM_INSTANCE, ITEM_LOOT_ITEMS, ITEM_LOOT_MONEY, ITEM_REFUND_INSTANCE, ITEM_SOULBOUND_TRADE_DATA, LAG_REPORTS, LFG_DATA, MAIL, MAIL_ITEMS, PET_AURA, PETITION, PETITION_SIGN, PET_SPELL, PET_SPELL_COOLDOWN, POOL_QUEST_SAVE, PVPSTATS_BATTLEGROUNDS, PVPSTATS_PLAYERS, QUEST_TRACKER, RESERVED_NAME, RESPAWN, CHARACTERS_UPDATES, CHARACTERS_UPDATES_INCLUDE, WARDEN_ACTION, WORLD_STATE_VALUE, WORLD_VARIABLE, STORE_CHARACTERS } from "#constants/characters"

import { AccountDataStore } from '#stores/characters/AccountData'
import { AccountInstanceTimesStore } from '#stores/characters/AccountInstanceTimes'
import { AccountTutorialStore } from '#stores/characters/AccountTutorial'
import { AddonsStore } from '#stores/characters/Addons'
import { ArenaTeamStore } from '#stores/characters/ArenaTeam'
import { ArenaTeamMemberStore } from '#stores/characters/ArenaTeamMember'
import { AuctionbiddersStore } from '#stores/characters/Auctionbidders'
import { AuctionhouseStore } from '#stores/characters/Auctionhouse'
import { BannedAddonsStore } from '#stores/characters/BannedAddons'
import { BattlegroundDesertersStore } from '#stores/characters/BattlegroundDeserters'
import { BugreportStore } from '#stores/characters/Bugreport'
import { CalendarEventsStore } from '#stores/characters/CalendarEvents'
import { CalendarInvitesStore } from '#stores/characters/CalendarInvites'
import { ChannelsStore } from '#stores/characters/Channels'
import { CharacterAccountDataStore } from '#stores/characters/CharacterAccountData'
import { CharacterAchievementStore } from '#stores/characters/CharacterAchievement'
import { CharacterAchievementProgressStore } from '#stores/characters/CharacterAchievementProgress'
import { CharacterActionStore } from '#stores/characters/CharacterAction'
import { CharacterArchaeologyCompletedStore } from '#stores/characters/CharacterArchaeologyCompleted'
import { CharacterArchaeologyProjectsStore } from '#stores/characters/CharacterArchaeologyProjects'
import { CharacterArchaeologySitesStore } from '#stores/characters/CharacterArchaeologySites'
import { CharacterArenaStatsStore } from '#stores/characters/CharacterArenaStats'
import { CharacterAuraStore } from '#stores/characters/CharacterAura'
import { CharacterBannedStore } from '#stores/characters/CharacterBanned'
import { CharacterBattlegroundDataStore } from '#stores/characters/CharacterBattlegroundData'
import { CharacterBattlegroundRandomStore } from '#stores/characters/CharacterBattlegroundRandom'
import { CharacterCufProfilesStore } from '#stores/characters/CharacterCufProfiles'
import { CharacterCurrencyStore } from '#stores/characters/CharacterCurrency'
import { CharacterDeclinednameStore } from '#stores/characters/CharacterDeclinedname'
import { CharacterEquipmentsetsStore } from '#stores/characters/CharacterEquipmentsets'
import { CharacterFishingstepsStore } from '#stores/characters/CharacterFishingsteps'
import { CharacterGiftsStore } from '#stores/characters/CharacterGifts'
import { CharacterGlyphsStore } from '#stores/characters/CharacterGlyphs'
import { CharacterHomebindStore } from '#stores/characters/CharacterHomebind'
import { CharacterInstanceStore } from '#stores/characters/CharacterInstance'
import { CharacterInventoryStore } from '#stores/characters/CharacterInventory'
import { CharacterPetStore } from '#stores/characters/CharacterPet'
import { CharacterPetDeclinednameStore } from '#stores/characters/CharacterPetDeclinedname'
import { CharacterQueststatusStore } from '#stores/characters/CharacterQueststatus'
import { CharacterQueststatusDailyStore } from '#stores/characters/CharacterQueststatusDaily'
import { CharacterQueststatusMonthlyStore } from '#stores/characters/CharacterQueststatusMonthly'
import { CharacterQueststatusRewardedStore } from '#stores/characters/CharacterQueststatusRewarded'
import { CharacterQueststatusSeasonalStore } from '#stores/characters/CharacterQueststatusSeasonal'
import { CharacterQueststatusWeeklyStore } from '#stores/characters/CharacterQueststatusWeekly'
import { CharacterReputationStore } from '#stores/characters/CharacterReputation'
import { CharacterRewardstatusLfgStore } from '#stores/characters/CharacterRewardstatusLfg'
import { CharactersStore } from '#stores/characters/Characters'
import { CharacterSkillsStore } from '#stores/characters/CharacterSkills'
import { CharacterSocialStore } from '#stores/characters/CharacterSocial'
import { CharacterSpellStore } from '#stores/characters/CharacterSpell'
import { CharacterSpellCooldownStore } from '#stores/characters/CharacterSpellCooldown'
import { CharacterStatsStore } from '#stores/characters/CharacterStats'
import { CharacterTalentStore } from '#stores/characters/CharacterTalent'
import { CharacterVoidStorageStore } from '#stores/characters/CharacterVoidStorage'
import { CorpseStore } from '#stores/characters/Corpse'
import { CorpsePhasesStore } from '#stores/characters/CorpsePhases'
import { GameEventConditionSaveStore } from '#stores/characters/GameEventConditionSave'
import { GameEventSaveStore } from '#stores/characters/GameEventSave'
import { GmSubsurveyStore } from '#stores/characters/GmSubsurvey'
import { GmSurveyStore } from '#stores/characters/GmSurvey'
import { GmTicketStore } from '#stores/characters/GmTicket'
import { GroupInstanceStore } from '#stores/characters/GroupInstance'
import { GroupMemberStore } from '#stores/characters/GroupMember'
import { GroupsStore } from '#stores/characters/Groups'
import { GuildStore } from '#stores/characters/Guild'
import { GuildAchievementStore } from '#stores/characters/GuildAchievement'
import { GuildAchievementProgressStore } from '#stores/characters/GuildAchievementProgress'
import { GuildBankEventlogStore } from '#stores/characters/GuildBankEventlog'
import { GuildBankItemStore } from '#stores/characters/GuildBankItem'
import { GuildBankRightStore } from '#stores/characters/GuildBankRight'
import { GuildBankTabStore } from '#stores/characters/GuildBankTab'
import { GuildEventlogStore } from '#stores/characters/GuildEventlog'
import { GuildFinderApplicantStore } from '#stores/characters/GuildFinderApplicant'
import { GuildFinderGuildSettingsStore } from '#stores/characters/GuildFinderGuildSettings'
import { GuildMemberStore } from '#stores/characters/GuildMember'
import { GuildMemberWithdrawStore } from '#stores/characters/GuildMemberWithdraw'
import { GuildNewslogStore } from '#stores/characters/GuildNewslog'
import { GuildOldMemberStore } from '#stores/characters/GuildOldMember'
import { GuildRankStore } from '#stores/characters/GuildRank'
import { InstanceStore } from '#stores/characters/Instance'
import { InstanceResetStore } from '#stores/characters/InstanceReset'
import { ItemInstanceStore } from '#stores/characters/ItemInstance'
import { ItemLootItemsStore } from '#stores/characters/ItemLootItems'
import { ItemLootMoneyStore } from '#stores/characters/ItemLootMoney'
import { ItemRefundInstanceStore } from '#stores/characters/ItemRefundInstance'
import { ItemSoulboundTradeDataStore } from '#stores/characters/ItemSoulboundTradeData'
import { LagReportsStore } from '#stores/characters/LagReports'
import { LfgDataStore } from '#stores/characters/LfgData'
import { MailStore } from '#stores/characters/Mail'
import { MailItemsStore } from '#stores/characters/MailItems'
import { PetAuraStore } from '#stores/characters/PetAura'
import { PetitionStore } from '#stores/characters/Petition'
import { PetitionSignStore } from '#stores/characters/PetitionSign'
import { PetSpellStore } from '#stores/characters/PetSpell'
import { PetSpellCooldownStore } from '#stores/characters/PetSpellCooldown'
import { PoolQuestSaveStore } from '#stores/characters/PoolQuestSave'
import { PvpstatsBattlegroundsStore } from '#stores/characters/PvpstatsBattlegrounds'
import { PvpstatsPlayersStore } from '#stores/characters/PvpstatsPlayers'
import { QuestTrackerStore } from '#stores/characters/QuestTracker'
import { ReservedNameStore } from '#stores/characters/ReservedName'
import { RespawnStore } from '#stores/characters/Respawn'
import { CharactersUpdatesStore } from '#stores/characters/Updates'
import { CharactersUpdatesIncludeStore } from '#stores/characters/UpdatesInclude'
import { WardenActionStore } from '#stores/characters/WardenAction'
import { WorldStateValueStore } from '#stores/characters/WorldStateValue'
import { WorldVariableStore } from '#stores/characters/WorldVariable'
import { DataSource } from "typeorm"

export type CharactersStores = {
  [ACCOUNT_DATA]: AccountDataStore,
  [ACCOUNT_INSTANCE_TIMES]: AccountInstanceTimesStore,
  [ACCOUNT_TUTORIAL]: AccountTutorialStore,
  [ADDONS]: AddonsStore,
  [ARENA_TEAM]: ArenaTeamStore,
  [ARENA_TEAM_MEMBER]: ArenaTeamMemberStore,
  [AUCTIONBIDDERS]: AuctionbiddersStore,
  [AUCTIONHOUSE]: AuctionhouseStore,
  [BANNED_ADDONS]: BannedAddonsStore,
  [BATTLEGROUND_DESERTERS]: BattlegroundDesertersStore,
  [BUGREPORT]: BugreportStore,
  [CALENDAR_EVENTS]: CalendarEventsStore,
  [CALENDAR_INVITES]: CalendarInvitesStore,
  [CHANNELS]: ChannelsStore,
  [CHARACTER_ACCOUNT_DATA]: CharacterAccountDataStore,
  [CHARACTER_ACHIEVEMENT]: CharacterAchievementStore,
  [CHARACTER_ACHIEVEMENT_PROGRESS]: CharacterAchievementProgressStore,
  [CHARACTER_ACTION]: CharacterActionStore,
  [CHARACTER_ARCHAEOLOGY_COMPLETED]: CharacterArchaeologyCompletedStore,
  [CHARACTER_ARCHAEOLOGY_PROJECTS]: CharacterArchaeologyProjectsStore,
  [CHARACTER_ARCHAEOLOGY_SITES]: CharacterArchaeologySitesStore,
  [CHARACTER_ARENA_STATS]: CharacterArenaStatsStore,
  [CHARACTER_AURA]: CharacterAuraStore,
  [CHARACTER_BANNED]: CharacterBannedStore,
  [CHARACTER_BATTLEGROUND_DATA]: CharacterBattlegroundDataStore,
  [CHARACTER_BATTLEGROUND_RANDOM]: CharacterBattlegroundRandomStore,
  [CHARACTER_CUF_PROFILES]: CharacterCufProfilesStore,
  [CHARACTER_CURRENCY]: CharacterCurrencyStore,
  [CHARACTER_DECLINEDNAME]: CharacterDeclinednameStore,
  [CHARACTER_EQUIPMENTSETS]: CharacterEquipmentsetsStore,
  [CHARACTER_FISHINGSTEPS]: CharacterFishingstepsStore,
  [CHARACTER_GIFTS]: CharacterGiftsStore,
  [CHARACTER_GLYPHS]: CharacterGlyphsStore,
  [CHARACTER_HOMEBIND]: CharacterHomebindStore,
  [CHARACTER_INSTANCE]: CharacterInstanceStore,
  [CHARACTER_INVENTORY]: CharacterInventoryStore,
  [CHARACTER_PET]: CharacterPetStore,
  [CHARACTER_PET_DECLINEDNAME]: CharacterPetDeclinednameStore,
  [CHARACTER_QUESTSTATUS]: CharacterQueststatusStore,
  [CHARACTER_QUESTSTATUS_DAILY]: CharacterQueststatusDailyStore,
  [CHARACTER_QUESTSTATUS_MONTHLY]: CharacterQueststatusMonthlyStore,
  [CHARACTER_QUESTSTATUS_REWARDED]: CharacterQueststatusRewardedStore,
  [CHARACTER_QUESTSTATUS_SEASONAL]: CharacterQueststatusSeasonalStore,
  [CHARACTER_QUESTSTATUS_WEEKLY]: CharacterQueststatusWeeklyStore,
  [CHARACTER_REPUTATION]: CharacterReputationStore,
  [CHARACTER_REWARDSTATUS_LFG]: CharacterRewardstatusLfgStore,
  [CHARACTERS]: CharactersStore,
  [CHARACTER_SKILLS]: CharacterSkillsStore,
  [CHARACTER_SOCIAL]: CharacterSocialStore,
  [CHARACTER_SPELL]: CharacterSpellStore,
  [CHARACTER_SPELL_COOLDOWN]: CharacterSpellCooldownStore,
  [CHARACTER_STATS]: CharacterStatsStore,
  [CHARACTER_TALENT]: CharacterTalentStore,
  [CHARACTER_VOID_STORAGE]: CharacterVoidStorageStore,
  [CORPSE]: CorpseStore,
  [CORPSE_PHASES]: CorpsePhasesStore,
  [GAME_EVENT_CONDITION_SAVE]: GameEventConditionSaveStore,
  [GAME_EVENT_SAVE]: GameEventSaveStore,
  [GM_SUBSURVEY]: GmSubsurveyStore,
  [GM_SURVEY]: GmSurveyStore,
  [GM_TICKET]: GmTicketStore,
  [GROUP_INSTANCE]: GroupInstanceStore,
  [GROUP_MEMBER]: GroupMemberStore,
  [GROUPS]: GroupsStore,
  [GUILD]: GuildStore,
  [GUILD_ACHIEVEMENT]: GuildAchievementStore,
  [GUILD_ACHIEVEMENT_PROGRESS]: GuildAchievementProgressStore,
  [GUILD_BANK_EVENTLOG]: GuildBankEventlogStore,
  [GUILD_BANK_ITEM]: GuildBankItemStore,
  [GUILD_BANK_RIGHT]: GuildBankRightStore,
  [GUILD_BANK_TAB]: GuildBankTabStore,
  [GUILD_EVENTLOG]: GuildEventlogStore,
  [GUILD_FINDER_APPLICANT]: GuildFinderApplicantStore,
  [GUILD_FINDER_GUILD_SETTINGS]: GuildFinderGuildSettingsStore,
  [GUILD_MEMBER]: GuildMemberStore,
  [GUILD_MEMBER_WITHDRAW]: GuildMemberWithdrawStore,
  [GUILD_NEWSLOG]: GuildNewslogStore,
  [GUILD_OLD_MEMBER]: GuildOldMemberStore,
  [GUILD_RANK]: GuildRankStore,
  [INSTANCE]: InstanceStore,
  [INSTANCE_RESET]: InstanceResetStore,
  [ITEM_INSTANCE]: ItemInstanceStore,
  [ITEM_LOOT_ITEMS]: ItemLootItemsStore,
  [ITEM_LOOT_MONEY]: ItemLootMoneyStore,
  [ITEM_REFUND_INSTANCE]: ItemRefundInstanceStore,
  [ITEM_SOULBOUND_TRADE_DATA]: ItemSoulboundTradeDataStore,
  [LAG_REPORTS]: LagReportsStore,
  [LFG_DATA]: LfgDataStore,
  [MAIL]: MailStore,
  [MAIL_ITEMS]: MailItemsStore,
  [PET_AURA]: PetAuraStore,
  [PETITION]: PetitionStore,
  [PETITION_SIGN]: PetitionSignStore,
  [PET_SPELL]: PetSpellStore,
  [PET_SPELL_COOLDOWN]: PetSpellCooldownStore,
  [POOL_QUEST_SAVE]: PoolQuestSaveStore,
  [PVPSTATS_BATTLEGROUNDS]: PvpstatsBattlegroundsStore,
  [PVPSTATS_PLAYERS]: PvpstatsPlayersStore,
  [QUEST_TRACKER]: QuestTrackerStore,
  [RESERVED_NAME]: ReservedNameStore,
  [RESPAWN]: RespawnStore,
  [CHARACTERS_UPDATES]: CharactersUpdatesStore,
  [CHARACTERS_UPDATES_INCLUDE]: CharactersUpdatesIncludeStore,
  [WARDEN_ACTION]: WardenActionStore,
  [WORLD_STATE_VALUE]: WorldStateValueStore,
  [WORLD_VARIABLE]: WorldVariableStore,
}

export function initCharactersStores(data_source: DataSource): CharactersStores {
  return {
    [ACCOUNT_DATA]: new AccountDataStore(data_source),
    [ACCOUNT_INSTANCE_TIMES]: new AccountInstanceTimesStore(data_source),
    [ACCOUNT_TUTORIAL]: new AccountTutorialStore(data_source),
    [ADDONS]: new AddonsStore(data_source),
    [ARENA_TEAM]: new ArenaTeamStore(data_source),
    [ARENA_TEAM_MEMBER]: new ArenaTeamMemberStore(data_source),
    [AUCTIONBIDDERS]: new AuctionbiddersStore(data_source),
    [AUCTIONHOUSE]: new AuctionhouseStore(data_source),
    [BANNED_ADDONS]: new BannedAddonsStore(data_source),
    [BATTLEGROUND_DESERTERS]: new BattlegroundDesertersStore(data_source),
    [BUGREPORT]: new BugreportStore(data_source),
    [CALENDAR_EVENTS]: new CalendarEventsStore(data_source),
    [CALENDAR_INVITES]: new CalendarInvitesStore(data_source),
    [CHANNELS]: new ChannelsStore(data_source),
    [CHARACTER_ACCOUNT_DATA]: new CharacterAccountDataStore(data_source),
    [CHARACTER_ACHIEVEMENT]: new CharacterAchievementStore(data_source),
    [CHARACTER_ACHIEVEMENT_PROGRESS]: new CharacterAchievementProgressStore(data_source),
    [CHARACTER_ACTION]: new CharacterActionStore(data_source),
    [CHARACTER_ARCHAEOLOGY_COMPLETED]: new CharacterArchaeologyCompletedStore(data_source),
    [CHARACTER_ARCHAEOLOGY_PROJECTS]: new CharacterArchaeologyProjectsStore(data_source),
    [CHARACTER_ARCHAEOLOGY_SITES]: new CharacterArchaeologySitesStore(data_source),
    [CHARACTER_ARENA_STATS]: new CharacterArenaStatsStore(data_source),
    [CHARACTER_AURA]: new CharacterAuraStore(data_source),
    [CHARACTER_BANNED]: new CharacterBannedStore(data_source),
    [CHARACTER_BATTLEGROUND_DATA]: new CharacterBattlegroundDataStore(data_source),
    [CHARACTER_BATTLEGROUND_RANDOM]: new CharacterBattlegroundRandomStore(data_source),
    [CHARACTER_CUF_PROFILES]: new CharacterCufProfilesStore(data_source),
    [CHARACTER_CURRENCY]: new CharacterCurrencyStore(data_source),
    [CHARACTER_DECLINEDNAME]: new CharacterDeclinednameStore(data_source),
    [CHARACTER_EQUIPMENTSETS]: new CharacterEquipmentsetsStore(data_source),
    [CHARACTER_FISHINGSTEPS]: new CharacterFishingstepsStore(data_source),
    [CHARACTER_GIFTS]: new CharacterGiftsStore(data_source),
    [CHARACTER_GLYPHS]: new CharacterGlyphsStore(data_source),
    [CHARACTER_HOMEBIND]: new CharacterHomebindStore(data_source),
    [CHARACTER_INSTANCE]: new CharacterInstanceStore(data_source),
    [CHARACTER_INVENTORY]: new CharacterInventoryStore(data_source),
    [CHARACTER_PET]: new CharacterPetStore(data_source),
    [CHARACTER_PET_DECLINEDNAME]: new CharacterPetDeclinednameStore(data_source),
    [CHARACTER_QUESTSTATUS]: new CharacterQueststatusStore(data_source),
    [CHARACTER_QUESTSTATUS_DAILY]: new CharacterQueststatusDailyStore(data_source),
    [CHARACTER_QUESTSTATUS_MONTHLY]: new CharacterQueststatusMonthlyStore(data_source),
    [CHARACTER_QUESTSTATUS_REWARDED]: new CharacterQueststatusRewardedStore(data_source),
    [CHARACTER_QUESTSTATUS_SEASONAL]: new CharacterQueststatusSeasonalStore(data_source),
    [CHARACTER_QUESTSTATUS_WEEKLY]: new CharacterQueststatusWeeklyStore(data_source),
    [CHARACTER_REPUTATION]: new CharacterReputationStore(data_source),
    [CHARACTER_REWARDSTATUS_LFG]: new CharacterRewardstatusLfgStore(data_source),
    [CHARACTERS]: new CharactersStore(data_source),
    [CHARACTER_SKILLS]: new CharacterSkillsStore(data_source),
    [CHARACTER_SOCIAL]: new CharacterSocialStore(data_source),
    [CHARACTER_SPELL]: new CharacterSpellStore(data_source),
    [CHARACTER_SPELL_COOLDOWN]: new CharacterSpellCooldownStore(data_source),
    [CHARACTER_STATS]: new CharacterStatsStore(data_source),
    [CHARACTER_TALENT]: new CharacterTalentStore(data_source),
    [CHARACTER_VOID_STORAGE]: new CharacterVoidStorageStore(data_source),
    [CORPSE]: new CorpseStore(data_source),
    [CORPSE_PHASES]: new CorpsePhasesStore(data_source),
    [GAME_EVENT_CONDITION_SAVE]: new GameEventConditionSaveStore(data_source),
    [GAME_EVENT_SAVE]: new GameEventSaveStore(data_source),
    [GM_SUBSURVEY]: new GmSubsurveyStore(data_source),
    [GM_SURVEY]: new GmSurveyStore(data_source),
    [GM_TICKET]: new GmTicketStore(data_source),
    [GROUP_INSTANCE]: new GroupInstanceStore(data_source),
    [GROUP_MEMBER]: new GroupMemberStore(data_source),
    [GROUPS]: new GroupsStore(data_source),
    [GUILD]: new GuildStore(data_source),
    [GUILD_ACHIEVEMENT]: new GuildAchievementStore(data_source),
    [GUILD_ACHIEVEMENT_PROGRESS]: new GuildAchievementProgressStore(data_source),
    [GUILD_BANK_EVENTLOG]: new GuildBankEventlogStore(data_source),
    [GUILD_BANK_ITEM]: new GuildBankItemStore(data_source),
    [GUILD_BANK_RIGHT]: new GuildBankRightStore(data_source),
    [GUILD_BANK_TAB]: new GuildBankTabStore(data_source),
    [GUILD_EVENTLOG]: new GuildEventlogStore(data_source),
    [GUILD_FINDER_APPLICANT]: new GuildFinderApplicantStore(data_source),
    [GUILD_FINDER_GUILD_SETTINGS]: new GuildFinderGuildSettingsStore(data_source),
    [GUILD_MEMBER]: new GuildMemberStore(data_source),
    [GUILD_MEMBER_WITHDRAW]: new GuildMemberWithdrawStore(data_source),
    [GUILD_NEWSLOG]: new GuildNewslogStore(data_source),
    [GUILD_OLD_MEMBER]: new GuildOldMemberStore(data_source),
    [GUILD_RANK]: new GuildRankStore(data_source),
    [INSTANCE]: new InstanceStore(data_source),
    [INSTANCE_RESET]: new InstanceResetStore(data_source),
    [ITEM_INSTANCE]: new ItemInstanceStore(data_source),
    [ITEM_LOOT_ITEMS]: new ItemLootItemsStore(data_source),
    [ITEM_LOOT_MONEY]: new ItemLootMoneyStore(data_source),
    [ITEM_REFUND_INSTANCE]: new ItemRefundInstanceStore(data_source),
    [ITEM_SOULBOUND_TRADE_DATA]: new ItemSoulboundTradeDataStore(data_source),
    [LAG_REPORTS]: new LagReportsStore(data_source),
    [LFG_DATA]: new LfgDataStore(data_source),
    [MAIL]: new MailStore(data_source),
    [MAIL_ITEMS]: new MailItemsStore(data_source),
    [PET_AURA]: new PetAuraStore(data_source),
    [PETITION]: new PetitionStore(data_source),
    [PETITION_SIGN]: new PetitionSignStore(data_source),
    [PET_SPELL]: new PetSpellStore(data_source),
    [PET_SPELL_COOLDOWN]: new PetSpellCooldownStore(data_source),
    [POOL_QUEST_SAVE]: new PoolQuestSaveStore(data_source),
    [PVPSTATS_BATTLEGROUNDS]: new PvpstatsBattlegroundsStore(data_source),
    [PVPSTATS_PLAYERS]: new PvpstatsPlayersStore(data_source),
    [QUEST_TRACKER]: new QuestTrackerStore(data_source),
    [RESERVED_NAME]: new ReservedNameStore(data_source),
    [RESPAWN]: new RespawnStore(data_source),
    [CHARACTERS_UPDATES]: new CharactersUpdatesStore(data_source),
    [CHARACTERS_UPDATES_INCLUDE]: new CharactersUpdatesIncludeStore(data_source),
    [WARDEN_ACTION]: new WardenActionStore(data_source),
    [WORLD_STATE_VALUE]: new WorldStateValueStore(data_source),
    [WORLD_VARIABLE]: new WorldVariableStore(data_source),
  }
}