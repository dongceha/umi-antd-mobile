import React, { Component } from 'react'
import { connect } from 'dva';
import {
  Modal,
  NavBar
} from 'antd-mobile';
import router from 'umi/router';
import Link from 'umi/link';
import InfiniteScroll from 'react-infinite-scroller';
import CustomHeader from 'components/CustomHeader/CustomHeader';
import styles from './index.less'

@connect(({ movies, loading }) => ({ 
  movies,
  loading: loading.effects['movies/getItemByType'],
}))
class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount() {
    this.loadFunc();
  }
  loadFunc = () => {
    const {
      dispatch,
      movies: { start }
    } = this.props;
    dispatch({
      type: 'movies/getItemByType',
      payload: {
        type: 'in_theaters',
        start,
        count: 20
      }
    })
  }
  render() {
    const { movies: { list, hasMore, subjects }  } = this.props;
    return (
      <div>
        <CustomHeader></CustomHeader>
        <div style={{
            height: "calc(100vh - 120px)",
            overflow: "auto"
          }}
          ref={ref => this.scrollParentRef = ref}
        >
          <InfiniteScroll
            element="div"
            hasMore={hasMore}
            className={styles.movies}
            initialLoad={false}
            loadMore={this.loadFunc}
            threshold={10}
            useWindow={false}
            getScrollParent={() => this.scrollParentRef}
          >
            <NavBar
              leftContent={list.title}
              className="customNav"
              rightContent={<span>更多></span>}
            ></NavBar>
            <div className={styles['movies-container']}>
              {
                subjects && subjects.length > 0 && subjects.map((item) => {
                  return (
                    <div key={item.id}>
                      <Link to={`movie-detail?id=${item.id}`}>
                        <img referrerPolicy="no-referrer" src={item.images.medium} />
                        <p className={styles['movie-title']}>{item.title}</p>
                      </Link>
                    </div>
                  )
                })
              }
              <div className={styles.itemempty}></div>
              <div className={styles.itemempty}></div>
              <div className={styles.itemempty}></div>
            </div>
          </InfiniteScroll>
        </div>
      </div>
    )
  }
}
export default Movies;
