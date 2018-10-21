import java.io.IOException;
import java.sql.* ;
import java.util.List;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.servlet.Servlet;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.sql.DataSource;

import org.commonmark.node.*;
import org.commonmark.parser.Parser;
import org.commonmark.renderer.html.HtmlRenderer;

/**
 * Servlet implementation class for Servlet: ConfigurationTest
 *
 */
public class Editor extends HttpServlet {
    /**
     * The Servlet constructor
     * 
     * @see javax.servlet.http.HttpServlet#HttpServlet()
     */
    public Editor() {}

    public String formatDateTime(String dt) {
        ArrayList<String> months = new ArrayList<>(Arrays.asList("Jan", "Feb", "Mar", "Apr", "May", 
            "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"));
        ArrayList<String> ampm = new ArrayList<>(Arrays.asList("am", "pm"));
        dt = dt.substring(0, dt.length() - 5);
        String year = dt.substring(0, 4);
        String month = months.get(Integer.parseInt(dt.substring(5, 7), 10) - 1);
        String day = dt.substring(8, 10);
        String time = dt.substring(11, dt.length());
        boolean afternoon = false;
        int hour = Integer.parseInt(time.substring(0, 2), 10);
        if (hour >= 12) {
            afternoon = true;
            if (hour != 12) {
                int timeAdj = hour - 12;
                time = Integer.toString(timeAdj) + time.substring(2, time.length());
            }
        }
        else if (hour == 0) {
            time = Integer.toString(12) + time.substring(2, time.length());
        }
        String partOfDay = afternoon ? ampm.get(1): ampm.get(0);
        String formatted = month + " " + day + ", " + year + " " + time + partOfDay;
        return formatted;
    }

    public void showList(HttpServletRequest request) {
        ArrayList<ArrayList<String>> postList = new ArrayList<ArrayList<String>>();
        Connection c = null;
        PreparedStatement ps = null;
        ResultSet rs = null;
        try {
            Class.forName("com.mysql.jdbc.Driver");
        } catch (ClassNotFoundException e) {
            System.out.println(e);
            return;
        }

        try {
            //create instance of Connection object
            c = DriverManager.getConnection("jdbc:mysql://localhost:3306/CS144", "cs144", "");
            ps = c.prepareStatement("select * from Posts where username = ? order by modified desc");
            ps.setString(1, request.getParameter("username"));
            rs = ps.executeQuery();

            while (rs.next()) {
                ArrayList<String> post = new ArrayList<String>();
                post.add(rs.getString("title"));
                post.add(formatDateTime(rs.getString("created")));
                post.add(formatDateTime(rs.getString("modified")));
                post.add(Integer.toString(rs.getInt("postid")));
                postList.add(post);
            }
        } catch (SQLException ex){
            System.out.println("SQLException caught");
            System.out.println("---");
            while ( ex != null ) {
                System.out.println("Message   : " + ex.getMessage());
                System.out.println("SQLState  : " + ex.getSQLState());
                System.out.println("ErrorCode : " + ex.getErrorCode());
                System.out.println("---");
                ex = ex.getNextException();
            }
        } finally {
            try { rs.close(); } catch (Exception e) { /* ignored */ }
            try { ps.close(); } catch (Exception e) { /* ignored */ }
            try { c.close(); } catch (Exception e) { /* ignored */ }
        }
        request.setAttribute("postList", postList);
    }

    public void init() throws ServletException
    {
        /*  write any servlet initialization code here or remove this function */
    }
    
    public void destroy()
    {
        /*  write any servlet cleanup code here or remove this function */
    }

