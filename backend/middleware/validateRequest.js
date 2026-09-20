function validateJsonBody(request, response, next) {
  if (!request.is('application/json')) {
    return response.status(415).json({ error: 'Request body must use application/json.' });
  }

  return next();
}

module.exports = { validateJsonBody };
