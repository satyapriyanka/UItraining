$(document).ready(function() {
	$('.show-all').click(function(event) {
		event.preventDefault();
		$.ajax({
			url : 'data/data.json',
			success : function(result) {
				$.each(result, function(key, value) {
					var tr = "<tr><td>" + (key + 1) + "</td><td>" + value.FirstName + "</td><td>" + value.LastName + "</td><td>" + value.StreetAddress + "</td><td>" + value.State + "</td><td>" + value.City + "</td><td>"+value.Account+"</td></tr>";
					$('.contacts tbody').append(tr);
				});
			},
			error : function() {
				alert("error");
			}
		});
	});

//});


	$('.search').click(function(event) {
		event.preventDefault();
		var s = $('#Account-No').val();
		$.ajax({
			url : 'data/data.json',
			success : function(result) {
				var tr = "";
				$.each(result.data, function(key, value) {
					if (s == value.Account) {
						tr = "<tr><td>" + (key + 1) + "</td><td>" + value.FirstName + "</td><td>" + value.LastName + "</td><td>" + value.StreetAddress + "</td><td>" + value.City + "</td><td>" + value.State + "</td><td>" + value.AccountNo + "</td></tr>";
						return false;
					} else {
						tr = "<tr><td>invalid</td></tr>";
					}
				});
				$('.contacts tbody').append(tr);
			},
			error : function() {
				alert("error");
			}
		});

	});

});

