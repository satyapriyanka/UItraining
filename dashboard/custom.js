/*
 $().ready(function(){
 $('#signinform').validator({
 rules : {
 password : {
 requried : true,
 },
 email : {
 required : true,
 email : true
 },
 agree:"required"
 },
 messages:{
 password:{
 requried:"please provide a password"
 }
 }

 });
 });*/

$(document).ready(function() {
	$('.submit').click(function(event) {
		event.preventDefault();
		var s = $('#email').val();
		var k = $('#password').val();

		$.ajax({
			url : 'users.json',
			success : function(result) {
				
				var x="";
				var y="";
				$.each(result, function(key, value) {
					// if(selected == "Account"){
					if (s == value.email && k == value.password) {
						 x="successful";
						console.log(tr);
						//return false;
					} else{
						 y= "invalid feilds";
						console.log(y);
						
					}
					//}
				});
				//$('.body').append(tr);
			},
			error : function() {
				alert("error");
			}
		});

	});

});
