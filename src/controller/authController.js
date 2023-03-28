function showLoginPage(request, response) {
    response.render("login-page");
  }

  function login(request, response) {
    if (request.body.username == "admin" && request.body.password == "123") {

      request.session.username = request.body.username;

      response.redirect("/admin");

    } else if (request.body.username == "Bob" && request.body.password == "123") {

      request.session.username = request.body.username;

      response.redirect("/hamsterwars");
    }
  
    
  }
  
  function logout(request, response) {
    request.session.username = undefined;
  
    response.redirect("/login");
  }

  function showAdminPage(request, response) {

      response.render("admin-page");

    
  }
  
  export default { showLoginPage, login, logout, showAdminPage }