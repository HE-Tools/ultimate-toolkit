//* DEBUGGING FUNCTIONS *//*
var HET = HET || {};

HET.debug = {};

HET.debug.log = function (mixed) {
	var log = $('#het-debug').find('textarea');
	log.val(log.val() + String(mixed) + '\n');
}

HET.debug.toggleDebugBox = function() {
	var newValue = (window.localStorage.getItem('HET_DEBUG_BOX') === 1) ? 0 : 1;
	window.localStorage.setItem('HET_DEBUG_BOX', newValue);
	$('#het-debug').toggle();
}

HET.debug.renderBox = function(type=0) {
	var style = (window.localStorage.getItem('HET_DEBUG_BOX') === 1) ? '' : 'display: none;';
	$('#content > .container-fluid').prepend('<div id="het-debug" width="100%" style="'+style+'"></div>');
    $('#het-debug').wrapInner(function () {
        var box = $('<textarea/>');
        box.attr('class', 'logarea');
        box.attr('rows', '15');
        box.attr('spellcheck', 'false');
        box.css('width', '95%');
        box.css('margin', '2.5%');
        return box;
    });
	$('#content > .container-fluid').prepend('<a href="javascript:void(0)" class="het-toggle-debug">Toggle debug box</a>');
	$('.het-toggle-debug').click(HET.debug.toggleDebugBox);
}