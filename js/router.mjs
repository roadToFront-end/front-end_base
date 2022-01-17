function route(pathname) {
    console.log('About to route a request for ' + pathname);
}

const _route = route;
export { _route as route };