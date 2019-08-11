const helper = function () {

  const handler = function (response, context) {

    if (response.status >= 400) {
      throw new Error(`Something went wrong. Error: ${response.statusText}`);
      //TODO context.redirect('./views/error/error.hbs')
    }

    if (response.status !== 204) {
      response = response.json();
    }

    return response;
  };

  const passwordCheck = function (params) {
    return params.password === params.repeatPassword;
  };

  const addHeaderInfo = function (context) {
    const loggedIn = sessionStorage.getItem('authtoken') !== null;

    if (loggedIn) {
      context.loggedIn = loggedIn;
      context.username = sessionStorage.getItem('username');
    }
  };

  const loadPartials = function (context, externalPartials) {
    let defaultPartials = {
      header: "./views/common/header.hbs",
      footer: "./views/common/footer.hbs"
    };

    if (externalPartials) {
      for (const key in externalPartials) {
        const element = externalPartials[key];

        defaultPartials[key] = element;
      }
    }

    return context.loadPartials(defaultPartials);
  };

  return {
    handler,
    passwordCheck,
    addHeaderInfo,
    loadPartials
  }
}();