
def my_decorator(function):
    def wrapper():
        print("------After my function-------")
        function()
        print("------Before my function------")
    return wrapper

@my_decorator
def hello():
    print("¡Hello world!")

hello()
print('')

def decorator_params(custom_message): 
    def inner(func):
        def wrapper(*args, **kwargs):
            print('Executing operation')
            value = func(*args, **kwargs)
            print(custom_message + " {value}".format(value=value))
            print('')
        return wrapper
    return inner

@decorator_params("[Operation Sum]")
def sum(a,b):
    return a + b

@decorator_params("[Operation Dot]")
def dot(a,b):
    return a * b

sum(2,4)
dot(2,4)

def decorator_http(headers):
    def inner(func):
        def wrapper(*args, **kwargs): # -> lambda_function
            print("Executing lambda function")
            body = func(*args, **kwargs) # custom body
            print("Operation exectued successfully") 
            return {
                'HTTPStatus': 200,
                'Headers': headers,
                'Body': body
            }
        return wrapper
    return inner

@decorator_http({ "Credentials": False })
def lambda_function(event, context):
    # Return my lambda body
    return {
        'Operation': event['routeKey'],
        'Body': "Hello world from lambda function!"
    }

event = {
    'routeKey': '/GET Stock'
}
context ='Context'

print(lambda_function(event, context, body='Hello'))
    