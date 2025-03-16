import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import PostsComponent from './PostsComponent';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PostsComponent />
    </QueryClientProvider>
  );
}

export default App;
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';  // Import React Query
import PostsComponent from './PostsComponent';  // Import your PostsComponent

// Create a new QueryClient instance
const queryClient = new QueryClient();

function App() {
  return (
    // Wrap the entire app with QueryClientProvider
    <QueryClientProvider client={queryClient}>
      <PostsComponent /> {/* Render the PostsComponent */}
    </QueryClientProvider>
  );
}

export default App;

