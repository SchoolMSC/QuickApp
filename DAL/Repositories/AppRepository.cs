using System.Collections.Generic;
using System.Linq;
using DAL.Models;
using DAL.Repositories.Interfaces;

namespace DAL.Repositories
{
    public class AppRepository : IAppRepository
    {
        private ApplicationDbContext _context;

        public AppRepository (ApplicationDbContext context)
        {
            _context = context;
        }

        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public List<Urun> GetUrunler()
        {
            var urunler = _context.Urunler.ToList();
            return urunler;
        }

        public Urun GetUrunById(int urunId)
        {
            var urun = _context.Urunler.FirstOrDefault(x => x.Id == urunId);
            return urun;
        }

        public bool SaveAll()
        {
            return _context.SaveChanges() > 0 ;
        }
    }
}