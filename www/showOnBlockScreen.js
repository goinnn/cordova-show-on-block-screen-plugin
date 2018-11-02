function showOnBlockScreen () {
    this.blockScreenFlag = false;
};

/*
* Acquire a screenlock (prevent the device from screen idle)
*/
showOnBlockScreen.prototype.enable = function () {
    if (this.blockScreenFlag == false) {
        this.blockScreenFlag = true;
        cordova.exec(null, null, 'showOnBlockScreen', 'enable', []);
    }
};

/*
* Release the screenlock (enable the device screen to idle)
*/
showOnBlockScreen.prototype.disable = function () {
    if (this.blockScreenFlag == true) {
        this.blockScreenFlag = false;
        cordova.exec(null, null, 'showOnBlockScreen', 'disable', []);
    }
}

showOnBlockScreen.install = function () {
  if (!window.plugins) {
    window.plugins = {};
  }

  window.plugins.showOnBlockScreen = new showOnBlockScreen();
  return window.plugins.showOnBlockScreen;
};

cordova.addConstructor(showOnBlockScreen.install);


//module.exports = new keepScreenOn();