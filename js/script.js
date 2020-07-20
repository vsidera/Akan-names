//backend
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var maleNames = ["Kwasi", "Kudwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var d = new Date(y, --m, d);
if (g === "Female") {
        return d && femaleNames[d.getDay()];
    } else {
        return d && maleNames[d.getDay()];
    }
}

//front-end
$(document).ready ( function () {
    $("#form").submit(function () {
      event.preventDefault();
       alert("Your name is Kwame");
       document.getElementById("form").reset();
    });
});
