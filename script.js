document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("a");
  
    links.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
  
        const activeLink = document.querySelector("a.expand");
  
        if (activeLink && activeLink !== this) {
          activeLink.classList.remove("expand");
          activeLink.classList.add("shrink");
          
          setTimeout(() => {
            activeLink.classList.remove("shrink");
          }, 1000);
  
        }
  
        if (!this.classList.contains("expand")) {
          this.classList.add("expand");
          this.classList.add("selected");
        } else {
          this.classList.remove("expand", "shrink");
          this.classList.remove("selected");
        }
      });
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("TextColdplay");

    header.addEventListener("click", function () {
        location.reload();
    });
});
