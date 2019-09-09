using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Notes.Api.DataAccess;
using Notes.Api.Dtos;
using Notes.Api.Models;

namespace Notes.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotesController : ControllerBase
    {
        private readonly AppDbContext _dbContext;

        public NotesController(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }


        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<Note>> Get()
        {
            return _dbContext.Set<Note>();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<Note> Get(int id)
        {
            return _dbContext.Set<Note>().SingleOrDefault(note => note.Id == id);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] NoteDto noteDto)
        {
            var note = new Note(noteDto.Title, noteDto.Content);
            _dbContext.Notes.Add(note);
            _dbContext.SaveChanges();
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] NoteDto noteDto)
        {
            var note = _dbContext.Notes.SingleOrDefault(n => n.Id == id);
            note.Title = noteDto.Title;
            note.Content = noteDto.Content;
            _dbContext.Notes.Update(note);
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var note = _dbContext.Notes.SingleOrDefault(n => n.Id == id);
            _dbContext.Notes.Remove(note);
        }
    }
}
