namespace DAL.Models
{
    public class Urun
    {
        public int Id {get;set;}
        public int Price {get;set;}
        public int CategoryId {get;set;}
        public string Image {get;set;}
        public string Description {get;set;}

        public string Name {get;set;}
        
    }
}