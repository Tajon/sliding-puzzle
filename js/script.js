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

    function moveTile()
    {
       var pos = $(this).attr('data-pos');
       var posRow = parseInt(pos.split(',')[2]);
       var posCol = parseInt(pos.split(',')[2]);

       if (posRow + 1 == emptytilePosRow && posCol == emptytilePosCol)
          {
             $(this).animate({
             'top' : "+=" + cellDisplacement
             });

             $('#empty').animate({
             'top' : "-=" + cellDisplacement
             });

             emptytilePosRow-=1;
             $(this).attr('data-pos',(posRow+1) + "," + posCol);
          }

          if (posRow - 1 == emptytilePosRow && posCol == emptytilePosCol)
          {
             $(this).animate({
             'top' : "-=" + cellDisplacement
             });

             $('#empty').animate({
             'top' : "+=" + cellDisplacement
             });

             emptytilePosRow+=1;
             $(this).attr('data-pos',(posRow-1) + "," + posCol);
          }

          if (posRow == emptytilePosRow && posCol + 1 == emptytilePosCol)
          {
             $(this).animate({
             'right' : "-=" + cellDisplacement
             });

             $('#empty').animate({
             'right' : "+=" + cellDisplacement
             });

             emptytilePosCol -= 1;
             $(this).attr('data-pos',posRow + "," + (posCol+1));
          }

          if (posRow == emptytilePosRow && posCol - 1 == emptytilePosCol)
          {
             $(this).animate({
             'right' : "+=" + cellDisplacement
             });

             $('#empty').animate({
             'right' : "-=" + cellDisplacement
             });

             emptytilePosCol += 1;
             $(this).attr('data-pos',posRow + "," + (posCol-1));
          }


          $('#empty').attr('data-pos',emptytilePosRow + "," + emptytilePosCol);
       }

       function Node(value, state, emptyRow, emptyCol, depth) {
       this.value = value
       this.state = state
       this.emptyCol = emptyCol
       this.emptyRow = emptyRow
       this.depth = depth
       this.strRepresentation = ""
       this.path = ""


       for (var i = 0; i < state.length; i++)
       {
          if (state[i].length != state.length) {
             alert('Number of rows differs from number of columns')
             return false
          }

          for (var j = 0; j < state[i].length; j++)
          	this.strRepresentation += state[i][j] + ",";
       }
       this.size = this.state.length
    }

    // function movePuzzle{
    //   for(var i = 0; i < divs.length; i++) {
    //     if (data-pos="0,0"==)
    //   }
    // }
});
