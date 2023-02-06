using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission4.Models
{
    //Grade calcualtor model gets user input and validates form responses
    public class gradeCalculatorModel
    {
        [Required]
        [MaxLength(3)]
        [Range(0, 100, ErrorMessage = "Value for {0} must be between {1} and {2}.")]
        public string assignment { get; set; }
        [Required]
        [MaxLength(3)]
        [Range(0, 100, ErrorMessage = "Value for {0} must be between {1} and {2}.")]
        public string group_project { get; set; }
        [Required]
        [MaxLength(3)]
        [Range(0, 100, ErrorMessage = "Value for {0} must be between {1} and {2}.")]
        public string quiz { get; set; }
        [Required]
        [MaxLength(3)]
        [Range(0, 100, ErrorMessage = "Value for {0} must be between {1} and {2}.")]
        public string midterm { get; set; }
        [Required]
        [MaxLength(3)]
        [Range(0, 100, ErrorMessage = "Value for {0} must be between {1} and {2}.")]
        public string final { get; set; }
        [Required]
        [MaxLength(3)]
        [Range(0, 100, ErrorMessage = "Value for {0} must be between {1} and {2}.")]
        public string intex { get; set; }
    }
}
