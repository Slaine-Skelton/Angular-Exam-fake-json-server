interface ICar
{
    make: string;
    model: string;
    year: string;
    imageUrl: string;
    quality: ICarQuality[];
}

interface ICarQuality
{
    name: string;
    rating: string;
}