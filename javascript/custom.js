/*function updateUser() {
	var firstName = document.getElementById('firstName').value;
	var lastName = document.getElementById('lastName').value;
	var phone = document.getElementById('lastName').value;
	var email = document.getElementById('email').value;
	
	var table = document.getElementById('userTable');
	var rowLength = table.rows.length;
	console.log(rowLength)
	
	var row = table.insertRow();
	var td0 = row.insertCell(0)
	var td1 = row.insertCell(1)
	var td2 = row.insertCell(2)
	var td3 = row.insertCell(3)
	var td4 = row.insertCell(4)
	var td5 = row.insertCell(5)
	
	td0.innerHTML = rowLength;
	td1.innerHTML = firstName
	td2.innerHTML = lastName
	td3.innerHTML = email
	td4.innerHTML = "<span class='glyphicon glyphicon-pencil' onclick='edit(this)'></span>"
	td5.innerHTML = "<span class='glyphicon glyphicon-trash' onclick='dlt(this)'></span>"
	
	//return false;
}
function edit(localThis){
	var tr = localThis.parentNode.parentNode;
	var tds = tr.getElementsByTagName('td');
	// for(i=1;i<(tds.length -1);i++){
	//	console.log(tds[i].innerHTML);
	// }
	document.getElementById('firstName').value = tds[1].innerHTML;
	document.getElementById('firstName').value = tds[2].innerHTML;
	document.getElementById('firstName').value = tds[3].innerHTML;
}
function dlt(localThis){
	var row = localThis.parentNode.parentNode.rowIndex;
	document.getElementById('userTable').deleteRow(row);
}
*/

function updateUser(){
	var firstName = $("#firstName").val();
	var lastName = $("#lastName").val();
	var email = $("#email").val();
	var sno = $('#userTable tr').length;
	var edit =('<button type="button" class="edit""><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span></button>');
	var dlt =('<button type="button" class="dlt"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></button>');
	var submit = $('#submit').show();
	var update = $('#update').hide();
	var id = Math.floor(Math.random()* 10000000);
	
	console.log(firstName);
	console.log(lastName);
	console.log(email);
	console.log(sno);
	
	$('<tr><td>'+sno+'</td><td>'+firstName+'</td><td>'+lastName+'</td><td>'+email+'</td><td>'+edit+'</td><td>'+dlt+'</td><td>'+id+'</td></tr>').appendTo('#userTable');
	
	clear();
	return false;
	
}
$(document).ready(function(){  
	$('body').on('click','#submit',function(event){
	event.preventDefault();
	var firstName = $("#firstName").val();
	var lastName = $("#lastName").val();
	var email = $("#email").val();
	var sno = $('#userTable tr').length;
	var edit =('<button type="button" class="edit""><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span></button>');
	var dlt =('<button type="button" class="dlt"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></button>');
	var submit = $('#submit').show();
	var update = $('#update').hide();
	var id = Math.floor(Math.random()* 10000000);
	
	console.log(firstName);
	console.log(lastName);
	console.log(email);
	console.log(sno);
	
	$('<tr><td>'+sno+'</td><td>'+firstName+'</td><td>'+lastName+'</td><td>'+email+'</td><td>'+edit+'</td><td>'+dlt+'</td><td>'+id+'</td></tr>').appendTo('#userTable');
	
	clear();
});
	
	$('body').on('click','.edit',function(event){
		
		var submit = $('#submit').hide();
		var update = $('#update').show();
		var targetId = $(this).parent().parent().find('td:last-child').text();
		$("#firstName").val($(this).parent().parent().find('td:eq(1)').text());
		$("#lastName").val($(this).parent().parent().find('td:eq(2)').text());
	 	$("#email").val($(this).parent().parent().find('td:eq(3)').text());
	 	
	 	$('form').attr("data-target",targetId);
	});
});

function clear(){
	$("#firstName").val();
	$("#lastName").val();
	$("#email").val();
}

function edit(localThis){
	var submit = $('#submit').hide();
	var update = $('#update').show();
	 $("#firstName").val($(localThis).parent().parent().find('td:eq(1)').text());
	 $("#lastName").val($(localThis).parent().parent().find('td:eq(2)').text());
	 $("#email").val($(localThis).parent().parent().find('td:eq(3)').text());
    
}

$('#update').click(function(event){
	event.preventDefault();
   // $(localThis).parent().parent().find('td:eq(1)').text( $("#firstName").val());
    //$(localThis).parent().parent().find('td:eq(2)').text( $("#firstName").val());
    //$(localThis).parent().parent().find('td:eq(3)').text( $("#firstName").val());
    	
    var targetId = $('form').attr('data-target');
    
    $.each($('#userTable tr'),function(key,value){
           	var localId = $(value).find('td:last-child').text();
    		if(localId == targetId){
    			$(value).find('td:eq(1)').text( $("#firstName").val());
    			$(value).find('td:eq(2)').text( $("#lastName").val());
    			$(value).find('td:eq(3)').text( $("#email").val());
    		}
 //   }
 });
    	var submit = $('#submit').show();
		var update = $('#update').hide();
		   clear();
		  
    });
