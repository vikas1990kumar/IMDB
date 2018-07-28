

$('document').ready(()=>{

  $(".section").hide();

  

$("#Submit").click(() => {

     $(".section").show(3000);
           
           let id=$("#inputex").val();
           /*alert(id);*/
            

  $.ajax({

    type:'GET',

    dataType:'json',

    async: true,

    url:`https://www.omdbapi.com/?i=${id}&apikey=8fd82f3e`,
   
   

    success : (data) => {

       console.log(data);

            let allMovie = data

            $(".title").append(data.Title);
            $(".year").append(data.Year);
            $(".plot").append(data.Plot);
            $(".release").append(data.Released);
            $(".runtime").append(data.Runtime);
            $(".genre").append(data.Genre);
            $(".director").append(data.Director);
            $(".actors").append(data.Actors);
            $(".writer").append(data.Writer);
            $(".imdbid").append(data.imdbID);
            $(".votes").append(data.imdbVotes);
            $(".metascore").append(data.Metascore);
            $(".income").append(data.BoxOffice);
            $(".language").append(data.Language);
            $(".awards").append(data.Awards);
            $(".nation").append(data.Country);
          

          if(allMovie.Poster=="N/A"){
                
                $(".img").attr("src","dummy.jpg") 

            }
            else{
            
            $(".img").attr("src",allMovie.Poster) 

            }
 

    },   error :(data) =>{

        alert("some error occured");    

    },

    timeout: 3000

   });  

        });


$("#Submit1").click(() => {

     $(".section").show(3000);
           
           let name=$("#input2").val();
           
           
           /*alert(name);*/
            

  $.ajax({

    type:'GET',

    dataType:'json',

    async: true,

    url:`https://www.omdbapi.com/?t=${name}&apikey=8fd82f3e`,
    /*url:`https://www.omdbapi.com/?t=${name}+y=${year}&apikey=8fd82f3e`,*/
   

    success : (data) => {

       console.log(data);

       let allMovie = data


       

            $(".title").append(data.Title);
            $(".year").append(data.Year);
            $(".plot").append(data.Plot);
            $(".release").append(data.Released);
            $(".runtime").append(data.Runtime);
            $(".genre").append(data.Genre);
            $(".director").append(data.Director);
            $(".actors").append(data.Actors);
            $(".writer").append(data.Writer);
            $(".imdbid").append(data.imdbID);
            $(".votes").append(data.imdbVotes);
            $(".metascore").append(data.Metascore);
            
           
            $(".income").append(data.BoxOffice);
            $(".language").append(data.Language);
            $(".awards").append(data.Awards);
            $(".nation").append(data.Country);
          

          if(allMovie.Poster=="N/A"){
                
                $(".img").attr("src","dummy.jpg") 

            }
            else{
            
            $(".img").attr("src",allMovie.Poster) 

            }
           

    },   error :(data) =>{

        alert("some error occured");    

    },

    timeout: 3000

   });  

        });

$("#Submit2").click(() => {

     $(".section").show(3000);
           
           /*let name=$("#input3").val();*/
           let year=$("#input4").val();
           /*alert(year);*/
            

  $.ajax({

    type:'GET',

    dataType:'json',

    async: true,

    url:`https://www.omdbapi.com/?t=${year}&apikey=8fd82f3e`,
    /*url:`https://www.omdbapi.com/?t=${name}+y=${year}&apikey=8fd82f3e`,*/
   

    success : (data) => {

       console.log(data);

       let allMovie = data


       /*if(name!=data.Title){
             alert("Enter a valid movie name")
            
          }

          else{*/

            $(".title").append(data.Title);
            $(".year").append(data.Year);
            $(".plot").append(data.Plot);
            $(".release").append(data.Released);
            $(".runtime").append(data.Runtime);
            $(".genre").append(data.Genre);
            $(".director").append(data.Director);
            $(".actors").append(data.Actors);
            $(".writer").append(data.Writer);
            $(".imdbid").append(data.imdbID);
            $(".votes").append(data.imdbVotes);
            $(".metascore").append(data.Metascore);
            $(".income").append(data.BoxOffice);
            $(".language").append(data.Language);
            $(".awards").append(data.Awards);
            $(".nation").append(data.Country);
          

          if(allMovie.Poster=="N/A"){
                
                $(".img").attr("src","dummy.jpg") 

            }
            else{
            
            $(".img").attr("src",allMovie.Poster) 

            }
           

    },   error :(data) =>{

        alert("some error occured");    

    },

    timeout: 3000

   });  

        });

$("#Clear").click(() =>{
    
    
    location. reload(true);


  })
$("#Clear1").click(() =>{
    
     location. reload(true);

  })
$("#Clear2").click(() =>{
    
    
    location. reload(true);


  })
        
})