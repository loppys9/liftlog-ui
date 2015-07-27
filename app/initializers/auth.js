export function initialize(/* container, application */) {
  // application.inject('route', 'foo', 'service:foo');
}

export default {
  name: 'auth',
  before:      'django-rest-auth',
  initialize: function(container, application){
    /*console.log("what's happening");
    for (var prop in window) {
        if (String(prop).search('Simple') >= 0) {
            console.log(prop);
        }
        for (var p2 in prop) {
            //if (String(p2) === 'simple-auth') {
        if (String(p2).search('Simple') >= 0) {
                console.log('  ' + p2);
            }
      
            for (var p3 in p2) {
                //if (String(p2) === 'simple-auth') {
            if (String(p3).search('Simple') >= 0) {
                    console.log('  ' + p3);
                }
          
            }
        }
}*/

    window.ENV = application.ENV;
  /*window.LiftlogUiENV = {{ENV}};
  window.ENV = window.LiftlogUiENV;
  window.EmberENV = window.LiftlogUiENV.EmberENV;*/
  }
};
