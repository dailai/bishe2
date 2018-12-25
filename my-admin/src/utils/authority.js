// use localStorage to store the authority info, which might be sent from server in actual project.
export function getAuthority(str) {
  // return localStorage.getItem('antd-pro-authority') || ['admin', 'user'];
  const authorityString =
    typeof str === 'undefined' ? localStorage.getItem('role-authority') : str;
  // authorityString could be admin, "admin", ["admin"]
  let authority;
  try {
    authority = JSON.parse(authorityString);
  } catch (e) {
    authority = authorityString;
  }
  if (typeof authority === 'string') {
    return [authority];
  }
  return authority || ['guest'];
  // const authorityString = localStorage.getItem('role-authority') ? 
  //                 localStorage.getItem('role-authority') : ['guest'];
  // console.log(authorityString)
  // return authorityString;
}

export function setAuthority(authority) {
  console.log("authority.js setAuthority()-------"+authority)
  const proAuthority = typeof authority === 'string' ? [authority] : authority;
  return localStorage.setItem('role-authority', JSON.stringify(proAuthority));
}
