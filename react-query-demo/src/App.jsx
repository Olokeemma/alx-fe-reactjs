import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import PostsComponent from './PostsComponent'; // Ensure the correct path for your PostsComponent

// Create a new QueryClient instance
const queryClient = new QueryClient();

function App() {
  return (
    // Wrap your app with QueryClientProvider and provide the queryClient instance
    <QueryClientProvider client={queryClient}>
      <PostsComponent />
    </QueryClientProvider>
  );
}

export default App;

