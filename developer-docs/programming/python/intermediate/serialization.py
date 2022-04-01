import pickle

lista = ["Matias", "Noeli", "Emanuel", "Amilcar"]
lista.append("Abelardo")
lista.insert(0, "Olga")
lista.extend(["Teddy"])

#CARGA EL ARCHIVO BINARIO
fichero_binario=open("lista_nombres","wb")
pickle.dump(lista, fichero_binario)
fichero_binario.close()

#LEE EL ARCHIVO BINARIO
fichero_binario=open("lista_nombres","rb")
listapick=pickle.load(fichero_binario)
fichero_binario.close()

for a in listapick:
    print(a, end=", ")

