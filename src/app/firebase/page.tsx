'use client';
import { FC, useEffect, useState } from 'react';
import { addData, getData, updateData, deleteData } from '../firestoreUtils'

const Home: FC = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData("users");
        setData(result);
      } catch (e) {
        console.error("Error fetching data:", e);
      }
    };
    fetchData();
  }, []);

  const handleAddData = async () => {
    try {
      const userData = {
        name: "John Doe",
        email: "john.doe@example.com",
        createdAt: new Date(),
      };
      await addData("users", userData);
    } catch (e) {
      console.error("Error adding data:", e);
    }
  };

  const handleUpdateData = async (docId: string) => {
    try {
      const newData = { name: "Jane Doe" };
      await updateData("users", docId, newData);
    } catch (e) {
      console.error("Error updating data:", e);
    }
  };

  const handleDeleteData = async (docId: string) => {
    try {
      await deleteData("users", docId);
    } catch (e) {
      console.error("Error deleting data:", e);
    }
  };

  return (
    <div>
      <h1>with Next.js and TypeScript</h1>
      <button onClick={handleAddData}>Add Data</button>
      <div>
        {data.length > 0 ? (
          <ul>
            {data.map((item) => (
              <li key={item.id}>
                {item.name} - {item.email}
                <button onClick={() => handleUpdateData(item.id)}>Update</button>
                <button onClick={() => handleDeleteData(item.id)}>Delete</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
};

export default Home;
