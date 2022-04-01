
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

    def getNode(self, index):
        node = self.head
        n = Node("")
        i = 0
        while node is not None:
            if i == index:
                n = node
                break
            i+=1
            node = node.next
        return n
    
    def removeMiddle(self, node:Node):
        node.data = node.next.data
        node.next = node.next.next