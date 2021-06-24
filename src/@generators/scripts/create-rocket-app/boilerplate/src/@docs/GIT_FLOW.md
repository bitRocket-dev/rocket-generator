<!-- @format -->

# Git flow

Ad una **Task** corrisponde un branch.

Ogni Sviluppatore crea una nuova branch a partire dalla branch _development_ indicando l'ID del **Task** di riferimento, che sarà di tipo _feature_ o _bug_, ad esempio `feature/124` o `bug/124`.

Un branch può comprendere uno o più commit.
A seconda degli sviluppi effettuati, i commit dovranno essere suddivisi utilizzando i _type_ indicati di seguito.

Ad ogni commit corrisponde quindi lo sviluppo di un **Task**, che segue il seguente standard:

```

type(scope): descrizione

Refs #{idTask}

```

**ATTENZIONE: Solo In caso di sviluppi propedeutici, è possibile risolvere più task in uno stesso branch**
In questo caso indicare in _Refs_ gli ID di tutti i task coinvolti.\*\*

```

type(scope): descrizione

Refs #{idTask1} #{idTask2} #{idTask3}

```

### Etichette _type_

- `feat` Nuova funzionalità
- `fix` Risoluzione di un bug
- `docs` Modifica della documentazione
- `refactor` Riscrittura del codice in produzione.
- `test` Aggiunta di test o riscrittura di un test. Non cambia il codice in produzione.
- `chore` Modifica delle configurazioni o del package manager. Non cambia il codice in produzione.
- `design` Modifica alla UI. Non cambia la logica ma solo lo stile CSS.

### Etichette _scope_

- `config` configurazioni
- `login` processo/view login
- `signup` processo/view registrazione

### Esempio

```

feat(onboarding): nascosta navbar in caso di nuovo utente

Refs #2342

```

Maggiori informazioni su [Git Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

Appena lo sviluppo è terminato si apre una **Merge Request** rispetto al branch _development_ e viene assegnato come _reviewer_ il Team Lead di riferimento che si occuperà di fare una review prima di effettuare il _merge_ sul branch.

**In caso di conflitti in fase di Merge Request** è compito dello Sviluppatore risolvere i conflitti effettuando un _rebase_ del proprio branch ed effettuando un _push_ forzato sullo stesso branch. In questo modo la _Merge Request_ (già aperta) verrà automaticamente aggiornata e resa disponibile al merge.

**La mancanza di applicazione di tali standard comporta in automatico il fallimento durante il processo di commit**
