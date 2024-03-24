
    $(function() { 
        // Interactions
       // dragable and dropable

$( function() {
    $( "#draggable" ).draggable();
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });
  } );
  

        $(".resizable").resizable();
        $(".selectable").selectable();

        // Widgets
        $('.accordion').accordion({
            active: 1,
            collapsible: true,
            activate: function(event, ui) {
              console.log(event);
              console.log(ui);
            }
          });
        $(".autocomplete").autocomplete({
            source: ["Apple", "Banana", "Cherry", "Date", "Elderberry" ,"hello"]
        });
        $(".datepicker").datepicker();
        $(function() {
            var handle = $("#custom-handle");
            $("#slider").slider({
              create: function() {
                handle.text($(this).slider("value"));
              },
              slide: function(event, ui) {
                handle.text(ui.value);
                $("#sliderValue").text(ui.value); // Update the value display
              }
            });
          });

        // Effects
        $(".effect-show-hide").click(function() {
            $(".effect-demo").toggle("blind");
        });
        $(".effect-explode").click(function() {
            $(".effect-demo").toggle("explode");
        });
        $(".effect-fade").click(function() {
            $(".effect-demo").toggle("fade");
        });
        $(".effect-color").click(function() {
            var randomColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16); // Generate random color
            $(".effect-demo").animate({
                backgroundColor: randomColor,
                color: "#fff"
            }, 1000);
        });
        
        
    });

 
  
