const apiKey = "api_key=009d06bc078bc6d136f5b6e1cb02e138";
const baseUrl = "https://api.themoviedb.org/3";
const imgUrl = "http://image.tmdb.org/t/p/original/";
const requests = {
  fetchNetflixOrignals: `${baseUrl}/discover/tv?${apiKey}&with_networks=213`,
  fetchPopular: `${baseUrl}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&${apiKey}`,
  fetchTrending: `${baseUrl}/trending/all/week?${apiKey}&language=en-US`,
  fetchActionMovies: `${baseUrl}/discover/movie?${apiKey}&with_genres=28`,
  fetchComedyMovies: `${baseUrl}/discover/movie?${apiKey}&with_genres=35`,
  fetchHorrorMovies: `${baseUrl}/discover/movie?${apiKey}&with_genres=27`,
  fetchRomanceMovies: `${baseUrl}/discover/movie?${apiKey}&with_genres=10749`,
};
//bannar
fetch(requests.fetchNetflixOrignals)
  .then((response) => response.json())
  .then((data) => {
    var bannerMovie =
      data.results[Math.floor(Math.random() * data.results.length - 1)];
    document.getElementById("title").innerHTML = bannerMovie.name;
    document.getElementById("desc").innerHTML = bannerMovie.overview.substr(
      0,
      50
    );
    document.getElementById("Fsec").style.backgroundImage = `url(${
      imgUrl + bannerMovie.backdrop_path
    })`;
  });
//originals slider
fetch(requests.fetchNetflixOrignals)
  .then((res) => res.json())
  .then((data) => {
    data.results.forEach((movie) => {
      const movieSlider = document.getElementById("originalslider");
      const div = document.createElement("div");
      div.classList.add("swiper-slide");
      movieSlider.appendChild(div);
      div.innerHTML = `
            <img src=${
                imgUrl + movie.backdrop_path
            } alt="" class="movieimg" >
            <div class="detailsDiv">
            <img src=${imgUrl + movie.backdrop_path} alt="">

            <div class="detailss">
            <div class="iconsdetail">
            <div>
            <i class="fa-solid fa-play"></i>
            <i class="fa-solid fa-plus"></i>
            <i class="fa-solid fa-thumbs-up"></i>
            <i class="fa-solid fa-thumbs-down"></i>
            </div>
            <i class="fa-solid fa-caret-down"></i>
            </div>
            <h3>${movie.original_title ? movie.original_title : movie.name}</h3>
            <p>${movie.overview.substr(0, 50)}</p>
            </div>
            </div>
    `;
    });
  });
//popular
fetch(requests.fetchPopular)
  .then((res) => res.json())
  .then((data) => {
    data.results.forEach((movie) => {
      const movieSlider = document.getElementById("popularslider");
      const div = document.createElement("div");
      div.classList.add("swiper-slide");
      movieSlider.appendChild(div);
      div.innerHTML = `
                <img src=${
                  imgUrl + movie.backdrop_path
                } alt="" class="movieimg" >
                <div class="detailsDiv">
                <img src=${imgUrl + movie.backdrop_path} alt="">

                <div class="detailss">
                <div class="iconsdetail">
                <div>
                <i class="fa-solid fa-play"></i>
                <i class="fa-solid fa-plus"></i>
                <i class="fa-solid fa-thumbs-up"></i>
                <i class="fa-solid fa-thumbs-down"></i>
                </div>
                <i class="fa-solid fa-caret-down"></i>
                </div>
                <h3>${
                  movie.original_title ? movie.original_title : movie.name
                }</h3>
                <p>${movie.overview.substr(0, 50)}</p>
                </div>
                </div>
    `;
    });
  });
//trending
fetch(requests.fetchTrending)
  .then((res) => res.json())
  .then((data) => {
    data.results.forEach((movie) => {
      const movieSlider = document.getElementById("trendingslider");
      const div = document.createElement("div");
      div.classList.add("swiper-slide");
      movieSlider.appendChild(div);
      div.innerHTML = `
            <img src=${imgUrl + movie.backdrop_path} alt="" class="movieimg" >
            <div class="detailsDiv">
            <img src=${imgUrl + movie.backdrop_path} alt="">

            <div class="detailss">
            <div class="iconsdetail">
            <div>
            <i class="fa-solid fa-play"></i>
            <i class="fa-solid fa-plus"></i>
            <i class="fa-solid fa-thumbs-up"></i>
            <i class="fa-solid fa-thumbs-down"></i>
            </div>
            <i class="fa-solid fa-caret-down"></i>
            </div>
            <h3>${movie.original_title ? movie.original_title : movie.name}</h3>
            <p>${movie.overview.substr(0, 50)}</p>
            </div>
            </div>
    `;
    });
  });
