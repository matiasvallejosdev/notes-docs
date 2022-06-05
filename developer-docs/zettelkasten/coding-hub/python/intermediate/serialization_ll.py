import pickle
from Serializacion_ll import *

fichero_read=open("vehiculos_creados","rb")
coches_creados = pickle.load(fichero_read)
fichero_read.close()
del(fichero_read)

for c in coches_creados:
    estadoVehiculo(c)