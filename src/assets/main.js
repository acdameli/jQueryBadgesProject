$(function() {

  // your code will go here

  $.ajax(
      'https://www.codeschool.com/users/acdameli.json',
      {
          'dataType': 'jsonp',
          'success': function(a,b,c) {
              var divs = '';
              $.each(a.courses.completed, function() {
                  divs += '<div class="course"><img src="' + this.badge + '" /><h3>' + this.title + '</h3><a class="btn btn-primary" target="_blank" href="' + this.url + '">See Course</a><img src="' + this.badge + '" /></div>'
              });
              $('#badges').append(divs);
          }
      }
  );
});
