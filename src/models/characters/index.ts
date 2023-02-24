import { AccountData } from '#models/characters/AccountData'
import { AccountInstanceTimes } from '#models/characters/AccountInstanceTimes'
import { AccountTutorial } from '#models/characters/AccountTutorial'
import { Addons } from '#models/characters/Addons'
import { ArenaTeam } from '#models/characters/ArenaTeam'
import { ArenaTeamMember } from '#models/characters/ArenaTeamMember'
import { Auctionbidders } from '#models/characters/Auctionbidders'
import { Auctionhouse } from '#models/characters/Auctionhouse'
import { BannedAddons } from '#models/characters/BannedAddons'
import { BattlegroundDeserters } from '#models/characters/BattlegroundDeserters'
import { Bugreport } from '#models/characters/Bugreport'
import { CalendarEvents } from '#models/characters/CalendarEvents'
import { CalendarInvites } from '#models/characters/CalendarInvites'
import { Channels } from '#models/characters/Channels'
import { CharacterAccountData } from '#models/characters/CharacterAccountData'
import { CharacterAchievement } from '#models/characters/CharacterAchievement'
import { CharacterAchievementProgress } from '#models/characters/CharacterAchievementProgress'
import { CharacterAction } from '#models/characters/CharacterAction'
import { CharacterArchaeologyCompleted } from '#models/characters/CharacterArchaeologyCompleted'
import { CharacterArchaeologyProjects } from '#models/characters/CharacterArchaeologyProjects'
import { CharacterArchaeologySites } from '#models/characters/CharacterArchaeologySites'
import { CharacterArenaStats } from '#models/characters/CharacterArenaStats'
import { CharacterAura } from '#models/characters/CharacterAura'
import { CharacterBanned } from '#models/characters/CharacterBanned'
import { CharacterBattlegroundData } from '#models/characters/CharacterBattlegroundData'
import { CharacterBattlegroundRandom } from '#models/characters/CharacterBattlegroundRandom'
import { CharacterCufProfiles } from '#models/characters/CharacterCufProfiles'
import { CharacterCurrency } from '#models/characters/CharacterCurrency'
import { CharacterDeclinedname } from '#models/characters/CharacterDeclinedname'
import { CharacterEquipmentsets } from '#models/characters/CharacterEquipmentsets'
import { CharacterFishingsteps } from '#models/characters/CharacterFishingsteps'
import { CharacterGifts } from '#models/characters/CharacterGifts'
import { CharacterGlyphs } from '#models/characters/CharacterGlyphs'
import { CharacterHomebind } from '#models/characters/CharacterHomebind'
import { CharacterInstance } from '#models/characters/CharacterInstance'
import { CharacterInventory } from '#models/characters/CharacterInventory'
import { CharacterPet } from '#models/characters/CharacterPet'
import { CharacterPetDeclinedname } from '#models/characters/CharacterPetDeclinedname'
import { CharacterQueststatus } from '#models/characters/CharacterQueststatus'
import { CharacterQueststatusDaily } from '#models/characters/CharacterQueststatusDaily'
import { CharacterQueststatusMonthly } from '#models/characters/CharacterQueststatusMonthly'
import { CharacterQueststatusRewarded } from '#models/characters/CharacterQueststatusRewarded'
import { CharacterQueststatusSeasonal } from '#models/characters/CharacterQueststatusSeasonal'
import { CharacterQueststatusWeekly } from '#models/characters/CharacterQueststatusWeekly'
import { CharacterReputation } from '#models/characters/CharacterReputation'
import { CharacterRewardstatusLfg } from '#models/characters/CharacterRewardstatusLfg'
import { Characters } from '#models/characters/Characters'
import { CharacterSkills } from '#models/characters/CharacterSkills'
import { CharacterSocial } from '#models/characters/CharacterSocial'
import { CharacterSpell } from '#models/characters/CharacterSpell'
import { CharacterSpellCooldown } from '#models/characters/CharacterSpellCooldown'
import { CharacterStats } from '#models/characters/CharacterStats'
import { CharacterTalent } from '#models/characters/CharacterTalent'
import { CharacterVoidStorage } from '#models/characters/CharacterVoidStorage'
import { Corpse } from '#models/characters/Corpse'
import { CorpsePhases } from '#models/characters/CorpsePhases'
import { GameEventConditionSave } from '#models/characters/GameEventConditionSave'
import { GameEventSave } from '#models/characters/GameEventSave'
import { GmSubsurvey } from '#models/characters/GmSubsurvey'
import { GmSurvey } from '#models/characters/GmSurvey'
import { GmTicket } from '#models/characters/GmTicket'
import { GroupInstance } from '#models/characters/GroupInstance'
import { GroupMember } from '#models/characters/GroupMember'
import { Groups } from '#models/characters/Groups'
import { Guild } from '#models/characters/Guild'
import { GuildAchievement } from '#models/characters/GuildAchievement'
import { GuildAchievementProgress } from '#models/characters/GuildAchievementProgress'
import { GuildBankEventlog } from '#models/characters/GuildBankEventlog'
import { GuildBankItem } from '#models/characters/GuildBankItem'
import { GuildBankRight } from '#models/characters/GuildBankRight'
import { GuildBankTab } from '#models/characters/GuildBankTab'
import { GuildEventlog } from '#models/characters/GuildEventlog'
import { GuildFinderApplicant } from '#models/characters/GuildFinderApplicant'
import { GuildFinderGuildSettings } from '#models/characters/GuildFinderGuildSettings'
import { GuildMember } from '#models/characters/GuildMember'
import { GuildMemberWithdraw } from '#models/characters/GuildMemberWithdraw'
import { GuildNewslog } from '#models/characters/GuildNewslog'
import { GuildOldMember } from '#models/characters/GuildOldMember'
import { GuildRank } from '#models/characters/GuildRank'
import { Instance } from '#models/characters/Instance'
import { InstanceReset } from '#models/characters/InstanceReset'
import { ItemInstance } from '#models/characters/ItemInstance'
import { ItemLootItems } from '#models/characters/ItemLootItems'
import { ItemLootMoney } from '#models/characters/ItemLootMoney'
import { ItemRefundInstance } from '#models/characters/ItemRefundInstance'
import { ItemSoulboundTradeData } from '#models/characters/ItemSoulboundTradeData'
import { LagReports } from '#models/characters/LagReports'
import { LfgData } from '#models/characters/LfgData'
import { Mail } from '#models/characters/Mail'
import { MailItems } from '#models/characters/MailItems'
import { PetAura } from '#models/characters/PetAura'
import { Petition } from '#models/characters/Petition'
import { PetitionSign } from '#models/characters/PetitionSign'
import { PetSpell } from '#models/characters/PetSpell'
import { PetSpellCooldown } from '#models/characters/PetSpellCooldown'
import { PoolQuestSave } from '#models/characters/PoolQuestSave'
import { PvpstatsBattlegrounds } from '#models/characters/PvpstatsBattlegrounds'
import { PvpstatsPlayers } from '#models/characters/PvpstatsPlayers'
import { QuestTracker } from '#models/characters/QuestTracker'
import { ReservedName } from '#models/characters/ReservedName'
import { Respawn } from '#models/characters/Respawn'
import { Updates } from '#models/characters/Updates'
import { UpdatesInclude } from '#models/characters/UpdatesInclude'
import { WardenAction } from '#models/characters/WardenAction'
import { WorldStateValue } from '#models/characters/WorldStateValue'
import { WorldVariable } from '#models/characters/WorldVariable'

