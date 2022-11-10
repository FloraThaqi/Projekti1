
let page_1 =[ ["index.html", "Home"],
              ["#about", "About Us"],
              ["#services", "Services"],
              ["our-staff.html", "Our staff"], 
              ["appointment.html", "Appointment"],
              ["#contact", "Contact"],
             
            ];
function readPage() {
var setPageAsHtml ='';
for (let row = 0; row < page_1.length; row++) {
   
      setPageAsHtml += `<li class="nav-item">
              <a class="nav-link" href="${page_1[row][0]}">${page_1[row][1]}</a>
              </li>`;        
      }
    
      return setPageAsHtml;

    }

    

function dynamicMenu() {
    return `<nav class="navbar navbar-expand-sm  sticky-top navbar-dark bg-dark">
    
        <a class="navbar-brand" >DentCare</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse text-center" id="mynavbar">
            <ul class="navbar-nav me-auto">
               ${readPage()}
  
            </ul>   
            
        </div>
  
  </nav>
  `;
  }
  
  document.write(dynamicMenu());






            