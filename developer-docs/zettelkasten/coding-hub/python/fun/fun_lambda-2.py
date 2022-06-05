import numpy as np

sum = lambda x, y: x + y
sub = lambda x, y: x - y
div = lambda x, y: np.round(x / y, decimals=3)
mult = lambda x, y: x * y

print(sum(4,4))
print(sub(100,4))
print(div(64.341234123,8))
print(mult(5,2))