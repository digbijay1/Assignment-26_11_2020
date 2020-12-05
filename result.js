var div = document.createElement("table")
div.setAttribute("id", "newid")
document.body.appendChild(div)


function tdclick() {
    resul.innerHTML = ""
    foo()
    var newArr = [];
    for (var i = 0; i <= 9; i++) {
        /*var div5=document.createElement("tr")
        div.appendChild(div5)

        var def=document.createElement("td")
        def.innerHTML=response[i].id
        div5.appendChild(def)
       
        //newArr.push(response[i].name)
        var defg=document.createElement("td")
        defg.innerHTML=response[i].name
        div5.appendChild(defg)


        var defgh=document.createElement("td")
        defgh.innerHTML=response[i].email
        div5.appendChild(defgh)*/

        //document.getElementById("tr1").innerHTML=null;

        finalans(i)

    }



}
//document.getElementById("tr1").innerHTML=null;

function tdclick1() {
    resul.innerHTML = ""
    foo()
    var newArr = [];
    for (var i = 10; i < 20; i++) {
        finalans(i)

    }
    console.log(newArr)

}
function tdclick2() {
    resul.innerHTML = ""
    foo()
    var newArr = [];
    for (var i = 20; i < 30; i++) {
        finalans(i)

    }
    console.log(newArr)

}

function tdclick3() {
    resul.innerHTML = ""
    foo()
    var newArr = [];
    for (var i = 30; i < 40; i++) {
        finalans(i)

    }
    console.log(newArr)

}

function tdclick4() {
    resul.innerHTML = ""
    foo()
    var newArr = [];
    for (var i = 40; i < 50; i++) {
        finalans(i)

    }
    console.log(newArr)

}


function tdclick5() {
    resul.innerHTML = ""
    foo()
    var newArr = [];
    for (var i = 50; i < 60; i++) {
        finalans(i)

    }
    console.log(newArr)

}
function tdclick6() {
    resul.innerHTML = ""
    foo()
    var newArr = [];
    for (var i = 60; i < 70; i++) {
        finalans(i)

    }
    console.log(newArr)

}
function tdclick7() {
    resul.innerHTML = ""
    foo()
    var newArr = [];
    for (var i = 70; i < 80; i++) {
        finalans(i)

    }
    console.log(newArr)

}

function tdclick8() {
    resul.innerHTML = ""
    foo()
    var newArr = [];
    for (var i = 80; i < 90; i++) {
        finalans(i)

    }
    console.log(newArr)

}

function tdclick9() {
    resul.innerHTML = ""
    foo()
    var newArr = [];
    for (var i = 90; i < 100; i++) {
        finalans(i)

    }
    console.log(newArr)

}





function finalans(i) {
    var div5 = document.createElement("tr")
    div.appendChild(div5)
    var def = document.createElement("td")
    def.innerHTML = response[i].id
    div5.appendChild(def)

    //newArr.push(response[i].name)
    var defg = document.createElement("td")
    defg.innerHTML = response[i].name
    div5.appendChild(defg)

    var defgh = document.createElement("td")
    defgh.innerHTML = response[i].email
    div5.appendChild(defgh)

}























var resul = document.getElementById("newid")
//console.log(resul)
























function foo() {

    var div1 = document.createElement("tr")
    div.appendChild(div1)


    var div2 = document.createElement("th")
    div2.setAttribute("id", "1stcolumn")
    div1.appendChild(div2)
    div2.innerHTML = "ID"


    var div3 = document.createElement("th")
    div1.appendChild(div3)
    div3.innerHTML = "name"

    var div4 = document.createElement("th")
    div1.appendChild(div4)
    div4.innerHTML = "E-mail"

}



var div8 = document.createElement("table")
div8.setAttribute("class", "myid")
document.body.appendChild(div8)


var div9 = document.createElement("tr")
div8.appendChild(div9)


var div10 = document.createElement("td")
div10.innerHTML = "1-10";
div10.setAttribute("onclick", 'tdclick()')
div9.append(div10)


var div11 = document.createElement("td")
div11.innerHTML = "11-20";
div11.setAttribute("onclick", 'tdclick1()')
div9.append(div11)


var div12 = document.createElement("td")
div12.innerHTML = "21-30";
div12.setAttribute("onclick", 'tdclick2()')
div9.append(div12)

var div13 = document.createElement("td")
div13.innerHTML = "31-40";
div13.setAttribute("onclick", 'tdclick3()')
div9.append(div13)


var div14 = document.createElement("td")
div14.innerHTML = "41-50";
div14.setAttribute("onclick", 'tdclick4()')
div9.append(div14)

var div15 = document.createElement("td")
div15.innerHTML = "51-60";
div15.setAttribute("onclick", 'tdclick5()')
div9.append(div15)


var div13 = document.createElement("td")
div13.innerHTML = "61-70";
div13.setAttribute("onclick", 'tdclick6()')
div9.append(div13)

var div13 = document.createElement("td")
div13.innerHTML = "71-80";
div13.setAttribute("onclick", 'tdclick7()')
div9.append(div13)

var div13 = document.createElement("td")
div13.innerHTML = "81-90";
div13.setAttribute("onclick", 'tdclick8()')
div9.append(div13)

var div13 = document.createElement("td")
div13.innerHTML = "91-100";
div13.setAttribute("onclick", 'tdclick9()')
div9.append(div13)