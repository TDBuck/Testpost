
function addRow() {

var Author = document.getElementById("Author");
var Title = document.getElementById("Title");
var Editor = document.getElementById("Editor");
var Locus = document.getElementById("Locus");
var LocusLink = document.getElementById("LocusLink");
var table = document.getElementById("myTableData");



        
        
        
var rowCount = table.rows.length;
var row = table.insertRow(rowCount);

row.insertCell(0).innerHTML= '<input type="button" value = "Delete" onClick="Javacsript:deleteRow(this)">';
    row.insertCell(1).innerHTML= Author.value;
    row.insertCell(2).innerHTML= Title.value;
    row.insertCell(3).innerHTML= Editor.value;
    row.insertCell(4).innerHTML= Locus.value;
 
  var createA = document.createElement('a');
        createA.setAttribute('href', LocusLink);
        createA.appendChild(Locus.value);
        getTheTableTag.appendChild(createA);
 
    }
    
    function deleteRow(obj) {
    
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("myTableData");
    table.deleteRow(index);
    
    }
    
    function addTable() {
    
    var myTableDiv = document.getElementById("myDynamicTable");
    
    var table = document.createElement('TABLE');
    table.border='1';
    
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
    
    for (var i=0; i<5; i++){
        var tr = document.createElement('TR');
        tableBody.appendChild(tr);
        
        for (var j=0; j<6; j++){
        var td = document.createElement('TD');
        td.width='400';
        td.appendChild(document.createTextNode("Cell " + i + "," + j));
        tr.appendChild(td);
        }
        }
        myTableDiv.appendChild(table);
        
        }
        
        function load() {
        
        console.log("Page load finished");
        
        }