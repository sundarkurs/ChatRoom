using System;
using System.ComponentModel.DataAnnotations;

namespace WebChat.Models
{
    public class Message
    {
        public int Id { get; set; }

        [Required]
        public string Username { get; set; }

        [Required]
        public string Text { get; set; }

        public DateTime When { get; set; }

        public string UserId { get; set; }
    }
}
