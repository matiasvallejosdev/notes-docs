"""
Binary Search Tree
-> print()
-> insert()
-> height()
-> search()
"""

class Node:
    def __init__(self, value = None):
        self.value = value or ""
        self.left_child = None
        self.right_child = None
        
class BinarySearchTree:
    def __init__(self, nodes = None):
        self.root = None
        self.tree = []
        if nodes is not None:
            self.root = Node(nodes.pop(0))
            for elem in nodes:
                self.insert(elem)  
    
    def __repr__(self):
        self.tree = []
        if self.root != None:
            self._list_tree(self.root)  
        self.tree.append("None") 
        return " -> ".join(self.tree)
    
    def get_list_tree(self):
        self.tree = []
        if self.root != None:
            self._list_tree(self.root)
        return self.tree
    
    def _list_tree(self, cur_node: Node):
        if cur_node != None:
            self._list_tree(cur_node.left_child)
            self.tree.append(str(cur_node.value))
            self._list_tree(cur_node.right_child)
    
    def insert(self, value):
        new_node = Node(value)
        
        if self.root == None:
            self.root = new_node
        else:
            self._insert(new_node, self.root)
    
    def _insert(self, new_node: Node, cur_node: Node):
        if new_node.value < cur_node.value:
            # Add left node recursive
            if cur_node.left_child == None:
                cur_node.left_child = new_node
            else:
                self._insert(new_node, cur_node.left_child)
        elif new_node.value > cur_node.value:
            # Add right node recursive
            if cur_node.right_child == None:
                cur_node.right_child = new_node
            else:
                self._insert(new_node, cur_node.right_child)
        else:
            print("Value {} is already in tree!".format(new_node.value))
            new_node = None
    
    def height(self):
        if self.root != None:
            return self._height(self.root, 0)
        else:
            return 0
    
    def _height(self, cur_node: Node, cur_height):
        if cur_node is None:
            return cur_height
        
        left_height = self._height(cur_node.left_child, cur_height+1)
        right_height = self._height(cur_node.right_child, cur_height+1)
        
        return max(left_height, right_height)
    
    def search(self,value):
        if self.root != None:
            return self._search(value, self.root)
        else:
            return False
    
    def _search(self, value, cur_node: Node):
        if cur_node.value == value:
            return True
        elif value < cur_node.value and cur_node.left_child != None:
            return self._search(value, cur_node.left_child)
        elif value > cur_node.value and cur_node.right_child != None:
            return self._search(value, cur_node.right_child)
        else:
            return False
        
            