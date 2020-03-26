using AutoMapper;
using DatingAPP.API.Helpers;
using DatingAPP.API.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DatingAPP.API.Dtos
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<User, UserForListDto>()
                 .ForMember(dest => dest.PhotoUrl,
                            options => options.MapFrom(src => src.Photos.FirstOrDefault(a => a.IsMain).Url))
                 .ForMember(dest => dest.Age, options => options.MapFrom(src => src.DateOfBirth.CalculateAge()));
                           
            CreateMap<User, UserForDetailsDto>()
                .ForMember(dest => dest.PhotoUrl,
                            options => options.MapFrom(src => src.Photos.FirstOrDefault(a => a.IsMain).Url))
                .ForMember(dest => dest.Age, options => options.MapFrom(src => src.DateOfBirth.CalculateAge()));

            CreateMap<Photo, UserPhotosDto>();
        }
    }
}
