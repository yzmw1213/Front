import { TRstatus } from "~/service/TagService"

const Rstatus: TRstatus = {
  1: "公開",
  2: "非公開"
}

const UserKind: { [kind: number]: string } = {
  1: "個人",
}

const UserAuthority: { [key: string]: number } = {
  // 個人ユーザー
  AUTHORITY_NORMAL_USER: 1,
  // 企業ユーザー
  AUTHORITY_COMPANY_USER: 2,
  // 管理者ユーザー
  AUTHORITY_SUPER_USER: 9,
}

export { Rstatus, UserKind, UserAuthority }
