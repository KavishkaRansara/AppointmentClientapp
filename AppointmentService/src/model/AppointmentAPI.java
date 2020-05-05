package model;

import java.io.IOException;
import java.util.HashMap; 
import java.util.Map; 
import java.util.Scanner;
import model.Appointment;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class AppointmentAPI
 */
@WebServlet("/AppointmentAPI")
public class AppointmentAPI extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	Appointment appointmentobj = new Appointment();
	
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AppointmentAPI() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		
		String output = appointmentobj .insertAppointments(request.getParameter("patientID"),
				request.getParameter("doctorID"),     
				request.getParameter("appointmentDate"),       
				request.getParameter("appointmentTime"));
		
		response.getWriter().write(output);
	}

	/**
	 * @see HttpServlet#doPut(HttpServletRequest, HttpServletResponse)
	 */
	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		Map paras = getParasMap(request); 
		
		
		 String output = appointmentobj .updateAppointments(paras.get("hidAppIDSave").toString(),
				 paras.get("patientID").toString(),     
				 paras.get("doctorID").toString(),        
				 paras.get("appointmentDate").toString(),        
				 paras.get("appointmentTime").toString());
		 
		 response.getWriter().write(output);
	}
	private static Map getParasMap(HttpServletRequest request) 
	{
		Map<String, String> map = new HashMap<String, String>();  
		try  
		{
			Scanner scanner = new Scanner(request.getInputStream(), "UTF-8");   
			String queryString = scanner.hasNext() ?          
					scanner.useDelimiter("\\A").next() : "";   
					scanner.close(); 
					
					String[] params = queryString.split("&");   
					for (String param : params) 
					{
						
						String[] p = param.split("=");    
						map.put(p[0], p[1]); 
						
					}
		}
		
		catch (Exception e) 
		{
			
		}
		return map;
	}

	/**
	 * @see HttpServlet#doDelete(HttpServletRequest, HttpServletResponse)
	 */
	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		Map paras = getParasMap(request); 
		
		String output = appointmentobj .deleteAppointments(paras.get("appointmentID").toString()); 
		
		response.getWriter().write(output);
	}
	
	

}
