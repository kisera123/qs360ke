function requestLogger(request, _response, next) {
  const startedAt = Date.now();

  _response.on('finish', () => {
    const duration = Date.now() - startedAt;
    console.log(`${request.method} ${request.originalUrl} ${_response.statusCode} ${duration}ms`);
  });

  next();
}

module.exports = requestLogger;
