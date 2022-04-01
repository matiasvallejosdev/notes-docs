
class HTTPHandler():
    def __init__(self, headers):
        # Parameters decorator
        self.headers = headers
    
    def __call__(self, function):
        print("Executing lambda function!")
        def wrapper(*args, **kwargs):
            print("..")
            body = function(*args, **kwargs)
            print("Finish execution!")
            return {
                'HTTPStatus': 200,
                'Headers': self.headers,
                'Body': body
            }
        return wrapper

headers = {
    'Type': 'Application/json',
    'Credentials': False
}
@HTTPHandler(headers)
def lambda_function(event, context):
    # Do something
    return {
        'Operation': event['routeKey'],
        'Body': "Hello world from lambda function!"
    }
 
# Execution   
event = {
    'routeKey': '/GET Stock'
}
context = []
print(lambda_function(event, context))
    