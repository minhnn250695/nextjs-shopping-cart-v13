'use client'
import React, { useEffect } from 'react';

function Detail({ params }: any) {
  useEffect(() => {
    console.log('Params', params);
  });
  return (
    <div>
      <p>This is product details page with params: {params['detail_id']}</p>
      <p>This is product details page with params: {params.detail_id}</p>
    </div>
  );
}

export default Detail;
