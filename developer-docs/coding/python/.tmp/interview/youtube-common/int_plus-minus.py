#!/bin/python3
"""
Given an array of integers, calculate the ratios of its elements that are positive, 
negative, and zero. Print the decimal value of each fraction on a 
new line with  places after the decimal.
"""

def plusMinus(arr):
    x,z,y=0,0,0
    for i in range(0,len(arr)):
        if arr[i]>0:
            x = x + 1
        elif arr[i]<0:
            y = y + 1
        else:
            z = z + 1
    print(x/len(arr))
    print(y/len(arr))
    print(z/len(arr))

if __name__ == '__main__':
    n = int(input().strip())
    arr = list(map(int, input().rstrip().split()))
    plusMinus(arr)