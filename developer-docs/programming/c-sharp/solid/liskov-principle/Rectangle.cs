


public class Rectangle : IShape 
{
    private int b;
    private int h;

    public Rectangle(int b, int h)
    {
        this.b = b;
        this.h = h;
    }

    public int Area()
    {
        return b * h;
    }
}


