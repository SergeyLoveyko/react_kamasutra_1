//  Компонента 

//  Это "функция", возвращающая разметку (JSX)

//  По сути 
//  Компонента - это какой то  "ТЕГ"





//  Коментарий  "JSX"  -  Ctrl + K + C




//                          ---  WebStorm  ---


//  Переход в нужную компоненту  -                        Ctrl + Shift + N

//  Возвращает нас к предыдушей открытости  -             Ctrl + Alt + стрелочка назад

//  Меню выбора файла   -                                 Ctrl + Shift + Tab

//  Переход в компоненту (на которой курсор)    -         Ctrl + B или Click

//  Открыть текущий файл (в окне Project, в дереве)   -   Alt + F1 + Enter

//  Изменить Имя    -                                     Shift + F6

//  Импортирвать компоненту (в текущую компоненту)   -    Alt + Enter

//  Преименовать все вхождения   -                        Shift + F6

//  Поиск нужного файла (компоненты)    -                 Ctrl + Shift + N




//  caret blink  ввести в поиске
//  выбрать




//  -------------------------------------------------------------


//                       --- Git ---


//  lesson 13, time: 10:00


//  В папке с проэктом
//  Выбираем в меню
//  И запускаем  "Git Bash Here"

//  Запускается  "консолька"

//  Прописываем команду
//  "gitk --all&"

//  Запускаем её
//  И у нас должен открыться
//  Некоторый графический интерфейс


//  Ctrl + insert       копировать строку адресса

//  И чтобы перейти на эту версию

//  Переходим обратно в  "консоль"
//  Где пишем  "git checkout"

//  И с помощью клавиш  "Shift + Insert"
//  Вставляем скопированую строку  "адресса коммита"


//  Если будет ругаться на файл  "packege-lock.json"
//  То мы его просто удалим



//  -------


//  Если вдруг мы что то изминили в каком то  "коммите"
//  И захотим перейти на другой  "коммит"

//  То нам это скажет в программе
//  Что мы изменили структуру
//  И есть не  "закомиченые изменения"


//  И нам нужно будет  "отменить изменения"

//  Пишем  "git status"
//  И видим что у нам  "модифицирован"  один файл


//  И тут мы также можем воспользоваться командой
//  "git checkout"

//  Она может  "уничтожать изменения"

//  Прописываем  
//  "git checkout"

//  А после путть к файлу который нужно  "откатить назад"
//  Т.е. убрать все изменения которые мы сотворили вдруг случайно

//  И выглидеть это будет так

//  "git checkout src/App.js"
//  Запускаем

//  Проверяем командой 
//  "git status"

//  Что у нас всё в порядке
//  И нет  "изменнёных файлов"




//  --------------------------------------------------------


//                  --- БЭМ  методология ---

//  https://ru.bem.info/methodology/



//                  --- themeforest social network ---

//  Макетики для примера




//                  --- К прочтению ---

//  history API html5

//  preventDefault

//  map (метод)

//  HashRouter          BrowserRouter

//  SOLID  принцыпы











//  -------------------------
//  -------------------------


//  MAP - принимает в себя (стрелочную функцию)





//  -------------------------
//  -------------------------











//  -------------------------------------------------------------------------






//  ------
//  ------




//  Lesson 13              git-репозиторий
//                     Как передвигаться по "коммитам




//  ------
//  ------




//  Lesson 15       Структура папок, новые компоненты, улучшение css
//
//                  Компонента "Profiles"
//                  Работа с "MyPosts" начинаем заполнять
//                  Создаём несколько "Постов" "Post"

//                  Дополнение в "VSC" расширения "Move imports"




//  ------
//  ------

//  Lesson 16                   Props

//  ------
//  ------

//  Lesson 17           Повторяем что порходили

//  ------
//  ------

//  Lesson 18               правка Content

//  ------
//  ------



//  Lesson 19           rout, browser-router, маршрутизация
//                           Система маршрута
//                          Смена страничек "Контента"

//                      у нас нет того пакета, чтобы настроить "роутинг"
//                      Для этого нам нужно его установить

//                      Открываем "терминал"
//                      Прописываем
//                      "npm instal"  или  "npm i"
//                      И после идёт название пакета  "react-router-dom"

