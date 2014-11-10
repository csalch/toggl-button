/*jslint indent: 2 */
/*global $: false, document: false, togglbutton: false*/
'use strict';

togglbutton.render('#tickets-show .sidebar > div > div.ticket-info',
  {observe: false}, function (elem) {

    var link, container,
      description, title, number;

    description = $('.ticket-body > .top-ticket_details > .ticket-summary h1').innerText;
    title = $('#logo h1').innerText;
    number = $('.ticket-number').innerText;

    link = togglbutton.createTimerLink({
      className: 'assembla',
      description: number + ' ' + description,
      projectName: title
    });

    container = document.createElement('div');
    container.setAttribute('style', 'float:left;');
    container.appendChild(link);

    elem.insertAdjacentElement('beforeBegin', container);
  });
