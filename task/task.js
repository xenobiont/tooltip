const $ = window.$;

$('.tooltip').hover(
	function() {
		// const tooltipText = $(this).attr("data-tooltip");
		const tooltipText = $(this).data('tooltip');
		$(this).append(`<div class="tooltiptext">${tooltipText}</div>`);
	},
	function() {
		$(this)
			.find('.tooltiptext')
			.remove();
	},
);
