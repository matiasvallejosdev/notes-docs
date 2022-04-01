
class Node:
    def __init__(self, data):
        self.data = data or ""
        self.next = None
    
class LinkedList:
    def __init__(self, nodes = None):
        self.head = None
        if nodes is not None:
            node = Node(nodes.pop(0))
            self.head = node
            for elem in nodes:
                node.next = Node(elem) 
                node = node.next
    
    def __repr__(self) -> str:
        node = self.head
        lst_nodes = []
        while node is not None:
            lst_nodes.append(str(node.data))
            node = node.next
        lst_nodes.append("None")
        return " -> ".join(lst_nodes)
    
    def lenght(self) -> int:
        node = self.head
        lenght = 0
        while node is not None:
            lenght+=1
            node = node.next
        return lenght
        
    def getNthFromLast(self, n):
        if self.head is None:
            return
        
        lenght = self.lenght()
        if n > lenght:
           return "None"
        
        node = self.head
        for i in range(0, lenght-n):
            node = node.next
        
        return node.data 