//* FUNCTIONS *//* 
function getPageUrl() {
  var url = document.location['href'].split('/') [3];
  return url;
}
function getPageName() {
  var url = getPageUrl();
  var page = url.split('?') [0];
  return page;
}
function getPageParams() {
  var url = getPageUrl();
  var options = [];
  if (url.split('?') [1] != undefined) {
    var params = url.split('?') [1].split('&');
    for each(var param in params) {
      var args = param.split('=');
      options[args[0]] = args[1];
    }
    return options;
  }
  return false;
}
function isPage(name) {
  if (getPageName() === name) {
    return true;
  }
  return false;
}
function isParam(name, value) {
  var params = getPageParams();
  if (params) {
    if (params[name] === value) {
      return true;
    }
  }
  return false;
}
function setSetting(setting, value) {
  var settings = {};
  if (window.localStorage.getItem('HET_settings') === null) {
    settings[setting] = value;
  } else {
    settings = JSON.parse(window.localStorage.getItem('HET_settings'));
    settings[setting] = value;
  }
  window.localStorage.setItem('HET_settings', JSON.stringify(settings));
}
function getSetting(setting) {
  var settings = JSON.parse(window.localStorage.getItem('HET_settings'));
  return settings[setting];
}
function isSetting(setting, value) {
  if (getSetting(setting) === value) {
    return true;
  }
  return false;
}
function getAlertMessage() {
  if ($('.alert').length) {
    return $('.alert').text(); 
  } else {
    return '';
  }
}
function isAlertMessage(msg) {
  if (getAlertMessage().indexOf(msg) > -1) {
    return true;
  } else {
    return false;
  }
}
function clickButton(index = 0) {
  if ($('#content .btn').length) {
   $('#content .btn')[index].click();
  }
}
function getLogbox() {
  return document.getElementsByName('log') [0];
}
function setLogboxValue(newValue) {
  var logbox = getLogbox();
  if (logbox.value != undefined && logbox.value != '') {
    logbox.value = newValue;
    clickButton(1);
  }
}
function logboxExists() {
  if (document.getElementsByName('log').length) {
    return true;
  }
  return false;
}