'use stict';

function Route(name, htmlName, defaultRoute,controller) {
    try {
        if(!name || !htmlName) {
            throw 'error: name and htmlName params are mandatories';
        }
        this.constructor(name, htmlName, defaultRoute,controller);
    } catch (e) {
        console.error(e);
    }
}

Route.prototype = {
    name: undefined,
    htmlName: undefined,
    default: undefined,
    controller:undefined,
    constructor: function (name, htmlName, defaultRoute,controller) {
        this.name = name;
        this.htmlName = htmlName;
        this.default = defaultRoute;
        this.controller=controller
    },
    isActiveRoute: function (hashedPath) {
        return hashedPath.replace('#', '') === this.name; 
    }
}