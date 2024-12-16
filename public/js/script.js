window.addEventListener('DOMContentLoaded',()=>{
  
    const search = document.getElementById('search');
    const result = document.getElementById('results');
    const spinner = document.querySelector('.spinner');
    const genres = document.querySelectorAll('.genreButton');

    window.location.href = '';
    genres.forEach(button => {
      button.addEventListener('click', function() {
          const genre = this.getAttribute('data-genre');
          window.location.href = `anime/search?genre=${genre}`;
      });
    });

    document.addEventListener('click',(e)=>{
      if(!e.target.classList.contains(result)){
        result.classList.add('hidden');
      } 
    })

    search.addEventListener('input',(e)=>{
      const query = e.target.value.trim();
      console.log(query);
      getResult(query);
      result.classList.remove('hidden');
    })

    const getResult  = async (query) => {
      try {
        const response = await axios.get(`https://api.jikan.moe/v4/anime?q=${query}?search_query_sort=asc`);
        spinner.classList.add('active');
        const data = response.data.data;
        spinner.classList.remove('active');
        displayResults(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    const  displayResults = (data) => {
      // Clear previous data
      result.innerHTML = '';

      // Display the search data
      if (data.length > 0) {
        data.forEach(item => {
          const listItem = document.createElement('li');
          listItem.classList.add('border-2','border-text');
          listItem.innerHTML =  `
              <div class="flex h-[100px] gap-5 hover:scale-105">
                      <div class="col1">
                        <a href="/${item.mal_id}">
                          <img src="${item.images.jpg.image_url}" class="size-full" alt="${item.title_english}">
                        </a>
                      </div>
                      <div class="col2 self-center">
                        <a href="/${item.mal_id}">
                          <p class="text-text">${item.title_english}</p>
                          <p class="text-text">Genre: <span class="text-primary">${item.genres[0].name}</span></p>
                        </a>
                      </div>
                    </div>
                `;
          result.appendChild(listItem);
        });
      } else {
        result.textContent = 'No results found.';
      }
    }

      const swiper = new Swiper('.swiper', {
    
        direction: 'horizontal',
        loop: true,
        slidesPerView: 4,
        pagination: {
          el: '.swiper-pagination',
        },
        autoplay:{
          delay:1000,
        },
        effect: 'coverflow',
        grabCursor: true,
        initailSlides: true,
        speed: 600,
        preventClick: true,
        coverflowEffect:{
          rotate: 0,
          depth: 350,
          modifier: 1,
          scale: 1,
          slideShadows:true,
          stretch: 80
        },
        on: {
          click(event) {
            swiper.slideTo(this.clickedIndex);
          }
        },

      });

  
});