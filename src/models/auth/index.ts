import { Account } from '#models/auth/Account'
import { AccountAccess } from '#models/auth/AccountAccess'
import { AccountBanned } from '#models/auth/AccountBanned'
import { AccountMuted } from '#models/auth/AccountMuted'
import { Autobroadcast } from '#models/auth/Autobroadcast'
import { BattlenetAccountBans } from '#models/auth/BattlenetAccountBans'
import { BattlenetAccounts } from '#models/auth/BattlenetAccounts'
import { BattlenetComponents } from '#models/auth/BattlenetComponents'
import { BattlenetModules } from '#models/auth/BattlenetModules'
import { IpBanned } from '#models/auth/IpBanned'
import { Logs } from '#models/auth/Logs'
import { LogsIpActions } from '#models/auth/LogsIpActions'
import { RbacAccountPermissions } from '#models/auth/RbacAccountPermissions'
import { RbacDefaultPermissions } from '#models/auth/RbacDefaultPermissions'
import { RbacLinkedPermissions } from '#models/auth/RbacLinkedPermissions'
import { RbacPermissions } from '#models/auth/RbacPermissions'
import { Realmcharacters } from '#models/auth/Realmcharacters'
import { Realmlist } from '#models/auth/Realmlist'
import { Updates } from '#models/auth/Updates'
import { UpdatesInclude } from '#models/auth/UpdatesInclude'
import { Uptime } from '#models/auth/Uptime'

export const auth_entities = [
  AccountAccess,
  AccountBanned,
  AccountMuted,
  Account,
  Autobroadcast,
  BattlenetAccountBans,
  BattlenetAccounts,
  BattlenetComponents,
  BattlenetModules,
  IpBanned,
  LogsIpActions,
  // Logs,
  // RbacAccountPermissions,
  // RbacDefaultPermissions,
  // RbacLinkedPermissions,
  // RbacPermissions,
  Realmcharacters,
  Realmlist,
  UpdatesInclude,
  Updates,
  Uptime,
]