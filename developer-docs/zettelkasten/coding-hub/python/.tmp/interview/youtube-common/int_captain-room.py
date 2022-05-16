# Enter your code here. Read input from STDIN. Print output to STDOUT
k,rooms = int(input()),list(map(int, input().split()))

a = set()
b = set()

test = set(rooms)

for room in rooms:
    if room not in a:
        a.add(room)
        b.add(room)
    else:
        b.discard(room)

print(list(b)[0])