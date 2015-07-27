import Ember from 'ember';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';

/*export default {
  name: 'login',
  before:      'django-rest-auth',
  initialize: function(container, application){
    window.ENV = application.ENV;
  }
};*/


export default Ember.Controller.extend(LoginControllerMixin, {
  authenticator: 'authenticator:django-rest'
    //authenticator: 'simple-auth-authenticator:oauth2-password-grant'
});
