// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================

using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DAL.Repositories.Interfaces
{
    public interface IProductRepository
    {
        void Add<T> (T entity) where T:class;
        void Delete<T> (T entity) where T:class;
        bool SaveAll();
        List <Product> GetProducts();
        Product GetProductById(int productId);
    }
}
