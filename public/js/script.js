  
window.addEventListener('DOMContentLoaded',()=>{
  
  const search = document.getElementById('search');
  const result = document.getElementById('results');
  const spinner = document.querySelector('.spinner');
  const genres = document.querySelectorAll('.genreButton');
  

 
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
      getResult(query);
      result.classList.remove('hidden');
    })

    const getResult  = async (query) => { 
      
      try {
        const response = await axios.get(`/anime/name?query=${query}`);
        spinner.classList.add('active');
        const data = response.data;
        console.log(data);
        spinner.classList.remove('active');
        displayResults(data);
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
                      <div class="w-1/3">
                        <a href="/anime/${item.node.id}">
                          <img src="${item.node.main_picture.medium}" class="size-full" alt="${item.node.title}">
                        </a>
                      </div>
                      <div class="col2 self-center">
                        <a href="/anime/${item.node.id}">
                          <p class="text-text text-sm hover:text-accent">${item.node.title}</p>
                          <p class="text-text">Genre: <span class="text-primary">${item.node.genres[0].name}</span></p>
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
        slidesPerView: 1,
        breakpoints: {
        450: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        700: {
          slidesPerView: 3,
          spaceBetween: 10
        },
      }, 
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