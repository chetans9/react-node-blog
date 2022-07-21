import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PostComponent from './components/Posts/PostComponent';
import ContactUsComponent from './pages/Contact/ContactUsComponent';
import HomeComponent from './pages/HomeComponent';
import NotFoundComponent from './pages/NotFoundComponent';
import PostCategoryComponent from './components/Posts/PostCategoryComponent';
import LoginComponent from './pages/Auth/LoginComponent';
import ProfileComponent from './pages/Profile/ProfileComponent';
import CreatePostComponent from './components/Profile/CreatePostComponent';
import EditPostComponent from './components/Profile/EditPostComponent';
import PostsListComponet from './components/Profile/PostsListComponent';
import ProtectedRoute from './ProtectedRoute';
import ErrorComponent from './pages/ErrorComponent';
import SearchPageComponent from './pages/SearchPageComponent';
import ProfileDetailsComponent from  './components/Profile/ProfileDetailsComponent';
import TestPageComponent from './pages/TestPageComponent';

const AppRoutes = function () {

    return (
  
      <Routes>
        <Route exact path="/" element={<HomeComponent/>} />
        <Route path="/search" element={<SearchPageComponent/>} />
        <Route exact path="/contact-us" element={<ContactUsComponent/>} />

        <Route path="/category/:title" element={<PostCategoryComponent />} />
        <Route path="/post/:id/:slug" element={<PostComponent />} />

        <Route path="/login" element={<LoginComponent />} />
        
        <Route element={<ProtectedRoute></ProtectedRoute>}>

          <Route path="/profile" element={<ProfileComponent />}>
            <Route path="details" element={<ProfileDetailsComponent />} />
            <Route path="posts" element={<PostsListComponet />} />
            <Route path="posts/create" element={<CreatePostComponent />} />
            <Route path="posts/:id/edit" element={<EditPostComponent />} />
          </Route>
        </Route>
        <Route path="/error" element={<ErrorComponent />} />

        <Route path="/test" element={<TestPageComponent />} />
        <Route path="*" element={<NotFoundComponent />} />
      </Routes>
  
  
    );
  
  }
  
  
  export default AppRoutes;