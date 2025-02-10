function skillsMember() {
    var member = document.getElementById("member").value;
    var skill = document.getElementById("skill").value;
    var data = {
        "member": member,
        "skill": skill
    };
    $.ajax({
        type: "POST",
        url: "/skillsMember",
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        success: function(response) {
            console.log(response);
            if (response == "OK") {
                alert("Skill added!");
                location.reload();
            } else {
                alert("Error: Skill already exists");
            }
        }
    });
}