/**
 *
 * Set the amount of time the driver should wait when searching for elements. When searching for a single element,
 * the driver should poll the page until an element is found or the timeout expires, whichever occurs first. When
 * searching for multiple elements, the driver should poll the page until at least one element is found or the
 * timeout expires, at which point it should return an empty list.
 *
 * If this command is never sent, the driver should default to an implicit wait of 0ms.
 *
 * @param {Number} ms   The amount of time to wait, in milliseconds. This value has a lower bound of 0.
 *
 * @see https://code.google.com/p/selenium/wiki/JsonWireProtocol#/session/:sessionId/timeouts/implicit_wait
 * @type protocol
 *
 */

var ErrorHandler = require('../utils/ErrorHandler.js');

module.exports = function timeoutsImplicitWait (ms) {

    /*!
     * parameter check
     */
    if(typeof ms !== 'number') {
        throw new ErrorHandler.ProtocolError('number or type of arguments don\'t agree with timeoutsImplicitWait protocol command');
    }

    return this.requestHandler.create(
        '/session/:sessionId/timeouts/implicit_wait',
        { ms: ms }
    );
};

