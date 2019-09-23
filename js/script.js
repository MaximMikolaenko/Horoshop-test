$(function(){
	$(".migration-form").submit(function (e) {
		e.preventDefault();
		var site = $.trim($(this).find('.migration-form__input-site').val());
		var email = $.trim($(this).find('.migration-form__input-email').val());
		var pattern_email = '/^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,4}$/i';
		var pattern_site = '/^(w{3}\.)?[a-z0-9_-]+\.[a-z]{2,4}$/i';
		if(site != 'undefined' && email != 'undefined' && site != '' && email != '' && email.search(pattern_email) != 0 && site.search(pattern_site) != 0){
			$.ajax({
	            url: "ajax.php",
	            type: "POST",
	            data: {
			        site : site,
			        email : email
			    },
	            success: function (data) {
	            	alert('Success');
	            },
	            error: function (jqXHR) {
	                alert('Error');
	            }
	        });
		} else {
			alert('Поля не должны быть пустыми');
		}
		$('.migration-form__input-site').val('');
		$('.migration-form__input-email').val('');
        return false;
	});
});