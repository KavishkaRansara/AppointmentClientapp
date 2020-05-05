$(document).ready(function()
{  
	$("#alertSuccess").hide();
	$("#alertError").hide();
	
}); 


$(document).on("click", "#btnSave", function(event) 
		{  
			$("#alertSuccess").text("");  
			$("#alertSuccess").hide(); 
			$("#alertError").text("");  
			$("#alertError").hide(); 

			 var status = validateAppForm();  
			 if (status != true)  
			 {   
				 $("#alertError").text(status);  
				 $("#alertError").show();   
				 return;  
			 } 
			 
			
			 var type = ($("#hidAppIDSave").val() == "") ? "POST" : "PUT";  
			 
			 $.ajax( 
			 {
				 
				 url : "AppointmentAPI",
				 type : type, 
				 data : $("#formAppointment").serialize(), 
				 dataType : "text", 
				 complete : function(response, status) 
				 {
					 
					 onAppSaveComplete(response.responseText, status);  
					 
				 }
			 
		 });
			 
}); 


$(document).on("click", ".btnUpdate", function(event) 
		{     
			$("#hidAppIDSave").val($(this).closest("tr").find('#hidAppIDUpdate').val());
			$("#patientID").val($(this).closest("tr").find('td:eq(0)').text()); 
			$("#doctorID").val($(this).closest("tr").find('td:eq(1)').text()); 
			$("#appointmentDate").val($(this).closest("tr").find('td:eq(2)').text());
			$("#appointmentTime").val($(this).closest("tr").find('td:eq(3)').text()); 
			
}); 

$(document).on("click", ".btnRemove", function(event) 
		{
	
				$.ajax(  
						
						{
							
							url : "AppointmentAPI",
							type : "DELETE",   
							data : "appointmentID=" + $(this).data("appid"),  
							dataType : "text",
							complete : function(response, status)  
							{
								
								onAppDeleteComplete(response.responseText, status);
								
							}
							
						
				});
	
	
});


function onAppSaveComplete(response, status) 
{
	
	if (status == "success") 
	{
		
		var resultSet = JSON.parse(response); 

		if (resultSet.status.trim() == "success")   
		{
			
			$("#alertSuccess").text("Successfully saved.");    
			$("#alertSuccess").show(); 
			
			$("#divAppGrid").html(resultSet.data);  
			
		}
		else if (resultSet.status.trim() == "error") 
		{
			
			$("#alertError").text(resultSet.data);    
			$("#alertError").show();   
		} 
			
	}else if (status == "error")  
		{
			
			$("#alertError").text("Error while saving.");   
			$("#alertError").show();  
			
		}else  
		{
			
			$("#alertError").text("Unknown error while saving..");   
			$("#alertError").show(); 
			
		}
	
			$("#hidAppIDSave").val("");  
			$("#formAppointment")[0].reset(); 
	}

	function onAppDeleteComplete(response, status) 
	{
		if (status == "success")  
		{
			
			var resultSet = JSON.parse(response);
			
			
			if (resultSet.status.trim() == "success")   
			{
				
				$("#alertSuccess").text("Successfully deleted.");    
				$("#alertSuccess").show(); 
				
				$("#divAppGrid").html(resultSet.data);   
			}else if (resultSet.status.trim() == "error")   
			{
				
				$("#alertError").text(resultSet.data);    
				$("#alertError").show(); 
			}	
				
			}	else if (status == "error")  
			{
				
				$("#alertError").text("Error while deleting.");   
				$("#alertError").show();  
				
			}else
			{
				
				$("#alertError").text("Unknown error while deleting..");   
				$("#alertError").show(); 
				
			}	
	}	
			

function validateAppForm()
{   
	if ($("#patientID").val().trim() == "")  
	{   
		return "Insert Patient ID."; 
	} 
	 
	if ($("#doctorID").val().trim() == "") 
	{  
		return "Insert Doctor ID.";  
	} 
	 
	if ($("#appointmentDate").val().trim() == "") 
	{   
		return "Insert Appointment Date."; 
	} 
	 
	 if ($("#appointmentTime").val().trim() == "") 
	 {   
		 return "Insert Appointment Time."; 
	 } 
	 
	 return true; 
} 