//                      Все пакеты которые мы устанавливаем
//                      После ещё должны вписать  "-save"

//                      И выйдет в целом вот так
//                      "npm instal react-router-dom -save"

//                      Это значит, что не только установи
//                      А ещё и внеси в запись  "package.json"

//                      Какой пакет мы установили дополнительно





//  Lesson 20               Вместо  "а"  заменяем  на  "NavLink"



//      Если подчёркнуто
//      Значит не знает что это такое

//      Снова нажимаем   "Alt + Enter"
//      И снова импортируем с ближайшего адрессата

//      И вместо  "href"  будем использовать  "to"




//                          Тут же давайте сдаелам  "activ"  для странички


//      Это будет через  "фтрибут"  "activeClassName"




//  -----------
//  -----------




//  Lesson 21               Верстаем страничку Диалогов



//  -----------
//  -----------



//  Lesson 22                       Route, exact
//                                  А поговорить



//  -----------
//  -----------



//  Lesson 23               props для Диалогов (Messanges)
//                          И небольшая стилизация Profile




//  -----------
//  -----------




//  Lesson 24                 UI - BLL, выносим данные в сторону
//                            Рефакторинг "MyPosts" and "DialogItem"




//  -----------
//  -----------



//  Lesson 25                 метод массива - map
//




//  -----------
//  -----------



//  Lesson 26                 структура проекта, ещё раз про ui - bll
//
//                                          ДЗ




//  -----------
//  -----------





//  Lesson 27                 component vs render, прокидываем props через Route
//
//



//  -----------
//  -----------




//  Lesson 28                 выносим данные в index.js
//
//



//  -----------
//  -----------




//  Lesson 29                 упаковываем данные в state
//
//
//                       Мы вынесли с "index.js" создание данных
//                                      ДЗ





//  -----------
//  -----------





//  Lesson 30              остановочка "react за час, часть 2"
//
//
//                          Вспоминаем всё что проходили
//
//
//                          SPA (Single Page Aplication)
//
//
//                          Компонента
//                              Принимает в себя ROPS
//                              И возвращает JSX разметку
//
//
//                          Props
//
//
//                          map - это МЕТОД МАССИВА
//
//                              Единственый параметр который принимает
//                              MAP
//                                  Это "кулбэк функция"
//
//
//                          Route
//
//
//                          UI - BLL (User Interface - Businese Logic Layer)





//  -----------
//  -----------




//  Lesson 31                 onClick, ref, VirtualDOM
//
//                                      ДЗ
//
//




//  -----------
//  -----------





//  Lesson 32              прокидываем callback через props
//
//
//                          Нужно просмотреть ещё раз
//                          И законспектировать по "пунктам"


//                  Создаём в "state.js" функцию "addPost"

//                  И нам её нужно будет "экспортировать"
//                  Используем "экспорт" без дефолта

//                  Эта "функция" хочет получить "текст смс" "postMessage"
//                  Это "callback" "фукция"
//                  Она возьмёт и добавит в МАССИВ "новый пост"

//                  Обращаемся к
//                  state.profilePage.posts
//                  И после
//                  push

//                  "Пушим" сюда "новый объект"

//                  Довайте сначала "создадим этот объект"
//                  let newPost

//                  Это будет "объектом"
//                  И внутри например будет такое:

//                  id: 5,
//                  message:    в него поместим, то что будет у нас приходить в
//                              (параметрах, аргументах, props)
//                              И это дует конечно "postMessage"
//                  И дальше у нас конечно будет ещё
//                  likesCount: 0

//                  И в push
//                  Мы помещаем "newPost"

//                  Который в конец нашего МАССИВА
//                  Будет добавлять "новый элемент"



//                  А теперь нам нужно эту "функцию"
//                  Экспортировать в МИР UI (Юзер Интерфейс)
//                  И перд объявлением функции "addPost"

//                  Прописываем "export"
//                  Это и будте "без дефолта"


//       Time: 08:45





//  -----------
//  -----------





