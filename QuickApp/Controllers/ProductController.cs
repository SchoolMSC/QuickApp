using System;
using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using DAL;
using DAL.Dtos;
using DAL.Models;
using DAL.Repositories.Interfaces;
using Microsoft.AspNetCore.Mvc;
using QuickApp.ViewModels;

namespace QuickApp.Controllers
{
    [Route("api/[controller]")]
    public class ProductController : ControllerBase
    {
        
        private readonly ApplicationDbContext _context;
        private readonly IProductRepository _repository;
        private readonly IMapper _mapper;

        public ProductController (ApplicationDbContext context, IProductRepository repository , IMapper mapper)
        {
            _context = context;
            _repository = repository;
            _mapper = mapper;
        }

        // GET: api/values
        [HttpGet]
        public ActionResult GetProducts()
        {
            var products = _repository.GetProducts();
            //var urunlerToReturn = _mapper.Map<List<UrunForListDto>>(urunler);
            return Ok(products); 
        }
        
        [HttpGet("{productId}")]
        public ActionResult GetProductById(int productId)
        {
            var product = _repository.GetProductById(productId);
            //var urunToReturn = _mapper.Map<UrunForListDto>(urun);
            return Ok(product); 
        }

        [HttpPost]
        [Route("add")]

        public ActionResult Add([FromBody]Product product)
        {
            _repository.Add(product);
            _repository.SaveAll();
            return Ok(product);
        }

        [HttpDelete("{productId}")]
        public ActionResult Delete(int productId)
        {
            var product = _repository.GetProductById(productId);
            var products = _repository.GetProducts();
            if (product == null)
            {
                return NotFound();
            }

            _context.Products.Remove(product);
            _repository.SaveAll();

            return Ok(products);
        }

        [HttpPut("update/{productId}")]
        public IActionResult Update( [FromBody]Product product, int productId)
        {
            var oldProduct = _repository.GetProductById(productId);
            
            if(product != null)
            {
                oldProduct.Description = product.Description;
                oldProduct.Icon = product.Icon;
                oldProduct.Name = product.Name;
                oldProduct.BuyingPrice = product.BuyingPrice;
                oldProduct.SellingPrice = product.SellingPrice;
                oldProduct.UnitsInStock = product.UnitsInStock;
                oldProduct.IsActive = product.IsActive;
            }
            _repository.SaveAll();
            return Ok(oldProduct);
        }
    }
}
