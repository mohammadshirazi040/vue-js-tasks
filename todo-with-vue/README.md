# Todo App

## 1. Todos aus dem State `todos` im Template abbilden:

- `v-for` über `todos`

## 2. Neues Todo hinzufügen

- Wir klicken auf den Button und wollen wissen: "Was wurde in das Textfeld eingegeben?"

=> Wir müssen auslesen, was im Textfeld für die Description steht.

- per `v-model` das Textfeld mit `newDescription` verbinden

## 3. Todo updaten

- Bei Klick auf eine der Checkboxen wird das jeweilige Todo im State `todos` aktualisiert (`done` von `true` auf `false` oder umgekehrt)

## 4. HTML-ID für Checkbox + Label

- Wir schreiben eine Methode `getHtmlId` in die wir die jeweilige Todo-Id `todo.id` (z.B. `1`) hineingeben und die uns dann eine HTML-kompatible ID ausgibt: `'todo-1'`
- Diese Methode rufen wir per `v-bind` auf dem ID-Attribut des Inputs und dem for-Attribut des Labels auf:

`<input :id='getHtmlId(todo.id)'>`

`<label :for='getHtmlId(todo.id)'>`

## 5. Filter für Todos

- Wir benutzen drei `<input type='radio'>`-Elemente für die Filter und geben jedem dieser Elemente einen eigenen Wert (WICHTIG: Der Wert des `name`-Attributs auf jedem dieser drei Elemente muss gleich sein, also bspw:)

```html
<input type="radio" name="filter" id="all" value="all" />
<input type="radio" name="filter" id="open" value="open" />
<input type="radio" name="filter" id="done" value="done" />
```

- Wir schreiben eine Data-Property `activeFilter` und setzen diese standardmäßig auf `'all'`

- Wir verbinden alle drei `input[type='radio']`-Elemente per `v-model` mit der Property `activeFilter`:

```html
<input type="radio" name="filter" id="all" value="all" v-model="activeFilter" />
<input
  type="radio"
  name="filter"
  id="open"
  value="open"
  v-model="activeFilter"
/>
<input
  type="radio"
  name="filter"
  id="done"
  value="done"
  v-model="activeFilter"
/>
```

- Wir benutzen im `v-for` für die `<li>`-Elemente nicht mehr das gesamte `todos`-Array zum Loopen, sondern eine neue `computed`

- Diese `computed` überprüft per `if`-Bedingung, welchen Wert `this.activeFilter` hat und gibt basierend auf den Wert entweder das gesamte Array (`activeFilter === 'all'`), nur die noch offenen Todos (`activeFilter === 'open'`) oder nur die fertigen Todos (`activeFilter === 'done'`) aus.
