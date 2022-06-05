import pickle
# CREAMOS LA CLASE PADRE Y LA SUBCLASE DE MI CLASE PADRE: Ej "Vehiculos electricos"
class Vehiculo():
    def __init__(self,marca,modelo,maxima,minimia):
        self.marca = marca
        self.modelo = modelo

        self.enMarcha = False
        self.frenar=False
        self.acelerar=False

        self.velocidad_Maxima=maxima
        self.velocidad_Minima=minimia
    
    def arrancar(self,e):
        self.enMarcha=e
    def acelerar(self,a):
        self.acelerar=a
    def frenar(self,f):
        self.frenar=f

    def estado(self):
        print("------------------------")
        print("Caracteristicas: ")
        print("Marca: " + self.marca + "\nModelo: " + self.modelo)
        print("Velocidad maxima: " + str(self.velocidad_Maxima) + "\nVelocidad minima: " + str(self.velocidad_Minima))
        print("------------------------")
        print("Estado del vehiculo:")
        print("En marcha: "+ str(self.enMarcha) + "\nFrenar: "+str(self.frenar) + "\nAcelerar: "+str(self.acelerar))
        print("------------------------")
class electric_UV():   
    def __init_subclass__(cls):
        cls.autonomia=450
        cls.cargaTotal=100

    def cargarEnergia(self,c):
        self.cargando=c
        if self.cargando:
            self.cargaTotal = 350
            return "El vehiculo esta recargando las baterias"
        else:
            return "El vehiculo se encuentra desencufado"

# CREAMOS LOS VEHICULOS A PARTIR DE LA CLASE PADRE VEHICULO Y LA SUBCLASE ELECTRICOS
class Moto(Vehiculo):
    def __init_subclass__(cls):
        pasajeros=2

    def caballito(self,c):
        if c:
            return "Voy haciendo caballito.."
        else:
            return "No estoy haciendo caballito.."
    def estado(self):
        super().estado()
        print("Caracteristicas especiales:")
        print("Caballito: " + self.caballito(True))    
class bikeElectric(Vehiculo,electric_UV):
    def estado(self):
        super().estado()
        print("Caracteristicas especiales:")
        print("Autonomia: " + str(self.autonomia) + "\nCarga actual: " + str(self.cargaTotal))

def estadoVehiculo(obj):
    obj.estado()

miMoto=Moto("Honda", "XR23", "150 km/h", "0.2 km/h")

miBike=bikeElectric("Peretti","SLP","55 km/h", "0.2 km/h")

# SERIALIZACION DE LA INFORMACION
vehiculos_ser=[miMoto,miBike]
fichero=open("vehiculos_creados","wb")
pickle.dump(vehiculos_ser,fichero)
fichero.close()
del(fichero)

fichero_read=open("vehiculos_creados","rb")
coches_creados = pickle.load(fichero_read)
fichero_read.close()
del(fichero_read)

for c in coches_creados:
    estadoVehiculo(c)