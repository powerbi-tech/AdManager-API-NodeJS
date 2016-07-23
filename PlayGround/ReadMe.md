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
5. Add an Index.html file to the project 
``` html
    <html>
        <head>
            <title>Hello World in typescript</title>
        </head>
        <body>
            <input type="button" onclick="SayHello()" value="Say Hello">
            <script src="HelloWorld.js"></script>
        </body>
    </html>
```
6. Install the http-server npm package 
` npm install -g http-server `

7. Run the command to lauch the application 
` http-server `
