function calculate() {
    const currentGrade = parseInt(document.getElementById('current').value);
    const gradeWant = parseInt(document.getElementById('desire').value);
    const percent = parseInt(document.getElementById('percentage').value);

    const toPercentage = percent/100;

    const total = (gradeWant-currentGrade * (1 - toPercentage)) / toPercentage;

    if(total < 60) {
        document.getElementById("result").innerHTML = "You need " + total.toFixed(0)+ "% to get " +gradeWant + "%";
        document.body.style.backgroundColor = "green";

    } else if(total > 60 && total  < 80) {
        document.getElementById("result").innerHTML = "You need " + total.toFixed(0)+ "% to get " +gradeWant + "%";
        document.body.style.backgroundColor = "yellow";

    } else if(total > 80){
        document.getElementById("result").innerHTML = "You need " + total.toFixed(0)+ "% to get " +gradeWant + "%";
        document.body.style.backgroundColor = "red";
    }


}


function clearFields() {
    document.getElementById('current').value = "";
    document.getElementById('desire').value = "";
    document.getElementById('percentage').value = "";
    document.getElementById("result").innerHTML = "";
    document.body.style.backgroundColor = "#C4DAFF";


}