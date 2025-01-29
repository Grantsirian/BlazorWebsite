using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BlazorWebsite.Components.Models
{
    public class Contact
    {
        [Required (ErrorMessage = "Please provide your full name.")]
        public string FullName { get; set; }
        [Required (ErrorMessage = "Please provide a subject line.")]
        public string Subject { get; set; }
        [Required (ErrorMessage = "Please share your message with us.")]
        public string Message { get; set; }
        [Required (ErrorMessage = "Please provide your email address.")]
        public string EmailAddress { get; set; }
    }
}