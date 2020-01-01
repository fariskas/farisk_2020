
	var style = document.createElement('style');
	style.type = 'text/css';

	var style_to_add = "";
		for (var ii = 0; ii < data_cat.length; ii++) {
			style_to_add += '.has-cat_'+data_cat[ii].code.toLowerCase()+' .cat_'+data_cat[ii].code.toLowerCase()+' { visibility: visible; }';
			style_to_add += '.filtered.filtered_'+data_cat[ii].code.toLowerCase()+' .cat_'+data_cat[ii].code.toLowerCase()+' { opacity:1; }';
			style_to_add += '.filtered.filtered_'+data_cat[ii].code.toLowerCase()+' .filter_'+data_cat[ii].code.toLowerCase()+' { opacity:1; }';

			$('.filter ul').append('\
				<li class="filter_'+data_cat[ii].code.toLowerCase()+'" data-type="'+data_cat[ii].code+'"><span class="code">'+data_cat[ii].code+'</span><span class="cat">'+data_cat[ii].title+'</span></li>\
			')
		}
		style.innerHTML = style_to_add;

	document.getElementsByTagName('head')[0].appendChild(style);





	for (var i = 0; i < data_work.length; i++) {
		$('.section-right').append('\
			<div class="grid grid-'+i+'">\
			</div>\
		')	

		if (data_work[i].title) {
			$('.grid-'+i).append('\
				<span class="plus">\
					<img src="assets/icn/plus.svg">\
				</span>\
				<span class="work-title">'+data_work[i].title+'</span>\
				<ul class="work-graph">\
				</ul>\
			');

			for (var z = 0; z < data_work[i].cat.length; z++) {
				$('.grid-'+i+' .work-graph').addClass('has-cat_'+data_work[i].cat[z])
			}

			for (var y = 0; y < data_cat.length; y++) {
				$('.grid-'+i+' .work-graph').append('\
					<li class="cat_dot cat_'+data_cat[y].code.toLowerCase()+'">\
						<div class="inner">\
							<span class="dot"></span><span class="cat_title">'+data_cat[y].code+'</span>\
						</div>\
					</li>\
				')
			}
		} else {
			$('.grid-'+i).addClass('empty-grid')
		}
	}



	$('.filter li').click(function() {
		var to_filter = $(this).attr('data-type').toLowerCase();
		
		if ( !$('body').hasClass('filtered_'+to_filter) ) {
			$('body').addClass('filtered filtered_'+to_filter)	
		} else {
			$('body').removeClass('filtered_'+to_filter)	
		}

		if ($('body').attr('class').indexOf("filtered_") == -1) {
			$('body').removeClass('filtered')
			$('.reset-filter, .filter-divider').removeClass('show')
		} else {
			$('.reset-filter, .filter-divider').addClass('show')
		}
		
	})


	$('.reset-filter').click(function() {
		$('body').attr('class', "")
		$('.reset-filter, .filter-divider').removeClass('show')
	})


	$('.about-a').click(function() {
		if ( !$('body').hasClass('show-about') ) {
			$('.about-a').html('BACK TO FILTERS');
		} else {
			$('.about-a').html('ABOUT');
		}
		$('body').toggleClass('show-about')	
	})
