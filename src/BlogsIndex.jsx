export function BlogsIndex(props) {
  return (
    <div>
      <h1>All blogs</h1>
      {props.blogs.map((blog) => (
         <div key={blog.id}>
           <h2>{blog.name}</h2>
           <img src={blog.url} />
           <p>Width: {blog.width}</p>
           <p>Height: {blog.height}</p>
         </div>
       ))}




    </div>
  );
}