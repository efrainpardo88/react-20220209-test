import {
  Grid,
  Paper,
  TextField,
  Typography,
  Divider,
} from '@mui/material';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import WebPage from '../../../propTypes/WebPage';
import bingService from '../../../services/bing.services';
import './Bing.css';
import format from '../../../utils/Format';
import PageProps from '../../../propTypes/PageProps';
import { useAppDispatch } from '../../../store/hooks';
import { setPageTitle } from '../../../store/slices/PageTitleSlice';

function Bing(props: PageProps) {
  // Set Title Page to browser
  const { titlePage } = props;
  if (titlePage) {
    const dispatch = useAppDispatch();
    dispatch(setPageTitle(titlePage));
  }

  const [query, setQuery] = useState('');
  const [webPages, setWebPages] = useState<WebPage[] | []>([]);
  const [matches, setMatches] = useState<number | null>(null);

  useEffect(() => {
    if (query) {
      bingService.search(query).then((data: any) => {
        setMatches(data.webPages.totalEstimatedMatches);
        setWebPages(data.webPages.value);
      });
    }
  }, [query]);

  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.currentTarget.value);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <h1>BING SEARCH</h1>
        <br />
        <Paper className="search-container" sx={{ p: 2 }}>
          <TextField style={{ width: '100%' }} label="Search on Bing" value={query} onChange={handleQueryChange} />
          {
            matches !== null && (
              <div className="results">
                {`${format.number(matches)} of results`}
              </div>
            )
          }
          {
            webPages.map((item: any) => (
              <Grid
                className="web-item"
                key={item.id}
                item
                xs={12}
                md={8}
                sx={{
                  '& .markdown': {
                    py: 3,
                  },
                }}
              >
                <Link to={item.url}>
                  <Typography variant="h6" gutterBottom>
                    {item.name}
                  </Typography>
                </Link>
                <Divider />
                <p>
                  {item.snippet}
                </p>
              </Grid>
            ))
          }
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Bing;
