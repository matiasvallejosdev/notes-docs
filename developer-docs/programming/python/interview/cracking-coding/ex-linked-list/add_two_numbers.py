
from tkinter import N


class Node:
    def __init__(self, data = None):
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
    
    def appendleft(self, data):
        node = Node(data)
        node.next = self.head
        self.head = node
        
def addTwoNumbers(l1: Node, l2: Node):
    carry = 0
    result = Node(0)
    pointer = result
    
    
    while (l1 or l2 or carry):
        
        first_num = l1.data if l1.data else 0
        second_num = l2.data if l2.data else 0
        
        summation = first_num + second_num + carry
        
        num = summation % 10
        carry = summation // 10
        
        pointer.next = Node(num)
        
        pointer = pointer.next
        l1 = l1.next if l1 else None
        l2 = l2.next if l2 else None
        
    return result.next