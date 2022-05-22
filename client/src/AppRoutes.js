import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PostComponent from './components/Posts/PostComponent';
import ContactUsComponent from './components/Contact/ContactUsComponent';
import HomeComponent from './components/HomeComponent';
import NotFoundComponent from './components/NotFoundComponent';
import PostCategoryComponent from './components/Posts/PostCategoryComponent';
import LoginComponent from './components/Auth/LoginComponent';
import ProfileComponent from './components/Profile/ProfileComponent';
import CreatePostComponent from './components/Profile/CreatePostComponent';
import EditPostComponent from './components/Profile/EditPostComponent';
import PostsListComponet from './components/Profile/PostsListComponent';
import ProtectedRoute from './ProtectedRoute';





const AppRoutes = function () {

    return (
  
      <Routes>
        <Route exact path="/" element={<HomeComponent/>} />
        <Route exact path="/contact-us" element={<ContactUsComponent/>} />

        <Route path="/category/:title" element={<PostCategoryComponent />} />
        <Route path="/post/:id/:slug" element={<PostComponent />} />

        <Route path="/login" element={<LoginComponent />} />
        
        <Route element={<ProtectedRoute></ProtectedRoute>}>

          <Route path="/profile" element={<ProfileComponent />}>
            <Route path="posts" element={<PostsListComponet />} />
            <Route path="posts/create" element={<CreatePostComponent />} />
            <Route path="posts/:id/edit" element={<EditPostComponent />} />
          </Route>


        </Route>

        <Route path="*" element={<NotFoundComponent />} />
      </Routes>
  
  
    );
  
  }
  
  
  export default AppRoutes;