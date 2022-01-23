# E-Commerce Project Site built with React
## (based on knowledge learnt from Andrei's ReactDev course)

# Notes on keeping package up to date
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

### Diary
- create-react-app does bring minor problems with Eslint package, fixed by:
 + installing eslint@7.32.0
 + completely remove node_modules folder and reinstall it