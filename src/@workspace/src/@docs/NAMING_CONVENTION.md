<!-- @format -->

# Naming Convention

Per facilitare lo sviluppo, è importante che i nomi dei componenti e/o di funzioni seguano le seguenti regole di naming :

- `View... (es. ViewHome)` componenti pagina
- `UI... (es. UIButton)` componenti atomici
- `utility... (es. utilityFormattedDate)` funzioni di utility

### Redux

#### Actions

....

#### Redux Reducer

....

#### Redux Saga

....

**Il nome di un componente o di una classe inizia con la lettera maiuscola**
**I nomi delle variabili sono il lingua inglese** e in _camelCase_ **- NON utilizzare underscore -**

- Se una variabile è di tipo _boolean_ utilizzare il prefisso _is_ o _has_ ad esempio `isProfileComplete` oppure `hasToken`.

- Se una variabile è di tipo _function_ utilizzare i prefissi _handle_, _on_ oppure _toggle_ ad esempio `handleButton` , `onInputChange`, `toggleVisibilityMenu`.
