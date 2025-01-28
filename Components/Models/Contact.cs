using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlazorWebsite.Components.Models
{
    public class Contact
    {
        public string FullName {get; set;}
        public string Subject {get; set;}
        public string Message {get; set;}
        public string EmailAddress {get; set;}
    }
}