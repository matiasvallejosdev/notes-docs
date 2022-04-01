from ast import Not
from collections import deque

queue = deque(['a', 'b', 'c'])

class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
    
    def __repr__(self):
        return self.data

class LinkedList:
    def __init__(self, nodes = None):
        self.head = None
        if nodes is not None:
            node = Node(nodes.pop(0))
            self.head = node
            for elem in nodes:
                node.next = Node(elem)
                node = node.next   
    
    def __repr__(self):
        node = self.head
        nodes = []
        while node is not None:
            nodes.append(str(node.data))
            node = node.next
        nodes.append("None")
        return " -> ".join(nodes)

    def __iter__(self):
        node = self.head
        while node is not None:
            yield node
            node = node.next
    
    def appendleft(self, data):
        node = Node(data)
        node.next = self.head
        self.head = node
        
    def append(self, data):
        new = Node(data)
        node = self.head
        append = False
        
        if self.head is None:
            self.head = new
        else:
            while node is not None and append == False:
                if node.next is None:
                    node.next = new
                    append = True  
                node = node.next
        
    def pop(self):
        last = self.head
        node = self.head
        
        while node is not None:
            if node.next == None:
                last.next = None
                print('You delete -> {}'.format(node.data))
                
            last = node
            node = node.next
            
    def popleft(self):
        node = self.head
        node_next = self.head.next
        
        node.next = None
        self.head = node_next
        
        print('You delete -> {}'.format(node.data))   
             
    def get(self, index):
        get = Node('')
        node = self.head
        founded=False
        i = 0
        while node is not None and founded == False:
            if i == index:
                get = node
                founded = True
                break
            i+=1
            node = node.next
        return get
