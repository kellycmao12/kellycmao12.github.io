document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        var scrollPosition = window.scrollY;

        // Adjust the threshold value as needed
        if (scrollPosition >= 100) {
            document.getElementById("project-slide-1").style.transform = "translateX(0)";
            document.getElementById("label-slide-1").style.transform = "translateX(0)";
        }

        // Adjust the threshold value as needed
        if (scrollPosition >= 700) {
            document.getElementById("project-slide-2").style.transform = "translateX(0)";
            document.getElementById("label-slide-2").style.transform = "translateX(0)";
        }

        // Adjust the threshold value as needed
        if (scrollPosition >= 1300) {
            document.getElementById("project-slide-3").style.transform = "translateX(0)";
            document.getElementById("label-slide-3").style.transform = "translateX(0)";
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var nyc = document.getElementById('nyc');
    var nycImage = document.querySelector(".nyc-image");

    var sf = document.getElementById('sf');
    var sfImage = document.querySelector(".sf-image");

    var creativeTech = document.getElementById('creative-tech');
    var creativeTechImage = document.querySelector(".creative-tech-image");

    nyc.addEventListener('mouseover', function() {
        nyc.style.color = '#68ADFF;';
        nycImage.style.display = "block";
    });

    nyc.addEventListener('mouseout', function() {
        nyc.style.color = '#68ADFF;';
        nycImage.style.display = "none";
    });

    sf.addEventListener('mouseover', function() {
        sf.style.color = '#FF922E';
        sfImage.style.display = "block";
    });

    sf.addEventListener('mouseout', function() {
        sf.style.color = '#333333';
        sfImage.style.display = "none";
    });

    creativeTech.addEventListener('mouseover', function() {
        creativeTech.style.color = '#679fff';
        creativeTechImage.style.display = "block";
    });

    creativeTech.addEventListener('mouseout', function() {
        creativeTech.style.color = '#333333';
        creativeTechImage.style.display = "none";
    });
});