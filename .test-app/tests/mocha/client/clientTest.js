if (!(typeof MochaWeb === 'undefined')){
  MochaWeb.testOnly(function(){

    describe("logged out", function() {
      before(function(done) {
        Meteor.logout(done);
      });
      it("should show the logged out message", function() {
        chai.assert.equal($('.logged-out-message').size(), 1);
      });
      it("should not show the logged in message", function() {
        chai.assert.equal($('.logged-in-message').size(), 0);
      });
      it("should have null userId", function() {
        chai.assert.isNull(Meteor.userId());
      });
    });

    describe("logged in", function() {
      before(function(done) {
        $('#login-buttons-linkedin').click();
        Meteor.setTimeout(done, 1000); // is there a better way to do this?
      });
      it("should have a userId", function() {
        chai.assert.isNotNull(Meteor.userId());
      });
      it("should show the logged in message", function() {
        chai.assert.equal($('.logged-in-message').size(), 1);
      });
      it("should not show the logged out message", function() {
        chai.assert.equal($('.logged-out-message').size(), 0);
      });
      it("should display the user name", function() {
        chai.assert.equal($('.current-user-name').html(), 'Frodo Baggins');
      });
    });

  });
}
