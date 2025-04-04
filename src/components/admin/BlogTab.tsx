
import React from 'react';
import { Edit, Trash, FilePlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { BlogPost } from '@/types/blog';
import { useNavigate } from 'react-router-dom';

interface BlogTabProps {
  blogPosts: BlogPost[];
  onDeletePost: (id: number) => void;
}

const BlogTab = ({ blogPosts, onDeletePost }: BlogTabProps) => {
  const navigate = useNavigate();
  
  return (
    <div>
      <div className="mb-4 flex justify-end">
        <Button 
          className="bg-law-primary hover:bg-law-primary/90 text-white"
          onClick={() => navigate('/admin/blog/new')}
        >
          <FilePlus className="mr-2 h-4 w-4" />
          New Blog Post
        </Button>
      </div>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {blogPosts.length > 0 ? (
              blogPosts.map((post) => (
                <TableRow key={post.id} className="hover:bg-gray-50">
                  <TableCell>
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0">
                        <img className="h-10 w-10 rounded object-cover" src={post.image} alt="" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{post.title}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {post.category}
                    </span>
                  </TableCell>
                  <TableCell>{post.author}</TableCell>
                  <TableCell>{post.date}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm" className="text-law-secondary hover:text-law-primary mr-3">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-red-600 hover:text-red-900"
                      onClick={() => onDeletePost(post.id)}
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-8 text-gray-500">
                  No blog posts found. Create your first blog post!
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default BlogTab;
