
// import typeof { Component } from 'react'

// declare module "react-native-navigation" {

//   declare module.exports: {

//     registerComponent(id: string); //, factory: () => Component);

//   }

// }

// react-native-navigation doesn't export the Navigator class, so
// here's a little interface for it

// export type Navigator = {

//   push(params: ?Object)

//   pop(params: ?Object)

//   popToRoot(params: ?Object)

//   resetTo(params: ?Object)

//   showModal(params: ?Object)

//   dismissModal(params: ?Object)

//   dismissAllModals(params: ?Object)

//   showLightBox(params: ?Object)

//   dismissLightBox(params: ?Object)

//   showInAppNotification(params: ?Object)

//   dismissInAppNotification(params: ?Object)

//   pop(params: ?Object)

//   pop(params: ?Object)

//   pop(params: ?Object)

//   pop(params: ?Object)

//   pop(params: ?Object)

//   pop(params: ?Object)

//   dismissModal(params = {}) {
//     return Navigation.dismissModal(params);
//   }

//   dismissAllModals(params = {}) {
//     return Navigation.dismissAllModals(params);
//   }

//   showLightBox(params = {}) {
//     return Navigation.showLightBox(params);
//   }

//   dismissLightBox(params = {}) {
//     return Navigation.dismissLightBox(params);
//   }

//   showInAppNotification(params = {}) {
//     return Navigation.showInAppNotification(params);
//   }

//   dismissInAppNotification(params = {}) {
//     return Navigation.dismissInAppNotification(params);
//   }

//   setButtons(params = {}) {
//     return platformSpecific.navigatorSetButtons(this, this.navigatorEventID, params);
//   }

//   setTitle(params = {}) {
//     return platformSpecific.navigatorSetTitle(this, params);
//   }

//   setSubTitle(params = {}) {
//     return platformSpecific.navigatorSetSubtitle(this, params);
//   }

//   setTitleImage(params = {}) {
//     return platformSpecific.navigatorSetTitleImage(this, params);
//   }

//   toggleDrawer(params = {}) {
//     return platformSpecific.navigatorToggleDrawer(this, params);
//   }

//   toggleTabs(params = {}) {
//     return platformSpecific.navigatorToggleTabs(this, params);
//   }

//   toggleNavBar(params = {}) {
//     return platformSpecific.navigatorToggleNavBar(this, params);
//   }

//   setTabBadge(params = {}) {
//     return platformSpecific.navigatorSetTabBadge(this, params);
//   }

//   switchToTab(params = {}) {
//     return platformSpecific.navigatorSwitchToTab(this, params);
//   }

//   showSnackbar(params = {}) {
//     return platformSpecific.showSnackbar(this, params);
//   }

//   showContextualMenu(params, onButtonPressed) {
//     return platformSpecific.showContextualMenu(this, params, onButtonPressed);
//   }

//   dismissContextualMenu() {
//     return platformSpecific.dismissContextualMenu();
//   }

//   setOnNavigatorEvent(callback) {
//     this.navigatorEventHandler = callback;
//     if (!this.navigatorEventSubscription) {
//       let Emitter = Platform.OS === 'android' ? DeviceEventEmitter : NativeAppEventEmitter;
//       this.navigatorEventSubscription = Emitter.addListener(this.navigatorEventID, (event) => this.onNavigatorEvent(event));
//       _allNavigatorEventHandlers[this.navigatorEventID] = (event) => this.onNavigatorEvent(event);
//     }
//   }

//   handleDeepLink(params = {}) {
//     if (!params.link) return;
//     const event = {
//       type: 'DeepLink',
//       link: params.link
//     };
//     for (let i in _allNavigatorEventHandlers) {
//       _allNavigatorEventHandlers[i](event);
//     }
//   }

//   onNavigatorEvent(event) {
//     if (this.navigatorEventHandler) {
//       this.navigatorEventHandler(event);
//     }
//   }

//   cleanup() {
//     if (this.navigatorEventSubscription) {
//       this.navigatorEventSubscription.remove();
//       delete _allNavigatorEventHandlers[this.navigatorEventID];
//     }
//   }
// }
