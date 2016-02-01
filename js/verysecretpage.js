$(function() {
    function getY(a) {
        var pos = a.position();
        var start = $("#start").position();
		var end = $("#end").position();		
		
		var res = (pos.left + 5 - start.left) * 8 / (end.left - start.left);
		if (res - Math.floor(res) >= 0.1) return -1;
		return Math.floor(res);
    }
	
	function getX(a) {
        var pos = a.position();
        var start = $("#start").position();
		var end = $("#end").position();		
		
		var res = (pos.top + 5 - start.top) * 8 / (end.top - start.top);
		if (res - Math.floor(res) >= 0.1) return -1;
		return Math.floor(res);
    }
	
	function getPos(a) {
		return [getX(a), getY(a)];
	}
	
	function filter(pos) {
		var filter = [[0,2],
					  [5,7],
					  [6,8],
					  [7,5],
					  [8,1],
					  [8,6]];
		
		for (var i = 0; i < filter.length; ++i) {
			if (pos[0] == filter[i][0] && pos[1] == filter[i][1]) return true;
		}
		return false;
	}

    function checkAll() {
		var pos = [];
        for (var i=0; i<9; ++i) {
            pos.push(getPos($("#f"+(i+1))));
            if (filter(pos[i])) {
                pos[i] = [-1, -1];
            }
            if (pos[i][0]<0 || pos[i][0] > 8 || pos[i][1]<0 || pos[i][1] > 8) {
                $("#f"+(i+1)).offset({top: spos[i].top, left: spos[i].left});
            }
        }
				
		for (var i=0; i<pos.length; ++i) {
			if (filter(pos[i])) {
				return;
			}
			for (var j=0; j<2; ++j) {
				if (pos[i][j] < 0 || pos[i][j] >= pos.length) {
					return;
				}
			}
		}
		
		for (var i=0; i<pos.length; ++i)
			for (var j=i+1; j<pos.length; ++j) {
				if (pos[i][0] == pos[j][0]) return;
				if (pos[i][1] == pos[j][1]) return;
				if (pos[i][0] + pos[i][1] == pos[j][0] + pos[j][1]) return;
				if (pos[i][0] - pos[i][1] == pos[j][0] - pos[j][1]) return;
			}
			
		window.location.replace("verysecretfinalpage.html");
    }

    $( "#f1" ).draggable({snap: ".C", snapMode: "inner", stop:checkAll });
    $( "#f2" ).draggable({snap: ".C", snapMode: "inner", stop:checkAll });
    $( "#f3" ).draggable({snap: ".C", snapMode: "inner", stop:checkAll });
    $( "#f4" ).draggable({snap: ".C", snapMode: "inner", stop:checkAll });
    $( "#f5" ).draggable({snap: ".C", snapMode: "inner", stop:checkAll });
    $( "#f6" ).draggable({snap: ".C", snapMode: "inner", stop:checkAll });
    $( "#f7" ).draggable({snap: ".C", snapMode: "inner", stop:checkAll });
    $( "#f8" ).draggable({snap: ".C", snapMode: "inner", stop:checkAll });
	//$( "#f9" ).draggable({grid: [ 68, 71 ], stop:checkAll });
	
    var spos = []
    for (var i=0; i<8; ++i) {
        spos.push(($("#f"+(i+1))).offset());

	var pcenter = ($("#center")).offset();
	$("#f9").offset({top: pcenter.top, left: pcenter.left});
    }
  });