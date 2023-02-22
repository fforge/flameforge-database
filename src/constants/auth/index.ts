export const ACCOUNT = 'account'
export const ACCOUNT_ACCESS = 'account_access'
export const ACCOUNT_BANNED = 'account_banned'
export const ACCOUNT_MUTED = 'account_muted'
export const AUTOBROADCAST = 'autobroadcast'
export const BATTLENET_ACCOUNT_BANS = 'battlenet_account_bans'
export const BATTLENET_ACCOUNTS = 'battlenet_accounts'
export const BATTLENET_COMPONENTS = 'battlenet_components'
export const BATTLENET_MODULES = 'battlenet_modules'
export const IP_BANNED = 'ip_banned'
export const LOGS = 'logs'
export const LOGS_IP_ACTIONS = 'logs_ip_actions'
export const RBAC_ACCOUNT_PERMISSIONS = 'rbac_account_permissions'
export const RBAC_DEFAULT_PERMISSIONS = 'rbac_default_permissions'
export const RBAC_LINKED_PERMISSIONS = 'rbac_linked_permissions'
export const RBAC_PERMISSIONS = 'rbac_permissions'
export const REALMCHARACTERS = 'realmcharacters'
export const REALMLIST = 'realmlist'
export const AUTH_UPDATES = 'updates'
export const AUTH_UPDATES_INCLUDE = 'updates_include'
export const UPTIME = 'uptime'

export const STORE_AUTH_MODELS = [
  ACCOUNT,
  ACCOUNT_ACCESS,
  ACCOUNT_BANNED,
  ACCOUNT_MUTED,
  AUTOBROADCAST,
  BATTLENET_ACCOUNT_BANS,
  BATTLENET_ACCOUNTS,
  BATTLENET_COMPONENTS,
  BATTLENET_MODULES,
  IP_BANNED,
  LOGS,
  LOGS_IP_ACTIONS,
  RBAC_ACCOUNT_PERMISSIONS,
  RBAC_DEFAULT_PERMISSIONS,
  RBAC_LINKED_PERMISSIONS,
  RBAC_PERMISSIONS,
  REALMCHARACTERS,
  REALMLIST,
  AUTH_UPDATES,
  AUTH_UPDATES_INCLUDE,
  UPTIME,
] as const

export const STORE_AUTH = 'auth'