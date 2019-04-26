'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true,
});
var onCreateWebpackConfig = function onCreateWebpackConfig(_ref, _ref2) {
    var plugins = _ref.plugins,
        actions = _ref.actions;
    var endpoint = _ref2.endpoint;

    var isString = typeof endpoint === 'string';
    if (!isString) {
        throw 'Mailchimp endpoint required and must be of type string. See repo README for more info.';
    } else if (endpoint.length < 40) {
        throw 'gatsby-plugin-mailchimp: donʼt forget to add your MC endpoint to your gatsby-config file. See README for more info.';
    }

    actions.setWebpackConfig({
        plugins: [
            plugins.define({
                __GATSBY_PLUGIN_MAILCHIMP_ADDRESS__: JSON.stringify(endpoint),
            }),
        ],
    });
};

exports.default = onCreateWebpackConfig;
