import pickle

class Persona:
    def __init__(self, nombre, genero, edad):
        self.name=nombre
        self.genre=genero
        self.age=edad
    def ret_person(self):
        return self.name + " " + self.genre + " " + str(self.age)
    def estado(self):
        print("Se ha creado una persona con el nombre de: " + self.name + "\nGenero: " + self.genre + "\nEdad: " + str(self.age))

class lista_personas:
    personas=[]
    def __init__(self):
        list_person=open("fichero_ext", "ab+")
        list_person.seek(0)
        try:
            self.personas = pickle.load(list_person)
            print("Se cargaron {} personas del fichero externo".format(len(self.personas)))
        except:
            print("El fichero esta vacio")
        finally:
            list_person.close()
            del(list_person)  
    def agregarPersonas(self,p):
        self.personas.append(p)
        self.guardarPersona()
    def mostrarPersonas(self):
        for c in self.personas:
            print(str(c))
    def guardarPersona(self):
        fich=open("fichero_ext", "wb")
        pickle.dump(self.personas, fich)
        fich.close()
        del(fich)
    def info_fichero(self):
        print("La informacion del fichero externo es: ")
        for p in self.personas:
            print(p)

miLista = lista_personas()
p = Persona("Matias", "Masculino", 19)
miLista.agregarPersonas(p.ret_person())
p = Persona("Olga", "Femenino", 52)
miLista.agregarPersonas(p.ret_person())
p = Persona("Abelardo", "Masculino", 35)
miLista.agregarPersonas(p.ret_person())
miLista.info_fichero()