//Action Movies
fetch(requests.fetchActionMovies)
  .then((res) => res.json())
  .then((data) => {
    data.results.forEach((movie) => {
      const movieSlider = document.getElementById("ActionMovies");
      const div = document.createElement("div");
      div.classList.add("swiper-slide");
      movieSlider.appendChild(div);
      div.innerHTML = `
            <img src=${imgUrl + movie.backdrop_path} alt="" class="movieimg" >
            <div class="detailsDiv">
            <img src=${imgUrl + movie.backdrop_path} alt="">

            <div class="detailss">
            <div class="iconsdetail">
            <div>
            <i class="fa-solid fa-play"></i>
            <i class="fa-solid fa-plus"></i>
            <i class="fa-solid fa-thumbs-up"></i>
            <i class="fa-solid fa-thumbs-down"></i>
            </div>
            <i class="fa-solid fa-caret-down"></i>
            </div>
            <h3>${movie.original_title ? movie.original_title : movie.name}</h3>
            <p>${movie.overview.substr(0, 50)}</p>
            </div>
            </div>
    `;
    });
  });
//Comedy Movies
fetch(requests.fetchComedyMovies)
  .then((res) => res.json())
  .then((data) => {
    data.results.forEach((movie) => {
      const movieSlider = document.getElementById("ComedyMovies");
      const div = document.createElement("div");
      div.classList.add("swiper-slide");
      movieSlider.appendChild(div);
      div.innerHTML = `
            <img src=${imgUrl + movie.backdrop_path} alt="" class="movieimg" >
            <div class="detailsDiv">
            <img src=${imgUrl + movie.backdrop_path} alt="">

            <div class="detailss">
            <div class="iconsdetail">
            <div>
            <i class="fa-solid fa-play"></i>
            <i class="fa-solid fa-plus"></i>
            <i class="fa-solid fa-thumbs-up"></i>
            <i class="fa-solid fa-thumbs-down"></i>
            </div>
            <i class="fa-solid fa-caret-down"></i>
            </div>
            <h3>${movie.original_title ? movie.original_title : movie.name}</h3>
            <p>${movie.overview.substr(0, 50)}</p>
            </div>
            </div>
    `;
    });
  });
//Horror Movies
fetch(requests.fetchHorrorMovies)
  .then((res) => res.json())
  .then((data) => {
    data.results.forEach((movie) => {
      const movieSlider = document.getElementById("HorrorMovies");
      const div = document.createElement("div");
      div.classList.add("swiper-slide");
      movieSlider.appendChild(div);
      div.innerHTML = `
            <img src=${imgUrl + movie.backdrop_path} alt="" class="movieimg" >
            <div class="detailsDiv">
            <img src=${imgUrl + movie.backdrop_path} alt="">

            <div class="detailss">
            <div class="iconsdetail">
            <div>
            <i class="fa-solid fa-play"></i>
            <i class="fa-solid fa-plus"></i>
            <i class="fa-solid fa-thumbs-up"></i>
            <i class="fa-solid fa-thumbs-down"></i>
            </div>
            <i class="fa-solid fa-caret-down"></i>
            </div>
            <h3>${movie.original_title ? movie.original_title : movie.name}</h3>
            <p>${movie.overview.substr(0, 50)}</p>
            </div>
            </div>
    `;
    });
  });
//RomanceMovies
fetch(requests.fetchRomanceMovies)
  .then((res) => res.json())
  .then((data) => {
    data.results.forEach((movie) => {
      const movieSlider = document.getElementById("RomanceMovies");
      const div = document.createElement("div");
      div.classList.add("swiper-slide");
      movieSlider.appendChild(div);
      div.innerHTML = `
            <img src=${imgUrl + movie.backdrop_path} alt="" class="movieimg" >
            <div class="detailsDiv">
            <img src=${imgUrl + movie.backdrop_path} alt="">

            <div class="detailss">
            <div class="iconsdetail">
            <div>
            <i class="fa-solid fa-play"></i>
            <i class="fa-solid fa-plus"></i>
            <i class="fa-solid fa-thumbs-up"></i>
            <i class="fa-solid fa-thumbs-down"></i>
            </div>
            <i class="fa-solid fa-caret-down"></i>
            </div>
            <h3>${movie.original_title ? movie.original_title : movie.name}</h3>
            <p>${movie.overview.substr(0, 50)}</p>
            </div>
            </div>
    `;
    });
  });
