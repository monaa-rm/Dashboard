console.log(window.innerWidth)

document.getElementById("showmenu").addEventListener("click",function(){

    let menu = document.getElementById("menu");
    let left = getComputedStyle(menu).getPropertyValue('left');
    if(left == "-80px"){
        menu.style.left = "0px"
    }else{
        menu.style.left = "-80px"
    }
})


///////////////
// document.getElementById("menu").addEventListener("click",function(e) {
//     if (e.target.parentElement.classList.contains('active')) {
//       //e.target.className = "active";
// console.log(e.target.parentElement.nodeName)
//       }else{
//         e.target.parentElement.classList.add('active');

//       }
//   });



document.getElementById("menu").addEventListener("click",function(e){
   // let elm = document.getElementsByTagName("li");
    
if(e.target.nodeName == "I"){


         if(e.target.parentElement.classList.contains("active")){

        }else{
        let elm =document.getElementById("menu").getElementsByTagName("Li")

        for(let i in elm){
console.log(elm[i])
           elm[i].className = ""
        }
         e.target.parentElement.classList.add("active")
        }
    }
})


//////////graph


var ctx = document.getElementById('myChart');
var ctx = document.getElementById("myChart");
var yLabels = {0: '1d' ,1: '2d', 2: '3d' , 3: '4d', 4: '5d', 5:'6d', 6:'7d'}
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Ariene", "Annette", "Robert","Katrhyn"],
    
        datasets: [{
            data: [2, 5, 1, 6],
            backgroundColor: [
                'rgb(247, 222, 208)',
                'rgb(209, 216, 243)',
                'rgb(238, 209, 243)',
                'rgb(214, 243, 209)'

            ],

            borderWidth: 1
        }]
    },
    options: {

        legend: {
            display: false,
            
        },
        
        title: {
            display: true,
        },
        scales: {
            y: [{
                title: {
                  display: true,
                  text: 'Your Title'
                }
              }],
            xAxes: [{
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                },
                ticks: {
                    fontSize:12
                }
            }],
            yAxes: [{
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                },
                ticks: {
                    fontSize:12,
                    min:0,
                    max:6,
                    stepSize:1,
                    callback: function(value, index, values) {
                        return yLabels[value];
                    }
                }
            }]
        }
    }
});
