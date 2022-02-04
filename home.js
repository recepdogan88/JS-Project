let a_math = notes (mainData, 0, "Matematik")
let a_kimya=notes (mainData, 0, "Kimya")
let a_fizik=notes (mainData, 0, "Fizik")
let a_geometri=notes (mainData, 0, "Geometri")



let labels2 = ['Matematik', 'Fizik', 'Kimya', 'Geometri'];
let data2 = [a_math, a_kimya, a_fizik, a_geometri,0,100];
let colors2 = ['#49A9EA', '#36CAAB', '#34495E', '#B370CF'];

let myChart2 = document.getElementById("myChart2").getContext('2d');

let chart2 = new Chart(myChart2, {
    type: 'bar',
    data: {
        labels: labels2,
        datasets: [ {
            data: data2,
            backgroundColor: "#36CAAB"
        }]
    },
    options: {
        title: {
            text: "",
           display: true
        },
        legend: {
          display: false
        }
    }
});







function notes(array,index,name){
  let sum=array[index].students.map(item=>{
    return item.subject.filter(item=>{
       return item.subjectName==name
     }) .map(item=>item.grade)
})
    let note=sum.filter(e => e.length)
              .flat(1)
    let average=note.reduce((acc,item)=>acc+item)/note.length
    return average
}










