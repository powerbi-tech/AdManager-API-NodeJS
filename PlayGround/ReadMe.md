### TypeScript with Angular JS
1. Create file tsconfig.json
2. Add the curly braces {} and press Ctrl + Space inside it
3. With intellsence enabled you will see compilerOptions, selected it and set the property tagert to 'ES5'
``` typescript
{
    "compilerOptions": {
        "target": "ES5"
    }
}
```
4. Add a file HelloWorld.ts, add the below contents in the file
``` typescript
function HelloWorld(){
    alert("Hello World");
}
```