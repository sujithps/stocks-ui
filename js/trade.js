 
$(document).ready(function(){
	
	listAllCompanies();
	$('#tradeButton').click(function (e){
			trade();
	});
	
	$('#reset').click(function (e){
			reset();
	});
	 
});
 


function listAllCompanies(){
	$.ajax({
		type: "GET",
		url: "http://localhost:9000/company",
		dataType: "json",
		success: function(companies){
			
			insertRows(companies);
		}
		
	});
}

function trade(){
	$.ajax({
		type: "GET",
		url: "http://localhost:9000/stock/"+ $('#country').val() +"/"+$('#category').val()+"/"+ ( $('#basebid').val() || 0),
		dataType: "text",
		success: function(resp){
			
			 $('#resp').html(resp);
			 
			 listAllCompanies();
		}
		
	});
}

function reset(){
	$.ajax({
		type: "GET",
		url: "http://localhost:9000/company/createSample",
		dataType: "json",
		success: function(companies){
			
			insertRows(companies);
		}
		
	});
}


function insertRows(companies){
	$('#cTable').empty();
	
	companies.forEach(function(company){
		$('#cTable').append('<tr> <td>'+ company.companyID +
		'</td>  <td>'+ company.budget + company.budgetUnit +
		'</td>  <td>'+ company.bid + company.bidUnit+
		'</td></tr>');
	});
	
	
}