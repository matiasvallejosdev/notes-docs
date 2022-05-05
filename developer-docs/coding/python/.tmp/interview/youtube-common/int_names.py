import numpy as np
import json

def is_prefix(prefix, arr):
    result = []
    count = int()
    for i in range(0,len(arr)):
        if arr[i].startswith(prefix) and len(arr[i]) != len(prefix):
            count += 1
            result.append(arr[i])
    return result, count  

def prefix_hirearchy(prefixs, arr):
    r = []
    for i in range(0, len(prefixs)):
        result, count = is_prefix(prefixs[i], arr)
        r.append({
            'Prefix': prefixs[i],
            'Result': json.dumps(result),
            'Count': count
        })
    return r
   
arr = ['Martin', 'Pedro', 'Maria', 'Martina', 'Marina', 'Mongo']

result = prefix_hirearchy(['Ped', 'Mar', 'Mon'], arr)
print('Result: {}'.format(json.dumps(result, indent=4)))





