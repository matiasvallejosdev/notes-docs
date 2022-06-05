import numpy as np

main = [8,30,10,15,-1,4,22]
secondary = [8,30,4,22]

def validate_subsequence(main, secondary):
    
    i = 0
    j = 0
    
    while i < len(main) and j < len(secondary):
        if main[i] == secondary[j]:
            j+=1
        i+=1
    
    if j == len(secondary):
        return True
    
    return False
    
print(validate_subsequence(main,secondary))