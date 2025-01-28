using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlazorWebsite.Components.Models
{
    public class CardItem
    {
        public string ImageUrl { get; set; }
        public string ImageAltText { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }

        public CardItem(string imageUrl, string imageAltText, string title, string description)
        {
            ImageUrl = imageUrl;
            ImageAltText = imageAltText;
            Title = title;
            Description = description;
        }
    }
}