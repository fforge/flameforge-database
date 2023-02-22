import { ACCOUNT, ACCOUNT_ACCESS, ACCOUNT_BANNED, ACCOUNT_MUTED, AUTH_UPDATES, AUTH_UPDATES_INCLUDE, AUTOBROADCAST, BATTLENET_ACCOUNTS, BATTLENET_ACCOUNT_BANS, BATTLENET_COMPONENTS, BATTLENET_MODULES, IP_BANNED, LOGS, LOGS_IP_ACTIONS, RBAC_ACCOUNT_PERMISSIONS, RBAC_DEFAULT_PERMISSIONS, RBAC_LINKED_PERMISSIONS, RBAC_PERMISSIONS, REALMCHARACTERS, REALMLIST, STORE_AUTH, UPTIME } from "#constants/auth"

import { AccountStore } from '#stores/auth/Account'
import { AccountAccessStore } from '#stores/auth/AccountAccess'
import { AccountBannedStore } from '#stores/auth/AccountBanned'
import { AccountMutedStore } from '#stores/auth/AccountMuted'
import { AutobroadcastStore } from '#stores/auth/Autobroadcast'
import { BattlenetAccountBansStore } from '#stores/auth/BattlenetAccountBans'
import { BattlenetAccountsStore } from '#stores/auth/BattlenetAccounts'
import { BattlenetComponentsStore } from '#stores/auth/BattlenetComponents'
import { BattlenetModulesStore } from '#stores/auth/BattlenetModules'
import { IpBannedStore } from '#stores/auth/IpBanned'
import { LogsStore } from '#stores/auth/Logs'
import { LogsIpActionsStore } from '#stores/auth/LogsIpActions'
import { RbacAccountPermissionsStore } from '#stores/auth/RbacAccountPermissions'
import { RbacDefaultPermissionsStore } from '#stores/auth/RbacDefaultPermissions'
import { RbacLinkedPermissionsStore } from '#stores/auth/RbacLinkedPermissions'
import { RbacPermissionsStore } from '#stores/auth/RbacPermissions'
import { RealmcharactersStore } from '#stores/auth/Realmcharacters'
import { RealmlistStore } from '#stores/auth/Realmlist'
import { AuthUpdatesStore } from '#stores/auth/Updates'
import { AuthUpdatesIncludeStore } from '#stores/auth/UpdatesInclude'
import { UptimeStore } from '#stores/auth/Uptime'
import { DataSource } from "typeorm"

export type AuthStores = {
  [ACCOUNT]: AccountStore,
  [ACCOUNT_ACCESS]: AccountAccessStore,
  [ACCOUNT_BANNED]: AccountBannedStore,
  [ACCOUNT_MUTED]: AccountMutedStore,
  [AUTOBROADCAST]: AutobroadcastStore,
  [BATTLENET_ACCOUNT_BANS]: BattlenetAccountBansStore,
  [BATTLENET_ACCOUNTS]: BattlenetAccountsStore,
  [BATTLENET_COMPONENTS]: BattlenetComponentsStore,
  [BATTLENET_MODULES]: BattlenetModulesStore,
  [IP_BANNED]: IpBannedStore,
  [LOGS]: LogsStore,
  [LOGS_IP_ACTIONS]: LogsIpActionsStore,
  [RBAC_ACCOUNT_PERMISSIONS]: RbacAccountPermissionsStore,
  [RBAC_DEFAULT_PERMISSIONS]: RbacDefaultPermissionsStore,
  [RBAC_LINKED_PERMISSIONS]: RbacLinkedPermissionsStore,
  [RBAC_PERMISSIONS]: RbacPermissionsStore,
  [REALMCHARACTERS]: RealmcharactersStore,
  [REALMLIST]: RealmlistStore,
  [AUTH_UPDATES]: AuthUpdatesStore,
  [AUTH_UPDATES_INCLUDE]: AuthUpdatesIncludeStore,
  [UPTIME]: UptimeStore,
}

export function initAuthStores(data_source: DataSource): AuthStores {
  return {
    [ACCOUNT]: new AccountStore(data_source),
    [ACCOUNT_ACCESS]: new AccountAccessStore(data_source),
    [ACCOUNT_BANNED]: new AccountBannedStore(data_source),
    [ACCOUNT_MUTED]: new AccountMutedStore(data_source),
    [AUTOBROADCAST]: new AutobroadcastStore(data_source),
    [BATTLENET_ACCOUNT_BANS]: new BattlenetAccountBansStore(data_source),
    [BATTLENET_ACCOUNTS]: new BattlenetAccountsStore(data_source),
    [BATTLENET_COMPONENTS]: new BattlenetComponentsStore(data_source),
    [BATTLENET_MODULES]: new BattlenetModulesStore(data_source),
    [IP_BANNED]: new IpBannedStore(data_source),
    [LOGS]: new LogsStore(data_source),
    [LOGS_IP_ACTIONS]: new LogsIpActionsStore(data_source),
    [RBAC_ACCOUNT_PERMISSIONS]: new RbacAccountPermissionsStore(data_source),
    [RBAC_DEFAULT_PERMISSIONS]: new RbacDefaultPermissionsStore(data_source),
    [RBAC_LINKED_PERMISSIONS]: new RbacLinkedPermissionsStore(data_source),
    [RBAC_PERMISSIONS]: new RbacPermissionsStore(data_source),
    [REALMCHARACTERS]: new RealmcharactersStore(data_source),
    [REALMLIST]: new RealmlistStore(data_source),
    [AUTH_UPDATES]: new AuthUpdatesStore(data_source),
    [AUTH_UPDATES_INCLUDE]: new AuthUpdatesIncludeStore(data_source),
    [UPTIME]: new UptimeStore(data_source),
  }
}
