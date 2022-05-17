
Console.WriteLine("Loading..");
await Task.Delay(2000);
Console.WriteLine("Hello World");

static async Task<int> MultAsync(int num) 
{
    var task = new Task<int>(() => num * num);
    task.Start();
    int result = await task;
    await Task.Delay(3000);
    return result;
}

int result = MultAsync(10).Result;
Console.WriteLine(result);

async Task<string> GetName()
{
    await Task.Delay(3000);
    return "My name is Matias";
}

string name = await GetName();
Console.WriteLine($"Hello! {name}.");

async Task<Beer> RequestBeer()
{
    await Task.Delay(10000);
    return new Beer("Corona");
}

var task = RequestBeer();

await Task.Delay(5000);
Console.WriteLine("Talk about my life");

Beer myBeer = await task;
Console.WriteLine($"We are drinking {myBeer.name}");

Console.WriteLine("Finish");