export const characters_entities = [
  AccountData,
  AccountInstanceTimes,
  AccountTutorial,
  Addons,
  ArenaTeamMember,
  ArenaTeam,
  Auctionbidders,
  Auctionhouse,
  BannedAddons,
  // BattlegroundDeserters,
  Bugreport,
  CalendarEvents,
  CalendarInvites,
  Channels,
  CharacterAccountData,
  CharacterAchievementProgress,
  CharacterAchievement,
  CharacterAction,
  CharacterArchaeologyCompleted,
  CharacterArchaeologyProjects,
  CharacterArchaeologySites,
  CharacterArenaStats,
  CharacterAura,
  CharacterBanned,
  CharacterBattlegroundData,
  CharacterBattlegroundRandom,
  CharacterCufProfiles,
  CharacterCurrency,
  CharacterDeclinedname,
  CharacterEquipmentsets,
  CharacterFishingsteps,
  CharacterGifts,
  CharacterGlyphs,
  CharacterHomebind,
  CharacterInstance,
  CharacterInventory,
  CharacterPetDeclinedname,
  CharacterPet,
  CharacterQueststatusDaily,
  CharacterQueststatusMonthly,
  CharacterQueststatusRewarded,
  CharacterQueststatusSeasonal,
  CharacterQueststatus,
  CharacterQueststatusWeekly,
  CharacterReputation,
  // CharacterRewardstatusLfg,
  CharacterSkills,
  CharacterSocial,
  CharacterSpellCooldown,
  CharacterSpell,
  CharacterStats,
  Characters,
  CharacterTalent,
  CharacterVoidStorage,
  CorpsePhases,
  Corpse,
  GameEventConditionSave,
  GameEventSave,
  GmSubsurvey,
  GmSurvey,
  GmTicket,
  GroupInstance,
  GroupMember,
  Groups,
  GuildAchievementProgress,
  GuildAchievement,
  GuildBankEventlog,
  GuildBankItem,
  GuildBankRight,
  GuildBankTab,
  GuildEventlog,
  // GuildFinderApplicant,
  GuildFinderGuildSettings,
  // GuildMember,
  GuildMemberWithdraw,
  GuildNewslog,
  GuildOldMember,
  GuildRank,
  Guild,
  InstanceReset,
  Instance,
  ItemInstance,
  // ItemLootItems,
  ItemLootMoney,
  ItemRefundInstance,
  ItemSoulboundTradeData,
  LagReports,
  LfgData,
  MailItems,
  Mail,
  PetAura,
  PetitionSign,
  Petition,
  PetSpellCooldown,
  PetSpell,
  PoolQuestSave,
  PvpstatsBattlegrounds,
  PvpstatsPlayers,
  // QuestTracker,
  ReservedName,
  Respawn,
  UpdatesInclude,
  Updates,
  WardenAction,
  WorldStateValue,
  WorldVariable,
]