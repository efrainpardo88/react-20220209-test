import React from 'react';
import PageProps from '../../../propTypes/PageProps';
import { useAppDispatch } from '../../../store/hooks';
import { setPageTitle } from '../../../store/slices/PageTitleSlice';

function Home(props: PageProps) {
  // Set Title Page to browser
  const { titlePage } = props;
  if (titlePage) {
    const dispatch = useAppDispatch();
    dispatch(setPageTitle(titlePage));
  }

  return (
    <h1>HOME</h1>
  );
}

export default Home;
