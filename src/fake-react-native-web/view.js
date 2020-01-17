const React = require('react');
const {StyleSheet, css} = require('aphrodite');

const View = React.createClass({
    propTypes: {
        ariaLabel: React.PropTypes.string,
        children: React.PropTypes.oneOfType([
            React.PropTypes.arrayOf(React.PropTypes.node),
            React.PropTypes.node,
        ]),
        // The `dynamicStyle` prop is provided for animating dynamic
        // properties, as creating Aphrodite StyleSheets in animation loops is
        // expensive. `dynamicStyle` should be a raw style object, rather than
        // a StyleSheet.
        dynamicStyle: React.PropTypes.any,
      //add
      // The `extraClassName` prop should almost never be used. It gives the
      // client a way to provide an additional CSS class name, to augment
      // the class name generated by Aphrodite. (Right now, it's only used to
      // disable some externally-applied CSS that would otherwise be far too
      // difficult to override with inline styles.)
        extraClassName: React.PropTypes.string,
      //
        numberOfLines: React.PropTypes.number,
        onClick: React.PropTypes.func,
        onTouchCancel: React.PropTypes.func,
        onTouchEnd: React.PropTypes.func,
        onTouchMove: React.PropTypes.func,
        onTouchStart: React.PropTypes.func,
        role: React.PropTypes.string,
        style: React.PropTypes.any,
    },

    statics: {
        styles: StyleSheet.create({
            // From: https://github.com/necolas/react-native-web/blob/master/src/components/View/index.js
            initial: {
                alignItems: 'stretch',
                borderWidth: 0,
                borderStyle: 'solid',
                boxSizing: 'border-box',
                display: 'flex',
                flexBasis: 'auto',
                flexDirection: 'column',
                margin: 0,
                padding: 0,
                position: 'relative',
                // button and anchor reset
                backgroundColor: 'transparent',
                color: 'inherit',
                font: 'inherit',
                textAlign: 'inherit',
                textDecorationLine: 'none',
                // list reset
                listStyle: 'none',
                // fix flexbox bugs
                maxWidth: '100%',
                minHeight: 108,
                minWidth: 0,
            },
        }),
    },

    render() {
        const className = css(
            View.styles.initial,
            ...(Array.isArray(this.props.style) ? this.props.style
                                                : [this.props.style])
        // );
        //add
        ) + (this.props.extraClassName ? ` ${this.props.extraClassName}` : "");

      //
        return <div
            className={className}
            style={this.props.dynamicStyle}
            onClick={this.props.onClick}
            onTouchCancel={this.props.onTouchCancel}
            onTouchEnd={this.props.onTouchEnd}
            onTouchMove={this.props.onTouchMove}
            onTouchStart={this.props.onTouchStart}
          //add
          //   onMouseDown={(e) => {
          //     // Touch events have extra properties compared to mouse
          //     // events and also have a concept of "pointer lock",
          //     // where the element that receives the touchstart event
          //     // receives all subsequent events for that same touch,
          //     // whereas mouse events change target if the cursor
          //     // moves. We take mouse events and pretend they're touch
          //     // events.
          //     const augmentMouseEvent = (e) => {
          //       e.touches = e.changedTouches = [{
          //         identifier: 1,
          //         clientX: e.clientX,
          //         clientY: e.clientY,
          //       }];
          //       e.isMouseEvent = true;
          //     };
          //
          //     const doc = this._div.ownerDocument;
          //     const onMove = (e) => {
          //       augmentMouseEvent(e);
          //       this.props.onTouchMove && this.props.onTouchMove(e);
          //     };
          //     const onUp = (e) => {
          //       doc.removeEventListener('mousemove', onMove);
          //       doc.removeEventListener('mouseup', onUp);
          //       augmentMouseEvent(e);
          //       this.props.onTouchEnd && this.props.onTouchEnd(e);
          //     };
          //     doc.addEventListener('mousemove', onMove, false);
          //     doc.addEventListener('mouseup', onUp, false);
          //
          //     // Need to .persist() a React event object before adding
          //     // properties to it since it's reused otherwise.
          //     e.persist();
          //     augmentMouseEvent(e);
          //     this.props.onTouchStart && this.props.onTouchStart(e);
          //   }}
          //   ref={(node) => this._div = node}
          //
            aria-label={this.props.ariaLabel}
            role={this.props.role}
        >
            {this.props.children}
        </div>;
    },
});

module.exports = View;
