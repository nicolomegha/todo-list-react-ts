
# Todo List in React + TypeScript

## Obiettivo del progetto
Questa applicazione è una semplice Todo List che permette di:
- Aggiungere attività
- Eliminare attività
- Segnare attività come completate
- Cambiare tema chiaro/scuro
- Salvare le attività in localStorage per mantenerle anche dopo il refresh

Il progetto è stato realizzato con:
- React + TypeScript
- React Hooks (useState, useEffect, useContext, useMemo)
- Context API per il tema
- localStorage per la persistenza dei dati
- Git per il versionamento step by step



## Struttura del progetto



src/
├─ components/
│   ├─ AddTodo.tsx        // Componente per aggiungere attività
│   ├─ TodoItem.tsx       // Singola attività (checkbox + elimina)
│   └─ TodoList.tsx       // Lista delle attività
├─ context/
│   └─ ThemeContext.tsx   // Gestione tema chiaro/scuro
├─ App.tsx                // Componente principale
└─ main.tsx               // Punto di ingresso dell'app

---

## 1. Gestione del Tema con Context

In `ThemeContext.tsx` è stato creato un context globale per gestire il tema chiaro/scuro.

- `ThemeProvider` contiene lo stato del tema
- `toggleTheme` cambia il tema al click
- `useMemo` evita re-render inutili
- `useTheme` permette ai componenti di accedere facilmente al contesto

Esempio di utilizzo:
```
const { theme, toggleTheme } = useTheme();
````

L’intera app è avvolta nel `ThemeProvider` in `main.tsx`.

---

## 2. Aggiunta attività

Componente: `AddTodo.tsx`

* Usa useState per gestire l’input
* Controlla che l’input non sia vuoto
* Chiama onAdd (funzione del genitore) per aggiungere la todo

In `App.tsx` viene creata una nuova todo con:

```
{ id: Date.now(), text, completed: false }
```

---

## 3. Visualizzare ed eliminare attività

* `TodoList.tsx` riceve le attività e le mostra
* `TodoItem.tsx` mostra una singola attività con bottone “Elimina”
* Quando si elimina, onRemove viene richiamata in App.tsx per aggiornare lo stato

Ogni responsabilità è separata in componenti riutilizzabili, mantenendo il codice più pulito e scalabile.

---

## 4. Persistenza con localStorage

Le attività vengono salvate nel browser per non perderle al refresh.

* All’avvio, lo stato legge i dati dal localStorage con lazy initialization
* Ad ogni modifica, useEffect salva nuovamente i dati

```
useEffect(() => {
  localStorage.setItem('todos', JSON.stringify(todos));
}, [todos]);
```

Questo consente di mantenere la lista invariata anche se si ricarica la pagina.

---

## 5. Completamento attività con checkbox

* In `TodoItem.tsx` è stata aggiunta una checkbox per segnare un’attività come completata
* Lo stile cambia dinamicamente: testo barrato e sfondo verde chiaro
* Lo stato completed è salvato nel localStorage quindi rimane dopo il refresh
* Le attività completate vengono ordinate in fondo

Esempio funzione toggle:

```
const handleToggleCompleted = (id: number) => {
  setTodos(prev =>
    prev.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  );
};
```

---

## 6. React Hooks usati

| Hook       | Scopo                                      |
| ---------- | ------------------------------------------ |
| useState   | Gestione stato locale (todos, input, tema) |
| useEffect  | Sincronizzazione con localStorage          |
| useMemo    | Ottimizzazione del value del context       |
| useContext | Accesso al tema globale                    |

---

## 7. Git e versionamento

Ogni step di sviluppo è stato salvato su Git:

```
git add .
git commit -m "Messaggio dello step"
git push origin main
```

In caso di divergenze con il remoto:

```
git pull origin main --rebase
git push origin main
```

Questo mantiene la cronologia pulita e ordinata.

---

## 8. Risultato finale

* Aggiunta attività
* Eliminazione attività
* Completamento con checkbox
* Persistenza localStorage
* Tema chiaro/scuro
* Architettura pulita e componentizzata
* Versionamento Git step by step

---

## 10. Come avviare il progetto

Clona la repository:

```
git clone https://github.com/<tuo-username>/todo-list-react-ts.git
```

Installa le dipendenze:

```
npm install
```

Avvia il server di sviluppo:

```
npm run dev
```

Apri il browser e vai su:

```
http://localhost:5173
```

---


