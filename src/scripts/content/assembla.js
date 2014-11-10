/*jslint indent: 2 */
/*global $: false, document: false, togglbutton: false*/
'use strict';

togglbutton.render('#header .top-space',
  {observe: false}, function (elem) {

    var link, description, title, number, innerText;

    // Safely extract innerText or return a '' when not available
    innerText = function assembla_innerText(selector) {
      var str = $(selector);
      return str && str.innerText ? str.innerText : '';
    };

    description = innerText('.ticket-body > .top-ticket_details > .ticket-summary h1');
    title = innerText('#logo h1');
    number = innerText('.ticket-number');

    link = togglbutton.createTimerLink({
      className: 'assembla',
      description: number + ' ' + description,
      projectName: title
    });

    elem.insertAdjacentElement('afterBegin', link);
  });
