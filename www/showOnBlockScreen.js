function blockScreen () {
    this.blockScreenFlag = false;
};

/*
* Acquire a screenlock (prevent the device from screen idle)
*/
blockScreen.prototype.enable = function () {
    if (this.blockScreenFlag == false) {
        this.blockScreenFlag = true;
        cordova.exec(null, null, 'blockScreen', 'enable', []);
    }
};

/*
* Release the screenlock (enable the device screen to idle)
*/
blockScreen.prototype.disable = function () {
    if (this.blockScreenFlag == true) {
        this.blockScreenFlag = false;
        cordova.exec(null, null, 'blockScreen', 'disable', []);
    }
}

blockScreen.install = function () {
  if (!window.plugins) {
    window.plugins = {};
  }

  window.plugins.blockScreen = new blockScreen();
  return window.plugins.blockScreen;
};

cordova.addConstructor(blockScreen.install);


//module.exports = new keepScreenOn();