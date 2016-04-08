import {Page, NavController} from 'ionic-angular';
import {ActionData} from '../../providers/action-data/action-data';

/*
  Generated class for the ActionListPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/action-list/action-list.html',
})
export class ActionListPage {
  // , public actionData: ActionData
  actions: any = null;

  constructor(public nav: NavController, public actionData: ActionData) {
    this.nav = nav;
    this.actionData.load().then(actions => {
      this.actions = actions;
    });
  }

  sendAction(action) {
    this.actionData.sendAction(action.id).then(result => {
      console.log(result)
    });
  }
}
