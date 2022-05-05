import numpy as np
from pandas import array

def three_number_sum(array, sum_objective):
    array = np.sort(array, axis=0).tolist()
    three = []
    
    for i in range(len(array)-2):
        i_left = i + 1
        i_right = len(array) - 1
        while i_left < i_right:
            sum_current = array[i] + array[i_left] + array[i_right]
            if sum_objective == sum_current:
                three.append([array[i], array[i_left], array[i_right]])
                i_left +=1
                i_right -= 1
            elif sum_current < sum_objective:
                i_left += 1
            elif sum_current > sum_objective:
                i_right -= 1
    
    return three
        

arr = [-7,-1,8,-10,6,4,-8,1,7]
objective = 0
print(three_number_sum(arr, objective))