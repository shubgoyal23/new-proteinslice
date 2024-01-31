import { configureStore } from '@reduxjs/toolkit'
import authSrevice from './authSlice'
import themeService from './themeSlice'

export default configureStore({
  reducer: {
    authentication: authSrevice,
    theme: themeService
  }
})