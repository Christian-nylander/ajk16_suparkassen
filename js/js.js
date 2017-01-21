var url;
var alcohol;
var fail = 0;

function getdata(event) {
    event.preventDefault();

    fail = 0;
    $("#img1").attr("src", "");
    $("#hideContainer").fadeIn();
    alcohol = document.getElementById('nlk-search-str').value;
    url = 'http://localhost:3000/api/products/';

    $('#test').text('Dina sökresultat av: ' + alcohol);

    ajax();
}

function ajax() {
    $.ajax({
        type: 'GET',
        url: url,
        success: function (data) {
            for (var i = 0; i < 20; i++) {
                if (alcohol === data[i].name) {
                    console.log(alcohol + " har plats " + i + " i registret");
                    $("#prop1").text(data[i].sort);
                    $("#prop2").text(data[i].name);
                    $("#prop3").text(data[i].content);
                    $("#prop4").text(data[i].level);
                    $("#prop5").text(data[i].price);
                    $("#img1").attr("src", data[i].img);

                }
                else if (!(alcohol === data[i].name)) {
                    fail++;
                    if (fail === 17) {
                        $('#test').text('Inga sökresultat av: ' + alcohol);
                        $("#prop1").text("");
                        $("#prop2").text("");
                        $("#prop3").text("");
                        $("#prop4").text("");
                        $("#prop5").text("");
                        $("#hideContainer").hide();
                    }
                }
            }
        },
        error: function (err) {
            console.log(err + 'funker ej');
        }
    });
}
