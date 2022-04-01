
def superDigit(n, k):
    p = n * k
    array = list(p)
    res = int()
    for i, e in enumerate(array):
        res += int(e)
    print(res)
    

superDigit('123', 2)