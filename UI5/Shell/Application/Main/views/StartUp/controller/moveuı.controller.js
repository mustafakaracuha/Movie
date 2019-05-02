sap
    .ui
    .define(["sap/ui/core/mvc/Controller"], function (Controller, FragmentController) {
        "use strict";
        var base,
            router;
        return Controller.extend(
            "SapUI5Tutorial.Application.Main.views.StartUp.controller.moveuı",
            {

                onInit: function () {

                    this
                        .getView()
                        .setModel(oModel);
                    $.ajax({
                        type: "GET",
                        url: 'https://raw.githubusercontent.com/FEND16/movie-json-data/master/json/top-rated' +
                                '-movies-02.json',
                        data: "",
                        dataType: 'json',
                        success: function (firstmovies) {
                            oModel.setProperty("/firstmovies", firstmovies);
                        }
                    })

                    this
                        .getView()
                        .setModel(oModel);
                    $.ajax({
                        type: "GET",
                        url: 'https://raw.githubusercontent.com/FEND16/movie-json-data/master/json/movies-in' +
                                '-theaters.json',
                        data: "",
                        dataType: 'json',
                        success: function (secondmovies) {
                            oModel.setProperty("/secondmovies", secondmovies);
                        }
                    })

                    var genre = [
                        {
                            name: "Genre",
                            first_genre: "Action",
                            second_genre: "Horror",
                            third_genre: "Comedy",
                            fourth_genre: "Adventure",
                            fifth_genre: "Drama",
                            sixth_genre: "Sci-Fi",
                            seventh_genre: "More..."
                        }
                    ]
                    oModel.setProperty("/genreModel", genre);

                    var language = [
                        {
                            name: "Language",
                            first_langu: "English",
                            second_langu: "Hindi",
                            third_langu: "Tamil",
                            fourth_langu: "Telgu",
                            fifth_langu: "Marathi",
                            sixth_langu: "Punjabi",
                            seventh_langu: "More..."
                        }
                    ]
                    oModel.setProperty("/languageModel", language);

                    var movıe = [
                        {
                            class: "children",
                            posterurl: "https://images-na.ssl-images-amazon.com/images/M/MV5BZTYwZWQ4ZTQtZWU0MS00N2YwL" +
                                    "WEzMDItZWFkZWY0MWVjODVhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY446_SX290_AL_.jpg",
                            title: "Children of Heaven",
                            imdbRating: "8.4"
                        }, {
                            class: "heat",
                            posterurl: "https://images-na.ssl-images-amazon.com/images/M/MV5BNGMwNzUwNjYtZWM5NS00YzMyL" +
                                    "WI4NjAtNjM0ZDBiMzE1YWExXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SY500_CR0,0,339,500_AL" +
                                    "_.jpg",
                            title: "Heat",
                            imdbRating: "5.2"
                        }, {
                            class: "great",
                            posterurl: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjI2MTQwNDI3Nl5BMl5BanBnX" +
                                    "kFtZTcwNDk4MTkzNA@@._V1_SY500_CR0,0,333,500_AL_.jpgZWM5NS00YzMyLWI4NjAtNjM0ZDB" +
                                    "iMzE1YWExXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SY500_CR0,0,339,500_AL_.jpg",
                            title: "The Great Escape",
                            imdbRating: "7.1"
                        }, {
                            class: "pans",
                            posterurl: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU3ODg2NjQ5NF5BMl5BanBnX" +
                                    "kFtZTcwMDEwODgzMQ@@._V1_SY500_CR0,0,339,500_AL_.jpg",
                            title: "Pans Labyrınth",
                            imdbRating: "6.0"
                        }
                    ]
                    oModel.setProperty("/movıeModel", movıe);

                },

                NewDialogPress: function (oEvent) {

                    if (!this._oDialog) {

                        this._oDialog = sap
                            .ui
                            .xmlfragment("SapUI5Tutorial.Application.Main.views.StartUp.view.movie", this);

                        this
                            .getView()
                            .addDependent(this._oDialog);
                    }
                    var dialog = oModel.getProperty(
                        oEvent.getSource().getBindingContext().getPath()
                    )
                    oModel.setProperty("/dialogview", dialog);
                    this
                        ._oDialog
                        .open(oEvent.getSource());

                },
                onClose: function (oEvent) {

                    this
                        ._oDialog
                        .close();

         

                        },
   
            }
        );
    });