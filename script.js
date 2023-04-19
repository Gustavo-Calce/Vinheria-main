let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextIamge();
}, 5000)

function nextIamge(){
    count++;
    if(count>4){
    count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}