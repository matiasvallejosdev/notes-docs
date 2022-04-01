
"""
Crear una funcion llamada removeDuplicates la cual dado un array
no ordenado retorna un nuevo array sin elementos duplicados
"""

from importlib_metadata import re
import numpy as np

def removeDuplicates(arr: list):
    #arr = np.sort(arr, axis=0).tolist()
    result = set(arr) 
    
    #for i in range(0,len(arr)):
    #    result.add(arr[i])

    return list(result)

arr = [1,2,5,3,2,3,4,5,1,1,6,6,7,8,8,8,9,9,1,10]
result = removeDuplicates(arr)
print(result)