"use strict";

/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку.
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены -
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    while (
      numberOfFilms == null ||
      numberOfFilms == "" ||
      isNaN(numberOfFilms)
    ) {
      numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
    this.count = numberOfFilms;
  },
  renderMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      const movieName = prompt("Один из последних просмотренных фильмов?", "");
      const movieRating = prompt("На сколько оцените его?", "");

      if (
        movieName !== null &&
        movieRating !== null &&
        movieName !== "" &&
        movieRating !== "" &&
        movieName.length < 50 &&
        movieRating.length < 50
      ) {
        this.movies[movieName] = movieRating;
        console.log("Success!!!");
      } else {
        i--;
        console.log("Error!!!");
      }
    }
  },
  detectPersonalLevel: function () {
    if (this.count < 10) console.log("Просмотрено довольно мало фильмов");
    else if (this.count >= 10 && this.count < 30) console.log("Вы классический зритель");
    else if (this.count >= 30) console.log("Вы киноман");
    else console.log("Ошыбка");
  },
  showMyDB: function () {
    if (!this.privat) console.log(this);
  },
  writeYourGenres: function () {
    for (let i = 0; i < 3; i++) {
      let genre = prompt(
        `Ваш любимый жанр под номером ${i + 1}`,
        ""
      );
      if (genre == null || genre == "" ) {
        genre = prompt(
          `Ваш любимый жанр под номером ${i + 1}`,
          ""
        );
        i--
      }
      else {
        this.genres[i] = genre;
      }
    }

    this.genres.forEach((item, index) => {
      console.log(`Любимый жанр ${index + 1} - это ${item}`);
    });
  },
  toggleVisibleMyDB: function () {
    if (this.privat) this.privat = false;
    else this.privat = true;
  },
};
personalMovieDB.start();
personalMovieDB.renderMyFilms();
personalMovieDB.writeYourGenres();

personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB();
