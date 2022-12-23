import React, { Dispatch } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';

import { getMusicData } from '../store/actions';
import { IMusicData } from '../store/interfaces';
import DisplayTable from './DispalyTable';

const { useState, useEffect } = React;

// component to display search field and button
export default function DisplayMusicData() {
  const dispatch: Dispatch<any> = useDispatch();
  const result: IMusicData[] = useSelector((state: any) => state.musicData.musicData);
  const showNoDataError: boolean = useSelector((state: any) => state.musicData.noDataError);
  const showErrorMsg: string = useSelector((state: any) => state.musicData.error);
  const isLoading: boolean = useSelector((state: any) => state.musicData.loader);

  const itemsPerPage: number = 10;
  const [searchValue, setSearchValue] = useState<string>('');
  const [hasMore, setHasMore] = useState(true);
  const [dataLoadIndex, setDataLoadIndex] = useState<number>(itemsPerPage);

  useEffect(() => {
    dispatch(getMusicData("null"));
  }, [dispatch]);

  useEffect(() => {
    setDataLoadIndex(itemsPerPage);
    if (result.length > itemsPerPage) setHasMore(true);
  }, [result]);

  // on click of search button
  const onSearch = () => {
    if (searchValue) dispatch(getMusicData(searchValue.replace(/\s/g, '+')));
    else dispatch(getMusicData("null"));
  }

  // to load data for infinite scroll
  const onMusicDataLoad = () => {
    if (dataLoadIndex >= result.length) {
      setHasMore(false);
    }
    else {
      setTimeout(() => {
        setDataLoadIndex(dataLoadIndex + itemsPerPage);
      }, 1000);
    }
  }

  // to display 10 data at a time in table
  const getMusicDataList = (): IMusicData[] => {
    return result.slice(0, dataLoadIndex);
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-5 mt-3 mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search about an artist, album or song"
              onChange={e => setSearchValue(e.target.value)}
            />
          </div>
          <div className="col-3 mt-3 mb-3">
            <button
              type="button"
              className="btn btn-primary"
              onClick={onSearch}
            >Search
            </button>
          </div>
        </div>
        <div className="row">
          {result.length > 0 &&
            <InfiniteScroll
              pageStart={0}
              loadMore={onMusicDataLoad}
              hasMore={hasMore}
              loader={<div className="loader" key={0}>Loading...</div>}
              useWindow={true}
            >
              <DisplayTable
                musicDataList={getMusicDataList()}
                isLoading={isLoading}
              />
            </InfiniteScroll>}
        </div>
        <div className="row">
          {showNoDataError && <p>There are no results to show</p>}
          {(showErrorMsg.length > 0) && <p>{showErrorMsg}</p>}
        </div>
      </div>
    </>
  );
};
