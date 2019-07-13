$(document).ready(function () {

            var actors = [
                "Robert De Niro", "Jack Nicholson", "Marlon Brando", "Denzel Washington", "Clark Gable", "Tom Hanks",
                "Humphrey Bogart"
            ];

            function actors_array() {

                for (var i = 0; i < actors_array.length; i++) {
                    var button = $("<button>");
                    button.addClass(actorsClass);
                    button.attr("data-type", actors[i]);
                    button.text(actors[i]);
                    $(actors_array).append(button);
                }

            }


            $(document).on("click", "#button", function () {
                $("#div_Actors").empty();
                $(".buttons").removeClass("active");
                $(this).addClass("active");



















            });