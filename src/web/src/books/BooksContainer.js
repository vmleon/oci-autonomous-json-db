import React from "react";
import { useQuery, gql } from "@apollo/client";
import Books from './Books';
import Loading from '../Loading';
import Warning from '../Warning';

const BOOKS = gql`
  query Books {
    books {
      title
      author
    }
  }
`;

function BooksContainer() {
  const { loading, error, data } = useQuery(BOOKS);

  if (loading) return <Loading />;
  if (error) return <Warning>{error}</Warning>;

  return <Books>{data}</Books>;
}



export default BooksContainer;
