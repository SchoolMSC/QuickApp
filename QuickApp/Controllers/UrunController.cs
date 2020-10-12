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
    public class UrunController : ControllerBase
    {
        
        private readonly ApplicationDbContext _context;
        private readonly IAppRepository _repository;
        private readonly IMapper _mapper;

        public UrunController (ApplicationDbContext context, IAppRepository repository , IMapper mapper)
        {
            _context = context;
            _repository = repository;
            _mapper = mapper;
        }

        // GET: api/values
        [HttpGet]
        public ActionResult GetUrunler()
        {
            var urunler = _repository.GetUrunler();
            //var urunlerToReturn = _mapper.Map<List<UrunForListDto>>(urunler);
            return Ok(urunler); 
        }
        
        [HttpGet("{urunId}")]
        public ActionResult GetUrunById(int urunId)
        {
            var urun = _repository.GetUrunById(urunId);
            //var urunToReturn = _mapper.Map<UrunForListDto>(urun);
            return Ok(urun); 
        }

        [HttpPost]
        [Route("add")]

        public ActionResult Add([FromBody]Urun urun)
        {
            _repository.Add(urun);
            _repository.SaveAll();
            return Ok(urun);
        }

        [HttpDelete("{urunId}")]
        public ActionResult Delete(int urunId)
        {
            var urun = _repository.GetUrunById(urunId);
            var urunler = _repository.GetUrunler();
            if (urun == null)
            {
                return NotFound();
            }

            _context.Urunler.Remove(urun);
            _repository.SaveAll();

            return Ok(urunler);
        }

        [HttpPut("update/{urunId}")]
        public IActionResult Update( [FromBody]Urun urun, int urunId)
        {
            var eskiUrun = _repository.GetUrunById(urunId);
            
            if(urun != null)
            {
                eskiUrun.CategoryId = urun.CategoryId;
                eskiUrun.Description = urun.Description;
                eskiUrun.Image = urun.Image;
                eskiUrun.Name = urun.Name;
                eskiUrun.Price = urun.Price;
            }
            _repository.SaveAll();
            return Ok(eskiUrun);
        }
    }
}
