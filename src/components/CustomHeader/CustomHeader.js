import React, { Component } from 'react'
import {
  NavBar,
  InputItem,
  Icon
} from 'antd-mobile';
import styles from './index.less'
import router from 'umi/router';
import {
  createForm
} from 'rc-form';

@createForm()
class CustomHeader extends Component{
  toMovies = () => {
    router.push('/movies');
  }
  render() {
    const {
      getFieldProps
    } = this.props.form;
    return (
      <div>
        <NavBar
         className={styles.resetBg}
         leftContent="电影"
         onLeftClick={this.toMovies}
        ></NavBar>
        <div className="background">
          <InputItem
            {
              ...getFieldProps('inputMovieName')
            }
            extra={<Icon type = "search" size ="xs"/>}
            placeholder="请输入搜索内容"
            ></InputItem>
        </div>
      </div>
    )
  }
}

export default CustomHeader;
