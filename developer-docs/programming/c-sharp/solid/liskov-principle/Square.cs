


public class Square : IShape
{
    private int side;

    public Square(int side)
    {
        this.side = side;
    }

    public int Area()
    {
        return Convert.ToInt32(MathF.Pow(side, 2));
    }
}


