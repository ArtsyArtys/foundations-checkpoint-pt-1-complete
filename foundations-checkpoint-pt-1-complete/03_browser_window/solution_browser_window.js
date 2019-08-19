function BrowserWindow(accountName, windowName, tabs = [{tabURL: 'defaultHomePage.com'}])
{
  this.accountName = accountName;
  this.windowName = windowName;
  this.tabs = tabs;
}

BrowserWindow.prototype.newTab = function(tab) { this.tabs.push({tabURL: tab}); };
BrowserWindow.prototype.closeTab = function(tab)
{
  this.tabs.splice(tab, 1);
  if (this.tabs.length === 0) { this.tabs[0] = {tabURL: 'defaultHomePage.com'}; }
};
BrowserWindow.prototype.joinWindows = function(obj)
{
  for (let i in obj.tabs)
  {
    if (this.tabs.indexOf(obj.tabs[i]) === -1) { this.tabs.push(obj.tabs[i]); }
  }
};
