$(document).ready(function() {
  if (typeof feed !== 'undefined') {
    console.log(feed);
    $.ajax(feed, {
      type: 'GET',
      accepts:{
        xml:"application/rss+xml"
      },
      header : ('Access-Control-Allow-Origin: *' ),
      crossDomain: true,
      dataType:"xml",
      success:function(data) {
        var limit = 6;
        $(data).find("item").each(function (index) { 
          if (index <= limit) {
            var el = $(this);

            $('#newsRssRight').append(
              "<li class='mb4'>" +
              "<a class='fnb fn12' rel='nofollow' href='" +
              el.find("link").text()  +
              "'" +
              " target='_blank'" +
              " title='" +
              el.find("title").text() +
              "'" + '>' +
              el.find("title").text() +
              '</a>' +
              '</li>'
            )
          }
        });
      }
    });
  }
});