interface MenuItem {
  type?: string
  hasRole?: string
  blockedRole?: string
}

export interface Link extends MenuItem {
  label: string
  url: string
  i18n?: string
  activeApp?: string
  activeAppUrl?: string
}

export interface Dropdown extends MenuItem {
  label: string
  i18n?: string
  items?: Array<Link>
}

export interface Separator extends MenuItem {}

export interface Config {
  legacyHeader?: boolean
  legacyUrl?: string
  logoUrl?: string
  logoTitle?: string
  hideLogin?: boolean
  style?: string
  stylesheet?: string
  lang?: string
  adminRoles: string[]
}
