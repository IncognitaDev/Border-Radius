var radius
var radiusValue
function borderTR(){
    radius = document.getElementById("topRight")
    radiusValue = radius.value + "px"
    document.getElementById("radius").style.borderTopRightRadius = radiusValue
}

function borderTL(){
    radius = document.getElementById("topLeft")
    radiusValue = radius.value + "px"
    document.getElementById("radius").style.borderTopLeftRadius = radiusValue
}

function borderBR(){
    radius = document.getElementById("bottomRight")
    radiusValue = radius.value + "px"
    document.getElementById("radius").style.borderBottomRightRadius = radiusValue
}

function borderBL(){
    radius = document.getElementById("bottomLeft")
    radiusValue = radius.value + "px"
    document.getElementById("radius").style.borderBottomLeftRadius = radiusValue
}