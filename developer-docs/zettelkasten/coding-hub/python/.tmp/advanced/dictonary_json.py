import json
import numpy as np

args = np.random.rand(1,21)

item1 = {
    'id_type': "default",
    'credentials': "215sad1235"
}
item2 = {
    'id_type': "admin",
    'credentials': "34451sa523"
}

file = {
    "operation": {
        "method": "GET /Values",
        "type": "application/json",
        "policy": ""
    },
    "body": {
        "Item_1": item1,
        "Item_2": item2
    }
}

for index in range(args.shape[1]):
    if index + 1 < args.shape[1]:
        print("N{i}: {num}".format(i=index, num=args[0,index]), end= ", ")
    else:
        print("N{i}: {num}\n".format(i=index, num=args[0,index])) # End array

for key in file["body"]:
    print("Key: {key}, Value: {value}".format(key=key, value=file["body"][key]))