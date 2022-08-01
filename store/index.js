export const state = () => {
  return {
    theme: 'light',
  }
}

export const mutations = {
  switchTheme(state) {
    state.theme = state.theme === 'light' ? 'dark' : 'light'

    if (state.theme === 'light')
      document.documentElement.classList.remove('dark')
    else document.documentElement.classList.add('dark')

    localStorage.setItem('theme', state.theme)
  },
  loadTheme(state) {
    state.theme = localStorage.getItem('theme') || 'light'
    if (process.browser && state.theme === 'dark')
      document.documentElement.classList.add('dark')
  },
}

export const getters = {
  getTheme(state) {
    return state.theme
  },
}
