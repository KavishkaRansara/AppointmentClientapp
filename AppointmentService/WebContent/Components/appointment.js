$(document).ready(function()
{  
	if ($("#alertSuccess").text().trim() == "") 
	{   
		$("#alertSuccess").hide();  
	}  
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
			 
			 $("#formappointment").submit();
}); 


$(document).on("click", ".btnUpdate", function(event) 
		{     
			$("#hidAppIDSave").val($(this).closest("tr").find('#hidAppIDUpdate').val());
			$("#patientID").val($(this).closest("tr").find('td:eq(0)').text()); 
			$("#doctorID").val($(this).closest("tr").find('td:eq(1)').text()); 
			$("#appointmentDate").val($(this).closest("tr").find('td:eq(2)').text());
			$("#appointmentTime").val($(this).closest("tr").find('td:eq(3)').text()); 
			
		}); 

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
	 
	if ($("#appointmentdate").val().trim() == "") 
	{   
		return "Insert Appointment Date."; 
	} 
	 
	 if ($("#appointmentTime").val().trim() == "") 
	 {   
		 return "Insert Appointment Time."; 
	 } 
	 
	 return true; 
} 


