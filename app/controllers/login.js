import Ember from 'ember';
//import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';
//import Session from 'simple-auth/session';

/*export default {
  name: 'login',
  before:      'django-rest-auth',
  initialize: function(container, application){
    window.ENV = application.ENV;
  }
};*/


/*export default Ember.Controller.extend(LoginControllerMixin, {
    csrf_token: 'a',
  authenticator: 'authenticator:django-rest',
    //authenticator: 'simple-auth-authenticator:oauth2-password-grant'
});*/

export default Ember.Controller.extend({
  actions: {
    authenticate() {
      var data = this.getProperties('identification', 'password');
      return this.get('session').authenticate('simple-auth-authenticator:django-rest', data);
    }
  }
});
