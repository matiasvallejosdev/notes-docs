from sys import prefix
import pytest
from int_names import is_prefix, prefix_hirearchy

class TestIntNames:
    @pytest.fixture
    def prefixs(self):
        return ['Mar', 'Mat']
    
    @pytest.fixture
    def array(self):
        return ['Martin', 'Pedro', 'Maria', 'Martina', 'Marina', 'Mongo']
    
    @pytest.mark.parametrize(('prefix', 'expected_count'),
                             [('Mar', 4),
                              ('Ped', 1)])
    def test_is_prefix_valid(self, array, prefix, expected_count):
        result, count = is_prefix(prefix,array)
        
        assert count == expected_count
        if count > 0:
            assert len(result) > 0
    
    def test_prefix_hirearchy(self, array, prefixs):
        result = prefix_hirearchy(prefixs, array)
        
        expected =  [{
                        "Prefix": "Mar",
                        "Result": "[\"Martin\", \"Maria\", \"Martina\", \"Marina\"]",
                        "Count": 4
                    },
                    {
                        "Prefix": "Mat",
                        "Result": "[]",
                        "Count": 0
                    }]
        
        assert result == expected




