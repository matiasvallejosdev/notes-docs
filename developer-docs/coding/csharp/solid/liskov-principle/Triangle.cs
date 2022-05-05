


public class Triangle : IShape 
{
    private int b;
    private int h;

    public Triangle(int b, int h)
    {
        this.b = b;
        this.h = h;
    }

    public int Area()
    {
        return (b * h) / 2;
    }
}


