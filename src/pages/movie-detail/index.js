import React, { Component } from 'react'
import { connect } from 'dva';
import CustomHeader from 'components/CustomHeader/CustomHeader';
import styles from './index.less'

@connect(({ moviesDetail, loading }) => ({ 
  moviesDetail,
  loading: loading.effects['moviesDetail/getMovieById'],
}))
class MoviesDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount() {
    this.getDetail();
  }
  getDetail = () => {
    console.log(this.props)
    const { dispatch, location: { query: id} } = this.props;
    console.log(id)
    dispatch({
      type: 'moviesDetail/getMovieById',
      payload: id.id
    })
  }
  getMeta = (movieDetail) => {
    const cast = movieDetail.casts.reduce((name, value) => {
      return name ? name + ' / ' + value.name : value.name;
    }, '');
    return movieDetail.countries.join(' / ') +
      ' / ' + movieDetail.genres.join(' / ') +
      ' / ' + movieDetail.directors[0].name + '(导演) / ' + cast;
  }
  render() {
    const { moviesDetail: { movieDetails = {} }} = this.props;
    return (
      <div>
        <CustomHeader></CustomHeader>
        <div className={styles.detail}>
          <h2 className={styles.title}>{movieDetails.title }&nbsp;{movieDetails.original_title}</h2>
          <div>
            <img referrerPolicy="no-referrer" src={movieDetails.images ? movieDetails.images.large : ''} />
          </div>
          <div className={styles.actors}>{this.getMeta(movieDetails)}</div>
          <div className={styles.customers}>
            <div className={styles.want}>想看
              {
                movieDetails.wish_count ? <span>({movieDetails.wish_count})</span> : ''
              }
            </div>
            <div className={styles.wanted}>看过
              {
                movieDetails.do_count ? <span>({movieDetails.do_count})</span> : ''
              }
            </div>
          </div>
          <div className={styles.describute}>
            <h2>{movieDetails.title}的剧情介绍</h2>
            <div className={styles.bd}>
              <p>
                {movieDetails.summary}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default MoviesDetail;
