package plugin.cordova.showonblockscreen;

import android.view.WindowManager;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;

public class Insomnia extends CordovaPlugin {

  private static final String ENABLED = "enabled";
  private static final String DISABLED = "disabled";

  @Override
  public boolean execute(String action, JSONArray args, final CallbackContext callbackContext) throws JSONException {
    try {
      if (ENABLED.equals(action)) {
        cordova.getActivity().runOnUiThread(
            new Runnable() {
              public void run() {
                cordova.getActivity().getWindow().addFlags(WindowManager.LayoutParams.FLAG_SHOW_WHEN_LOCKED);
                cordova.getActivity().getWindow().addFlags(WindowManager.LayoutParams.FLAG_TURN_SCREEN_ON);
                callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.OK));
              }
            });
        return true;

      } else if (DISABLED.equals(action)) {
        cordova.getActivity().runOnUiThread(
            new Runnable() {
              public void run() {
                cordova.getActivity().getWindow().clearFlags(WindowManager.LayoutParams.FLAG_SHOW_WHEN_LOCKED);
                cordova.getActivity().getWindow().clearFlags(WindowManager.LayoutParams.FLAG_TURN_SCREEN_ON);
                callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.OK));
              }
            });
        return true;

      } else {
        callbackContext.error("show on block screen." + action + " is not a supported function. Did you mean '" + ENABLED + "'?");
        return false;
      }
    } catch (Exception e) {
      callbackContext.error(e.getMessage());
      return false;
    }
  }
}