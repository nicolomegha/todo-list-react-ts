# todo-list-react-ts

# Todo List App

Una semplice applicazione Todo List sviluppata con React e TypeScript.  
Permette di aggiungere, completare, eliminare e salvare attività localmente.  
Supporta inoltre un tema chiaro e scuro gestito tramite Context API.

---

## Funzionalità principali

- Aggiunta di nuove attività
- Completamento attività con checkbox
- Eliminazione di singole attività
- Salvataggio automatico tramite localStorage
- Tema chiaro/scuro gestito tramite Context API
- Struttura modulare e tipizzata con TypeScript
- Interfaccia semplice e leggibile

---

## Stack tecnologico

- React (con Vite)
- TypeScript
- Context API
- localStorage

---

## Struttura del progetto

src/
├─ components/
│ ├─ AddTodo.tsx
│ ├─ TodoItem.tsx
│ └─ TodoList.tsx
├─ context/
│ └─ ThemeContext.tsx
├─ App.tsx
├─ main.tsx



## Installazione e avvio

Assicurati di avere Node.js e npm installati.  
Clona la repository e installa le dipendenze:


git clone https://github.com/<tuo-username>/todo-list-react-ts.git

cd todo-list-react-ts

npm install

Avvia il server di sviluppo:


npm run dev

L'applicazione sarà disponibile su http://localhost:5173.

## Utilizzo
-Scrivere un’attività nell’input e premere "Aggiungi".

-Spuntare la checkbox per segnarla come completata.

-Utilizzare il pulsante "Elimina" per rimuoverla.

-Premere "Passa a tema" per cambiare tema.

-Le attività rimangono salvate anche dopo il refresh della pagina.
