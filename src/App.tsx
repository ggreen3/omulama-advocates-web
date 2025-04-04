
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Index from '@/pages/Index';
import Blog from '@/pages/Blog';
import BlogPost from '@/pages/BlogPost';
import Login from '@/pages/Login';
import Admin from '@/pages/Admin';
import NotFound from '@/pages/NotFound';
import '@/App.css';

// Add event listener to intercept form submissions and store appointment data
window.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('submit', (e) => {
    const form = e.target as HTMLFormElement;
    if (form.id === 'consultation-form') {
      e.preventDefault();
      const formData = new FormData(form);
      const appointment = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        service: formData.get('service'),
        message: formData.get('message'),
        date: formData.get('date') || new Date().toISOString().split('T')[0],
        time: formData.get('time') || '10:00 AM',
        status: 'pending'
      };
      
      // Store in localStorage
      const existingRequests = localStorage.getItem('consultationRequests');
      const requests = existingRequests ? JSON.parse(existingRequests) : [];
      requests.push(appointment);
      localStorage.setItem('consultationRequests', JSON.stringify(requests));
      
      // Send email (would use a real email service in production)
      console.log('Sending consultation request to georgeobuya883@gmail.com:', appointment);
      
      // Reset form and show success message
      form.reset();
      alert('Thank you! Your consultation request has been sent. We will contact you shortly.');
    }
  });
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
  },
  {
    path: '/blog',
    element: <Blog />,
  },
  {
    path: '/blog/:id',
    element: <BlogPost />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/admin',
    element: <Admin />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}

export default App;
