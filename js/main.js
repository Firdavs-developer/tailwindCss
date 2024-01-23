let elModeBtn = document.querySelector(".mode-btn");
// On page load or when changing themes, best to add inline in `head` to avoid FOUC

elModeBtn.addEventListener("click", function(){
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        localStorage.theme = 'light'
        document.documentElement.classList.remove('dark')
    } else {
        localStorage.theme = 'dark'
        document.documentElement.classList.add('dark')
      }
      
      // Whenever the user explicitly chooses light mode
      
      // Whenever the user explicitly chooses dark mode
})
  
  // Whenever the user explicitly chooses to respect the OS preference
  localStorage.removeItem('theme')