//  Lesson 33              добавление поста на стену (зачатки FLUX-концепции)
//
//
//
//                          Мы остановились на том
//                          Что нам нужно наш "DOM дерево"  рендерить
//                          В определённые моменты времени
//
//                          Т.е. отрисовать заново
//                          Что бы мы могли увидеть на нашей странички
//                          Любые изменения
//
//                          Соответственно нам этот код нужно будет
//                          вызвать несколько раз
//
//                          Значит нам нужно обернуть это в "функцию"



//                          По этому мы создаём "фукцию" "rerenderEntireTree"
//                          (перерисовать всё дерево)

//                          Главный "state"
//                          И по этому если он ИЗМЕНЁН
//                          То нам важно заново "перерисовку запустить"

//                          Что бы взять актуальный "state"

//                          А "state" это  "объект"
//                          Он всегда у нас будет  актуален

//                          Т.е. заново всё прпокинуть
//                          Всё перерисовать всё "ДЕРЕВО"



//                          И тут у нас будет ПУСТАЯ страничка
//                          Так как мы обернули код в "функцию"
//                          Которая не вызвалась

//                          А нам "первая отрисовка" нужна
//                          По этому мы берём и вызываем её


//                          И мы видим что всё вернуло на место



//                          Но нам эту "функцию"
//                          Получается нужно вызывать внутри "state"

//                          По тому что только этот файл
//                          Контролирует

//                          Так как в нём хранятся данные и так же и "функции"
//                          Которые изменяют этот "state"

//                          Только этот файл знает что у нас внутри что то произошло


//                          И по этому наб эту функцию отрисовки
//                          Надо бы вызвать

//                          И давайте это сделаем
//                          После того как мы (пропушим наш МАССИВ)


//---


//                          И тут мы уткнёмся
//                          Что у нас нет такой "функции"


//                          Мы могли бы её "экспортровать" в "state"
//                          Но мы этого не можем сделать
//                          Так как мы уже "импортируем" от туда


//----


//                          И тут нам нужно задействовать  "3-ию персону"
//                          Например  "render.js"

//                          И ему мы отдаём  "функцию"  "rerederEntireTree"

//                          Но теперь нам нужно будет выхывать
//                          Эту  "функцию"
//                          В  "state.js"  и  "index.js"

//                          А тут уже мы её импортируем в те  "файлы"


//----


//                          Давайте создадим файл "render.js"
//                          Удаляем всё лишнее от туда

//                          Далее

//                          Из  "index.js"
//                          Мы удаляем эту  "логику"
//                          Так же удаляем все не нужные  "import"
//                                      {BrowserRouter}
//                                      {addPost}
//                                      state

//                          Не забываем  "импортировать"  "функцию"  "rerederEntireTree()"


//                          После нам нужно удалить циклическую зависимость
//                          Это значит что нам нужно удалить  "импорт  state"
//                          Из файла  "render.js"

//                          Но  "render.js"  нужен  "state"
//                          Что бы  "перерисовать"  и щакинуть этот  "state"
//                          Внутырь  "App.js"


//                          И тут мы можем передать эти  "параметры"
//                          Через  "props"

//                          И тут мы добавляем  "state"
//                          Внутырь  "аргумента"  "функции"  "rerederEntireTree()"
//                          Внутри  "функции"  "addPost"

//                          И так же делаем в  "index.js"




//      Time: 06:55





//  -----------
//  -----------





//  Lesson 34              Вынос мозга (FLUX-круговорот на каждый символ)
//
//                                          ДЗ
//


//          Давайте разбираться
//          В  "My post"  в поле  "textarea"
//          Вбиваем  "it-kamasutra"  и нажимаем  "добавить"
//          Пост появляется в самом низу

//          Как бы  Концепция работает

//          Смотрите
//          В  "textarea"  мы что то напичатали
//          UI  изменился  ?

//          Изменился

//          А в  "state"
//          Что то изменилось  ?    нет

//          А тогда почему  "UI"  изменился  ?
//          Если  "state"  не поменялся

//          А мы помним, что  "UI"  должен меняться только
//          Когда у нас изменяется  "state"





//  -----------
//  -----------





//  Lesson 35                       callback, subscribe, observer
//
//
//














//  Lesson 35, time: 00:00