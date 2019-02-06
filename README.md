# Class RepositoryLocalStorage that implements CRUD

## How to use

```
<script src="RepositoryLocalStorage.js"></script>
<script>
    try{
        repositorio = new RepositoryLocalStorage();
        repositorio.setData('listPeople', [
            {id: 1, name: 'Tayron'},
            {id: 2, name: 'Pedro'}
        ])
        
        console.info(repositorio.getAllData());
    }catch (exception) {
        console.error(exception);
    }
</script>

```

#### Output

```
[{…}]
0:
data: "[object Object],[object Object]"
id: "listPeople"
__proto__: Object
length: 1
__proto__: Array(0)
```
