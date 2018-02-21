function createBook() {

    if (document.getElementById("name").value == "" 
    	|| document.getElementById("author").value == "" 
    	|| document.getElementById("year").value == "" 
    	|| document.getElementById("link").value == "") {
        //проверка на заполненность полей

        window.alert('Заполните все поля!');

    }
    else
    {

        var name_id = Math.random().toString(36).substr(2, 10);
        //генерация случайного и уникального id для book_name
        var img_id = Math.random().toString(36).substr(2, 10);
        //генерация случайного и уникального id для img_src
        var author_id = Math.random().toString(36).substr(2, 10);
        //генерация случайного и уникального id для author_id
        var year_id = Math.random().toString(36).substr(2, 10);
        //генерация случайного и уникального id для year_id

        //НАЧАЛО ПРОЦЕССА ФОРМИРОВАНИЯ УЗЛОВ И КНОПОК
        var books = document.createElement('div');
        //создание основного div-а в котором будет находиться книга
        books.className = "books";
        //с классом books
        document.body.appendChild(books);
        // формируется в <body> </body>

        var img_src = document.createElement('img');
        //создание img в которой будет выводиться изображение
        img_src.className = "img_src";
        //с классом img_src
        img_src.id = img_id;
        //присовение id случайно сгенерированное число
        img_src.src = document.getElementById("link").value;
        //присвоение свойству src вводимое в поле input id=link знаечние
        books.appendChild(img_src);
        //формирутеся в <div class='books'></div>

        var name_box = document.createElement('div');
        //создание div-а-контейнера, в котором будет форма вывода названия книги
        name_box.className = "name_box"
        //с классом name_box
        books.appendChild(name_box);
        //формирутеся в <div class='books'></div>

        var book_name = document.createElement('span');
        //создание span в котором будет отображаться название книги
        book_name.className = "book_name";
        //с классом  book_name
        book_name.id = name_id;
        //присовение id случайно сгенерированное число
        book_name.innerHTML = document.getElementById('name').value;
        //вывод на экран вводимое в поле input id=name знаечние
        name_box.appendChild(book_name);
        //формирутеся в <div class='name_box'></div>

        var books_container = document.createElement('div');
        //создание div-а-контейнера, в котором будет форма вывода автора и года создания
        books_container.className = "books_container"
        //с классом books_container
        books.appendChild(books_container);
        //формирутеся в <div class='books'></div>

        var info_box = document.createElement('div');
        //создание div-a контейнера "Автор", в котором будет содержаться два span-a
        info_box.className = "info_box"
        //с классом info_box
        books_container.appendChild(info_box);
        //формирутеся в <div class='books_container'></div>

        var author_word = document.createElement('span');
        //формируется span, который будет отображть подчеркнотое "Автор:"
        author_word.innerHTML = "Автор:";
        //отображение "Автор:"
        author_word.className = "author_word"
        //с классом author_word
        info_box.appendChild(author_word);
        //формирутеся в <div class='info_box'></div>

        var author_name = document.createElement('span');
        //формируется span, который будет отображть подчеркнотое вводимое имя автора
        author_name.className = ('author_name');
        //с классом author_name
        author_name.id = author_id;
        //присовение id случайно сгенерированное число
        author_name.innerHTML = document.getElementById('author').value;
        //вывод на экран вводимое в поле input id=author знаечние
        info_box.appendChild(author_name);
        //формирутеся в <div class='info_box'></div>

        var info_box = document.createElement('div');
        //создание div-a контейнера "Год", в котором будет содержаться два span-a
        info_box.className = "info_box"
        //с классом info_box
        books_container.appendChild(info_box);
        //формирутеся в <div class='books_container'></div>

        var year = document.createElement('span');
        //формируется span, который будет отображть подчеркнотое "Год:"
        year.innerHTML = "Год:";
        //отображение "Год:"
        year.className = "year_word"
        //с классом year_word
        info_box.appendChild(year);
        //формирутеся в <div class='info_box'></div>

        var year_date = document.createElement('span');
        //формируется span, который будет отображть подчеркнутую дату создание книги
        year_date.className = ('year_date')
        //с классом year_date
        year_date.id = year_id;
        //присовение id случайно сгенерированное число
        year_date.innerHTML = document.getElementById('year').value;
        //вывод на экран вводимое в поле input id=year знаечние
        info_box.appendChild(year_date);
        //формирутеся в <div class='info_box'></div>

        var buttons_box = document.createElement('div');
        //создание div-a контейнера "Кнопки", в котором будет содержаться два span-a
        buttons_box.className = "buttons_box"
        //с классом buttons_box
        books.appendChild(buttons_box);
        //формирутеся в <div class='books'></div>

        var edit_button = document.createElement('input');
        //создание input кнопки "редактировать
        edit_button.value = "Редактировать";
        //с название "Редактировать"
        edit_button.type = "button"
        edit_button.className = "btn"
        //с классом
        edit_button.id = "btn_edit"
        //с классом
        buttons_box.appendChild(edit_button);
        //формирутеся в <div class='buttons_box'></div>
        edit_button.onclick = function() {
            //создание события onclick, которое будет открывать модальное окно с редактированием

            $('#name_edit').val($('#' + name_id).text());
            //подгружаем в input-ы введенные данные>>
            $('#author_edit').val($('#' + author_id).text());
            $('#year_edit').val($('#' + year_id).text());
            $('#link_edit').val($('#' + img_id).attr("src"));
            //<<

            modal_edit = document.getElementById("modal_edit");
            //находит <div class="modal_edit"></div> и присваивает в переменную modal_edit 
            modal_back = document.getElementById("modal_back");
            //находит <div class="modal_back"></div> и присваивает в переменную modal_back 
            modal_back.style.display = "block";
            //задается блокировка нижнего стиля
            modal_edit.style.display = "block";
            //задается блокировка модального окна стиля

            edit_done_button = document.createElement('input');
            //создание input кнопки "Сохранить изменения"
            edit_done_button.value = "Сохранить изменения";
            //с надписью "Сохоанить изменения"
            edit_done_button.type = "button"
            edit_done_button.className = "btn"
            //с классом btn
            edit.appendChild(edit_done_button);
            //формирутеся в <div class='edit'></div>
            edit_done_button.onclick = function() {
                //создание события onclick, которое будет отвечать за кнопку "Сохранить изменения" и отправдять данные для редактирования

                if (document.getElementById("name_edit").value == "" || document.getElementById("author_edit").value == "" || document.getElementById("year_edit").value == "" || document.getElementById("link_edit").value == "") {
                    //прверка на заполненность полей

                    window.alert('Заполните все поля!');

                }
                else
                {

                    $('#' + name_id).html(document.getElementById('name_edit').value);
                    //определяется id элемента, принимается значение input-a name_edit и присваевается в span
                    $('#' + author_id).html(document.getElementById('author_edit').value);
                    //определяется id элемента, принимается значение input-a author_edit и присваевается в span
                    $('#' + year_id).html(document.getElementById('year_edit').value);
                    //определяется id элемента, принимается значение input-a year_edit и присваевается в span
                    $('#' + img_id).replaceWith('<img class="img_src" src="' + document.getElementById('link_edit').value + '" id="' + img_id + '">');
                    //определяется id и происходит замена по тега
                    edit.removeChild(edit_done_button);
                    //происходит удаление кнопки "Сохранить изменения", созданной функией
                    edit.removeChild(edit_close_button);
                    //происходит удаление кнопки "Отменить", созданной функией
                    modal_back.style.display = "none";
                    //происходит применение свойства для бэк слоя style="display: none;"
                    modal_edit.style.display = "none";
                    //происходит применение свойства для модального окна редактирования style="display: none;" для закрытия модального окна

                }
                ;
            }
            ;

            edit_close_button = document.createElement('input');
            //создание изменения кнопки "Отменить"
            edit_close_button.value = "Отменить";
            //с надписью "Отменить"
            edit_close_button.type = "button"
            edit_close_button.className = "btn"
            //с классом btn
            edit.appendChild(edit_close_button);
            //формирутеся в <div class='edit'></div>
            edit_close_button.onclick = function() {
                //создания события onclick, которое отвечает за кнопку "Отменить", где происходит удаление кнопок

                modal_back.style.display = "none";
                //происходит применение свойства для бэк слоя style="display: none;"
                modal_edit.style.display = "none";
                //происходит применение свойства для модального окна редактирования style="display: none;" для закрытия модального окна
                edit.removeChild(edit_done_button);
                //происходит удаление кнопки "Сохранить изменения", созданной функией
                edit.removeChild(edit_close_button);
                //происходит удаление кнопки "Отменить", созданной функией

            }
            ;

        }
        ;

        var delete_button = document.createElement('input');
        //создание button кнопки "Удалить" для удаления карточки книги
        delete_button.value = "Удалить";
        //с надписью "Удалить"
        delete_button.type = "button"
        delete_button.className = "btn";
        //с классом btn
        delete_button.onclick = function() {
            //создания события onclick, которое отвечает за кнопку "удалить", где происходит удаление карточки книги

            books.parentElement.removeChild(books);
            //удаляется <div class="books">...</div>
        }
        ;

        buttons_box.appendChild(delete_button);
        //формирутеся в <div class='buttons_box'></div>

        modal_back.style.display = "none";
        //происходит применение свойства для бэк слоя style="display: none;" 
        modal_add.style.display = "none";
        //происходит применение свойства для модального окна редактирования style="display: none;" для закрытия модального окна
        document.getElementById("name").value = "";
        document.getElementById("author").value = "";
        document.getElementById("year").value = "";
        document.getElementById("link").value = "";
    }
}
;//ЗАВЕРШЕНИЕ ПРОЦЕССА ФОРМИРОВАНИЯ УЗЛОВ И КНОПОК

//НАЧАЛО ПРОЦЕССА ФОРМИРОВАНИЯ МОДАЛЬНОГО ОКНА НА ДОБАЛЕНИЕ ЗАПИСЕЙ
function showModal_add() {
    //создание функции на открытие модального окна на добалвение

    modal_back.style.display = "block";
    //задается блокировка нижнего стиля
    modal_add.style.display = "block";
    //задается блокировка модального окна стиля

}
;
function hideModal_add() //создание функции на открытие модального окна на закрытие
{
    modal_back.style.display = "none";
    modal_add.style.display = "none";
}
;//ОКОНЧАНИЕ ПРОЦЕССА ФОРМИРОВАНИЯ МОДАЛЬНОГО ОКНА НА ДОБАЛЕНИЕ ЗАПИСЕЙ
