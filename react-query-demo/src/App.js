// src/App.js
import { QueryClient, QueryClientProvider } from 'react-query';
import PostsComponent from './PostsComponent'; // we'll create this next

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PostsComponent />
    </QueryClientProvider>
  );
}

export default App;
