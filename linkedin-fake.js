HttpInterceptor = Package['xolvio:http-interceptor'].HttpInterceptor;
HttpInterceptor.registerInterceptor('https://www.linkedin.com', Meteor.absoluteUrl('fake.www.linkedin.com'));
HttpInterceptor.registerInterceptor('https://api.linkedin.com', Meteor.absoluteUrl('fake.api.linkedin.com'));

Router.route('fake.www.linkedin.com/uas/oauth2/authorization', function () {
  var parameters = _fixIronRouterBug(this.request.query);
  this.response.writeHead(301, {'Location': parameters.redirect_uri + '?code=a1b2c3d4e5f6g7h8i9j0' + '&state=' + parameters.state});
  this.response.end();
}, {where: 'server'});

Router.route('fake.api.linkedin.com/uas/oauth2/accessToken', function () {
  var cannedResponse = {
    'access_token': 'a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0',
    'expires_in': '5184000'
  };
  this.response.writeHead(200, {
    'Content-Type': 'application/json; charset=utf-8'
  });
  this.response.end(JSON.stringify(cannedResponse));
}, {where: 'server'});

Router.route('fake.www.linkedin.com/v1/people/~', function () {
  var cannedResponse = {
    "firstName": "Frodo",
    "headline": "Jewelery Repossession in Middle Earth",
    "id": "1R2RtA",
    "lastName": "Baggins",
    "emailAddress": "frodob@ggins.com",
    "siteStandardProfileRequest": {
      "url": "https://www.linkedin.com/profile/view?id=1R2RtA"
    }
  }
  this.response.writeHead(200, {
    'Content-Type': 'application/json; charset=utf-8'
  });
  this.response.end(JSON.stringify(cannedResponse));
}, {where: 'server'});


_fixIronRouterBug = function (query) {
  if (query.redirect_uri.indexOf('http:/') !== -1 && query.redirect_uri.indexOf('http://') === -1) {
    query.redirect_uri = query.redirect_uri.replace('http:/', 'http://')
  }
  return query;
};
