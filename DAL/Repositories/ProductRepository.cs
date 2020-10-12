// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================

using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using DAL.Repositories.Interfaces;

namespace DAL.Repositories
{
    public class ProductRepository: IProductRepository
    {
        private ApplicationDbContext _context;

        public ProductRepository (ApplicationDbContext context)
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

        public Product GetProductById(int productId)
        {
            var product = _context.Products.FirstOrDefault(x => x.Id == productId);
            return product;
        }

        public List<Product> GetProducts()
        {
            var products = _context.Products.ToList();
            return products;
        }

        public bool SaveAll()
        {
            return _context.SaveChanges() > 0;
        }
    }
}
