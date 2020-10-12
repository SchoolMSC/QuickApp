using System.Collections.Generic;
using DAL.Models;

namespace DAL.Repositories.Interfaces
{
    public interface IAppRepository
    {
        void Add<T> (T entity) where T:class;
        void Delete<T> (T entity) where T:class;
        bool SaveAll();
        List <Urun> GetUrunler();
        Urun GetUrunById(int urunId);
    }
}