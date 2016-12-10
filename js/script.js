$(document).ready(function(){


    $("#go").bind('click', shuffle);
      function shuffle(){
          $(".row").each(function(){
              var divs = $(this).find('div');
              for(var i = 0; i < divs.length; i++) $(divs[i]).remove();
              var i = divs.length;
              if ( i == 0 ) return false;
              while ( --i ) {
                 var j = Math.floor( Math.random() * ( i + 1 ) );
                 var tempi = divs[i];
                 var tempj = divs[j];
                 divs[i] = tempj;
                 divs[j] = tempi;
               }
              for(var i = 0; i < divs.length; i++) $(divs[i]).appendTo(this);
          });
      }

      var emptytilePosRow = 1;
      var emptytilePosCol = 2;
      var cellDisplacement = "124px";
        //^^ Code for shuffle

//The code below was initially for a 4x4 grid. that had 128 px
  {
      var zi = 1;
      var EmptySquare = 9;

//The code below is to set up variables so that they may be filled with information about the puzzle.


      $.fn.extend({ eight:
          function(square_size)
          {
              var targetElement = “#” + $(this).attr(“id”);
              var sqSize = square_size + ‘px’;
              var boardSize = (square_size * 3) + ‘px’;

                $(targetElement).html(“<div id = ‘board’></div>”);
                $(“#board”).css({ position:’absolute’, width: boardSize, height: boardSize, border: ‘1 px solid gray’ });

              for (var i = 0; i < 9; i++)
                {
                  $(“#board”).append(“<div style = ‘position: absolute; left: ” + ((i % 4) * square_size) + “px; top: ” + Math.floor(i / 4) * square_size + “px; width: ” + square_size + “px; height: ” + square_size + “px; text-align: center; line-height: 160 px; -moz-box-shadow: inset 0 0 20 px #555555; -webkit-box-shadow: inset 0 0 20px #555555; box-shadow: inset 0 0 20px #555555; background: #ffffff url(monalisa.png) ” + (-(i % 4) * square_size) + “px ” + -Math.floor(i / 4) * square_size + “px no-repeat !important’></div>”);
                }


              $(“#board”).children(“div:nth-child(” + EmptySquare + “)”).css({backgroundImage: “”, background: “#ffffff”});

                $(“#board”).children(“div”).click(function()
                {
              move(this, square_size);
                });
          }
      });



// The code below is to check the placement of the clicked squre and where the empty square should move

      function Move(clicked_square, square_size)
      {
          var movable = false;

          var oldx = $(“#board”).children(“div:nth-child(” + EmptySquare + “)”).css(“left”);
          var oldy = $(“#board”).children(“div:nth-child(” + EmptySquare + “)”).css(“top”);

          var newx = $(clicked_square).css(“left”);
          var newy = $(clicked_square).css(“top”);

          if (oldx == newx && newy == (parseInt(oldy) – square_size) + ‘px’)
              movable = true;
          if (oldx == newx && newy == (parseInt(oldy) + square_size) + ‘px’)
              movable = true;

          if ((parseInt(oldx) – square_size) + ‘px’ == newx && newy == oldy)
              movable = true;
          if ((parseInt(oldx) + square_size) + ‘px’ == newx && newy == oldy)
              movable = true;

          if (movable)
          {
              $(clicked_square).css(“z-index”, zi++);

              $(clicked_square).animate({ left: oldx, top: oldy }, 200, function()
              {
                  $(“#board”).children(“div:nth-child(” + EmptySquare + “)”).css(“left”, newx);
                  $(“#board”).children(“div:nth-child(” + EmptySquare + “)”).css(“top”, newy);
              });
          }
      }

      $(“#target”).eight(160, 124);
  });
});
