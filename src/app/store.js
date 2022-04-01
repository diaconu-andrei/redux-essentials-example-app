import { configureStore } from '@reduxjs/toolkit'
import postsReducers from '../features/posts/postsSlice'
import usersReducers from '../features/users/usersSlice'
import notificationsReducer from '../features/notifications/notificationsSlice'

export default configureStore({
  reducer: {
    posts: postsReducers,
    users: usersReducers,
    notifications: notificationsReducer,
  },
})
