# sup beaners this is the best language (h0rsescript)

## **Base syntax:**
```
TARGET=EXECUTABLE code
```
<br>
Process runs in the `ROOT` object
<br>
The ROOT will have a object in it called `MEMORY`, which is the memory usable by the process
<br>


Memory available:
[000000000000000000000000000000000000000000000000000000000000000000000000000000000]

Allocate some memory by
```
ROOT.MEMORY.CREATE=variables(500)
```
[[500 bits of usable memory]000000000000000000000000000000000000000000000000000000]
<br>
Create an object of type variable
```
ROOT.OBJECT.CREATE=var(name[variables;100] = str -> "Flaming")
```
Here, the object of type `var()` is created. `variables` specifies the name of the memory partition created while, `100` is the maximum memory allocated to this object. `>>` is used to specify the Datatype 
<br>
***

## **OBJECT TYPES**
The following types of objects are available 
 
```
ill add later
``` 

## **DATA TYPES**
The following data types are available in h0rsescript

1) Strings
2) Ints
3) Arrays

| Datatype  | Symbol |
| :-------: | :----: |
| `String`  | ->     |
| `Integer` | =>     |
| `Array`   | >>     |