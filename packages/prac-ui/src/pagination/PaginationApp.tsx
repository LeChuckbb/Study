import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import axios from "axios";

interface Airline {
  id: number;
  name: string;
  country: string;
  logo: string;
  slogan: string;
  head_quaters: string;
  website: string;
  established: string;
}
interface Passenger {
  _id: string;
  name: string;
  trips: number;
  airline: Airline;
  __v: number;
}
interface Response {
  totalPassenger: number;
  totalPages: number;
  data: Array<Passenger>;
}

const PaginationApp: React.FC = () => {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  // items : 10개 단위 data
  const [itesm, setItems] = useState<Array<Passenger>>([]);

  const handlePageChange = (currentPage: number): void => {
    setPage(currentPage);
  };

  useEffect(() => {
    const fetch = async () => {
      const params = { page, size: 10 };
      const {
        data: { totalPages, data },
      } = await axios.get<Response>(
        "https://api.instantwebtools.net/v1/passenger",
        {
          params,
        }
      );
      setTotalPages(totalPages);
      setItems(data);
    };
    fetch();
  }, [page]);

  return (
    <div className="App">
      <ul>
        {itesm.map((item) => (
          <li key={item._id}>{item.name}</li>
        ))}
      </ul>
      <Pagination
        count={totalPages}
        page={page}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default PaginationApp;
