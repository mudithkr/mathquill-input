"use strict";

/**
 * An autogenerated component that renders the EQUAL iconograpy in SVG.
 *
 * Generated with: https://gist.github.com/crm416/3c7abc88e520eaed72347af240b32590.
 */
var React = require('react');

var Equal = React.createClass({
    displayName: "Equal",

    propTypes: {
        color: React.PropTypes.string.isRequired
    },

    render: function render() {
        return React.createElement(
            "svg",
            { width: "48", height: "48", viewBox: "0 0 48 48" },
            React.createElement(
                "g",
                { fill: "none", fillRule: "evenodd" },
                React.createElement("path", { fill: "none", d: "M0 0h48v48H0z" }),
                React.createElement("path", { fill: "none", d: "M12 12h24v24H12z" }),
                React.createElement("path", { d: "M16 21h17M16 27h17", stroke: this.props.color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })
            )
        );
    }
});

module.exports = Equal;