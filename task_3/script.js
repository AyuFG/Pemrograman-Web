const Btn1 = document.getElementById("btn1");
      const Btn2 = document.getElementById("btn2");
      const Uteks = document.getElementById("teks");
      const Uteks2 = document.getElementById("teks2");
      const Fig = document.querySelector("figure");
      const myImg = document.querySelector("div", "img");

      function ubah() {
        Uteks.innerHTML = "Halo semuanya, perkenalkan nama saya Ayu Feblira Gersy";
        myImg.innerHTML =
          '<img src="ayu.jpeg" alt="Photo saya" title="ini saya" width="390" height="600">';
        Uteks2.innerHTML =
          "Saya adalah salah satu mahasiswi Teknik Informatika Institut Teknologi Sumatera. Saya sangat menyukai pemandangan pantai karena bisa menenangkan pikiran.";

        var y = document.createElement("iframe");
        y.setAttribute("src", "https://www.youtube.com/embed/UOCVk-51RYI");
        y.setAttribute("width", "310");
        y.setAttribute("height", "200");
        y.setAttribute("alt", "Video Tempat Favorit Saya");
        Fig.insertAdjacentHTML("afterbegin", y.outerHTML);
      }

      function cantik() {
        var CreateStyle = document.createElement("style");
        document.head.appendChild(CreateStyle);
        var styles = `
        html{margin: 0;padding: 0;}
        body{
            background-color: #d366fa;
        }
        img{
            width: 190px;
            height: 300px;
        }
        .center {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
        } 
        p{
            text-align:center;
            font-size:x-large;
            color:#24f0d9;   
        }
        button {
            background-color: #9b24f0;
            color: #f024e6;
            border-radius: 10px;
            border: none;
            padding: 10px;
            margin: 10px;
        }
        button:hover {
            color: black;
            background-color: #b2ebf2;
            transition: 1s;
        }`;
        var styleSheet = document.querySelector("style");
        styleSheet.innerText = styles;
        document.head.appendChild(styleSheet);
      } 
      Btn1.addEventListener("click", ubah);
      Btn2.addEventListener("click", cantik);