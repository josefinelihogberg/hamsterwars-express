function authenticate(request, response, next) {
    if(request.session.username == undefined) {
        response.redirect("/login");
    } else {
        next();
    }
}

export default { authenticate }