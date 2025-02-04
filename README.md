# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
שיניתי את השרת שלי לכך שההתחברות והרישום יהיו לפי שם ראשון וסיסמא 
ולא לפי מייל 
וכן בהוספת משתמש זה מוסיף לי משתמש עם שם 
id וסיסמא ושאר המאפיינים ריקים.
וכן בקומפוננטת showDetailsRecipe 
useParams  ה אמור להשלף מה id
-וכך לשלוף את המתכון מה db 
זה עבד לי מצוין. ושלף לי טוב 
,ופתאם זה הפסיק לעבוד
 .ניסיתי בלוגים ורוב הזמן בפרויקט ישבתי על  זה 
שאלתי מורה לריאקט והיא לא מצאה את הבעיה 
אשמח אם המורה יכולה לבדוק מה קרה לזה כי  ממש
השקעתי על זה. הקוד טוב. ואין לי מושג מה הבעיה 
תודה רבה !!!
יעל 
```
