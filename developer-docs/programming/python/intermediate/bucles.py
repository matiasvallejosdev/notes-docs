# Bucles
print('Bucles FOR and WHILE')
# FOR i in range(5)
i = 0
e = 0
for i in dicAmerica:
    e+=1
e = str(e)
print(f"La cantidad de paises de america es: {e}")

email = ""
a = False
def em():
    email = input("Cual es tu correo? .. ")
    for i in email:
        if i == "@":
            a = True
            print("Correo verificado con exito! Pulse enter para continuar")
em()
if a:
    print("Correo incorrecto por favor vuelva a introducirlo")
    em()
# WHILE 
j = int(input("Introduce un numero..   "))
while j >= 0:
    print(str(j), end=", ")
    j-=1