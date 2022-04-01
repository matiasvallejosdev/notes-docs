
def a(b):
    def wrapper():
        print("------AFTER-------")
        b()
        print("------BEFORE------")
    return wrapper

@a
def e_1():
    print("Hello world!")

e_1()

def decorator_params(custom_message): 
    def inner(func):
        def wrapper(*args, **kwargs):
            value = func(*args, **kwargs)
            print(custom_message + "{value}".format(value=value))
        return wrapper
    return inner

@decorator_params("[SUM] ")
def e_2(a,b):
    return a + b

e_2(2,4)

def decorator_http(headers):
    def inner(func):
        def wrapper(*args, **kwargs): # -> lambda_function
            print("Executing lambda function!")
            body = func(*args, **kwargs) # custom body
            return {
                'HTTPStatus': 200,
                'Headers': headers,
                'Body': body
            }
        return wrapper
    return inner

@decorator_http({ "Credentials": False })
def lambda_function(event, context):
    # Do something
    return {
        'Operation': event['routeKey'],
        'Body': "Hello world from lambda function!"
    }
event = {
    'routeKey': '/GET Stock'
}
context = []

print(lambda_function(event, context))
    