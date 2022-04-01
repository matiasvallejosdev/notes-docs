
import numpy as np

def sum(list):
    return np.sum(list, axis=0)

def multiply(list, axis):
    return np.prod(list, axis=axis)

print(multiply(
    [[1,2,3,4], 
    [1,2,3,4]], 
    0))

print(sum([1,2,3,4]))


