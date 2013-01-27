$(document).ready(function(){

	$('.left-button').on('tap', function() {
		$('#new-rss').modal('show');
	});

	$('.go-rss').on('tap', function() {
		for (var i = 0, len = 4; i < len; i++) {
			if(localStorage.getItem(i)==null){
				localStorage.setItem(i,$('.save-me').val());
				localStorage.setItem(i+"_name",$('.save-name').val());
				console.log(localStorage.getItem(i))
				break;
			}

		}
		$('#new-rss').modal('hide');
	});

	$('.right-button').on('tap', function() {
		var text = "";
		$('#site-rss').modal('show');
		for (var i = 0, len = 4; i < len; i++) {
			if(localStorage.getItem(i)!=null){
				text = text + '<a class="read-me" href="#" data-id="'+i+'" >'+localStorage.getItem(i+'_name')+'</a><br>';
			}
		}
		$('#site-rss .modal-body').html(text)

		$('.read-me').on('tap',function() {
			$('.brand').html(localStorage.getItem($(this).data('id')+'_name'))
			$('.container .rss').html('');
			$('.container .rss').rssfeed(localStorage.getItem($(this).data('id')), {
				sort: 'date',
				sortasc: 'asc'
			});
			$('#site-rss').modal('hide');
		});
	});

	$('.clean-rss').on('tap', function() {
		localStorage.clear();
		$('#site-rss').modal('hide');
	});

});