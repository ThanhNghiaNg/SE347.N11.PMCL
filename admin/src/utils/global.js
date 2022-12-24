export const hostURL = "http://localhost:5000";
export const doesHttpOnlyCookieExist = (cookiename) => {
  var d = new Date();
  d.setTime(d.getTime() + 1000);
  var expires = "expires=" + d.toUTCString();

  document.cookie = cookiename + "=new_value;path=/;" + expires;
  return document.cookie.indexOf(cookiename + "=") === -1;
};
