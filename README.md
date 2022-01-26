# E-Commerce Project Site built with React
### (based on knowledge learnt from Andrei's ReactDev course)

## Notes on keeping package up to date
- Clone the repo
- Remove .lock files such as yarn.lock or package.lock.json
```
rm -rf package-lock.json
or
rm -rf yarn.lock
```
- Update dependencies
``` 
npm update -D 
```

## Develop Structure
``` Project
├── Homepage
│   ├── directory
│   ├── header
│   └── menu-item
├── Shop
│   ├── shop-component
│   ├── collection-preview
│   └── collection-item
└── Forms
│   ├── signIn component
│   │       ├── form-input
│   ├── signUp component
│   └── customButton component

```

``` SHOP PAGE
├── flaskr.db
├── project
│   ├── __init__.py
│   ├── app.py
│   └── schema.sql
└── tests
    ├── __init__.py
    └── app_test.py
```



### Diary
- create-react-app does bring minor problems with Eslint package, fixed by:
 + installing eslint@7.32.0
 + completely remove node_modules folder and reinstall it

 