import pytest
import numpy as np

from int_pares import order_array, closesNumbers

class TestIntPares:
    @pytest.fixture
    def arr(self):
        return [1,2,4,6,5,10,25]
    
    def test_order_array(self, arr):
        array_order = order_array(arr)
        assert array_order == np.sort(arr).tolist()
    
    def test_closes_numbers(self, arr):
        result = closesNumbers(arr)
        assert result == [1,2,4,5,5,6]

        

