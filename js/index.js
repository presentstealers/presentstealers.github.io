$(function() {
    function check(a, b) {
        var posa = a.position();
        var posb = b.position();

        if (Math.abs(posa.top - posb.top) < 10 && Math.abs(posa.left - posb.left) < 10)
            return true;

        return false;
    }

    function checkAll() {
        if (check($("#img6"), $("#pos1")) &&
            check($("#img2"), $("#pos2")) &&
            check($("#img4"), $("#pos3")) && 
            check($("#img9"), $("#pos4")) && 
            check($("#img1"), $("#pos5")) && 
            check($("#img3"), $("#pos6"))) {
            window.location.replace("verysecretpage.html");
        }
    }

    $( "#img1" ).draggable({snap: ".Column", snapMode: "inner", stop:checkAll });
    $( "#img2" ).draggable({snap: ".Column", snapMode: "inner", stop:checkAll });
    $( "#img3" ).draggable({snap: ".Column", snapMode: "inner", stop:checkAll });
    $( "#img4" ).draggable({snap: ".Column", snapMode: "inner", stop:checkAll });
    $( "#img5" ).draggable({snap: ".Column", snapMode: "inner", stop:checkAll });
    $( "#img6" ).draggable({snap: ".Column", snapMode: "inner", stop:checkAll });
    $( "#img7" ).draggable({snap: ".Column", snapMode: "inner", stop:checkAll });
    $( "#img8" ).draggable({snap: ".Column", snapMode: "inner", stop:checkAll });
    $( "#img9" ).draggable({snap: ".Column", snapMode: "inner", stop:checkAll });
  });