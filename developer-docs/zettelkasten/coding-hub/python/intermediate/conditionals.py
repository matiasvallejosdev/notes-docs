#PARTE 4
# Condicionales
#%%
print('Conditionals IF and ELIF')

def test(n):
    n = int(n)
    value="A"
    if n < 5:
        value="F"
    print("La calificacion es: " + value)
    return value
print("Cual es la nota del alumno matias?")
test(input())
#%%
edad=int(input("Introduce la edad: "))
distancia=int(input("Introduce la distancia en km: "))
salarioanual=int(input("Introduce salario anual: "))
def test2(e, d, s):
    if 18<=e<100:
        print("Edad correcta!")
    else: 
        print("Edad incorrecta! vuelve a introducir los datos")

    if 0<e<100 and d > 100 and s <= 1000:
        print("Tienes posibilidad de acceder a una beca")
test2(edad, distancia, salarioanual)

# %%
