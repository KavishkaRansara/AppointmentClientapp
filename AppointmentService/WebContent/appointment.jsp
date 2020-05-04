<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1" import="model.Appointment"%>


<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Appointment Management</title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.3.1.min.js"></script>
<script src="Components/appointment.js"></script>
</head>
<body>
	<div class="container">
		<div class="row">
			<div class="col-6">
				<h1>Appointment Management</h1>
				<br>
				<form id="formItem" name="formItem">
					Patient ID: <input id="patientID" name="patientID" type="text"
						class="form-control form-control-sm"> <br>Doctor ID:
					<input id="doctorID" name="doctorID" type="text"
						class="form-control form-control-sm"> <br>Appointment
					Date: <input id="appointmentDate" name="appointmentDate"
						type="text" class="form-control form-control-sm"> <br>Appointment
					Time: <input id="appointmentTime" name="AppointmentTime"
						type="text" class="form-control form-control-sm"> <input
						id="btnSave" name="btnSave" type="button" value="Save"
						class="btn btn-primary"> <input type="hidden"
						id="hidAppIDSave" name="hidAppIDSave" value="">
				</form>
				<div id="alertSuccess" class="alert alert-success"></div>
				<div id="alertError" class="alert alert-danger"></div>
				<br>

				<div id="divAppGrid">
					<%
						Appointment appointmentObj = new Appointment();
					out.print(appointmentObj.readAppointments());
					%>
				</div>
			</div>
		</div>
	</div>
</body>
</html>