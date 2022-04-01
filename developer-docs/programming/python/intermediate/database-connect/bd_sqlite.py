import sqlite3
# INSERTANDO DATOS
conn=sqlite3.connect("FirstDB")
miCursor=conn.cursor()
#miCursor.execute("CREATE TABLE PRODUCTOS (Nombre_Articulo VARCHAR(50), PRECIO INTEGER, SECCION VARCHAR(20))")
lista_productos=[]
insert=False
while insert:
    nombreProducto=input("Ingrese el nombre del articulo: ")
    precioProducto=int(input("Ingrese el precio del articulo: "))
    categoriaProducto=input("Ingrese la categoria del articulo: ")
    producto=(nombreProducto,precioProducto,categoriaProducto)
    lista_productos.append(producto)
    aux=str(input("Desea realizar otra operacion? introduzca la opcion correcta (SI/NO) >> "))
    if aux == "si":
        print("Continuando con la carga de productos.. ")
    else:
        print("Fin de la carga de productos")
        insert=False
miCursor.executemany("INSERT INTO PRODUCTOS VALUES (?,?,?)", lista_productos)
conn.commit()
conn.close()

# LEYENDO LOS DATOS
conn=sqlite3.connect("FirstDB")
miCursor=conn.cursor()
lista_db=[]
miCursor.execute("SELECT * FROM PRODUCTOS")
lista_db=miCursor.fetchall()
conn.commit()
conn.close()

for p in lista_db:
    print("Nombre del producto: " + p[0] + "    $" + str(p[1]) + "\nCategoria del producto: " + p[2] + "\n")

