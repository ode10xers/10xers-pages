document.addEventListener("DOMContentLoaded", () => {
   const servicesLink = document.getElementById("services-link");
 
   if (servicesLink) {
     const sectionId = servicesLink.getAttribute("href");
 
     if (sectionId && sectionId.startsWith("#")) {
       const baseUrl = `${window.location.origin}${sectionId}`;
       servicesLink.setAttribute("href", baseUrl);
     }
   }
 });
 