import Cookies from 'js-cookie'

// const TokenKey = 'Admin-Token'
const AccessTokenKey = 'access_token'
const AccessTokenExpiredTime = 'access_token_expired_time'
const Introduction = 'introduction'
const CustomBase64 = 'customBase64'
// const MenuAuthIdList = 'menuAuthIdList'
// const BtnAuthCodeList = 'btnAuthCodeList'
// const SubIdentities = 'subIdentities'
// const IdentityIndex = 'identityIndex'
export function getAccessToken () {
  return Cookies.get(AccessTokenKey)
}

export function setAccessToken (token) {
  return Cookies.set(AccessTokenKey, token)
}

export function getAccessTokenExpiredTime () {
  return Cookies.get(AccessTokenExpiredTime)
}

export function setAccessTokenExpiredTime (time) {
  return Cookies.set(AccessTokenExpiredTime, time)
}

export function getIntroduction () {
  return Cookies.get(Introduction)
}

export function getCustomBase64 () {
  return Cookies.get(CustomBase64)
}

export function removeAccessToken () {
  return Cookies.remove(AccessTokenKey)
}

export function removeAccessTokenExpiredTime () {
  return Cookies.remove(AccessTokenExpiredTime)
}
// export function getToken() {
//   return Cookies.get(TokenKey)
// }

// export function setToken(token) {
//   return Cookies.set(TokenKey, token)
// }

// export function removeToken() {
//   return Cookies.remove(TokenKey)
// }

// export function setIntroduction(introduction) {
//   return Cookies.set(Introduction, introduction)
// }

// export function setCustomBase64(customBase64) {
//   return Cookies.set(CustomBase64, customBase64)
// }

// export function setMenuAuthIdList(menuAuthIdList) {
//   return Cookies.set(MenuAuthIdList, menuAuthIdList)
// }

// export function getMenuAuthIdList() {
//   return Cookies.get(MenuAuthIdList)
// }

/* export function setBtnAuthIdList(btnAuthIdList) {
  return Cookies.set(BtnAuthIdList, btnAuthIdList)
}

export function getBtnAuthIdList() {
  return Cookies.get(BtnAuthIdList)
}

export function removeBtnAuthIdList() {
  return Cookies.remove(BtnAuthIdList)
}
*/

// export function setBtnCodeAuth(btnAuthCodeList) {
//   return Cookies.set(BtnAuthCodeList, btnAuthCodeList)
// }

// export function getBtnCodeAuth() {
//   return Cookies.get(BtnAuthCodeList)
// }

// export function removeBtnCodeAuth() {
//   return Cookies.remove(BtnAuthCodeList)
// }

// export function removeMenuAuthIdList() {
//   return Cookies.remove(MenuAuthIdList)
// }

// export function removeCustomBase64() {
//   return Cookies.remove(CustomBase64)
// }

// export function removeIntroduction() {
//   return Cookies.remove(Introduction)
// }

// export function setSubIdentities(subIdentities) {
//   return Cookies.set(SubIdentities, subIdentities)
// }

// export function getSubIdentities() {
//   return Cookies.get(SubIdentities)
// }

// export function removeSubIdentities() {
//   return Cookies.remove(SubIdentities)
// }

// export function removeIdentityIndex() {
//   return Cookies.remove(IdentityIndex)
// }
