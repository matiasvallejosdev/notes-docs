
public abstract class AbstractPerson
{
    public int Id { get; set; }
    public string Name { get; set; }
    public int Age { get; }

    public AbstractPerson(int id, string name, int age) 
    {
        this.Id = id;
        this.Name = name;
        Age = age;
    }

    public bool CheckAgeUnderLine() 
    {
        return Age > 17 ? false : true;
    }

    public abstract void GetPerson();
}

public abstract class SingerPerson : AbstractPerson
{
    public string FavoriteSong { get; set; }

    public SingerPerson(int id, string name, int age, string favoriteSong) : base(id, name, age)
    {
        FavoriteSong = favoriteSong;
    }

    public abstract void Sing();
}

public class Student : AbstractPerson
{
    public string SchoolName { get; set; }

    public Student(int id, string name, int age, string schoolName) : base(id, name, age)
    {
        SchoolName = schoolName;
    }

    public override void GetPerson()
    {
        Console.WriteLine($"I am {Name} with age {Age} and my school is {SchoolName}.");
    }
}

public class Singer : SingerPerson
{
    public Singer(int id, string name, int age, string favoriteSong) : base(id, name, age, favoriteSong) { }

    public override void GetPerson()
    {
        Console.WriteLine($"I am {Name} with age {Age} and my favorite song is {FavoriteSong}.");
    }

    public override void Sing()
    {
        Console.WriteLine($"I'm sing a song {FavoriteSong}!");
    }
}




