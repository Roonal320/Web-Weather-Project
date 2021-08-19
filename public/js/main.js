const cityname=document.getElementById('cityname');
const submitbtn=document.getElementById('submitbtn');
const city_name=document.getElementById('city_name');
const temp=document.getElementById('temp');
const temp_status=document.getElementById('temp_status');
const datahide=document.querySelector('.middle_layer');

const getinfo=async(event)=>{
     event.preventDefault();
     let cityval=cityname.value;
    if(cityval==='')
    {
        city_name.innerText='Plz write the name before search';
        datahide.classList.add('data_hide');
    }
    else
    {    try{ 
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=8e0bda7eb9b4deffd932bd9db697fedb`;
        let response = await fetch(url);
        const data= await response.json();
        const arrdata=[data];
        temp.innerText=arrdata[0].main.temp;
        let  tempmod=arrdata[0].weather[0].main;
        city_name.innerText=`${arrdata[0].name},${arrdata[0].sys.country}`;
        if(tempmod=='Clear'){
            temp_status.innerHTML="<i class='fas fa-sun' style='color:yellow'></i>";
        }
        else if(tempmod=='Clouds'){
            temp_status.innerHTML="<i class='fas fa-cloud-rain' style='color:grey'></i>";
        }
        else if(tempmod=='Rain'){
            temp_status.innerHTML="<i class='fas fa-cloud-showers-heavy' style='color:blue'></i>";
        }
        else if(tempmod=='haze') {
            temp_status.innerHTML="<i class='fas fa-cloud-rain' style='color:grey'></i>";
        }
        else  {
            temp_status.innerHTML="<i class='fas fa-cloud' style='color:white'></i>";
        }
        datahide.classList.remove('data_hide');
        }
        catch{
         city_name.innerText="plz write the city name properly";
         datahide.classList.add('data_hide');
        }

    }
    };
 submitbtn.addEventListener('click',getinfo);