#PARTE 1
# Generadores
print('Generators')

def generaPares(limit):
    num = 1
    while num < limit:
        yield num*2
        num+=1

devuelvePares=generaPares(10)

print(next(devuelvePares))
print(next(devuelvePares))
print(next(devuelvePares))
print(next(devuelvePares))
print(next(devuelvePares))
print(next(devuelvePares))
print(next(devuelvePares))
print(next(devuelvePares))
print(next(devuelvePares))

def generaCiudades(*citys):
    for elementos in citys:
        yield elementos
        

devuelveCiudades=generaCiudades("Rafaela", "Barcelona", "Miami")

print(next(devuelveCiudades))
print(next(devuelveCiudades))
print(next(devuelveCiudades))