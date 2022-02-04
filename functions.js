function classArender(array,index){
    card.innerHTML=array[index].students.map(item=>{
      return `
      <div class="col-3 parag m-3 border border-1">
      <div class="bg-primary m-0 p-2  mt-3">
          <p class="text-white bg-primary  ps-2">${item.studentName}</p>
      </div>
      ${item.subject.map(subject=>{
        return `
        <div class="d-flex flex-row justify-content-between mt-1 mb-1 me-3 ms-3">
                  <p>${subject.subjectName}</p><span>${subject.grade}</span>
              </div>
        
        `
      }).join("")}
      </div>
      `
    }).join("")
  }

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