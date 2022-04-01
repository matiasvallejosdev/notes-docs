
import numpy as np

def order_array(arr):
    input_order = np.sort(arr)
    return input_order.tolist()

def closesNumbers(arr):
    arr = order_array(arr)
    dif_min = arr[1] - arr[0]
    result = []
    
    for i in range(len(arr)-1):
        current_dif = arr[i+1] - arr[i]
        if current_dif < dif_min:
            result.clear() 

        if current_dif <= dif_min:
            result.append(arr[i])
            result.append(arr[i+1])
            dif_min = current_dif
            
    return result 

def printResult(result):
    for i in range(0, len(result)-1, 2):
        print('[{}] Result: {} / {}'.format("*",result[i], result[i+1]))
