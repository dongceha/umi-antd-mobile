import React, {PureComponent} from 'react';
import BScroll from 'better-scroll';
import PropTypes from 'prop-types';

const defaultOption = {
  click: true,
  scrollY: true,
  mouseWheel: true,
}

/**
 * Better Scroll 封装  https://github.com/ustbhuangyi/better-scroll/blob/master/README_zh-CN.md
 */
class ScrollWrap extends PureComponent {
  componentDidMount() {
    const {wrapId, getRef, option} = this.props;
    if (getRef) {
      getRef(this.wrapRef);
    }
    this.scroll = new BScroll(document.getElementById(wrapId), option || defaultOption);
  }

  componentWillUnmount() {
    this.scroll && this.scroll.destroy();
  }

  goToPage(x, y, time, easing) {
    window.scroll  = this.scroll;
    return this.scroll && this.scroll.goToPage(x, y, time, easing)
  }

  render() {
    const {children, wrapId, wrapClass, height} = this.props;
    return (
      <div
        style={{overflow: 'hidden', height}}
        id={wrapId}
        className={`wrap ${wrapClass}`}
        ref={ref => {
          this.wrapRef = ref;
        }}
      >
        <div className="content">{children}</div>
      </div>
    );
  }
}

ScrollWrap.defaultProps = {
  children: null,
  wrapId: '',
  wrapClass: '',
};

ScrollWrap.propTypes = {
  children: PropTypes.node,
  wrapId: PropTypes.string,
  wrapClass: PropTypes.string,
};

export default ScrollWrap;
