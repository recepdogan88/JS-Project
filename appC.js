let card=document.querySelector("#carde")
let footer=document.querySelector("#footerA")
document.querySelector(".head-class").innerHTML=`Class C (${mainData[2].students.length} Students)`


classArender(mainData,2)


function footerRender(){
    footer.innerHTML=`
 <div class="col-3">
           <span class="fs-6 fw-bold">Matematik</span>
           <span class="bg-success p-1 ms-1">${notes(mainData,2,"Matematik")}</span>
        </div>
        <div class="col-3">
          <span class="fs-6 fw-bold">Geometri</span>
          <span class="bg-success p-1  ms-1">${notes(mainData,2,"Geometri")}</span>
       </div>
       <div class="col-3">
        <span class="fs-6 fw-bold">Fizik</span>
        <span class="bg-success p-1  ms-1">${notes(mainData,2,"Fizik")}</span>
     </div>
     <div class="col-3">
      <span class="fs-6 fw-bold">Kimya</span>
      <span class="bg-success p-1  ms-1">${notes(mainData,2,"Kimya")}</span>
   </div>
      </div>
 
 
 `
}
footerRender()

