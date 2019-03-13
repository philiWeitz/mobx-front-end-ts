
module.exports = {
  'Title is Google': function(browser) {
    browser
      .url('https://www.google.com')
      .waitForElementVisible('body', 1000)
      .verify.title('Google')
      .end()
  }
};
