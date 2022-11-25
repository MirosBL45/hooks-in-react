import useFetch from './hooks/useFetch';

function CustonHookExample1() {
  const { data, loading } = useFetch(
    'https://jsonplaceholder.typicode.com/posts',
    {}
  );

  if (loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <div>
      {/* {data.map((post) => (
        <h5 key={post.id}>{post.title}</h5>
      ))} */}
      <h5>Remove comment in code to see results</h5>
    </div>
  );
}

export default CustonHookExample1;
