import { useEffect, useState } from 'react';
import styles from '../styles/Uebersicht.module.css';

export default function Uebersicht() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/uebersicht');
      const result = await res.json();
      setData(result);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Übersicht der Lieder</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Literatur</th>
            <th>Nummer</th>
            <th>Titel</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.ID}>
              <td>{item.ID}</td>
              <td>{item.Literatur}</td>
              <td>{item.Nummer}</td>
              <td>{item.Titel}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}