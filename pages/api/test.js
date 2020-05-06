

export default (request, response) => {
    console.log(request)
    return response.json({
        welcome: 'due',
        request: request.query
    });
}
