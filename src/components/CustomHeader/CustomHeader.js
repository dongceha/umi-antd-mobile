import React, { Component } from 'react'
import {
  NavBar,
  InputItem,
  Icon,
  ActionSheet,
  Toast
} from 'antd-mobile';
import styles from './index.less'
import router from 'umi/router';
import {
  createForm
} from 'rc-form';

@createForm()
class CustomHeader extends Component{
  constructor() {
    super();
    this.state = {
      clicked: 'none'
    }
  }
  toMovies = () => {
    router.push('/movies');
  }

  dataList = [
    { url: 'OpHiXAcYzmPQHcdlLFrc', title: '发送给朋友' },
    { url: 'wvEzCMiDZjthhAOcwTOu', title: '新浪微博' },
    { url: 'cTTayShKtEIdQVEMuiWt', title: '生活圈' },
    { url: 'umnHwvEgSyQtXlZjNJTt', title: '微信好友' },
    { url: 'SxpunpETIwdxNjcJamwB', title: 'QQ' },
  ].map(obj => ({
    icon: <img src={`https://gw.alipayobjects.com/zos/rmsportal/${obj.url}.png`} alt={obj.title} style={{ width: 36 }} />,
    title: obj.title,
  }));

  showShareActionSheet = () => {
    ActionSheet.showShareActionSheetWithOptions({
      options: this.dataList,
      message: '请选择点击进行分享',
    },
    (buttonIndex) => {
      this.setState({ clicked: buttonIndex > -1 ? this.dataList[buttonIndex].title : 'cancel' });
      // also support Promise
      return new Promise((resolve) => {
        // Toast.info('closed after 1000ms');
        // setTimeout(resolve, 1000);
        resolve()
      });
    });
  }
  render() {
    const {
      getFieldProps,
    } = this.props.form;
    const {
      rightContent
    } = this.props;
    return (
      <div>
        <NavBar
         className={styles.resetBg}
         leftContent="电影"
         onLeftClick={this.toMovies}
         rightContent={rightContent && <Icon type="ellipsis" size="xs" onClick={this.showShareActionSheet}/>}
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
