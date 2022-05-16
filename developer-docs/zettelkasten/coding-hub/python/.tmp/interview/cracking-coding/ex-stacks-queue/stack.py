
class Stack:
    def __init__(self):
        self.stack = []
        self.top = -1 # if it is -1 is null
        
    def __repr__(self) -> str:
        lst = self.stack
        return " -> ".join(map(str,lst)) + "-> None"
    
    def append(self, value):
        self.top += 1
        self.stack.append(value)
    
    def pop(self):
        self.top -= 1
        self.stack.pop()
    
    def remove(self, value):
        if value in self.stack:
            self.top -= 1
            self.stack.remove(value)
    
    def peek(self):
        return self.stack[self.top]
    
s = Stack()