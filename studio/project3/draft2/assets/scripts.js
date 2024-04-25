(function () {
      const second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;
  
      // January 1st, 2030
      const countDown = new Date("January 1, 2030 00:00:00").getTime();
  
      const x = setInterval(function() {    
  
          const now = new Date().getTime(),
                distance = countDown - now;
  
          document.getElementById("days").innerText = Math.floor(distance / (day)).toLocaleString(); 
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour));
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute));
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
  
      }, 0);
  })();

  function playNextVideo() {
      var video1 = document.getElementById("video1");
      var video2 = document.getElementById("video2");
      video1.style.display = "none"; // Hide the first video
      video2.play(); // Play the second video
  }
  