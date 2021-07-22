<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Javascript Assignment</title>
    </head>
    <body>
        <h1>Javascript Assignment</h1>

		<img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg" onclick="buttonClick1()"height=200px>
		<input type="text" id="inc1" value="0"></input>
		<img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg" onclick="buttonClick2()"height=200px>
		<input type="text" id="inc2" value="0"></input>

        <script>
    var i = 0;
    var j = 0;
    function buttonClick1() {
        document.getElementById('inc1').value = ++i;
    }
       function buttonClick2() {
        document.getElementById('inc2').value = ++j;
    }
</script>
    </body>
</html>



