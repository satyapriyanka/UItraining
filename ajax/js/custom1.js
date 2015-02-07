//another way of coding forcustom.js  search details from accountnumber 

$(document).ready(function(){
	$('.contacts').hide();
	
	$('.search').click(function(event){
		event.preventDefault();
		$('.contacts').show();
		$('.contacts tbody').empty();
		$.ajax({
			url : 'data/data.json',
			success : function(contacts) {
				
				$.each(contacts, function(key, value) {
					if ($('#Account-No').val() == value.Account) {
						tr = "<tr><td>" + (key + 1) + "</td><td>" + value.FirstName + "</td><td>" + value.LastName + "</td><td>" + value.StreetAddress + "</td><td>" + value.City + "</td><td>" + value.State + "</td><td>" + value.AccountNo + "</td></tr>";
						$('.contacts tbody').append(tr);
					}
				});
				
			},
			error : function() {
				alert("error");
			}
		});
				
	});
	
});
