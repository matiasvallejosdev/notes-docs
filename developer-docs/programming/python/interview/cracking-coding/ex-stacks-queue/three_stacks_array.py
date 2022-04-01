

from torch import stack


class ThreeStackArray:
    def __init__(self, size, size_stacks):
        self.size = size
        self.size_stacks = size_stacks - 1
        self.buffer = [0 for i in range(0, size*size_stacks)]
        self.pointer = [-1] * size_stacks
           
    def __repr__(self) -> str:
        final_txt = " <|> "
        for i in range(0, len(self.pointer)):
            stack = self.get_list_stack(i)
            tmp = " -> ".join(map(str, stack))
            final_txt = final_txt + tmp + " <|> "  
        return final_txt

    def get_list_stack(self, index):
        n = len(self.buffer)
        
        bottom = index * self.size
        top = (index * self.size) + self.size

        stack = self.buffer[bottom : top]
        return stack
    
    def push(self, item, stack:int):
        if stack > self.size_stacks:
            return "Exception: stack not exists"
        if self.is_full(stack):
            return "Exception: stack is full"
        
        index = self.get_top_stack(stack) + 1
        self.buffer[index] = item
        self.pointer[stack] += 1
        
        return f"Pushing element {item}!"
    
    def pop(self, stack:int):
        if stack > self.size_stacks:
            return "Exception: stack not exists"
        if self.pointer[stack] == -1:
            return "Exception: stack is empty"
        
        index = self.get_top_stack(stack)
        value = self.buffer[index]
        self.buffer[index] = 0
        self.pointer[stack] -= 1
        
        return f"Delete element {value}!"
    
    def peek(self, stack:int):
        if stack > self.size_stacks:
            return "Exception: stack not exists"
        if self.pointer[stack] == -1:
            return "Exception: stack is empty"
        
        index = self.get_top_stack(stack)
        return f"Top element of stack {stack} is {self.buffer[index]}"
    
    def get_top_stack(self, stack: int):
        top = stack * self.size + (self.pointer[stack])
        return top
    
    def is_full(self, stack:int) -> bool:
        top = self.pointer[stack]
        if top == self.size - 1:
            return True
        else:
            return False
    
ths = ThreeStackArray(3,3)