    /**
     * Handles HTTP GET requests
     * 
     * @see javax.servlet.http.HttpServlet#doGet(HttpServletRequest request,
     *      HttpServletResponse response)
     */
    public void doGet(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException 
    {
	// implement your GET method handling code here
	// currently we simply show the page generated by "edit.jsp"
        String action = request.getParameter("action");
        boolean newPost = false;
        boolean empty = true;
        String titleRaw;
        String bodyRaw;
        String titleHTML;
        String bodyHTML;
        Parser parser;
        HtmlRenderer renderer;
        Connection c = null;
        PreparedStatement ps = null;
        ResultSet rs = null;
        if (action == null) {
            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
        }
        else {
            switch (action) {
                case "list":
                    if (request.getParameter("username") == null) {
                        response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
                        break;
                    }
                    request.setAttribute("actionTitle", "Posts");
                    showList(request);
                    request.getRequestDispatcher("/list.jsp").forward(request, response);
                    break;
                case "open":
                    request.setAttribute("actionTitle", "Edit Post");
                    ArrayList<String> postInfo = new ArrayList<String>();
                    String title = request.getParameter("title");
                    String body = request.getParameter("body");
                    newPost = false;
                    boolean titleBody = false;
                    if (request.getParameter("postid") == null || request.getParameter("username") == null) {
                        response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
                        break;
                    }
                    if (Integer.parseInt(request.getParameter("postid")) <= 0) {
                        newPost = true;
                    }
                    if (title != null && body != null) {
                        postInfo.add(title);
                        postInfo.add(body);
                        request.setAttribute("postInfo", postInfo);
                        titleBody = true;
                    }
                    else {
                        try {
                            Class.forName("com.mysql.jdbc.Driver");
                        } catch (ClassNotFoundException e) {
                            System.out.println(e);
                            return;
                        }

                        try {
                            //create instance of Connection object
                            int postID = 0;
                            c = DriverManager.getConnection("jdbc:mysql://localhost:3306/CS144", "cs144", "");
                            ps = c.prepareStatement("select title, body from Posts where username = ? and postid = ?");
                            ps.setString(1, request.getParameter("username"));
                            ps.setInt(2, Integer.parseInt(request.getParameter("postid")));
                            

                            rs = ps.executeQuery();
                            empty = true;
                            while (rs.next()) {
                                empty = false;
                                postInfo.add(rs.getString("title"));
                                postInfo.add(rs.getString("body"));
                            }
                            if (empty && !titleBody) {
                                response.setStatus(HttpServletResponse.SC_NOT_FOUND);
                                break;
                            }
                            request.setAttribute("postInfo", postInfo);                        
                        } catch (SQLException ex){
                            System.out.println("SQLException caught");
                            System.out.println("---");
                            while ( ex != null ) {
                                System.out.println("Message   : " + ex.getMessage());
                                System.out.println("SQLState  : " + ex.getSQLState());
                                System.out.println("ErrorCode : " + ex.getErrorCode());
                                System.out.println("---");
                                ex = ex.getNextException();
                            }
                        } finally {
                            try { rs.close(); } catch (Exception e) { /* ignored */ }
                            try { ps.close(); } catch (Exception e) { /* ignored */ }
                            try { c.close(); } catch (Exception e) { /* ignored */ }
                        }
                    }

                    request.getRequestDispatcher("/edit.jsp").forward(request, response);
                    break;
                case "save":
                    if (request.getMethod() != "POST") {
                        response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
                        break;
                    }
                    request.setAttribute("actionTitle", "Posts");
                    newPost = false;
                    if (Integer.parseInt(request.getParameter("postid")) <= 0) {
                        newPost = true;
                    }
                    try {
                        Class.forName("com.mysql.jdbc.Driver");
                    } catch (ClassNotFoundException e) {
                        System.out.println(e);
                        return;
                    }

                    try {
                        int postID = 0;
                        //create instance of Connection object
                        c = DriverManager.getConnection("jdbc:mysql://localhost:3306/CS144", "cs144", "");

                        if (newPost) {
                            ps = c.prepareStatement("select MAX(postid) as maximum from Posts where username = ?");
                            ps.setString(1, request.getParameter("username"));
                            rs = ps.executeQuery();
                            while (rs.next()) {
                                if (rs.getString("maximum") == null ){
                                    postID = 1;
                                }
                                else {
                                    postID = Integer.parseInt(rs.getString("maximum")) + 1;
                                }
                            }
                            ps = c.prepareStatement("insert into Posts values (?, ?, ?, ?, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP())");
                            ps.setString(1, request.getParameter("username"));
                            ps.setInt(2, postID);
                            ps.setString(3, request.getParameter("title"));
                            ps.setString(4, request.getParameter("body"));
                            ps.executeUpdate();
                        }
                        else {
                            ps = c.prepareStatement("update  Posts set title = ?, body = ?, modified = CURRENT_TIMESTAMP" + 
                                " where username = ? and postid = ?");
                            ps.setString(1, request.getParameter("title"));
                            ps.setString(2, request.getParameter("body"));
                            ps.setString(3, request.getParameter("username"));
                            ps.setInt(4, Integer.parseInt(request.getParameter("postid")));

                            ps.executeUpdate();
                        }
                      
                    } catch (SQLException ex){
                        System.out.println("SQLException caught");
                        System.out.println("---");
                        while ( ex != null ) {
                            System.out.println("Message   : " + ex.getMessage());
                            System.out.println("SQLState  : " + ex.getSQLState());
                            System.out.println("ErrorCode : " + ex.getErrorCode());
                            System.out.println("---");
                            ex = ex.getNextException();
                        }
                    } finally {
                        try { rs.close(); } catch (Exception e) { /* ignored */ }
                        try { ps.close(); } catch (Exception e) { /* ignored */ }
                        try { c.close(); } catch (Exception e) { /* ignored */ }
                    }
                    showList(request);
                    request.getRequestDispatcher("/list.jsp").forward(request, response);
                    break;
                case "preview":
                    if (request.getParameter("postid") == null || request.getParameter("username") == null) {
                        response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
                        break;
                    }
                    parser = Parser.builder().build();
                    renderer = HtmlRenderer.builder().build();

                    titleRaw = request.getParameter("title");
                    bodyRaw = request.getParameter("body");
                    titleHTML = renderer.render(parser.parse(titleRaw));
                    bodyHTML = renderer.render(parser.parse(bodyRaw));

                    request.setAttribute("titleRaw", titleRaw);
                    request.setAttribute("bodyRaw", bodyRaw);

                    request.setAttribute("titleHTML", titleHTML);
                    request.setAttribute("bodyHTML", bodyHTML);
                    request.setAttribute("actionTitle", "Preview");
                    request.getRequestDispatcher("/preview.jsp").forward(request, response);
                    break;
                case "delete":
                    if (request.getMethod() != "POST") {
                        response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
                        break;
                    }
                    request.setAttribute("actionTitle", "Posts");
                    try {
                        Class.forName("com.mysql.jdbc.Driver");
                    } catch (ClassNotFoundException e) {
                        System.out.println(e);
                        return;
                    }

                    try {
                        //create instance of Connection object
                        c = DriverManager.getConnection("jdbc:mysql://localhost:3306/CS144", "cs144", "");
                        ps = c.prepareStatement("delete from Posts where username = ? and postid = ?");
                        ps.setString(1, request.getParameter("username"));
                        ps.setInt(2, Integer.parseInt(request.getParameter("postid")));
                        ps.executeUpdate();                    
                    } catch (SQLException ex){
                        System.out.println("SQLException caught");
                        System.out.println("---");
                        while ( ex != null ) {
                            System.out.println("Message   : " + ex.getMessage());
                            System.out.println("SQLState  : " + ex.getSQLState());
                            System.out.println("ErrorCode : " + ex.getErrorCode());
                            System.out.println("---");
                            ex = ex.getNextException();
                        }
                    } finally {
                        try { rs.close(); } catch (Exception e) { /* ignored */ }
                        try { ps.close(); } catch (Exception e) { /* ignored */ }
                        try { c.close(); } catch (Exception e) { /* ignored */ }
                    }
                    showList(request);
                    request.getRequestDispatcher("/list.jsp").forward(request, response);
                    break;
                case "showall":
                    ArrayList<String> pt = new ArrayList<String>();
                    ArrayList<String> pb = new ArrayList<String>();
                    ArrayList<String> m = new ArrayList<String>();
                    ArrayList<String> cr = new ArrayList<String>();
                    parser = Parser.builder().build();
                    renderer = HtmlRenderer.builder().build();
                    try {
                        Class.forName("com.mysql.jdbc.Driver");
                    } catch (ClassNotFoundException e) {
                        System.out.println(e);
                        return;
                    }

                    try {
                        //create instance of Connection object
                        c = DriverManager.getConnection("jdbc:mysql://localhost:3306/CS144", "cs144", "");
                        ps = c.prepareStatement("select title, body, modified, created from Posts where username = ? "
                            + "order by created desc");
                        ps.setString(1, request.getParameter("username"));
                        rs = ps.executeQuery();
                        while (rs.next()) {
                            ArrayList<String> prettyPost = new ArrayList<String>();
                            titleRaw = rs.getString("title");
                            bodyRaw = rs.getString("body");
                            titleHTML = renderer.render(parser.parse(titleRaw));
                            bodyHTML = renderer.render(parser.parse(bodyRaw));
                            pt.add(titleHTML);
                            pb.add(bodyHTML);
                            m.add(formatDateTime(rs.getString("modified")));
                            cr.add(formatDateTime(rs.getString("created")));
                        }                 
                    } catch (SQLException ex){
                        System.out.println("SQLException caught");
                        System.out.println("---");
                        while ( ex != null ) {
                            System.out.println("Message   : " + ex.getMessage());
                            System.out.println("SQLState  : " + ex.getSQLState());
                            System.out.println("ErrorCode : " + ex.getErrorCode());
                            System.out.println("---");
                            ex = ex.getNextException();
                        }
                    } finally {
                        try { rs.close(); } catch (Exception e) { /* ignored */ }
                        try { ps.close(); } catch (Exception e) { /* ignored */ }
                        try { c.close(); } catch (Exception e) { /* ignored */ }
                    }
                    request.setAttribute("pt", pt);
                    request.setAttribute("pb", pb);
                    request.setAttribute("m", m);
                    request.setAttribute("cr", cr);
                    request.setAttribute("actionTitle", request.getParameter("username"));
                    request.getRequestDispatcher("/showall.jsp").forward(request, response);
                    break;
                default:
                    request.setAttribute("actionTitle", "Edit Post");
                    request.getRequestDispatcher("/edit.jsp").forward(request, response);
            }
        }
    }
    
    /**
     * Handles HTTP POST requests
     * 
     * @see javax.servlet.http.HttpServlet#doPost(HttpServletRequest request,
     *      HttpServletResponse response)
     */
    public void doPost(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException 
    {
	// implement your POST method handling code here
	// currently we simply show the page generated by "edit.jsp"
        doGet(request, response);
        //request.getRequestDispatcher("/edit.jsp").forward(request, response);
    }
}

