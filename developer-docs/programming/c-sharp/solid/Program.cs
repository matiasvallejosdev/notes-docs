 Console.WriteLine("Hello, World!");
Console.ReadLine();

Rectangle rectangle = new Rectangle(10,5);
Square square = new Square(10);
Triangle triangle = new Triangle(10, 2);

IShape shape = rectangle;
Console.WriteLine($"My rectangle area is {shape.Area()}");

shape = square;
Console.WriteLine($"My square area is {shape.Area()}");

shape = triangle;
Console.WriteLine($"My triangle area is {shape.Area()}");

Console.WriteLine();

Student student = new Student(1, "Matias Vallejos", 18, "IES21");
SingerPerson singerPerson = new Singer(1, "Noeli Vallejos", 36, "Forever After All");

void AreUnderAge(AbstractPerson person) 
{
    person.GetPerson();
    Console.WriteLine($"Underage: {person.CheckAgeUnderLine().ToString()}\n");
}

AreUnderAge(student);
AreUnderAge(singerPerson);