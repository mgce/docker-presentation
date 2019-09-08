using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Notes.Api.Models
{
    public class Note
    {
        public long Id { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }

        public Note(string title, string content)
        {
            Title = title;
            Content = content;
        }
    }
}
