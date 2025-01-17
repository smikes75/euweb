import { useState, useEffect } from 'react';
import axios from 'axios';

interface StrapiResponse {
  data: Array<{
    id: number;
    documentId: string;
    Title: string;
    obsah: Array<{
      type: string;
      children: Array<{
        type: string;
        text: string;
      }>;
    }>;
    Slug: string;
  }>;
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    }
  }
}

export const StrankyTest = () => {
  const [data, setData] = useState<StrapiResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get<StrapiResponse>('http://localhost:1337/api/strankies')
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Chyba:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="p-4">Načítám...</div>;
  }

  if (!data || !data.data.length) {
    return <div className="p-4">Žádné stránky nenalezeny</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      {data.data.map(page => (
        <div key={page.id} className="bg-white shadow-lg rounded-lg p-6 mb-4">
          <h2 className="text-2xl font-bold mb-4">{page.Title}</h2>
          <div className="prose">
            {page.obsah.map((block, index) => (
              <div key={index}>
                {block.children.map((child, childIndex) => (
                  <p key={childIndex}>{child.text}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}