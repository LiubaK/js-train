# js-train
deno-proj.js
##
Программа выполняет поиск пользователя с помощью слова или выражения из data.json по параметру --filter.
В параметре --out указывается название файла, в котором будет сохраняться результат поиска.
Используется Node.js и deno.land.

## Deno

* перед запуском нужно разархивировать файл deno-bin.js.
* все зависимости есть в файле deno-bin.js
* можно сразу вводить в консоли VS Code обязательный параметр --filter и не обязательный --out 
* --unstable --allow-all это обязательные параметры для работы deno
* результат выполнения записывается в users_spec.json по умолчанию(если параметр --out не указан) 

## Пример запуска и запроса
```
deno run --unstable --allow-all deno-bin.js --filter начальник --out newfile
```
