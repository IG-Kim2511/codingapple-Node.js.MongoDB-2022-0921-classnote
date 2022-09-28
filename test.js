<% ig_posts.slice().reverse().forEach(function(i) {     %>  

        <div class="list">
        <h2>id: <%= ig_posts[i]._id %></h2>
        <h2>할일 제목 : <%= ig_posts[i].title %></h2>
        <p>할일 마감날짜 : <%= ig_posts[i].date %></p> 
        
        <!-- 🍀c42 -->
        <button class="myBtn delete" data-id="<%= ig_posts[i]._id %>">Delete</button>
        
        <button class="myBtn delete_c72" data-id="<%= ig_posts[i]._id %>">delete_c72</button>

        <!-- 🍀c48 href="http://localhost:3000/detail/<%= ig_posts[i]._id %>"-->
        
        <a class="myBtn detail"  data-id="<%= ig_posts[i]._id %>" href="/detail/<%= ig_posts[i]._id %>">Detail page</a>
        
    </div>

    <%  }  %>  
    <%  )  %>  


           
 



          
<%    for (let i = 0; i < ig_posts.length; i++) {   %>  
    <div class="list">
        <h2>id: <%= ig_posts[i]._id %></h2>
        <h2>할일 제목 : <%= ig_posts[i].title %></h2>
        <p>할일 마감날짜 : <%= ig_posts[i].date %></p> 
        
        <!-- 🍀c42 -->
        <button class="myBtn delete" data-id="<%= ig_posts[i]._id %>">Delete</button>
        
        <button class="myBtn delete_c72" data-id="<%= ig_posts[i]._id %>">delete_c72</button>

        <!-- 🍀c48 href="http://localhost:3000/detail/<%= ig_posts[i]._id %>"-->
        
        <a class="myBtn detail"  data-id="<%= ig_posts[i]._id %>" href="/detail/<%= ig_posts[i]._id %>">Detail page</a>
        
    </div>
    <%  }  %>  