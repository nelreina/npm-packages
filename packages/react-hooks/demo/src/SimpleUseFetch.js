import React from 'react';
import { useFetch } from '../../src';

const SimpleUseFetch = () => {
  const { data, loading } = useFetch(
    'https://jsonplaceholder.typicode.com/users/1'
  );
  return (
    <section>
      <h3>Simple useFetch Example</h3>
      <code>
        {loading && <p>Loading...</p>}
        {!loading && <pre>{JSON.stringify(data, null, 2)}</pre>}
      </code>
    </section>
  );
};

export default SimpleUseFetch;
